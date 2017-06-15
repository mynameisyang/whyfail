//控制字体大小的remjs的代码，每个页面都要用// JavaScript Document
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//控制字体大小的remjs的代码，每个页面都要用// JavaScript Document控制字体大小的代码结束了

//这里是发送验证码需要的60秒倒计时代码
var countdown=60;
	function settime(obj){ 
    	if(countdown == 0){ 
        	obj.removeAttribute("disabled");    
        	obj.value="免费获取验证码"; 
        	countdown = 60; 
        	return;
    	}else{ 
        	obj.setAttribute("disabled", true); 
        	obj.value="重新发送(" + countdown + ")"; 
        	countdown--; 
    } 
		setTimeout(function(){ settime(obj)},1000) 
}
//这里是发送验证码需要的60秒倒计时代码的结束代码

$(document).ready(function() {
	//这段代码是beshipped的js代码,,,这是待发货的页面的js...这是五个页面公用的js代码，待发货，付款，待收货，待评价，退款等的
	 $('.ordersinfo li').click(function () {
        $('.widthheight').css('display', 'none')
        $('.widthheight').eq($(this).index()).css('display', 'block')
        $(this).css({ "border-bottom": "1px solid #f60", "color": "#f60" });
        $(this).siblings().css({ "color": "#000", "border-bottom": "none", });
    })
	//这段代码是分类商品的js代码,,,
	$('.myleftnav ul li').click(function () {
        //debugger;
        //alert($(this).index());
        $('.rela .abso').css('display', 'none')
        $('.rela .abso').eq($(this).index()).css('display', 'block')
        $(this).find('a').css({ "background": "white", "color": "black" });
        $(this).siblings().find('a').css({ "color": "#fff", "background": "black", });
    })
	
	//这是商品详情页面的js代码
	$('.evaluatetitle').click(function () {
        //debugger;
        //alert($(this).index());
        $('.evaluatealltxt').css('display', 'none');
        $('.evaluatealltxt').eq($(this).index()).css('display', 'block');
        $(this).css({ "background": "#d3b182", "color": "#fff" });
        $(this).siblings().css({ "color": "#d3b182", "background": "#fff", });
    })
	$('.detail01 div').click(function () {
        //debugger;
        //alert($(this).index());
        $('.okgoodeva').css('display', 'none');
        $('.okgoodeva').eq($(this).index()).css('display', 'block');
        $(this).css({ "background": "#d3b182", "color": "#fff" });
        $(this).siblings().css({ "color": "#d3b182", "background": "#fff", });
    })
	//上面是是商品详情页面的js代码
	//下面是是我的积分页面的js代码
	$('.integralinfo li').click(function () {
        $('.widthheightinte').css('display', 'none')
        $('.widthheightinte').eq($(this).index()).css('display', 'block')
        $(this).css({ "border-bottom": "1px solid #f60", "color": "#f60" });
        $(this).siblings().css({ "color": "#000", "border-bottom": "none", });
    })
	//后来加的收藏和已收藏的功能
   var tab = true;
   $("#coll").click(function () {
     			if (tab) {
                $(this).find('img').attr("src", "images/shoucang001.png");
				$(this).find('.ptxt').text('已收藏')
                tab = false;
            		} else {
                $(this).find('img').attr("src", "images/xiangqing_50.png");
				$(this).find('.ptxt').text('收藏')
                tab = true;
            }
            
        })
		//颜色尺码的选择
	$('.size span').click(function(){
		var isselected =  $(this).attr("isselected");
		$(this).siblings().css( {"background":"#f4f4f4","color":"#000"});
		$(this).siblings().attr('isselected',0);
		if(isselected == 1){
				$(this).attr("isselected",0);
				$(this).css({"background":"#f4f4f4","color":"#000"});
				$(this).parent('div').attr('test','');
				$('.colorbox').text('请选择');
				var text = $(this).text();
        		$('.cl').text(' ');
			}else{
				$(this).css({"background":"#fc3c40","color":"#fff"});
				$(this).attr("isselected",1);
				var text = $(this).text()
				$(this).parent('div').attr('test',text);
				$('.colorbox').text('已选择：');
				var text = $(this).text();
        		$('.cl').text(text+' ; ');
			}
		//$(this).css({"background":"#fc3c40","color":"#fff"});
		 
		})
		//尺码的选择
	$('.ss span').click(function(){
		var isselected =  $(this).attr("isselected");
		$(this).siblings().css(  {"background":"#f4f4f4","color":"#000"});
		$(this).siblings().attr('isselected',0);
		if(isselected == 1){
				$(this).attr("isselected",0);
				$(this).css({"background":"#f4f4f4","color":"#000"});
				$(this).parent('div').attr('test','');
				$('.colorbox').text('请选择');
				var text = $(this).text();
        		$('.sz').text('');
			}else{
				$(this).css({"background":"#fc3c40","color":"#fff"});
				$(this).attr("isselected",1);
				var text = $(this).text()
				$(this).parent('div').attr('test',text);
				$('.colorbox').text('已选择：');
				var text = $(this).text();
        		$('.sz').text(text+' ; ');
			}
		//$(this).css({"background":"#fc3c40","color":"#fff"});
		 
		})
		//点击请选择颜色尺码的盒子，出现弹窗
		$('.colorchoose').click(function(){
			$('.colortan').css('display','block');
			})
		//点击确定的盒子，隐藏弹窗
	$('.sureme').click(function(){
			$('.colortan').css('display','none');
			$('.colorbox').text('已选择：');
			if($('#chn').text()==1){
				$('.jis').text(1)
				}
			if($('.cl').text()==""){
				$('.cl').text("红色;")
				}
			if($('.sz').text()==""){
				$('.sz').text("L;")
				}
			})
			//下面是点击加号，商品数量增加的代码
			$('#pljia').click(function(){
					var nummm=$('#chn').text();
					nummm++;
					$('#chn').text(nummm)
        		$('.jis').text(nummm)
				})
		//下面是点击减号，商品数量减少的代码
		 $('#redjian').click(function(){
				var plusss=$('#chn').text();
				if(plusss>1){
					plusss--;
					$('#chn').text(plusss)
				}else{
					$('#chn').text(1)
				}
				$('.jis').text(plusss)
    		})
});

