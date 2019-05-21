Component({
  properties: {
    // 这里定义了 headerText 属性，属性值可以在组件使用时指定
    showList: {
      type: Array,
    }
  },
  data: {
    // 组件内部数据
    defaultStates: {}
  },
  methods: {
    // 自定义方法
    customMethod: function(){},
    // 去物流查询页
    toLoginTrack(event){
      console.log(event.currentTarget.dataset.alphaBeta);
      tt.navigateTo ({
        url: '../../pages/logisticsTracking/loginTrack?carId='+event.currentTarget.dataset.alphaBeta, // 指定页面的url      
        success: function(res){
          // console.log("跳转成功！")
          // console.log(url);
        },
        fail: function(res) {
          console.log("跳转失败！")
        },
      })
    },
  }
})