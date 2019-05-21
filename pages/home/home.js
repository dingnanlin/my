// pages/home/home.js
Page({
  data: {
    text:"",
    welcome:[],
    isLogin:true,
    showOne:-1,
    operateList:[
      {
        title:"待付款",
        className:"iconImg iconfont icon-daifukuan"
      },
      {
        title:"待收货",
        className:"iconImg iconfont icon-daishouhuo"
      },
      {
        title:"待使用",
        className:"iconImg iconfont icon-lipinhe1"
      },
      {
        title:"待评价",
        className:"iconImg iconfont icon-icondaipingjia"
      }
    ],
    showDataList:[],
    showList:[],
    firstList:[],
    moveperson:false,    
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // console.log("个人中心");
    this.findData("张三");
  },
  // 生命周期函数--监听页面初次渲染完成
  onReady(){
    this.oneSetData();
  },
  // 当前是 tab 页时，点击 tab 时触发
  onHide(){
    let that = this
    this.setData({
      showOne:-1
    })   
    this.oneSetData();
  },
  // 页面到底的函数
  onReachBottom(e){
    console.log(e);
    if(this.data.showOne!=-1){
      this.setData({
        moveperson:true
      }) 
      var timer = setTimeout(()=>{
        let that = this;
        // console.log(that.data.showList);
        var newArr = that.data.showList.concat(that.data.firstList);
        // console.log(newArr);
        this.setData({
          showList:newArr,
          moveperson:false
        })
        clearTimeout(timer);
      },2000)
    }
  },
  // 按钮按下的功能
  pressdown(event){
    let that = this;
    var keyWods = event.currentTarget.dataset.alphaBeta;  
    // console.log(keyWods);
    if(keyWods==0){
      var list = that.data.showDataList[0];
      // list = JSON.stringify(list);
      that.setData({
        showOne:keyWods,
        showList:list,
        firstList:list
      })
      // console.log(that.data.showList);
    }else if(keyWods==1){
      var list = that.data.showDataList[1];
      that.setData({
        showOne:keyWods,
        showList:list,
        firstList:list
      })
      // console.log(that.data.showList);
    }else if(keyWods==2){
      var list = that.data.showDataList[2];
      that.setData({
        showOne:keyWods,
        showList:list,
        firstList:list
      })
      // console.log(that.data.showList);
    }else if(keyWods==3){
      var list = that.data.showDataList[3];
      that.setData({
        showOne:keyWods,
        showList:list,
        firstList:list
      })
      // console.log(that.data.showList);
    }     
  },
  // 查询数据的方法
  findData(name){
    let that = this;
    let task = tt.request({
    url: 'http://localhost:4000/list/userProInfo?user='+name,
    // data: {
    //     user_name: 'hello'
    // },
    header: {
        'content-type':'application/json'
    },
    success (res) {
        that.setData({
          showDataList:res.data
        })
    },    
    fail (res) {
        console.log(`获取数据失败！`);
      }
    });
  },
  //第一次数据加载的方法
  oneSetData(){
    let that = this
    // console.log(this.data.showDataList)
    var list = this.data.showDataList[4];
    this.setData({
      showList:list
    })
    // console.log(that.data.showList);
  },
  // 去详情页
  toDetails(event){
    console.log(this.data.showList);
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