function add(o){
	//danxuan(i);
	var yyspan=$(o).siblings('span.xw-shop-num');
	var yy=yyspan.text()
	yy++;
	yyspan.text(yy);
	$(o).parents(".shipinfowidth").siblings(".xw-sin-btn").find(".xw-circle").addClass("uniqueactive");
	if ($(".xw-circle:not(.uniqueactive)").size() <= 0 ){
		$(".xw-all-circle").addClass("uniqueactive");}
	xwreckon();
}
function reduce(o){
	var yyspan=$(o).siblings('span.xw-shop-num');
	var yy=yyspan.text()
	if(yy>1){
	yy--;
	yyspan.text(yy);
	}else{
		yyspan.text(1);
		}
	$(o).parents(".shipinfowidth").siblings(".xw-sin-btn").find(".xw-circle").addClass("uniqueactive");
	if ($(".xw-circle:not(.uniqueactive)").size() <= 0 ){
		$(".xw-all-circle").addClass("uniqueactive");}
	xwreckon();
}
		
function disun(a){
	$(a).click(function(){
		$('.colortan').css('display','block')
		})
	}
	
$('.popcancel').click(function(){
	$('.popup').css('display','none')
})

var mmw;
var mmy;
var mma;
var ttextt;
function myaffirm(z){
	$('.affirmpopup').css('display','block')
	mma=$(z).parents('.goodcartlist');
	ttextt=$(z)
}
$('.apopsmallbtn').click(function(){
	$('.affirmpopup').css('display','none')
	mma.remove();
	//ttextt.text('评价')
	$("span.qqq").unbind("click",myaffirm(z));
	$('.conauto').css('display','block')
	event.preventDefault(); 
})
function mydelett(ss){
	$('.popup').css('display','block')
	mmw=$(ss).parents('.goodcartlist')
}
$('.popsmallbtn').click(function(){
	$('.popup').css('display','none')
	mmw.remove();
	$('.conauto').css('display','block')
	event.preventDefault(); 
})
$('.popup').click(function(){
	$(this).css('display','none')
	})

function mydelet(s){
	$('.popup').css('display','block')
	mmy=$(s).parents('.adwrapper')
}

$('.popsmall').click(function(){
	$('.popup').css('display','none')
	mmy.remove();
	event.preventDefault(); 
})


