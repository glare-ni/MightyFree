Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    price:0,
    productList: []
  },
  getCart:function(){
    let info = wx.getStorageInfoSync()
    let keys = info.keys
    let num = keys.length

    let myCart = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      myCart.push(obj)
    }
    this.setData({
      productList: myCart,
      number: num
    })

  },

  checkedChange(e){
    var priceSum=0;
    var id = e.currentTarget.id;
    var num = e.detail.value;
    var p = this.data.productList;
    if(num!=''){
      for(var i=0;i<p.length;i++){
        if(p[i].id==id){
          priceSum=parseFloat(this.data.price) + parseFloat(p[i].price)
        }
      }
    }
    else{
      for (var i = 0; i < p.length; i++) {
        if (p[i].id == id) {
          priceSum = parseFloat(this.data.price) - parseFloat(p[i].price)
        }
      }      
    }
    this.setData({
      price:priceSum
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.getCart();
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