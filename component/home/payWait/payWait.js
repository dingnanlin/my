Component({
  
  properties: {    
    // 这里定义了 headerText 属性，属性值可以在组件使用时指定
    showList: {
      type: Array,
    },
  },
  data: {
    // 组件内部数据
    // dataList:[],
    // 按钮允许被触发的变量
    isClicked:true,
    // 单选框被选中的状态
    isChecked:true,
  },
  attached:function() {
    
  },
  methods: {
    // 自定义方法
    customMethod: function(){},    
  },
  attached(){
    // let that = this
    console.log(this.properties.showList);
    // var arr = this.properties.showList;
    // console.log(arr);
    // that.setData({
    //   dataList:arr
    // })
  },
  ready (){
    // console.log(this.data.dataList);
    // for(var i=0;i<this.properties.showList.length;i++){
    //   console.log(this.properties.showList[i]);
    // }
  }
})