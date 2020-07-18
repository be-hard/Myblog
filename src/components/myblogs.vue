<template>
  <ul class="myblog">
    <router-link  v-for="item in mybloglist" :key="item.id"
    :to="'/rewrite/'+item.id"  tag="li">
    <h3 class="myblog-title"><i class="iconfont icon-biaoti"></i>{{item.inputValue||""}}</h3>
    <p class="myblog-context"><i class="iconfont icon-neirong2"></i>{{item.context}}</p>
   <i class="iconfont icon-shanchu" @click.prevent="dele(item)"></i>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "myblogs",
  computed: {
    mybloglist() {
        console.log(this.$store.state.bloglist)
      return this.$store.state.bloglist;
    }
  },
  methods:{
    dele(id){
      console.log(id)
      this.$store.commit("deleblog",id)
    }
  }
  // watch:{
  //   $router(to,from){
  //     console.log(to,19)
  //     if(to.params.id){
  //       let item = this.$store.state.bloglist[to.params.id];
  //       console.log(item,12);
  //       this.$store.commit("updateItemdata",item)
  //     }
  //   }
  // }
};
</script>
<style >
@import "//at.alicdn.com/t/font_1674332_mbvyk5vcy2.css";
p,h3{
    margin: 0;
    padding: 0;
}
ul{
    padding: 0;
    padding-bottom: 10px;
}
.myblog{
  
   margin: 5px 35px;
}

.myblog li{
  position: relative;
    width: 500px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 5px 10px;
    list-style: none;
    border-radius: 5px;
    /* border: 1px solid rgb(0, 0, 0); */
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0,0.5);
}
.myblog-title{
    font-size: 20px;
    padding: 5px 0;
}
.icon-biaoti,
.icon-neirong2,
.icon-shanchu{
    font-size: 20px;
    padding: 5px;
}
.icon-shanchu{
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>