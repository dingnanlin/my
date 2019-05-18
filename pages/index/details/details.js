// pages/details/details.js
Page({
  data: {
    msg:"这是详情页",
    pid:"",
    proInfo:{},
    numbers:0,
    priceTotal:0,
    price:0,
    carColor:0,
  },
  onLoad: function (options) {
    console.log(options);
    this.getProInfo(options.title); 
  },
  // 获取商品详情
  getProInfo(pid){
    let that = this;
    let task = tt.request({
    url: 'http://localhost:4000/proinfo?pid='+pid,
    // data: {
    //     user_name: 'hello'
    // },
    header: {
        'content-type':'application/json'
    },
    success (res) {
      console.log(res);
      this.proInfo=res.data;
      that.setData({
        proInfo:this.proInfo,
        price:this.proInfo.price
      })
    },    
    fail (res) {
        console.log(`request调用失败`);
      }
    });
  },
  // 按钮加减的功能
  btnAdd(){
    let that = this;
    this.data.numbers++;    
    this.setData({
      numbers:this.data.numbers,
      carColor:1
    })
  },
  btnSub(){
    // console.log(this);
    let that = this;
    this.data.numbers--; 
    // console.log(this.data.numbers);
    if(this.data.numbers<=0){
      that.setData({
        numbers:0,
        carColor:0
      })
    }else{
      that.setData({
        numbers:this.data.numbers,
        carColor:1
      })
    }      
  }
})