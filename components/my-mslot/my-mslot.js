// components/my-mslot/my-mslot.js
Component({
  // 定义组件的配置项
  options:{
    multipleSlots:true   //多插槽设置项
  },
  /**
   * 设置接收页面传值
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    dataset:"123"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 外界给组件传入的额外样式
  externalClasses:[],

  // 监听数据的改变 properties/data
  observers:{
    dataset:function(newValue){
      console.log(newValue);
    }
  },

  //组件中监听生命周期函数
  //1 监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件坐在页面显示出来的");
    },
    hide() {
      console.log("监听组件坐在页面隐藏出来的");
    },
    resize(){
      console.log("监听页面尺寸改变");
    }
  },
  //2 监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log("监听组件被创建出来");
    },
    attached() {
      console.log("监听组件被添加到页面中");
    },
    ready() {
      console.log("监听组件在页面中被渲染出来");
    },
    moved() {
      console.log("组件被移动到节点树另一个位置");
    },
    detached(){
      console.log("监听组件被移除");
    }
  }


})
