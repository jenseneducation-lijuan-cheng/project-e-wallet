import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
   cards:[
     {
       number:"8888 8888 8899 9999",
       vendor:"BITCOIN INC",
       name:"Christoffer Wallenberg ",
       valid:"12/22"
     },
     {
      number:"1234 5679 2233 4455",
      vendor:"EVIL CORP",
      name:"Johan Sundman",
      valid:"12/22"
    },
    {
      number:"8888 8888 8899 9998",
      vendor:"BLOCK CHAIN INC",
      name:"Lijuan Cheng",
      valid:"12/22"
    },
    {
     number:"1234 5679 2233 4456",
     vendor:"NINJA BANK",
     name:"Santa Claus",
     valid:"12/22"
   },
   ]
  }),
  
  render: h => h(App)
}).$mount('#app')
