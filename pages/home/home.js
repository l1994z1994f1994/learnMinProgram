// home.js
Page({
  handleToast(){
    wx.showToast({
      title: '你好，小程序',
      duration:3000,
      mask:true,
      success:function(){
        console.log("弹框展示成功");
      }
    })
  },
  handleModal(){
    wx.showModal({
      title: '你好，小程序',
      content: 'hello world',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handleLoading(){
    wx.showLoading({
      title: '加载中',
      success(res){
        console.log(res);
      }
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  handleActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res);
        console.log(res.tapIndex)
        // switch (res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 设置分享的配置项
  onShareAppMessage(res){
    console.log(res);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '美女，你好',
      path: '/pages/about/about',
      imageUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3024156859,632518229&fm=26&gp=0.jpg'
    }
  }
})