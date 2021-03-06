// pages/list/list.js
const app = getApp();
Page({
  data: {
    headerTitle:"列表页",
    listItem:[],
    isClickde:"列表项一",
    proList:[],
    topList:[],
    headerPosition:false,
    boxPosition:false,
    moveperson:false,
    firstList:[]
  },
  onLoad: function (options) {
    this.getListItemTitle();
    this.getItemList("列表项一");
  },
  // 页面到底的函数
  onReachBottom(){
    this.setData({
      moveperson:true
    }) 
    var timer = setTimeout(()=>{
      let that = this;
      // console.log(that.data.showList);
      var newArr = that.data.proList.concat(that.data.firstList);
      // console.log(newArr);
      this.setData({
        proList:newArr,
        moveperson:false
      })
      clearTimeout(timer);
    },2000)
  },
  getListItemTitle(){
    let that = this;
    let task = tt.request({
    url: 'http://localhost:4000/list/listItem',
    // data: {
    //     user_name: 'hello'
    // },
    header: {
        'content-type':'application/json'
    },
    success (res) {
        // console.log(`request调用成功 ${res}`);
        // console.log(res);
        this.listItem = res.data;
        that.setData({
          listItem:this.listItem
        })
    },    
    fail (res) {
        // console.log(`request调用失败`);
      }
    });
    // if (someReason) {
    //     task.abort();
    // }
  },
  // 点击获取新数据的方法
  clickNewList(event){
    let that = this;    
    var itemIndex = event.currentTarget.dataset.alphaBeta;
    this.isClickde = itemIndex;
    // console.log(this.isClickde);
    that.setData({
      isClickde:this.isClickde
    })
    this.getItemList(this.isClickde); 
    // console.log(this.isClickde) ;  
  }, 
  // 发送请求获取数据
  getItemList(title){
    let that = this;
    let task = tt.request({
    url: 'http://localhost:4000/list/listPro?title='+title,
    // data: {
    //     user_name: 'hello'
    // },
    header: {
        'content-type':'application/json'
    },
    success (res) {
        // console.log(`request调用成功 ${res}`);
        // console.log(res);
        this.proList = res.data;
        that.setData({
          proList:this.proList,
          firstList:this.proList,
          topList:this.proList,
        })
    },    
    fail (res) {
        // console.log(`request调用失败`);
      }
    });
    // if (someReason) {
    //     task.abort();
    // }
  },
  onPageScroll(e){
    let that = this;
    if(e.scrollTop>40){
      that.setData({
        headerPosition:true,
        boxPosition:true
      })
    }else{
      that.setData({
        headerPosition:false,
        boxPosition:false
      })
    }
  },
  // 去详情页
  toDetails(event){
    console.log(event.currentTarget.dataset.alphaBeta);
    tt.navigateTo ({
      url: '../../pages/details/details?title='+event.currentTarget.dataset.alphaBeta, // 指定页面的url      
      success: function(res){
        // console.log("跳转成功！")
        // console.log(url);
      },
      fail: function(res) {
        console.log("跳转失败！")
      },
    })
  }
})