Page({
  data:{
    name:"weil"
  },
  tapHandler(event){
    this.setData({name:"张三"},function(){
      wx.showToast({
        title: '操作完成',
        duration:700
      })
    })
  },
  clickHandler(e){
    const that = this;
    wx.showModal({
      title: '操作确认',
      content: '你确认要修改吗？',
      success (res) {      
        if (res.confirm) {
          that.setData({
            name: '李四'
          }, function () {
             wx.showToast({
               title: '操作完成',
               duration: 700
             });
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  },
  reqHandler(e){
    wx.request({
      url: 'http://localhost/test',
      success: function(res){
        wx.showToast({
          title: res.data,
          duration:700
        })
      }
    })
  },
  infoHandler(e){
    wx.login({
      success:function(res){
        console.log(res);
        wx.getUserInfo({
          success:function(kk){
            console.log(kk);
          }
        })
        // this.setData({name: res.detail.userInfo.nickName})
      }
    })
    
    
  },
  loginHandler(e){
    console.log("dd")
        wx.login({
          success:function(res){
            console.log(res.code)
            wx.request({
              // url: 'http://localhost/wx/user/sign_in?code='+res.code,
              url: 'http://localhost:8081/test/wechat?code='+res.code,
              
              success(d){
                console.log(d);
              }
            })
          }
        })
  },
  getPhoneNumber (e) {
    console.log(e.detail.code)
  }

})