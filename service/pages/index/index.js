//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false , // loading
    userInfo: {},
    swiperCurrent: 0,  
    selectCurrent:0,
    category: [
      { name: '违章查询', id: 'search' },
      { name: '车辆过户', id: 'newCarsChanges' },
      { name: '新车上牌', id: 'carsBoarding' },
      { name: '年检验车', id: 'inspection' },
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'search'
  },
  //事件处理函数
  swiperchange: function(e) {
      //console.log(e.detail.current)
       this.setData({  
        swiperCurrent: e.detail.current  
    })  
  },
  onLoad: function () {
    var that = this
    var imageInfo = [{
      picUrl: "../../images/more/banner1.jpg"
    },
      {
        picUrl: "../../images/more/banner2.jpg"
      }];
    that.setData({
      banners: imageInfo
    });
  },
  onReady() {
    var self = this;
    // wx.request({
    //   url: '',
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // });
    self.setData({
      detail: [
        {
          "id": "search",
          "cate": "服务",
          "detail": [
            {
              "thumb": "/images/cate/bmcw-wz-icon.jpg",
              "name": "违章查询"
            },
            {
              "thumb": "/images/cate/bmcw-jz-icon.jpg",
              "name": "带领签字"
            },
            {
              "thumb": "/images/cate/bmcw-wts-icon.jpg",
              "name": "年检委托书"
            }
          ]
        },
        {
          "id": "newCarsChanges",
          "cate": "过户",
          "detail": [
            {
              "thumb": "/images/cate/main1.jpg",
              "name": "本市过户"
            },
            {
              "thumb": "/images/cate/main2.jpg",
              "name": "车辆外迁"
            },
            {
              "thumb": "/images/cate/main3.jpg",
              "name": "车辆迁入"
            }
          ]
        },
        {
          "id": "carsBoarding",
          "cate": "上牌",
          "detail": [
            {
              "thumb": "/images/cate/main4.jpg",
              "name": "国产车"
            },
            {
              "thumb": "/images/cate/main5.jpg",
              "name": "进口车"
            },
            {
              "thumb": "/images/cate/main6.jpg",
              "name": "平行车辆"
            }
          ]
        },
        {
          "id": "inspection",
          "cate": "年检",
          "detail": [
            {
              "thumb": "/images/cate/main7.jpg",
              "name": "本市车辆"
            },
            {
              "thumb": "/images/cate/main8.jpg",
              "name": "异地车辆"
            }
          ]
        }     
      ]
    })
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  },
  onPageScroll(e) {
    let scrollTop = this.data.scrollTop
    this.setData({
      scrollTop: e.scrollTop
    })
   },
  onShareAppMessage: function () {
    return {
      title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
