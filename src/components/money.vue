<template>
  <div class="outer">
    <div class="inner">
        <div class="content">{{ money }}</div>
        <div class="clr"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MoneyTag',
  props: {
    money: String,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
    color:#938B4A;
    padding:5px;
    border-radius: 25px;
    background: #938B4A;
    float: right;
}
.inner {
    background:#ECCD61;
    border-radius: 25px;
    padding: 5px 10px;
    font-weight: bold;
    background: linear-gradient(to bottom, #f3dd91 50%, #ECCD61 50%);
    width:400px
}
.inner .content{
    text-align:right
}

.clr{
    clear:both
}
</style>