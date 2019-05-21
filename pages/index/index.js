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
    moveperson:false,
    firstList:[]
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
  // 页面到底的函数
  onReachBottom(){
    this.setData({
      moveperson:true
    }) 
    var timer = setTimeout(()=>{
      let that = this;
      // console.log(that.data.showList);
      var newArr = that.data.cardList.concat(that.data.firstList);
      // console.log(newArr);
      this.setData({
        cardList:newArr,
        moveperson:false
      })
      clearTimeout(timer);
    },2000)
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
    // console.log(e);
    tt.navigateTo ({
      url: '../../pages/details/details?title='+title, // 指定页面的url      
      success: function(res){
        // console.log("跳转成功！")
        // console.log(url);
      },
      fail: function(res) {
        // console.log(res);
        // console.log(url);
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
        // console.log(`request调用成功 ${res}`);
        // console.log(res.data[1]);   
        this.imgUrls=res.data[1];
        this.cardList=res.data[2];
        that.setData({
          imgUrls:this.imgUrls
        })
        that.setData({
          cardList:this.cardList,
          firstList:this.cardList,
        })
    },    
    fail (res) {
        // console.log(`request调用失败`);
      }
    });
  },
})
