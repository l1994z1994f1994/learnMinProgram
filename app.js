// 登录练习
const TOKEN = "token";
App({
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 登录操作
    // 先从缓存中取出token
    const token = wx.getStorageSync(TOKEN);
    // 判断token是否有值
    if(token && token.length != 0){
      // 验证token是否过期
      this.check_token(token);
    }else{
      // 登录
      this.login();
    }
  },
  check_token(token){
    wx.request({
      url: 'https://lzf.com/auth',
      method:"post",
      header:{    //token放置到header里
        token:token
      },
      success: (res)=>{
        console.log(res);
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          this.login();
        }
      },
      fail(err){
        console.log(err);
      }
    })
  },
  login(){
    wx.login({
      success: function (res) {
        // code只有5分钟的有效期
        console.log(res);
        //1   获取code
        const code = res.code;
        const _this = this;
        //2 将code发送给服务器
        wx.request({
          url: 'https://lzf.com/login',
          method: "post",
          data: {
            code: code,
            username: "zhangsan",
            password: '123456'
          },
          success(res) {
            console.log(res);
            // 3 获取token
            const token = res.data.token;
            // 将token保存到globalData中
            _this.globalData.token = token;
            //小程序的本地存储  setStorageSync-同步  setStorage-异步
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
