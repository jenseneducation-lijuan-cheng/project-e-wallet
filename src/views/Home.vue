<template>
  <div id="home">
    <Top v-bind:headline="message" />
    <h6>ACTIVE CARD</h6>

    <Card v-bind:card="active" v-if="active" />

    <CardStack v-bind:cards="cards" v-on:visa="visaC" id="allaCards" />
    <button @click="remove()">REMOVE ACTIVE CARD</button>
    <router-link v-bind:to="'/addcard'">
      <button>ADD A NEW CARD</button>
    </router-link>
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
    message: "E-WALLET"
  }),
  computed: {
    cards() {
      return this.$root.$data.cards;
    },
    active() {
      return this.cards[this.$root.$data.activeCard];
    }
  },
  methods: {
    visaC(card) {
      // här activeCard är bara index
      this.$root.$data.activeCard = this.cards.indexOf(card);
    },
    remove() {
      if (this.active) {
        this.$root.$data.cards.splice(this.$root.$data.activeCard, 1);
        // activeCard = -1 betyder att det inte finns något active card
        this.$root.$data.activeCard = -1;
      }
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

button {
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 15px;
  outline: none;
}
</style>
