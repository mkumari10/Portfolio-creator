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


   //Mobile men
   $('#mob_menu').on('click',function(e){
      // $('mob_menu').hide();
      // $('.menu').removeClass('d-none d-md-flex').addClass('d-flex');
      document.getElementById("mob_menu").classList.toggle("change");
      if($('#mob_menu').hasClass('change')){
         $('.menu').removeClass('d-none d-md-flex').addClass('d-flex');
      }else{
         $('.menu').removeClass('d-flex').addClass('d-none d-md-flex');
      }
   });

   //Close button
   $('#close').on('click',function(e){
       $('.menu').removeClass('d-flex').addClass('d-none d-md-flex');
   });
 
    //Hide edit button for editting
    $('#edit-profile').on('click',function(e){
          $('.profinfo').removeClass('d-none');
          $(this).hide();
    });


    $('#cancel').on('click',function(e){
          e.preventDefault();
          $('.profinfo').addClass('d-none');
          $("#edit-profile").show();
          $('.profile').val('');
    });
});
