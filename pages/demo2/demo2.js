// pages/demo2/demo2.js
Page({
  data: {
     List:[
       {
         id:0,
         name:"首页",
         isActive:true
       },
       {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      },
     ]
  },
  handle:function(e){
    var list=this.data.List;
    var index=e.detail;
    list.forEach(function(v,i){
      v.isActive=false;
      if(i==index){
        v.isActive=true;
      }
    })
    this.setData({
      List:list
    })
  }
})