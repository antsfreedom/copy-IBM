$(function(){

	//icfon签入
	$(".icon1").mouseover(function(){
		$(".login").stop().show()	
	})

	$(".login").hover(function(){
		$(this).css({display:"block"})
	},function(){
		$(this).css({display:"none"})
	})

	$(".icon1").mouseleave(function(){
		$(".login").stop().hide()	
	})
	
	//导航引入第二张页面
	
	$(".heading ul li a").eq(0).mouseover(function(){
		$(".page").stop().slideDown(300)
	})

	$(".heading ul li a").eq(1).mouseover(function(){
		$(".page").stop().slideDown(300)
	})
	$(".page").hover(function(){
		$(".page").css({display:"block"})
	},function(){
		$(".page").stop().slideUp(300)
	})

	$(".heading ul li a").eq(2).mouseover(function(){
		$(".navList").stop().slideDown(300)
	})
	$(".navList").hover(function(){
		$(".navList").css({display:"black"})
	},function(){
			$(".navList").stop().slideUp(300)
	})
	$(".heading ul li a").eq(3).mouseover(function(){
		$(".page").stop().slideDown(300)
	})

	$(".pageNav_2 li").mouseover(function(){
		var index = $(this).index();
		$(".flybox li").eq(index).show().siblings().hide()
	})

	var sta =0
	$(".arrow").click(function(){	
		if(sta==0){
				$(".page").stop().slideUp(300)
				$(this).stop().hide()
				sta=1
		}else{
			$(this).stop().show()
		}
		sta=0
	})


//页面2增加小箭头
	var span = $("<span>")
	$(".pageNav_2 li").mouseover(function(){	
		span.text("->")
		span.css({float:"right",marginRight:"10px"})
		$(this).append(span)
	})
	$(".pageNav_2 li").mouseleave(function(){
		span.text("")
	})

//banner效果
	function show(){
		$(".banWord").stop().show(1000)
		$(".banIcon").stop().show(500)
	}
	show()

//侧边栏的隐藏与显示
	$(".icon2").click(function(){
		$(".sider").stop().show(300)
	})

	$(".siderTop").click(function(){
		$(".sider").css({display:"none"})
	})
	$(".siderLeft").click(function(){
		$(".sider").css({display:"none"})
	})

//侧边栏list收缩与展开
	var b = $("<b>")
	b.text("—")
	b.css({float:"right",marginRight:"10px"})
	$(".sideRight .list").append(b)

	var sta =0;
	$(".sideRight .list b").click(function(){
		// var index =$(this).index()
		if(sta==0){
				$(".sideRight .sec-list").eq(0).stop().slideUp(300)

				// $(".sideRight .sec-list").eq(1).stop().slideUp(300)
				$("b").text("+")
				sta=1
		}else if(sta==1){
			$(".sideRight .sec-list").eq(0).stop().slideDown(300)
			// $(".sideRight .sec-list").eq(1).stop().slideDown(300)
			$("b").text("—")
			sta=0
		}
	})
	

	//底部ul li增加样式
	$(".bottomList ul li").find("a").mouseover(function(){
		$(this).css({color:"#5085e6",borderBottom:"1px solid #5085e6"})
	})
	$(".bottomList ul li").find("a").mouseleave(function(){
		$(this).css({color:"gray",borderBottom:"none"})
	})

	$(".footerList ul li").find("a").css({color:"gray"})
	$(".footerList ul li").find("a").hover(function(){
		$(this).css({color:"#5085e6",borderBottom:"1px solid #5085e6"})
	},function(){
		$(this).css({color:"gray",borderBottom:"none"})
	})

	var sta = 0;
	$(".content p").click(function(){	
		if(sta==0){
			$('.content p span.iconfont-arrow').css({transform:"rotate(-180deg)"})
			$(".select").stop().slideDown(300)
			sta = 1	
		
		}else{
				$(".select").stop().slideUp(300);
				$('.content p span.iconfont-arrow').css({transform:"rotate(0)"});
				sta=0;			
		}	

	$(".select ul li").click(function(){
		var wroth = $(this).text();
		$(".content span.text").text(wroth);
	})
	
	

	})
	
	//置顶
	$(window).scroll(function(){
		var top = $(this).scrollTop()
		
		if(top>1000){
			$(".return").stop().fadeIn(300)
		}else{
			$(".return").stop().fadeOut()
		}
		 $(".return").click(function(){
			$("body,html").stop().animate({scrollTop:"0px"})
		})

	 })	
})

