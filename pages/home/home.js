// home.js
Page({
  data: {
    list:["上衣","裤子","鞋子"]
  },
  handleEvent(){
    console.log("绑定事件");
  },
  handleTouchStart(){       //手指开始触摸
    console.log("handleTouchStart")
  },
  handleTouchMove() {       //手指开始移动
    console.log("handleTouchMove")
  },
  handleTouchEnd() {         //手指离开
    console.log("handleTouchEnd")
  },
  handleTap() {              //触摸事件，快速
    console.log("handleTap")
  },
  handleLongpress(){        //长按事件，时间超过350ms
    console.log("handleLongpress")
  },
  // 事件对象的分析
  handleOuter(event){
    console.log(event);
  },
  handleInter(event) {
    console.log(event);
  },
  // 事件的传递参数
  handleItem(event){
    console.log(event);
    // const dataset = event.target.dataset;
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const item = dataset.item;
    console.log(index, item);
  },
  // 事件冒泡与事件捕获
  handleOne(){
    console.log("one");
  },
  handleTwo() {
    console.log("two");
  },
  handleThree() {
    console.log("three");
  },
  handleOneView(){
    console.log("handleOneView");
  },
  handleTwoView() {
    console.log("handleTwoView");
  },
  handleThreeView() {
    console.log("handleThreeView");
  },
})