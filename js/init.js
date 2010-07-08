document.documentElement.id = "js";
(function(A){
	A.fn.extend({
		showHide:function(elementClass, className){
			return this.each(function(){
				if(!elementClass || !className) {return }
				var B=A(this);
				var C=true;
				A(elementClass.toString()).bind("click focus",function(E){
					E.preventDefault();
					if(!C){return }
					C=false;
					setTimeout(function(){C=true},500);
					var D=A(this);
					D.parent().toggleClass(className.toString());
				});
				B.parent().mouseup(function(){return false});
				A(document).mouseup(function(D){
					if(A(D.target).parent(elementClass.toString()).length==0){
						A(elementClass.toString()).parent().removeClass(className.toString());
					}
				})
			})
		}
	})
})(jQuery);

(function(A){
	A.fn.extend	({
		showTabs:function(elementClass){
			return A(this).bind('click', function(){
				$(this).siblings().removeClass(elementClass).end().next('dd').andSelf().addClass(elementClass);
				return false;
			})			
		}
	})
})(jQuery);


$(function(){
	$('#b12 div').load('slides.htm', function() {
		$(this).carousel({loop:true,autoSlide:true,autoSlideInterval:6000,delayAutoSlide:6000,dispItems:1,effect:"fade",pagination:true});;
	});
	$('#h .h35').showHide("#h .h35 a", "a");
	$('#h .h32').showHide("#h .h32 a","a");
	$('#h .h31').showHide("#h .h31 > :first-child", "a");
	$('#b1 .t dt').showTabs('sel');
});
