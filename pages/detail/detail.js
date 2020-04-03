// pages/detail/detail.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:{
      id: '001',
      name:"西瓜",
      price:"10.00",
      src1:"/images/xigua1.jpg",
      src2: "/images/xigua2.jpg",
      src3: "/images/xigua3.jpg",
      src4: "/images/xigua4.jpg",
      src5: "/images/xigua1.jpg",
      src6: "/images/xigua2.jpg",
    }
  },
  addCar(){
    let product = this.data.product
    wx.setStorageSync(product.id, product)
    wx.showModal({
      title: '成功提示',
      content: '产品添加到购物车成功',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let result = common.getProductDetail(id)
    if(result.code == '200'){
      this.setData({
        product:result.product
      })
    }
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