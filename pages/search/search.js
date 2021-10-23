// pages/search/search.js
Page({
    /**
     * 页面的初始数据
     */
    data: { 
        list: []
    },
    //搜索内容时触发回调
    searchInput(e){
        // console.log(e.detail.value);
        if(e.detail.value){
            wx.request({
                url: 'http://iwenwiki.com:3002/api/foods/select',
                data: {
                    name: e.detail.value,
                    city: wx.getStorageSync('city') || '北京'
                },
                success: res => {
                    if(res){
                        this.setData({list:res})
                    }else{
                        this.setData({list:[]})
                    }
                }
              })
        }else{
            this.setData({list: []})
        }
        
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