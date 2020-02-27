<template>
  <div id="home">
    <Top v-bind:headline="message" />
    <h6>ACTIVE CARD</h6>

    <Card v-bind:card="active" />
    <CardStack v-bind:cards="cards" v-on:visa="visaC" id="allaCards" />
  </div>
</template>

<script>
import CardStack from "../components/CardStack";
import Top from "../components/Top";
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    CardStack: CardStack,
    Top: Top,
    Card: Card
  },
  data: () => ({
    message: "E-WALLET",
    activeCard: 0
  }),
  computed: {
    cards() {
      return this.$root.$data.cards;
    },
    active() {
      return this.cards[this.activeCard];
    }
  },
  methods: {
    visaC(card) {
      this.activeCard = this.cards.indexOf(card);
    }
  }
};
</script>
<style>
#home {
  width: 100%;
  background-color: rgb(231, 230, 230);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#allaCards {
  margin-top: 30px;
}
</style>
