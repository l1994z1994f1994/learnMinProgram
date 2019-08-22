// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  // 页面退出的时候执行，可以返回的时候传递数据
  onUnload: function () {
    console.log("页面退出");
    // getCurrentPages当前所有活跃的页面
    const pages = getCurrentPages();
    console.log(pages);
    const home = pages[pages.length - 2];
    // 调用方法修改首页的数据
    home.setData({
      title:"返回值传递"
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  hangleBack(){
    wx.navigateBack({
      delta:1   //可选
    })
  }
})