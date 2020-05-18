<template>
  <div class="add-blog">
    <h2>修改博客</h2>
    <form>
      <label class="add-title">主题：</label>
      <input type="text" class="title-inp" v-model="itemdata.inputValue" />
      <label class="context">内容</label>
      <textarea name id cols="30" rows="10" class="context-area" v-model="itemdata.context"></textarea>
      <label class="kinds">分类</label>
      <div class="select-mode">
        <label v-for="(item,index) in itemdata.kinds">
          <input type="checkbox" v-model="itemdata.kinds[index]" />
          {{index}}
        </label>
      </div>

      <label for class="authod">作者</label>

      <select name id v-model="itemdata.authod">
        <option v-for="item in list" :value="item" >{{item}}</option>
      </select>
      <div @click="btnclick"><router-link  tag="button"  to="/" class="add-button" >确认修改</router-link></div>
    </form>
  </div>
</template>
<script>
export default {
  name: "addblog",
  data() {
    return {
      itemdata: {
        id: 0,
        inputValue: "",
        context: "",
        kinds: {
          love: true,
          relation: false,
          friend: true,
          dont: false
        },
        
        authod: ''
      },
      list: ["zxy", "lulu"],
    };
  },
  created(){
    this.itemdata = this.$store.state.itemdata;
    console.log(this.itemdata)
  },
//  beforeRouteEnter(to,from,next){
//    console.log(99)
 
//     next(vm=>{
//       console.log(vm.$store)
//        if(to.params.id){
//         let item = vm.$store.state.bloglist[to.params.id];
//         console.log(item,12);
//         this.$store.commit("updateItemdata",item)
//       }
//     })
   
//  },
 watch:{
   $route(){
     console.log($route.params)
   }
 },
  methods: {
    btnclick() {

      this.$store.commit("rewriteblog", this.itemdata);

    }
  }
};
</script>
<style>
.add-blog {
  margin: 20px 30px;
}
input {
  outline: none;
  border: none;
}
button {
  outline: none;
  border: none;
}
h2 {
  font-size: 20px;
  margin: 10px 0px;
  padding-left: 10px;
  height: 35px;
  width: 500px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px 0 #ddd;
}
form {
  display: flex;
  flex-direction: column;
}
.add-title {
  padding: 10px 0;
}
.title-inp {
  width: 300px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 2px 0 #ddd;
  box-sizing: border-box;
  padding: 0 10px;
}
.context {
  margin: 10px 0;
}
textarea {
  border: 1px solid #ddd;
  box-shadow: 0 2px 2px 0 #ddd;
  padding: 10px;
  outline: none;
}
.kinds {
  padding: 10px 0;
}
.select-mode {
  display: flex;
}
.select-mode label {
  margin: 0 10px;
}
.authod {
  padding: 10px 0;
}
select {
  width: 150px;
  height: 25px;
}
.add-button {
  width: 150px;
  height: 40px;
  margin: 15px 10px;
  border-radius: 20px;
  font-size: 20px;
  color: #fff;
  /* font-weight: bold; */
  background-color: rgba(252, 5, 5, 0.712);
}
</style>