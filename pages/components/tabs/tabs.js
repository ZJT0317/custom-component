// pages/components/tabs/tabs.js
Component({ 
  data: {
    index: 1234455554545
  },
  methods: {
    handleItemData:function(){
      this.triggerEvent("itemChange",this.data.index);
    }
  }
})
