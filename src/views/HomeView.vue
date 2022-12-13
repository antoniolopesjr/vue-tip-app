<!-- eslint-disable max-len -->
<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar>
          <BaseAppIcon />
        </v-avatar>
        <v-btn variant="text">
          Vue Le/Tip App
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <BaseTipCard v-if="!isMobile" :dollar="dollarValue" :euro="euroValue" :loading="loading" />
            <BaseTipCardMobile v-else :dollar="dollarValue" :euro="euroValue" :loading="loading" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BaseAppIcon from '@/components/BaseAppIcon/BaseAppIcon.vue';
import BaseTipCard from '@/components/BaseTipCard/BaseTipCard.vue';
import BaseTipCardMobile from '@/components/BaseTipCardMobile/BaseTipCardMobile.vue';

import fetch from '../utils/fetch';

const data = {
  query: `
    query LatestEuro {
      latest(baseCurrency: "EUR", quoteCurrencies: ["USD", "BRL"]) {
        date
        baseCurrency
        quoteCurrency
        quote
      }
    }`,
};

export default {
  name: 'HomeView',

  components: {
    BaseAppIcon,
    BaseTipCard,
    BaseTipCardMobile,
  },

  data: () => ({
    euroValue: 0,
    dollarValue: 0,
    loading: true,
    isMobile: false,
  }),

  async created() {
    await this.getActualCurrency();
  },

  beforeUnmount() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener('resize', this.onResize, { passive: true });
  },

  methods: {
    getActualCurrency() {
      try {
        fetch.post('https://swop.cx/graphql', data).then((result) => {
          const res = result.data.data.latest;
          this.euroValue = res[0].quote;
          this.dollarValue = this.euroValue / res[1].quote;
          this.loading = false;
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
        throw error;
      }
    },

    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>
