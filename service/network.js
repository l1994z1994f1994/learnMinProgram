export default function request(options){
  // const URL = "https://lzf.com"
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      // url: URl + options.url,
      data: options.data || {},
      method: options.method || 'GET',
      success: resolve,
      fail: reject,
      complete: function (res) { },
    })
  })
}

// export default function request(options) {
//   // const URL = "https://lzf.com"
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       // url: URl + options.url,
//       data: options.data || {},
//       method: options.method || 'GET',
//       success: function (res) {
//         resolve(res);
//       },
//       fail: function (res) {
//         reject(res);
//       },
//       complete: function (res) { },
//     })
//   })
// }