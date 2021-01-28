$(document).ready(function(){
	let menu = document.getElementsByClassName('menu_content');
    

    let anchor = $(menu).find('a');
    $(menu[0]).children('div').addClass('bg-warning');
    $(anchor[0]).addClass('text-dark');

    // active menu list on click
    $(anchor).on('click',function(e){
    	if($(menu).children('div').hasClass('bg-warning')){
    		$(menu).children('div').removeClass('bg-warning');
    		$(menu).find('a').removeClass('text-dark');
    	}
        if(!($(e.target).parent('div').hasClass('bg-warning'))){
        	$(e.target).parent('div').addClass('bg-warning');
        	$(e.target).addClass('text-dark');
        }
    });

});