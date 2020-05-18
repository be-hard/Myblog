<template>
  <div id="blog">
    <div class="header">
      <i class="iconfont icon-touxiang avatar"></i>
      <p class="hi">
        <span>{{nowtime}}好！</span>
        <span>zxy</span>
      </p>
    </div>
    <div class="title">
      <router-link to="/" tag="span" class="my-blog">我的博客</router-link>
      <router-link class="iconfont icon-bianji write-blog" to="/new" tag="i">
        <span class="add">添加博客</span>
      </router-link>
      <i></i>
    </div>
    <router-view />
  </div>
</template>

<script>
import addblog from "./components/addblog";
export default {
  name: "Blog",
  data() {
    return {
      nowtime: ""
    };
  },
  components: {
    addblog
  },
  methods: {
    time() {
      setInterval(this.getTime, 60);
    },
    getTime() {
      let time = new Date().getHours();
      if (time < 12) {
        return "早上";
      } else if (time > 12 && time < 14) {
        return "中午";
      } else if (time > 14 && time < 18) {
        return "下午";
      }else{
        return "晚上"
      }
     
      //   if()
      //  return this.nowtime = new Date().getTime();
    }
  },
  created() {
    this.time()
    this.nowtime =this.getTime();
  }
};
</script>

<style>
@import "//at.alicdn.com/t/font_1674332_fze8583h9at.css";
:root,
body {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  color: rgba(201, 15, 15, 0.6);
  background-image: url(./assets/bg.jpg);
  background-position: center;
  background-size: cover;
}
p {
  margin: 0;
  padding: 0;
}
#blog {
  width: 600px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
  margin: 20px;
}
.header {
  display: flex;
  height: 50px;
  align-items: center;
}
.my-blog{
  cursor: pointer;
}
.hi {
  font-size: 23px;
  font-weight: bold;
}
.icon-touxiang {
  font-size: 25px;
  margin: 0 15px;
}
.title {
  display: flex;
  padding: 10px 20px 10px 30px;
  font-size: 18px;
  /* color: black; */
}
.icon-jiaoyin {
  margin-left: 10px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
}
.add {
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
}
.write-blog {
  cursor: pointer;
  flex: 1;
  text-align: right;
}
.icon-bianji {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
