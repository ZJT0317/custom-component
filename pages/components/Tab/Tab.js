// pages/components/Tab/Tab.js
Component({
  properties: {
    List:{
      type:Array,
      value:[]
    }
  },
  methods: {
    handleitemChange: function(e){
      var index=e.currentTarget.dataset.index;
      this.triggerEvent("itemChange",index);
    }
  }
})
