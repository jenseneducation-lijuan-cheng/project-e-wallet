<template>
  <div id="home">
    <Top v-bind:headline="text" />
    <h6>NEW CARD</h6>
    <Card v-bind:card="card" />
    <Cardform v-bind:card="card" v-on:add="pushCard()" id="allaCards" />
  </div>
</template>
<script>
import Cardform from "../components/CardForm";
import Top from "../components/Top";
import Card from "../components/Card";
export default {
  components: {
    Cardform: Cardform,
    Card: Card,
    Top: Top
  },
  data: () => ({
    text: "ADD A NEW BANK CARD",
    card: {
      number: "",
      vendor: "",
      name: "",
      valid: ""
    }
  }),
  methods: {
    pushCard() {
      this.$root.$data.cards.push(this.card);
      // gå till homesidan
      this.$router.push("/");
    }
  }
};
</script>
<style >
</style>
