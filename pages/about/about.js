// pages/about/about.js
var app = getApp();
// console.log(app);
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: true,
        avatar: '',
        name: ''
    },
    //点击登录
    getUserInfo(){
        // wx.getUserProfile({
        //   desc: '获取头像和昵称',
        //   success: res => {
        //     //   console.log(res.userInfo)
        //       this.setData({
        //           flag: false,
        //           avatar:res.userInfo.avatarUrl,
        //           name: res.userInfo.nickName
        //     })
        //   }
        // })
        wx.login({
          success: res => {
            //   console.log(res.code);
              wx.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session',
                data: {
                    appid: "wxf916302eaefc917f",
                    secret: "cb7401c025d7bfd2f57d55fee1d209a3",
                    js_code: res.code,
                    grant_type: "authorization_code"
                },
                success: res => {
                    // console.log(res.data);
                    wx.setStorageSync('openid', res.data.openid);
                }
              })
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(app.globalDate.flag){
            this.setData({flag: false});
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