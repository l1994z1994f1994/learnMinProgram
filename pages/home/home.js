// home.js
import request from "../../service/network.js"
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
    // 发送网络请求
    // --------------- 原生方法请求 ------------------
    // 最简单 get请求
    //get请求可以直接在地址栏后面拼接参数，post不行
    // wx.request({
    //   url: 'https://lzf.com',
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    // get/post传参数
    // wx.request({
    //   url: 'https://lzf.com',
    //   method:'get',
    //   data:{
    //     a:1,
    //     b:2
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
    // 请求的所有配置项，只有URL是必传项
    // wx.request({
    //   url: 'https://lzf.com',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    // wx.request({
    //   url: 'https://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     a: 1,
    //     b: 2
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })

    // --------------- 封装方法请求 request ------------------
    //promise最大的好处是防止出现回调地狱
    request({
      url:"https://httpbin.org/post",
      method:"post",
      data:{
        name:'lisi'
      }
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
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

  }
})