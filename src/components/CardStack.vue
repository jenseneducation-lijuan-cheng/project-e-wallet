<template>
  <div class="cardstack">
    <div class="cards" v-bind:style="{ height: height }">
      <div
        v-for="(card, index) in cards"
        v-bind:key="card.number"
        class="oneCard"
        v-bind:style="{ top: 30*index + 'px' }"
      >
        <Card v-bind:card="card" v-on:visaCard="$emit('visa',card)" />
      </div>
    </div>
    <router-link v-bind:to="'/addcard'">
      <button id="addNew">ADD A NEW CARD</button>
    </router-link>
  </div>
</template>
<script>
import Card from "./Card";
export default {
  components: {
    Card: Card
  },
  computed: {
    height() {
      return 233 + 30 * this.cards.length + "px";
    }
  },
  props: {
    cards: Array
  }
};
</script>
<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

.oneCard {
  position: absolute;
}

.cardstack {
  width: 400px;
  margin: auto;
  display: block;
}
#addNew {
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
}
</style>