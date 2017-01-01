define(function(){
     var Window=function(){
      this.config={     
      	title:'提示',
      	text:'青春终究顶不过时间的摧残',
        width:'450',
      	hegiht:'200',
      	x:'100',
      	y:'100',
      	btn_type:['弹出框'],
      	btn:['确定'],
        }  
     }

   Window.prototype={	 
      //alert      
        alert:function(title,text,cancel,wid){              
            //继承
             var e= $.extend(this.config,title,text,wid); 
             
              this.content();   
              this.delect(title,text,cancel,wid);
          },
     
          delect:function(title,text,cancel,wid){
         	var callback=function(this_){
             		//判断第三个参数是否传入，并且是否是函数
             	if( typeof cancel=='function' && typeof cancel !='undefined'){
                       cancel();
                       $('.box').attr('style','margin-top:0px');
                       this_.parents('.mask').remove();    
                    }
                   else{
                    	alert('请传入一个函数')
                   } 
             }            
              $(document).on('click','.close',function(){
              	 callback($(this));
               })
              $(document).on('click','.sure',function(){             
                  callback($(this))
               })
          },

         //生成html
         content:function(){
          	 self=this;
              var btn=$('<button class="window_alert">'+this.config.btn_type[0]+'</button>'),
              box=$('<div class="box"><div class="title">'+this.config.title+'<span class="close">X</span></div><div class="text">'+this.config.text+'</div></div>'),
              sure=$('<div class="sure">'+this.config.btn[0]+'</div>');
              mask=$('<div class="mask"></div>');
              $('body').append(btn); 
               btn.click(function(){
              	  $('body').append(mask); 
                  mask.fadeIn(function(){  
                  	     mask.append(box);  
                  	     $('.text').after(sure);  
                  	     $('.box').css({         
                                     height:self.config.hegiht+'px' ,
                                     width:self.config.width+'px',
                                     left:self.config.x+'px',
                                     top:self.config.y+'px'                    

                                })                                          
                           $('.box').animate({
                               'margin':'100px auto'
                           })         
                  });
                 
              }) 
          }
       }
   //暴露接口
   return{
   	   Window:Window
    };
 
  })