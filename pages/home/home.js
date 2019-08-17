//getApp()方法可以获取全局的app.js中的app
const app = getApp();
console.log(app.globalData.name);

//注册一个页面
Page({
  // 初始化数据变量
  data:{
    name:"管理员",
    students:[
      { id: 1, age: 18, name: "zhaoda" },
      { id: 2, age: 12, name: "wanger" },
      { id: 3, age: 38, name: "sunsan" },
    ],
    count:0
  },
  //监听wxml中绑定的事件
  handleTap(){

    // 数据发生改变，但view层监听不到
    // this.data.count += 1;
    // console.log(this.data.count);

    this.setData({
      count:this.data.count += 1
    })
  },
  getUserFn(event){
    console.log(event);
  }
})