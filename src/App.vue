<template>
  <div id="app">
    <TimeTag week="W1" day="D1"/>
    <MoneyTag money="$3333"/>
     <div class="clr"></div>
    <CookerTag cookers=""/>
    <CustomerPart customermsg=""/>
   
  </div>
</template>

<script>

import TimeTag from './components/time.vue'
import MoneyTag from './components/money.vue'
import CookerTag from './components/cooker.vue'
import CustomerPart from './components/custompart.vue'

export default {
  name: 'App',
  components: {
    TimeTag,
    MoneyTag,
    CookerTag,
    CustomerPart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background:url('assets/img/background.jpg')
}
.clr{
    clear:both
}
</style>
