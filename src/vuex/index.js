import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
let setLocal = {
  set(name,value){
    value = JSON.stringify(value)
    localStorage.setItem(name,value)
  },
  get(name){
    return JSON.parse(localStorage.getItem(name))
  }
}
let list = setLocal.get("list");
var store = new Vuex.Store({
  state: {
    itemdata: {
      id: 0,
      inputValue: "",
      context: "",
      kinds: {
        love: true,
        relation: false,
        friend: true,
        dont: false
      }
    },
      bloglist:  list 
    
},
    mutations: {
      addblog(state, pushload) {

        state.bloglist.push(pushload)
        setLocal.set("list",state.bloglist)
        console.log(state.bloglist)
      },
      rewriteblog(state, payload) {
        state.itemdata = payload;
      },
      updateItemdata(state,payload){
        state.itemdata = payload;
      },
      deleblog(state,item){
        let id = state.bloglist.indexOf(item)
        state.bloglist.splice(id,1);
        console.log(state.bloglist)
        setLocal.set("list",state.bloglist);
      }
    },
    getters: {

    }
  
})
export default store;
