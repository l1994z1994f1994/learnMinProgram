// components/my-set/my-set.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    counter:{
      type:Number,
      value:0,
      observer:function(newValue,oldValue){
        console.log(newValue);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSetFn(n){
      this.setData({
        num:this.data.num + n
      })
    }
  }
})
