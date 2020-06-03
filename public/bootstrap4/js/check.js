$(function(){
	$.fn.extend({
		check: function() {
			return this.each(function() {
				this.checked = true;
			});
		},
		uncheck: function() {
			return this.each(function() {
				this.checked = false;
			});
		},
		formcheck: function(){
			var form = this.parents('form');
			// 必填项
			form.find('[required]').each(function(i,e){
				if ($(e).val() == '') {
					console.log('请输入必填项');
					$(e).addClass('is-invalid').focus();
					return false;
				}
			})




			// console.log(form)
		}
	});
});