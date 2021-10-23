// pages/citys/citys.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotcitys: []
    },
    getLocation(){
        wx.getLocation({
          success: res => {
            // console.log(res); //latitude longitude
            wx.request({
              url: "http://iwenwiki.com:3002/api/lbs/location",
              data:{
                latitude: res.latitude,
                longitude: res.longitude
              },
              success: result => {
                // console.log(result.data.result.ad_info.city)
                var city = result.data.result.ad_info.city;
                wx.setStorageSync('city',city.slice(0,city.length-1));
                wx.reLaunch({
                  url: '../shop/shop',
                })
              }
            })
          }
        })
    },
    changeCity(e){
        // console.log(e.currentTarget.dataset.city);
        // wx.reLaunch({
        //     url: '../shop/shop?city= '+ e.currentTarget.dataset.city,
        // })
        wx.setStorageSync('city',e.currentTarget.dataset.city);
        wx.reLaunch({
            url: '../shop/shop',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
          url: 'http://iwenwiki.com:3002/api/hot/city',
          success: res => {
            //   console.log(res.data.data)
              this.setData({hotcitys:res.data.data})
          }
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