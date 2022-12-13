<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="900">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="green darken-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1A28/production/_103669660_whatsubject.jpg"
    ></v-img>
    <v-container class="grey lighten-5 mb-10">
      <v-row justify="center" class="my-8 mb-10">
        <v-card-title>
          <p class="text-h3">Le/Tip</p>
        </v-card-title>
      </v-row>
      <v-carousel hide-delimiters :show-arrows="false" v-model="carousel">
        <v-carousel-item>
          <v-row justify="center">
            <v-col md="4" class="d-flex align-center justify-center">
              <v-switch v-model="currencyIsDollar" inset hide-details color="green darken-3" class="switcher">
                <template #label>
                  <strong v-if="currencyIsDollar" class="text-h7 ml-4">USD</strong>
                  <span v-else class="ml-4">USD</span>
                </template>
                <template #prepend>
                  <strong v-if="!currencyIsDollar" class="text-h7"><v-label>EUR</v-label></strong>
                  <span v-else><v-label>EUR</v-label></span>
                </template>
              </v-switch>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="4">
              <v-text-field
                v-model="value"
                :model-value="value"
                :rules="valueRules"
                variant="underlined"
                prefix="$"
                required
              >
                <template #prepend>
                  <span class="d-flex align-center"><div class="font-weight-bold">Valor</div></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="4">
              <div class="font-weight-bold">Gorjeta
                <strong class="text-h7 text--primary">{{ tipPercent }}%</strong>
              </div>
              <v-slider v-model="tipPercent" :min="10" :max="20" :step="1" thumb-label>
                <template #append>
                  <v-label>20</v-label>
                </template>
                <template #prepend>
                  <v-label>10</v-label>
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="4">
              <div class="font-weight-bold">Pessoas
                <strong class="text-h7 text--primary">{{ countPeople }}</strong>
              </div>
              <v-slider v-model="countPeople" :min="2" :max="16" :step="1" thumb-label>
                <template #append>
                  <v-label>16</v-label>
                </template>
                <template #prepend>
                  <v-label>2</v-label>
                </template>
              </v-slider>
            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item>
          <v-row justify="center">
            <span class="my-5">
              <BaseTextAndValue text="Conta" :value="value" currency="USD" />
            </span>
          </v-row>
          <v-row justify="center">
            <span class="my-5 d-flex align-center">
              <BaseTextAndValue text="Gorjeta" :value="tipValue" currency="USD" />
            </span>
          </v-row>
          <v-row justify="center">
            <span class="my-5 d-flex align-center">
              <BaseTextAndValue text="Total" :value="bill" currency="USD" />
            </span>
          </v-row>
          <v-row justify="center">
            <span class="my-5 d-flex align-center">
              <BaseTextAndValue text="por Pessoa" :value="totalPerPerson" currency="USD" />
            </span>
          </v-row>
          <v-row justify="center">
            <span class="my-5 d-flex align-center">
              <BaseTextAndValue text="em R$" :value="totalValueInBRL" currency="BRL" />
            </span>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <div class="d-flex justify-end mt-2">
        <v-btn v-if="carousel === 0"
          color="black" dark rounded="pill" @click="carousel++">&rarr;
        </v-btn>
        <v-btn v-else
          color="black" dark rounded="pill" @click="carousel--">&larr;
        </v-btn>
      </div>
    </v-container>
  </v-card>
</template>
<script>
import FormatValueToBrl from '@/utils/formatValueToBrl';
import FormatValueToUsd from '@/utils/formatValueToUsd';

export default {
  name: 'BaseTipCardMobile',

  props: {
    euro: { type: Number, default: 0 },
    dollar: { type: Number, default: 0 },
    loading: { type: Boolean, default: true },
  },

  data: () => ({
    currencyIsDollar: true,
    justify: ['space-around'],
    value: 0,
    valueRules: [
      (v) => !!v || 'Valor é obrigatório',
      (v) => (v && v.length >= 1) || 'Valor deve ser maior que 1 caractere.',
      (v) => (v && !v.includes(',')) || 'O padrão do valor está incorreto, retire a virgula.',
    ],
    tipPercent: 10,
    countPeople: 2,
    carousel: 0,
  }),

  methods: {
    formatValueToBrl(val) {
      return FormatValueToBrl.formatValue(val);
    },

    formatValueToUsd(val) {
      return FormatValueToUsd.formatValue(val);
    },
  },

  computed: {
    totalValueInBRL() {
      if (this.currencyIsDollar) {
        return this.value * this.dollar;
      }
      return this.value * this.euro;
    },
    tipValue() {
      if (!this.value || this.value === 0) {
        return 0;
      }
      return (this.value * (this.tipPercent / 100));
    },

    bill() {
      const sum = Number(this.tipValue) + Number(this.value);

      if (!this.value || this.value === 0 || !this.tipValue) {
        return 0;
      }
      return sum;
    },
    totalPerPerson() {
      const totalPerPerson = Number(this.bill) / this.countPeople;

      if (!this.value || this.value === 0) {
        return 0;
      }
      return totalPerPerson;
    },
  },
};
</script>

<style>
.v-input__prepend,
.v-input__append {
  display: flex;
  align-items: initial;
}
.v-input.switcher{
  min-width: 100px;
  max-width: 150px;
}
.v-card-text{
  padding: 0;
  min-width: 100px;
}
.v-switch .v-label {
  -webkit-padding-start: 0px;
  padding-inline-start: 0px;
}
.btn-arrow {
  visibility: visible;
}
.bat-arrow__hide {
  visibility: hidden;
}

</style>
