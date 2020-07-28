<template>
<div class="outbox">
  <div class="chefouter">
    <div class="inner">
        <img class="cheflogo" src="../assets/img/boss.png">
        <div class="content">{{customers}}</div>
         <div class="progress">
            <div class="progress-bar" style="width:100%">pasta</div>
        </div>
         <div class="progress progress2">
            <div class="progress-bar" style="width:100%">鲜榨flex</div>
        </div>
         <div class="progress progress3">
            <div class="progress-bar" style="width:100%">UL炖LI</div>
        </div>
        <div class="clr"></div>
    </div>
     <div class="clr"></div>
  </div>

  </div>
</template>


<script>
export default {
  name: 'CustomerTag',
  props: {
    customers: String,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outbox{
    float: left;
    width:33%;
    margin:10px 0px 50px;
        display: flex;
    justify-content: center;
}
.chefouter {
    color:white;
    padding:5px;
    border-radius:50%;
    background: white;
    margin-top:10px;
    float: left;


}
.inner {
    background:#ECCD61;
    border-radius:50%;
    font-weight: bold;
    background: linear-gradient(to right, #d1d1d2 50%, #A3A4A6 50%);
    position: relative;
}
.inner .cheflogo{
    width:120px
}
.inner .progress{
    position: absolute;
    top: 0%;
    left: 80%;
    border: 3px solid white;
    height: 30px;
    line-height: 30px;
    width: 100%
}
.inner .progress2{
    top: 30%;
    
}
.inner .progress3{
    top: 60%;
    
}

.clr{
    clear:both
}
</style>