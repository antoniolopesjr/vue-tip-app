<template>
  <v-card-text>
    <div class="font-weight-bold">{{ text }}</div>
    <p v-if="currency === 'USD'" class="text-h5 text--primary">{{ formatValueToUsd(value) }}</p>
    <p v-if="currency === 'BRL'" class="text-h5 text--primary">{{ formatValueToBrl(value) }}</p>
  </v-card-text>
</template>

<script>
import FormatValueToBrl from '@/utils/formatValueToBrl.ts';
import FormatValueToUsd from '@/utils/formatValueToUsd';

export default {
  name: 'BaseTextAndValue',

  props: {
    text: { type: String, default: '' },
    value: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' },
  },

  methods: {
    formatValueToBrl(val) {
      return FormatValueToBrl.formatValue(val);
    },

    formatValueToUsd(val) {
      return FormatValueToUsd.formatValue(val);
    },
  },
};
</script>
