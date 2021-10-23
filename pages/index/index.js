// pages/index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        current: 1,
        bannerArr: [],
        listArr: []
    },
    change(e){
        // console.log(e);
        this.setData({current:e.detail.current+1});
    },
    //内容点击跳转到详情页
    toIndexDetail(e){
        // console.log(e);
        wx.navigateTo({
          url: '../indexDetail/indexDetail?id=' + e.currentTarget.dataset.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //界面交互提示框
        wx.showLoading({
          title: '页面数据加载中',
        }),

        //请求banner数据
        wx.request({
          url: 'http://iwenwiki.com:3002/api/banner',
          success: res => {
            this.setData({bannerArr:res.data.data});
            // console.log(this.bannerArr)
          }
        }),

        //请求内容数据
        wx.request({
          url: 'http://iwenwiki.com:3002/api/indexlist',
          success: res => {
                //界面交互提示款
                wx.showToast({
                  title: '消息加载成功',
                })
                this.setData({listArr:res.data.data});
                // console.log(res.data.data);
          },
          complete: ()=>{
              wx.hideLoading()
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