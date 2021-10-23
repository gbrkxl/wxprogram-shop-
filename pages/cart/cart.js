// pages/cart/cart.js
var itemJson = require('../../json/data')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: false,
        isSelected: false,
        isSelectedAll:false,
        num: 0,
        startX : 0,
        listArr: [],
        priceAll: "0.00"
    },
    //delete
    delete(e){
        var index = e.currentTarget.dataset.index;
        var list = this.data.listArr;
        list.splice(index,1);
        this.setData({listArr:list});
        wx.showToast({
          title: '删除成功',
          icon: 'none'
        });
        this.priceAll()
    },
    //num++
    add(e){
       var index =  e.currentTarget.dataset.index;
       var list = this.data.listArr;
       list[index].num++;
       this.setData({listArr:list});
       if(list[index].isSelected){
            this.priceAll()
        }
    },
    //num--
    reduce(e){
        var index =  e.currentTarget.dataset.index;
       var list = this.data.listArr;
       if(list[index].num>1){
            list[index].num--;
       }else{
           this.delete(e)
       }
        this.setData({listArr:list});
        if(list[index].isSelected){
            this.priceAll()
        }
    },
    //全选
    clickAll(){
        var num = this.data.num;
        var isSelectedAll = this.data.isSelectedAll;
        var list = this.data.listArr;
        isSelectedAll = !isSelectedAll;
        for(var i=0;i<list.length;i++){
            list[i].isSelected = isSelectedAll;
        };
        if(!isSelectedAll){
            num = 0
        };
        this.setData({
            listArr: list,
            isSelectedAll:isSelectedAll,
            num: num
        });
        this.priceAll()
    },
    //获取点击
    click(e){
        var index = e.currentTarget.dataset.circle;
        var list = this.data.listArr;
        var num = this.data.num;
        list[index].isSelected = !list[index].isSelected;
        if(list[index].isSelected){
            num++;
        }else{
            num--;
        };
        // console.log(num);
        this.setData({num:num})
        if(num == list.length){
            this.setData({isSelectedAll:true})
        }else{
            this.setData({isSelectedAll:false})
        }
        this.setData({listArr:list})
        // this.setData({isSelected:!this.data.isSelected})
        this.priceAll();
    },
    //计算总价
    priceAll(){
        var list = this.data.listArr;
        var sum = 0;
        for(var i=0;i<list.length;i++){
            if(list[i].isSelected){
                // console.log(list[i].prices,list[i].num)
                sum+= parseFloat(list[i].prices)*parseInt(list[i].num);
            }
        };
        this.setData({priceAll:sum.toFixed(2)})
    },
    //滑动显示删除
    move(e){
        var index = e.currentTarget.dataset.index;
        var list = this.data.listArr;
        for(var i=0;i<list.length;i++){
            list[i].active = false
        }
        if(e.touches[0].clientX < this.data.startX){
            // this.setData({active:true});
            list[index].active = true;
        }else{
            // this.setData({active:false});
            list[index].active = false;
        }
        this.setData({listArr:list})
        // console.log(this.data.active);
    },
    //保存点击初始点
    moveStart(e){
        // console.log(e.touches[0].clientX);
        this.setData({startX:e.touches[0].clientX});
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.request({
        //   url: 'http://iwenwiki.com:3002/api/cart/list',
        //   success: res => {
        //       console.log(res);
        //   },
        // })
        // console.log(itemJson);
        this.setData({listArr:itemJson.itemJson})
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
        this.setData({listArr:itemJson.itemJson})
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