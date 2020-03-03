<template>
  <form class="formA" v-on:submit.prevent="$emit('add')">
    <label for="number" class="word">CARD NUMBER</label>

    <input
      type="text"
      class="name"
      v-model="number"
      v-on:keyup="card.number= addSpaces(number)"
      placeholder="x x x x  x x x x  x x x x  x x x x "
      
      pattern="^[0-9]{16}$"
      maxlength="16"
      required
    />

    <label for="name" class="word">CARDHOLDER NAME</label>

    <input
      type="text"
      class="name"
      v-model="name"
      placeholder="Firstname Lastname"
      v-on:keyup="card.name=name"
      pattern="^([a-zÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ\\s])+$"
      maxlength="25"
      required
    />

    <div class="password">
      <label for="valid">VALID THRU</label>

      <input
        type="text"
        v-model="datum"
        v-on:keyup="card.valid=datum"
        placeholder="x x / x x"
        maxlength="5"
        pattern="^(1[0-2]|0[1-9])/[0-9]{2}$"
        required
      />
    </div>
    <div class="password">
      <label for="number" id="date">CCV</label>

      <input
        type="text"
        v-model="passW"
        id="date"
        placeholder="x x x"
        maxlength="3"
        pattern="^[0-9]{3}$"
        required
      />
    </div>

    <label for="number" class="bank">VENDOR</label>

    <select v-model="selected" v-on:change="card.vendor=selected" class="bank" required>
      <option>BITCOIN INC</option>
      <option>NINJA BANK</option>
      <option>BLOCK CHAIN INC</option>
      <option>EVIL CORP</option>
    </select>
    <input type="submit" id="more" value="ADD CARD" />
  </form>
</template>
<script>
export default {
  data: () => ({
    number: "",
    name: "",
    datum: "",
    passW: "",
    selected: "",
  }),
  methods: {
    addSpaces(number) {
      let result = "";
      for (let i = 0; i < number.length; i++) {
        result += number[i];
        if (i == 3 || i == 7 || i == 11) {
          result += " ";
        }
      }
      return result;
    },
  },
  props: {
    card: Object
  }
};
</script>
<style scoped>
.formA {
  display: flex;
  flex-direction: column;
}

input[type="text"],
select {
  padding: 15px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(78, 78, 78);
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
}
select {
  height: 45px;
}
.password {
  width: 48%;
  display: flex;
  flex-direction: column;
}
#date {
  position: relative;
  left: 210px;
  bottom: 83px;
}
label {
  text-align: left;
}
.bank {
  position: relative;
  bottom: 80px;
}
#more {
  width: 400px;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  bottom: 30px;
}
</style>