var app = getApp();
// pages/driverLicense/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    areaIndex: 0,
    area: ['小型汽车', '大型客车(A1)', '索引货车(A2)', '中型客车(B1)','大型货车(B2)','两、三轮摩托(B1)'],
    licenceIndex: 0,
    licence: ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀",
      "豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂",
      "津", "贵", "云", "桂", "琼", "青", "新", "藏",
      "蒙", "宁", "甘", "陕", "闽", "赣", "湘"],
    serviceList:[
      { sname: '车务办理', sid: 'handing' },
      { sname: '所需手续', sid: 'procedures' },
      { sname: '注意事项', sid: 'notes' }
    ],
    imageUrl:"",
    curIndex: 0,
    isScroll: false,
    toView: 'renewal',
    modalFlag: true,
    modalFlag1:true,
    modalFlag2:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
   
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

  bindPickerChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },
  bindLicenceChange:function(e){
    this.setData({
      licenceIndex: e.detail.value
    })
  },
  modalOk: function(){
    this.setData({
      modalFlag: true,
      modalFlag1:true,
      modalFlag2:true
    })
  },
  showItem: function(e){
    var self = this;
        self.setData({
          modalFlag: false
        })
    },
  showMechie: function(e){
    var self = this;
    self.setData({
      modalFlag1: false
    })
  },
  showCheJiaNumber: function (e) {
    var self = this;
    self.setData({
      modalFlag2: false
    })
  },
  carInput:function(e){
   

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})