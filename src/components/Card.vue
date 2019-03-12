<template>
  <img :src="url" />
</template>

<script>
export default {
  name: "Card",
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  computed: {
    url() {
      return `/cards/${this.cardData.dbfId}.png`;
    }
  }
};
</script>

<style scoped></style>
