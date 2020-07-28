<template>
  <div class="outer">
    <div class="inner">
        <div class="content">{{ customermsg }}</div>
        <CustomerTag customers=""/>
        <waitCustomer class='waitperson' waitCustomers=""/>
        <waitCustomer class='waitperson2' waitCustomers=""/>
        <waitCustomer class='waitperson3' waitCustomers=""/>
        <div class="clr"></div>
    </div>
  </div>
</template>


<script>
import CustomerTag from '../components/customer.vue'
import waitCustomer from '../components/waitCustom.vue'

export default {
  name: 'CustomerPart',
  props: {
    customermsg: String,
  },
  components:{
      CustomerTag,
      waitCustomer
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
    color:white;
    padding:5px;
    border-radius: 25px;
    background: white;
    margin-top:10px

}
.inner {
    background:#ECCD61;
    border-radius: 25px;
    padding: 5px 10px;
    font-weight: bold;
    position: relative;
}
.inner .waitperson{
    position: absolute;
    top:50%;
    left:78%
}
.inner .waitperson2{
    position: absolute;
    top:50%;
    left:68%
}
.inner .waitperson3{
    position: absolute;
    top:50%;
    left:58%
}

.clr{
    clear:both
}
</style>