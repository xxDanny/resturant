<template>
<div class="outbox">
  <div class="chefouter">
    <div class="inner">
        <img class="cheflogo" id="waitP" ref="waitP" src="../assets/img/customer1.png">
        <div class="content">{{waitCustomers}}</div>
         <div class="progress">
            <div class="progress-bar" style="width:100%">等位中</div>
        </div>
        <div class="clr"></div>
    </div>
     <div class="clr"></div>
  </div>

  </div>
</template>


<script>
export default {
  name: 'waitCustomer',
 props: {
    waitCustomers: String,
  },


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outbox{
    float: left;
    width:33%;
    margin:10px 0px 50px;
}
.chefouter {
    color:white;
    padding:5px;
    border-radius:50%;
    background: white;
    margin-top:10px;
    float: left;
    transform: translate(50%,0px);

}
.inner {
    background:#ECCD61;
    border-radius:50%;
    font-weight: bold;
    background: linear-gradient(to right, #367cc5 50%, #1B5796 50%);
    position: relative;
}
.inner .cheflogo{
    width:120px
}
.inner .progress{
    position: absolute;
    top:100%;
    border: 3px solid white;
    height: 30px;
    line-height: 30px;
    width: 100%
}

.clr{
    clear:both
}
</style>