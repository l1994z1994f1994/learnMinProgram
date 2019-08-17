//注册一个小程序实例
App({
   //生命周期函数（前4个），可在后台状态存活2小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    //只执行一次
    console.log(options);
    //网络请求
    wx.request({
      url: '',
    })
    //获取用户信息
    //onShow方法里面执行的事件onLaunch也可以执行

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow，界面显示的时候
   */
  onShow: function (options) {
    //会执行多次
    console.log(options);   //该值接收场景返回值及其他信息
    //1判断小程序的进入场景
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
      default:
        break;
    }

    //2 获取用户信息，并且在获取到用户的信息之后，将信息传递给服务器
    //异步调用
    wx.getUserInfo({
      //在数据拿到之后，在进行回调的
      success:function(res){
        console.log(res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide；界面隐藏的时候
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  //自定义，也可以定义全局数据,全局共享数据
  globalData:{
    name:'默许',
    age:18
  }
})
