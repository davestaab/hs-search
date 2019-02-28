<template>
  <div>
    <h1>Cards</h1>
    <input v-model="query" placeholder="Search" />
    {{ standard.length }}
    {{ foundCards }}
    <img v-for="u in imageUrls" :key="u" :src="u" />
  </div>
</template>

<script>
const KFT = "ICECROWN",
  KNC = "LOOTAPALOOZA",
  UNGORO = "UNGORO",
  WW = "GILNEAS",
  BOOMSDAY = "BOOMSDAY",
  RASTAKHAN = "TROLL",
  BASIC = "CORE",
  CLASSIC = "EXPERT1";
const standardSets = [
  KFT,
  KNC,
  UNGORO,
  WW,
  BOOMSDAY,
  RASTAKHAN,
  BASIC,
  CLASSIC
];
export default {
  name: "Cards",
  data() {
    return {
      cards: undefined,
      index: 0,
      query: undefined
    };
  },
  mounted() {
    import(/* webpackChunkName: "cards" */ "../assets/cards.collectible.json").then(
      module => {
        this.cards = module.default;
      }
    );
  },
  computed: {
    standard() {
      return this.cards
        ? this.cards.filter(c => {
            return standardSets.indexOf(c.set) >= 0;
          })
        : [];
    },
    foundCards() {
      return this.query
        ? this.standard.filter(c => {
            return c.name.toLowerCase().includes(this.query.toLowerCase());
          })
        : [];
    },
    imageUrls() {
      return this.foundCards.map(c => `cards/${c.dbfId}.png`);
    }
  },
  watch: {
    // query(newVal) {}
  },
  methods: {}
};
</script>

<style scoped></style>
