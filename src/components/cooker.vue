<template>
  <div class="outer">
    <div class="inner">
        <div class="content">{{ cookers }}</div>
        <ChefTag chefs=""/>
        <ChefTag chefs=""/>
        <ChefTag chefs=""/>
        <ChefTag chefs=""/>
        <ChefTag chefs=""/>
        <ChefTag chefs=""/>
        <div class="clr"></div>
    </div>
  </div>
</template>


<script>
import ChefTag from '../components/chef.vue'

export default {
  name: 'CookerTag',
  props: {
    cookers: String,
  },
  components:{
      ChefTag
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
}

.clr{
    clear:both
}
</style>