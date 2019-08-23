// home.js
import { getMultiData, getGoodsData} from "../../service/home.js"
const types = ["pop","new","sell"]
const TOP_DISTANCE = 10
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    recommend:[],
    control:["流行","新款","精选"],
    goods:{
      'pop': { 'pages': 0, list: [] },
      'new': { 'pages': 0, list: [] },
      'sell': { 'pages': 0, list: [] }
    },
    currentType:"pop",
    showBackTop:false,
    isTab:false,
    tabScroll:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求，获取数据
    this._getMultiData();
    const type = "pop";
    this._getGoodsData(type);
  },
  // 获取轮播图数据
  _getMultiData(){
    getMultiData().then((res) => {
      console.log(res);
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setData({
        banner: banner,
        recommend: recommend
      })

    }).catch((err) => {
      console.log(err);
    })
  },
  //获取tab数据
  _getGoodsData(type){
    const page = this.data.goods[type]['pages'] + 1;
    getGoodsData(type,page).then((res) => {
      console.log(res);
      const list = res.data.data.list;
      const oldlist = this.data.goods[type].list;
      oldlist.push(...list);
      // const good = 'goods.'+ type;
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.pages`;
      this.setData({
        // 'goods.pop.list':oldlist
        // good:{
        //   page:page,
        //   list:oldlist
        // }
        [typeKey]: oldlist,
        [pageKey]:page
      })

    }).catch((err) => {
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
   * 页面上拉触底事件的处理函数-页面滚动到底部
   */
  onReachBottom: function () {
    this._getGoodsData(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 监听tab点击事件
  handleTabClick(e){
    this.setData({
      currentType:types[e.detail.index]
    })
    // console.log(e.detail.index);
    // let type = "";
    // switch(e.detail.index){
    //   case 0:
    //     type="pop";
    //     break;
    //   case 1:
    //     type = "new";
    //     break;
    //   case 2:
    //     type="sell";
    //     break
    // }
    // this.setData({
    //   currentType: type
    // });
    this._getGoodsData(type);
  },
  onPageScroll(options){
    console.log(options);
    const scrollTop = options.scrollTop;
    // 不要再滚动的函数回调中频繁的shi调用this.setData
    const flag = scrollTop >= TOP_DISTANCE;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop: flag
      })
    }
    // tab-control固定在顶部
    wx.createSelectorQuery().select("#tab-control").boundingClientRect((rect)=>{
      if (rect.top <= 0 && this.data.tabScroll == 0){
        this.setData({
          isTab:true
        })
        this.data.tabScroll = scrollTop;
      }
      if (scrollTop<this.data.tabScroll){
        this.setData({
          isTab: false
        })
        this.data.tabScroll = 0;
      }
    }).exec()
  },
  onPageTop(options){
    console.log(options);
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})