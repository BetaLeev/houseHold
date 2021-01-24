// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goIndex:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      setTimeout(()=>{this.goIndex()},3000)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})