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
      value: '本公司成立于2020年，有着非常强大的技术。'
    },
    {
      label: '地址',
      en: 'Address',
      value: '北京'
    },
    {
      label: '电话',
      en: 'Telephone',
      value: '110'
    },
    {
      label: '微信号',
      en: 'WeChat',
      value: '110'
    },
    {
      label: '客服',
      en: 'Service',
      value: '110'
    },
    ],
    reqData: {
      companyPhoto:'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg',
      companyBrief:'本公司成立于2020年，有着非常强大的技术。',
      companyAddr:'北京',
      companyPhone:"110",
      companyWechat:"Lee-zl666",
      companyLatitude:"39.90960456049752",
      companyLongitude:'116.3972282409668'
    },
    markers: [{
      id: 1,
      latitude: '',
      longitude: '',
      name: ''
    }],
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