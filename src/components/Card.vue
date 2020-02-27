<template>
  <div class="card" v-bind:style="{ backgroundColor: color()}" v-on:click="$emit('visaCard')">
    <div class="upper">
      <img id="pics" v-bind:src="image()" />
      <img id="chip" v-bind:src="chip()" />
    </div>
    <div class="lower">
      <div id="number">{{card.number}}</div>

      <div id="name1">
        <span>CARDHOLDER NAME</span>
        <br />
        {{card.name}}
      </div>

      <div id="datum1">
        <span>VALID THRU</span>
        <br />
        {{card.valid}}
      </div>
    </div>
  </div>
</template>
<script>
import ninja from "../assets/vendor-ninja.svg";
import evil from "../assets/vendor-evil.svg";
import blockchain from "../assets/vendor-blockchain.svg";
import bitcoin from "../assets/vendor-bitcoin.svg";
import chipLight from "../assets/chip-light.svg";
import chipDark from "../assets/chip-dark.svg";

export default {
  props: {
    card: Object
  },
  methods: {
    color() {
      if (this.card.vendor == "BITCOIN INC") {
        return "gold";
      } else if (this.card.vendor == "EVIL CORP") {
        return "red";
      } else if (this.card.vendor == "BLOCK CHAIN INC") {
        return "purple";
      } else if (this.card.vendor == "NINJA BANK") {
        return "black";
      }
      return "lightgrey";
    },
    image() {
      if (this.card.vendor == "BITCOIN INC") {
        return bitcoin;
      } else if (this.card.vendor == "EVIL CORP") {
        return evil;
      } else if (this.card.vendor == "BLOCK CHAIN INC") {
        return blockchain;
      } else if (this.card.vendor == "NINJA BANK") {
        return ninja;
      }
      return bitcoin;
    },
    chip() {
      if (this.card.vendor == "NINJA BANK") {
        return chipLight;
      }
      return chipDark;
    }
  }
};
</script>
<style  scoped>
.card {
  position: relative;
  width: 400px;
  height: 233px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#pics {
  width: 50px;
  align-self: flex-end;
  margin: 10px 10px 0 0;
}
#chip {
  width: 50px;
  align-self: flex-start;
  margin: 0 0 0 10px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.lower {
  align-items: center;
  justify-self: center;
  flex: 1;
}
.upper {
  display: flex;
  flex-direction: column;
  flex: 1;
}
#number {
  font-size: 30px;
  margin-bottom: -10px;
  letter-spacing: 4px;
}
#name1 {
  text-align: left;
  float: left;
  margin: 10px 0 10px 20px;
  font-size: 20px;
}
#name1 span {
  font-size: 10px;
}
#datum1 {
  text-align: right;
  float: right;
  margin: 10px 20px 10px 0;
  font-size: 20px;
}

#datum1 span {
  font-size: 10px;
}
</style>