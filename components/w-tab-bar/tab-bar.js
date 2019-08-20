// components/w-tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lists:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    idx:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(event){
      console.log(event);
      this.setData({
        idx:event.currentTarget.dataset.ind
      })
      this.triggerEvent("handletab", {index:event.currentTarget.dataset.ind, item:event.currentTarget.dataset.item},{});
    }
  }
})
