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

</style>