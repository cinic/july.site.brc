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
		showTabs:function(){
			return A(this).bind('click', function(){
				$(this).siblings().removeClass('selected').end().next('dd').andSelf().addClass('selected');
				return false;
			})			
		}
	})
})(jQuery);


$(function(){
	$('#slides #sections').load('slides.htm', function() {
		$(this).carousel({loop:true,autoSlide:true,autoSlideInterval:6000,delayAutoSlide:6000,dispItems:1,effect:"fade",pagination:true});;
	});
	$('#header .cabinet').after('<fieldset class="cabinet-form"/>').siblings().load('cabinet.form.htm').showHide(".cabinet", "cabinet-form-active");
	$('#header .nearest-branch-title').after('<div/>').siblings().load('branches.htm').showHide(".nearest-branch-title","nearest-branch-active");
	$('#header #lang-select').after('<div/>').siblings().load('langs.htm').showHide("#active-lang", "active-lang-select");
	$('.tabs dt').showTabs();
});
