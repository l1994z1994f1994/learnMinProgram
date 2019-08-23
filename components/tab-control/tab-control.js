// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    control:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ind:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapCont(event){
      console.log(event);
      this.setData({
        ind:event.currentTarget.dataset.index
      });
      this.triggerEvent("tabClick", {index:event.currentTarget.dataset.index},{});
    }
  }
})
