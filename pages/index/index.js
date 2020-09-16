const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../utils/user.js');

//获取应用实例
const app = getApp();

Page({
  data: {
    // newGoods: [],
    // hotGoods: [],
    // topics: [],
    // brands: [],
    // groupons: [],
    // floorGoods: [],
    // banner: [],
    // channel: [],
    // coupon: [],
    // goodsCount: 0

    newGoods: [

      {
        name: '太上皇龙椅',
        picUrl: 'https://i.loli.net/2020/09/16/oYrx4Iuj3kZnf8B.png'
      },
      {
        name: '皇太子龙椅',
        picUrl: 'https://i.loli.net/2020/09/16/RUu4cGMqZAIrY5O.png'
      },
      {
        name: '康熙龙椅',
        picUrl: 'https://i.loli.net/2020/09/16/RH3lYEZsPj6mdab.png'
      },
      {
        name: '道光龙椅',
        picUrl: 'https://i.loli.net/2020/09/16/5sefjqnEHGWdMiu.png'
      }

    ],
    hotGoods: [{
        name: '文房四宝',
        picUrl: "https://i.loli.net/2020/09/16/3hRIqF2PtezA158.jpg",
        retailPrice: 99999
      },
      {
        name: '文房四宝',
        picUrl: "https://i.loli.net/2020/09/16/tn3duLq8FclOZB2.jpg",
        retailPrice: 99999
      },
      {
        name: '文房四宝',
        picUrl: 'https://i.loli.net/2020/09/16/uaV5wMXoyHEODR6.jpg',
        retailPrice: 9999
      },
      {
        name: '文房四宝',
        picUrl: "https://i.loli.net/2020/09/16/YPcGpnTQHOISeWM.jpg",
        retailPrice: 9999
      },
    ],
    topics: [{
        title: '专题精选',
        price: 1999,
        subtitle: '专题精选2',
        picUrl: 'https://i.loli.net/2020/09/16/lhL9JgTf25Inipv.jpg'
      },

    ],
    brands: [],
    groupons: [],
    floorGoods: [{
      name: '特价好物',
      goodsList: [{
          name: '泰国王妃手串',
          picUrl: 'https://i.loli.net/2020/09/16/k6MYtoSIwngCRj1.jpg',
          retailPrice: 889
        },
        {
          name: '泰国国王手镯',
          picUrl: 'https://i.loli.net/2020/09/16/uz6ZfE3BmgAI5nJ.jpg',
          retailPrice: 998
        },
        {
          name: '泰国项坠',
          picUrl: 'https://i.loli.net/2020/09/16/vPzpjZIusni6gDV.jpg',
          retailPrice: 8889
        }
      ]
    },
    {
      name: '人间绝品',
      goodsList: [{
          name: '唐伯虎的文房四宝',
          picUrl: 'https://i.loli.net/2020/09/16/qkdi3uynBaJQreE.jpg',
          retailPrice: 8888
        },
        {
          name: '释迦摩尼的舍利',
          picUrl: 'https://i.loli.net/2020/09/16/LCSY1ItTlOvWVy3.jpg',
          retailPrice: 999999
        },
        {
          name: '一灯大师手镯',
          picUrl: 'https://i.loli.net/2020/09/16/1cvr9qYK2Qb4Hal.jpg',
          retailPrice: 886
        }, {
          name: '小龙女的手环',
          picUrl: 'https://i.loli.net/2020/09/16/3Lr4mipdD86xOJE.jpg',
          retailPrice: 998
        }
      ]
    }],
    banner: [{
        url: 'https://i.loli.net/2020/09/16/cTxlrPzEh189tdi.jpg'
      },
      {
        url: 'https://i.loli.net/2020/09/16/M63RoPthvOBcGwp.jpg'
      },
      {
        url: 'https://i.loli.net/2020/09/16/lIq2kae5AKGoBZJ.jpg'
      }
    ],
    channel: [{
        name: '观书儒雅',
        iconUrl: 'https://i.loli.net/2020/09/16/qkdi3uynBaJQreE.jpg'
      },
      {
        name: '盒盒美美',
        iconUrl: 'https://i.loli.net/2020/09/16/vPzpjZIusni6gDV.jpg'
      },
      {
        name: '食今不味',
        iconUrl: 'https://i.loli.net/2020/09/16/5sefjqnEHGWdMiu.png'
      },
      {
        name: '闲情逸致',
        iconUrl: 'https://i.loli.net/2020/09/16/k6MYtoSIwngCRj1.jpg'
      },
      {
        name: '尔厅八方',
        iconUrl: 'https://i.loli.net/2020/09/16/oYrx4Iuj3kZnf8B.png'
      },
    ],
    coupon: [],
    goodsCount: 0
  },

  onShareAppMessage: function () {
    return {
      title: '怀古典藏展示',
      desc: '怀古典藏小程序',
      path: '/pages/index/index'
    }
  },

  onPullDownRefresh() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getIndexData();
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brands: res.data.brandList,
          floorGoods: res.data.floorGoodsList,
          banner: res.data.banner,
          groupons: res.data.grouponList,
          channel: res.data.channel,
          coupon: res.data.couponList
        });
      }
    });
    util.request(api.GoodsCount).then(function (res) {
      that.setData({
        goodsCount: res.data
      });
    });
  },
  onLoad: function (options) {

    // 页面初始化 options为页面跳转所带来的参数
    if (options.scene) {
      //这个scene的值存在则证明首页的开启来源于朋友圈分享的图,同时可以通过获取到的goodId的值跳转导航到对应的详情页
      var scene = decodeURIComponent(options.scene);
      console.log("scene:" + scene);

      let info_arr = [];
      info_arr = scene.split(',');
      let _type = info_arr[0];
      let id = info_arr[1];

      if (_type == 'goods') {
        wx.navigateTo({
          url: '../goods/goods?id=' + id
        });
      } else if (_type == 'groupon') {
        wx.navigateTo({
          url: '../goods/goods?grouponId=' + id
        });
      } else {
        wx.navigateTo({
          url: '../index/index'
        });
      }
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.grouponId) {
      //这个pageId的值存在则证明首页的开启来源于用户点击来首页,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../goods/goods?grouponId=' + options.grouponId
      });
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.goodId) {
      //这个goodId的值存在则证明首页的开启来源于分享,同时可以通过获取到的goodId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../goods/goods?id=' + options.goodId
      });
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.orderId) {
      //这个orderId的值存在则证明首页的开启来源于订单模版通知,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../ucenter/orderDetail/orderDetail?id=' + options.orderId
      });
    }

    // this.getIndexData();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  getCoupon(e) {
    if (!app.globalData.hasLogin) {
      wx.navigateTo({
        url: "/pages/auth/login/login"
      });
    }

    let couponId = e.currentTarget.dataset.index
    util.request(api.CouponReceive, {
      couponId: couponId
    }, 'POST').then(res => {
      if (res.errno === 0) {
        wx.showToast({
          title: "领取成功"
        })
      } else {
        util.showErrorToast(res.errmsg);
      }
    })
  },
})