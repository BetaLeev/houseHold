var util = require('../../utils/util.js');
var api = require('../../config/api.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    companyInfo: [{
      label: '公司简介',
      en: 'Company profile',
      value: '1996年，仙游怀古家私工艺厂创立。'
    },
    {
      label: '地址',
      en: 'Address',
      value: '北京'
    },
    {
      label: '电话',
      en: 'Telephone',
      value: '0594-8271233'
    },
    {
      label: '微信号',
      en: 'WeChat',
      value: '110'
    },
    {
      label: '客服',
      en: 'Service',
      value: '0594-8271233'
    },
    ],
    reqData: {
      companyPhoto:'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg',
      companyBrief:'1996年，仙游怀古家私工艺厂创立。',
      companyAddr:'福建省莆田市仙游县榜头镇泉山社区紫檀中街',
      // 福建省莆田市仙游县榜头镇泉山社区紫檀中街259号
      companyPhone:"0594-8271233",
      companyWechat:"Lee-zl666",
      companyLatitude:"25.3859",
      companyLongitude:'118.73088'
    },
    markers: [{
      id: 1,
      latitude: '25.3859',
      longitude: '118.73088',
      name: '怀古典藏',
      label:{
        content:'怀古典藏',
        color:'#b94c47',
      }
    }],
  },

  /**
   * 跳转企业详情页
   * @param {*} e 
   */
  goProfile:function(e){
    
    let query = e.currentTarget.dataset.query;
    if(query === 'profile'){
      wx.navigateTo({
        url: '/pages/company/profile/profile',
      })
    }else if(query === 'honor'){
      wx.navigateTo({
        url: '/pages/company/honor/honor',
      })
    }else if(query === 'brand'){
      wx.navigateTo({
        url: '/pages/company/brand/brand',
      })
    }else if(query==='development'){
      wx.navigateTo({
        url: '/pages/company/development/development',
      })
    }
    
  },

  /**
   * 复制相关信息
   */
  copy: function (e) {
    console.log(e)
    let copyVal = e.currentTarget.dataset.value
    wx.setClipboardData({
      data: copyVal,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },
  /**
   * 获取公司简介
   */
  getCompanyInfo: function () {
    let that = this;
    util.request(api.getCompanyInfo).then(function (res) {
      console.log(res)
      if (res.errno === 0) {
        let latitude = 'markers[0].latitude'
        let longitude = 'markers[0].longitude'
        let name = 'markers[0].name'
        that.setData({
          reqData: res.data
        });
        that.setData({
          [latitude]: res.data.companyLatitude,
          [longitude]: res.data.companyLongitude,
          [name]: res.data.companyName,
        });
      }
    });
  },
  /**
   * 地图导航
   */
  showLocation(e){
    let that = this.data
    wx.openLocation({
      latitude: parseFloat(that.reqData.companyLatitude),
      longitude: parseFloat(that.reqData.companyLongitude),
      name: that.reqData.companyName,
      address: that.reqData.companyAddr,
    })
  },
  /**
   * 呼叫功能
   */
  callPhone: function (e) {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.reqData.companyPhone,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getCompanyInfo()
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