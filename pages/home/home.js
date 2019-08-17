// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isload:false,
    imgPath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onUnload: function () {

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
  handleChooseAlbum: function(){
    //调用系统API，让用户自己从相册中选择或者拍照
    let _this = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        //取出路径
        const path = res.tempFilePaths[0];
        _this.setData({
          imgPath:path
        })
      },
    })
  },
  handleImageLoad(){
    console.log("图片加载完成");
  },
  inputFocus(event){
    console.log(event);
    console.log("input获取焦点:" + event.detail.value);
  },
  handleInput(event) {
    console.log(event);
    console.log("input正在输入:" + event.detail.value);
  },
  inputBlur(event) {
    console.log(event);
    console.log("input失去焦点:" + event.detail.value);
  },
  scrollFn(event){
    console.log(event);
  }
})