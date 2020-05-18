import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import addblog from '@/components/addblog'
import showblog from '@/components/showblog'
import myblogs from '@/components/myblogs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:myblogs
    },
    {
      path:'/rewrite/:id',
      component:showblog,
      beforeEnter:(to,from,next)=>{
        console.log(this.a.app.$store)
        if(to.params.id){
          console.log(8)
            let item = this.a.app.$store.state.bloglist[to.params.id];
            console.log(item,12);
            this.a.app.$store.commit("updateItemdata",item)
          }
        console.log(next)
        next()
  
     }
    },
  {
    path:'/new',
    component:addblog
  }
  ]
})
