require.config({
  paths:{
    'jquery':'jquery-1.7.2'

  }
})

require(['jquery','window'],function($,w){
  
      new w.Window().alert({
      	    title:'这是一个alert弹窗'},
      	    {text:'天青色等烟雨'},function(){
      		alert('哈哈')},{
      	    width:'300',
      		height:'250',
      		x:'600',
      		y:'200'})

      
  })