//这是点击删除收藏后，删除收藏，弹出删除成功
$('.de-co').click(function(){
	$(this).parents('.goodcartlist').css('display','none');
	funcLayer("删除成功")
	//$('.conauto').css('display','block')这是点击删除订单后，让去逛逛的盒子出现，没必要删了
	})
	
//这是用户的优惠券的领取使用情况的页面的tab选项卡	
$('.tabcouponinfo li').click(function () {
        $('.widthcoupontab').css('display', 'none')
        $('.widthcoupontab').eq($(this).index()).css('display', 'block')
        $(this).css({ "border-bottom": "1px solid #f60", "color": "#f60" });
        $(this).siblings().css({ "color": "#000", "border-bottom": "none", });
    })
	
	
//这是通过传参实现的一个函数，一个替代alert的提示框
var layer=document.createElement("div");
	layer.id="layer";
	function funcLayer(text)
	{
		var style=
		{
			background:"rgba(0,0,0,.2)",
			position:"fixed",
			zIndex:1000,
			width:"3rem",
			height:"0.5rem",
			left:"25%",
			top:"55%",
			color:"#fff",
			textAlign:"center",
			lineHeight:"0.5rem",
			borderRadius:"0.03rem",
			fontSize:"0.14rem",
		}
		for(var i in style)
			layer.style[i]=style[i];   
		if(document.getElementById("layer")==null)
		{
			document.body.appendChild(layer);
			layer.innerHTML=text;
			setTimeout("document.body.removeChild(layer)",500)
		}
	}
//规格参数的关闭按钮，这是动态添加的	
var $closetry=$('<div class="clear"><span class="fr" onClick="selectcloses(this)"><img src="images/ccxx.png" style="width:0.32rem;"></span></div>');
$('#proParacolor').prepend($closetry);
//点击关闭按钮时，清空选择的参数
function selectcloses(){
	$('.colorbox').text('请选择');
	$('.cl').text(' ');
	$('.sz').text(' ')
	$('.jis').text(' ')
	$('.colortan').css('display','none');
	}
//2017年1月9号新加的jq码
//下面这段代码是点击按钮，到另一个页面的代码
function mytestlink(c,d){
	c.click(function(){
	window.location.href=d})
}
mytestlink($('span.evalink'),'saythink.html');
mytestlink($('.viewbtn'),'viewlogistics.html');
mytestlink($('.nowpay'),'paypage.html');
mytestlink($('.dealsucc'),'orderform.html');
mytestlink($('.eva-link'),'saythink.html');
mytestlink($('.dealclosed'),'sayhadship.html');
mytestlink($('.waitpay'),'waitpaynow.html');
mytestlink($('.buyer'),'givemoneyed.html');
mytestlink($('.cusser'),'afterserve.html');
mytestlink($('.btnboxpay button:nth-child(1)'),'givemoneyed.html');
mytestlink($('.btnboxpay button:nth-child(2)'),'index.html');
mytestlink($('.copybutsave'),'agreefinish.html');
mytestlink($('.btnboxpayas button:nth-child(1)'),'personalcenter.html');
mytestlink($('.btnboxpayas button:nth-child(2)'),'index.html');
mytestlink($('#Withdrawals'),'mycomnum.html');
//判断意见反馈的意见内容不能为空，还有退货描述不能为空
function yangabc(y,n,v){
	y.click(function(){
	if(n.val()=="")
		{
		funcLayer("文本内容不能为空")
		}else{
			window.location.href=v
			}
	})
}
yangabc($('#returnbtn'),$('#areabox'),'agreefinish.html');
yangabc($('#advise'),$('#nullmod'),'advisesuccess.html');
yangabc($('#sendbtn'),$('#numphon'),'phonecode.html');
yangabc($('#saveset'),$('#Verification'),'phoneagree.html');
yangabc($('#getcom'),$('#getnumcom'),'mycomcode.html');
yangabc($('#vercode'),$('#getvercode'),'mycomagree.html');
//点击取消订单的按钮，出现弹窗确定取消订单吗，然后把取消订单和立即支付的按钮改为删除订单的按钮，都是动态的，当然再去点删除订单，此订单就没了。
//看淘宝上删除订单是就返回全部订单列表了，删除这个页面的同时返回上一个订单，
