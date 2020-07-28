<template>
  <div class="time">
    <div class="timebox">
        <div id="weektime">{{ week }}</div>
        <div id="daytime">{{ day }}</div>
        <div class="clr"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TimeTag',
  props: {
    week: String,
    day:String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
    color:#938B4A;
    padding:5px;
    border-radius: 25px;
    background: #938B4A;
    float: left;
}
.timebox {
    background:#ECCD61;
    border-radius: 25px;
    padding: 5px 10px;
    font-weight: bold;
    background: linear-gradient(to bottom, #f3dd91 50%, #ECCD61 50%);
  
}
.timebox #weektime , .timebox #daytime{
    font-weight: bold;
    float: left;
    padding:0px 10px;
 
}
.clr{
    clear:both
}
</style>
