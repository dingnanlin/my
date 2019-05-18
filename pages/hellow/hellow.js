// pages/hellow/hellow.js
Page({
  data: {
      time:3,
      bgList:{},
  },
  onLoad: function (options) {
    //   this.toHome();
      this.findList();
    //   this.timer();
      let that = this;
    //   console.log(this.data.time);
    //     var timer = setInterval(()=>{
    //         var thisTimer = this.data.time--;
    //         console.log(thisTimer);
    //         this.setData({
    //             time:thisTimer
    //         })
    //     },1000)
  },
  toHome: function (){
    var timer = setTimeout(()=>{
        tt.reLaunch({
            url: `/pages/index/index`,
            success (res) {
                console.log(`${res}`);
            },
            fail (res) {
                console.log(`reLaunch调用失败`);
            }
        });
        clearTimeout(timer);
    },3000)
  },
    // 请求数据
        findList(){
            let num = (parseInt(Math.random()*7));
            // console.log(num);
            let that = this;
            let task = tt.request({
            url: 'http://localhost:4000/list/findBg',
            // data: {
            //     user_name: 'hello'
            // },
            header: {
                'content-type':'application/json'
            },
            success (res) {
                // console.log(res);
                this.listItem = res.data[num];
                // console.log(this.listItem);
                that.setData({
                    bgList:this.listItem
                })
            },    
            fail (res) {
                console.log(`request调用失败`);
            }
        });
    }
})