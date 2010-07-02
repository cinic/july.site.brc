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
$(function(){
	$('#slides #sections').load('slides.htm', function() {
		$(this).carousel({loop:true,autoSlide:true,autoSlideInterval:6000,delayAutoSlide:6000,dispItems:1,effect:"fade",pagination:true});;
	});
	$('#header .cabinet').after('<fieldset class="cabinet-form"/>').siblings().load('cabinet.form.htm');
	$('#header .cabinet').showCabinetForm();
	$('#header .nearest-branch-title').after('<div/>').siblings().load('branches.htm');
});
