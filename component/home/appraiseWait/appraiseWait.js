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
  onReachBottom(){
    
  },
  methods: {
    // 自定义方法
    customMethod: function(){},
    // 去评价详情页
    toEvaluationDetails(event){
      console.log(event.currentTarget.dataset.alphaBeta);
      tt.navigateTo ({
        url: '../../pages/evaluationDetails/evaluationDetails?carId='+event.currentTarget.dataset.alphaBeta, // 指定页面的url      
        success: function(res){
          // console.log("跳转成功！")
          // console.log(url);
        },
        fail: function(res) {
          console.log("跳转失败！")
        },
      })
    },
  },
})
