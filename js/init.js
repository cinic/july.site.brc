document.documentElement.id = "js";
(function(A){
	A.fn.extend({
		showCabinetForm:function(){
			return this.each(function(){
				var B=A(this);
				var C=true;
				A(".cabinet").bind("click focus",function(E){
					E.preventDefault();
					if(!C){return }
					C=false;
					setTimeout(function(){C=true},500);
					var D=A(this);
					D.parent().toggleClass("cabinet-form-active");
				});
				B.parent().mouseup(function(){return false});
				A(document).mouseup(function(D){
					if(A(D.target).parent("a.cabinet").length==0){
						A(".cabinet").parent().removeClass("cabinet-form-active");
					}
				})
			})
		}
	})
})(jQuery);
(function(B){
	B.fn.extend({
		showBranches:function(){
			return this.each(function(){
				var C=B(this);
				var D=true;
				B(".nearest-branch-title").bind("click focus",function(F){
					F.preventDefault();
					if(!D){return }
					D=false;
					setTimeout(function(){D=true},500);
					var E=B(this);
					E.parent().toggleClass("nearest-branch-active");
				});
				C.parent().mouseup(function(){return false});
				B(document).mouseup(function(E){
					if(B(E.target).parent(".nearest-branch-title").length==0){
						B(".nearest-branch-title").parent().removeClass("nearest-branch-active");
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
	$('#header .cabinet').after('<fieldset class="cabinet-form"/>').siblings().load('cabinet.form.htm').showCabinetForm();
	$('#header .nearest-branch-title').after('<div/>').siblings().load('branches.htm').showBranches();
	
	$('.tabs dt').showTabs();
});
