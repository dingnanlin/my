const app = getApp()
var comment = require("../../public/js/comment.js");
Page({
  data: {
    msg:"这是首页",
    item:"这是模板",
    headerTitle:"首页",
    imgUrls:[],
    cardList:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    headerPosition: false, 
  },
  onLoad: function () {
    // tt.showLoading({
    //   success (res) {
    //       console.log(res);
    //   },
    //   fail (res) {
    //       console.log(`showLoading调用失败`);
    //   }
    // });
    this.getData();
    
    
    // if (someReason) {
    //     task.abort();
    // }
  },
  hellowWord: function (){
    comment.hello("word");
  },
  onPageScroll(e){
    let that = this;
    if(e.scrollTop>0){
      that.setData({
        headerPosition:true
      })
    }else{
      that.setData({
        headerPosition:false
      })
    }
  },
  // 去详情页
  toDetails(e){
    var title = e.currentTarget.dataset.alphaBeta;
    console.log(title);
    tt.navigateTo({
      url: 'details/details?title='+title, // 指定页面的url
      success: function(res){
        console.log("跳转成功！")
      },
      fail: function(res) {
        console.log(res);
      },
    })  
  },
  // 请求数据
  getData(){
    let that = this;
    let task = tt.request({
    url: 'http://localhost:4000/hello',
    // data: {
    //     user_name: 'hello'
    // },
    header: {
        'content-type':'application/json'
    },
    success (res) {
        console.log(`request调用成功 ${res}`);
        console.log(res.data[1]);   
        this.imgUrls=res.data[1];
        this.cardList=res.data[2];
        that.setData({
          imgUrls:this.imgUrls
        })
        that.setData({
          cardList:this.cardList
        })
    },    
    fail (res) {
        console.log(`request调用失败`);
      }
    });
  },
})
