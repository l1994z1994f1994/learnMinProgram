// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 页面往组件传值 方法一
    // msg:String

    // 页面往组件传值 方法二
    msg:{
      type:String,
      value:"morenzhi",
      // 监听传递值的改变
      observer:function(newValue, oldValue){
        console.log(newValue, oldValue);
      }
    }
  },
  externalClasses: ["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
