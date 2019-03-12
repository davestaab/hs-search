<template>
  <div>
    <h1>deck viewer</h1>
    {{ this.$route.params.deckCode }}
    {{ deck }}
  </div>
</template>

<script>
import { decode } from "deckstrings";

export default {
  name: "DeckViewer",
  computed: {
    deck() {
      return decode(this.$route.params.deckCode);
    }
  }
};
</script>

<style scoped></style>
