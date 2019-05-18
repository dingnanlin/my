// pages/home/home.js
Page({
  data: {
    msg:"这是个人中心",
    text:"",
    welcome:[],
    isLogin:true,
    showOne:-1,
    operateList:[
      {
        title:"待付款",
        className:"iconImg iconfont icon-qianbao"
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
        className:"iconImg iconfont icon-daipingjia"
      }
    ],
    showDataList:[],
    showList:[],    
  },
  onLoad: function (options) {
    console.log("个人中心");
    this.handData();
    this.findData("张三");
  },
  handData : function(){
    let that = this;
    let task = tt.request({
    url: 'http://localhost:4000/users',
    // data: {
    //     user_name: 'hello'
    // },
    header: {
        'content-type':'application/json'
    },
    success (res) {
        console.log(`request调用成功 ${res}`);
        // console.log(res);   
        this.text=res.data;
        // console.log(tt.text);
        that.setData({
          text:this.text
        })
    },    
    fail (res) {
        console.log(`request调用失败`);
      }
    });
    // if (someReason) {
    //     task.abort();
    // }
  },
  handHello: function(){
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
        console.log(res.data);   
        this.welcome=res.data;
        that.setData({
          welcome:this.welcome
        })
    },    
    fail (res) {
        console.log(`request调用失败`);
      }
    });
    
  },
  // 按钮按下的功能
  pressdown(event){
    let that = this;
    var keyWods = event.currentTarget.dataset.alphaBeta;  
    console.log(keyWods);
    if(keyWods==0){
      var list = that.data.showDataList[0];
      // list = JSON.stringify(list);
      that.setData({
        showOne:keyWods,
        showList:list
      })
      // console.log(that.data.showList);
    }else if(keyWods==1){
      var list = that.data.showDataList[1];
      that.setData({
        showOne:keyWods,
        showList:list
      })
      // console.log(that.data.showList);
    }else if(keyWods==2){
      var list = that.data.showDataList[2];
      that.setData({
        showOne:keyWods,
        showList:list
      })
      // console.log(that.data.showList);
    }else if(keyWods==3){
      var list = that.data.showDataList[3];
      that.setData({
        showOne:keyWods,
        showList:list
      })
      console.log(that.data.showList);
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
        console.log(`request调用失败`);
      }
    });
  }
})