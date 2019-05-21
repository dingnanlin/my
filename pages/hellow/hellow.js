// pages/hellow/hellow.js
Page({
  data: {
      timer:'',
      timeNum:'1',
      bgList:{},
  },
  onLoad: function (options) {
      this.findList();
      let that = this;
      this.countDown();
  },
  toHome: function (){
    var timer = setTimeout(()=>{
        
        clearTimeout(timer);
    },3000)
  },
  countDown:function(){
      let that = this;
      let timeNum = that.data.timeNum;
      that.setData({
          timer:setInterval(()=>{
              timeNum--;
              that.setData({
                  timeNum:timeNum
              })
              if(timeNum == 0){
                  clearInterval(that.data.timer);
                  tt.reLaunch({
                    url: `/pages/index/index`,
                    success (res) {
                        // console.log(`${res}`);
                    },
                    fail (res) {
                        // console.log(`reLaunch调用失败`);
                    }
                });
              }
          },1000)
      })
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
                console.log(`请求数据失败！`);
            }
        });
    }
})