$(document).ready(function(){
    
    let menu = document.getElementsByClassName('menu_content');
    let formarray = $('#form-contents').children('div:not(:first-child)');
    let progressbar = $("#menu2").find('ul li a');
    let subscribe = document.getElementsByClassName('pricecard');
    let Subscribebtn = document.getElementById('Subscribebtn');
    let planclosebtn = document.getElementsByClassName('planclosebtn');
    let popupedit = document.getElementsByClassName('popupedit');
    let editfrm = new Map([
      ['contedit','contactfrm'],
      ['objedit','objfrm'],
      ['skilledit','skillfrm'],
      ['eduedit','edufrm'],
      ['expedit','expfrm'],
      ['intedit','intfrm'],
      ['achedit','achfrm'],
      ['progedit','projfrm'],
      ['langedit','langfrm']
      ]);
    $(subscribe[0]).find('.bgstyle').css({'background-color':'#97be49','border-style':'none'});
    $(progressbar[0]).addClass("progbar");
    $(progressbar[0]).find('.fa-circle').addClass('progbar circle');
   
    let minus,slideindex=0,slidebar=0,rate=[],fetches=[],newform,countfield,pdiv;
    let contfield = document.getElementsByClassName('contfield');
    let edufield = document.getElementsByClassName('edufield');
    let expfield = document.getElementsByClassName('expfield');
    let projfield = document.getElementsByClassName('projfield');
    let objfield = document.getElementsByClassName('objfield');
    let skilllist = document.getElementsByClassName('skilllist');
    let langfield=document.getElementsByClassName('langfield');
    let skillcontainer = document.getElementsByClassName('skilllist');

    $('.form-group .form-control').blur(function(e){
     if($(this).val()!==""){
       $(this).siblings('.lb').removeClass('d-none');
       $(this).siblings('.fa-exclamation-circle').css("top","27px");
       $(this).siblings('.addbtn').css("top","20.5px");
     }else{
       $(this).siblings(".lb").addClass('d-none');
       $(this).siblings('.fa-exclamation-circle').css("top","10px");
     }
    });

    


    const validation = (forms)=>{
     if($(forms).attr('id')==="contactfrm"){
      for(var i = 0, l  = (contfield.length); i < l ;i++ ){
         removeErrorMessage(contfield[i]);
       }
       //Firstname validation
       if(!validName(contfield[0])){
          showErrorMessage(contfield[0]);
       }
       else{
          removeErrorMessage(contfield[0]);
       }

      //Lastname validation
       if(!validName(contfield[1])){
          showErrorMessage(contfield[1]);
       }
       else{
          removeErrorMessage(contfield[1]);
       }

       //Address validation
       // if(!validaddress(contfield[2])){
       //    showErrorMessage(contfield[2]);
       // }
       // else{
       //    removeErrorMessage(contfield[2]);
       // }

       //city validation
       if(!validName(contfield[4])){
          showErrorMessage(contfield[4]);
       }
       else{
          removeErrorMessage(contfield[4]);
       }

       //picncode validation
       if(!validNumber(contfield[6])){
          showErrorMessage(contfield[6]);
       }
       else{
          removeErrorMessage(contfield[6]);
       }

       //phoneno validation
       if(!validNumber(contfield[7])){
          showErrorMessage(contfield[7]);
       }
       else{
          removeErrorMessage(contfield[7]);
       }

       //Email id validation
       if(!validEmail(contfield[8])){
          showErrorMessage(contfield[8]);
       }
       else{
          removeErrorMessage(contfield[8]);
       }

       //URL validation
       if(!validEmail(contfield[9])){
          showErrorMessage(contfield[9]);
          return false;
       }
       else{
          removeErrorMessage(contfield[9]);
          return true;
       }
     }

     else if($(forms).attr('id')==="edufrm"){
     
      for(var i = 0, l  = (edufield.length); i < l ;i++ ){
         removeErrorMessage(edufield[i]);
       }

       //Firstname validation
       if(!validName(edufield[0])){
          showErrorMessage(edufield[0]);
       }
       else{
          removeErrorMessage(edufield[0]);
       }

       //field of study validation
       if(!validName(edufield[3])){
          showErrorMessage(edufield[3]);
       }
       else{
          removeErrorMessage(edufield[3]);
       }

       //percentage validation
       if(!validNumber(edufield[6])){
          showErrorMessage(edufield[6]);
       }
       else{
          removeErrorMessage(edufield[6]);
       }

      }


      else if($(forms).attr('id')==="expfrm"){
        for(var i = 0, l  = (expfield.length); i < l ;i++ ){
         removeErrorMessage(expfield[i]);
       }
       //Designation validation
       if(!validName(expfield[0])){
          showErrorMessage(expfield[0]);
       }
       else{
          removeErrorMessage(expfield[0]);
       }

       //Organization validation
       if(!validName(expfield[1])){
          showErrorMessage(expfield[1]);
       }
       else{
          removeErrorMessage(expfield[1]);
       }
      }

      else if($(forms).attr('id')==="projfrm"){
        for(var i = 0, l  = (projfield.length); i < l ;i++ ){
         removeErrorMessage(projfield[i]);
       }
       //Employement validation
       if(!validName(projfield[1])){
          showErrorMessage(projfield[1]);
       }
       else{
          removeErrorMessage(projfield[1]);
       }

       //CLient validation
       if(!validName(projfield[2])){
          showErrorMessage(projfield[2]);
       }
       else{
          removeErrorMessage(projfield[2]);
       }

       //URL validation
       if(!validEmail(projfield[3])){
          showErrorMessage(projfield[3]);
          return false;
       }
       else{
          removeErrorMessage(projfield[3]);
          return true;
       }
      }

      else if($(forms).attr('id')==="langfrm"){
       for(var i = 0, l  = (langfield.length); i < l ;i++ ){
         removeErrorMessage(langfield[i]);
       }
      }
    }

    let validName = (username)=>{
        if($(username).attr('id')==="city"){
          var valid = /^(?:[a-zA-Z ]+)?$/.test(username.value);
           if(!valid){
             setErrorMessage(username , "Invalid city Name");
             return false;
             }
           else
              return true; 
        }else{
           var valid = /^(?:[a-zA-Z ]+)?$/.test(username.value);
           if(!valid){
             setErrorMessage(username , "Invalid Name");
             return false;
             }
           else
              return true;  
          }  
    }

    let validNumber = (pin)=>{

        if($(pin).attr('id')==="phoneno")
          {
            var valid = /^(?:\d[0-9]{9,11})?$/.test(pin.value); 
            if(!valid){
             setErrorMessage(pin , "Invalid Phoneno");
             return false;
           }else
             return true; 
          }
        else if($(pin).attr('id')==="pin") 
          { 
            var valid = /^(?:\d[0-9]{5})?$/.test(pin.value); 
            if(!valid){
            setErrorMessage(pin , "Invalid PIN");
            return false;
             }else
            return true; 
          }
        else if($(pin).attr('id')==="percentage"){
          var valid = /^(?:^100(\.[0]{1,2})?|([0-9]|[1-9][0-9])(\.[0-9]{1,2})?$)?$/.test(pin.value); 
            if(!valid){
            setErrorMessage(pin , "Invalid percentage(upto 1 or 2 decimal digit)");
            return false;
             }else
            return true; 
        }   
    }

    let validEmail = (email)=>{
      if($(email).attr('id')==="emailid")
       { 
         var valid = /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})?$/.test(email.value);
         if(!valid){
             setErrorMessage(email , "Invalid Email");
             return false;
             }
           else
              return true;  
       }
      else
       {
        var valid = /^(?:(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?)?$/i.test(email.value);
        if(!valid){
             setErrorMessage(email , "Invalid Link");
             $('.addbtn');
             return false;
             }
           else
              return true;  
       }    
    }
    // let validaddress=(add)=>{
    //   var valid = /^(?:[\w\s.-]+\d+,\s*[\w\s.-]+)?$/.test(add.value);
    //   if(!valid){
    //          setErrorMessage(add , "Invalid Address");
    //          return false;
    //          }
    //        else
    //           return true; 
    // }



     function showErrorMessage(el){
           $(el).css("border-color","red");
           $(el).siblings('.fa-exclamation-circle').removeClass('d-none');
           var $el = $(el);
           var $errorContainer = $el.siblings('.error');
           if(!$errorContainer.length){
              $errorContainer = $('<span class="error"></span>').insertAfter($el);
           }
           $errorContainer.text($(el).data('errorMessage'));
         }


    function setErrorMessage(el , message){
          $(el).data('errorMessage' , message);
    }
  
    function removeErrorMessage(el){
      $(el).css("border","1px solid #ced4da");
      $(el).siblings('.fa-exclamation-circle').addClass('d-none');
      $(el).siblings('.error').remove();
    }
   

   $(document).on('change','input',function(e){
     validation(formarray[slideindex]);
    });


   function validateRequired(el){
      if(isRequired(el)){
          var valid = !isEmpty(el);
      if(!valid){
               setErrorMessage(el, 'Field is required');
                }
      return valid;
          }
      return true;
       }

    function isRequired(el){
      return ((typeof el.required === "boolean") && (el.required));
    }
    function isEmpty(el){
      return !el.value;
    } 
  


    let requiredfield = (forms)=>{
      var valid = {}
      var isValid;
      var isFormValid; 
      
     if($(forms).attr('id')==="contactfrm"){
       
      for(var i = 0, l  = (contfield.length); i < l ;i++ )
      { 
        var $errorContainer = $(contfield[i]).siblings('.error');
        if($errorContainer.length){
          $(forms).find('.nextbtn').style.pointerEvents="none";
          return;
        }
 
        isValid = validateRequired(contfield[i]);
        if(!isValid){
                $(contfield[i]).css("border-color","red");
                $(contfield[i]).siblings('.fa-exclamation-circle').removeClass('d-none');
        }else{
                $(contfield[i]).css("border","1px solid #ced4da");
                $(contfield[i]).siblings('.fa-exclamation-circle').addClass('d-none');
        }
        valid[contfield[i].id] = isValid;
      }

      for(var field in valid)
        {
          if(!valid[field]){
            isFormValid = false;
            break;
          }
          isFormValid = true;
        }
     if(!isFormValid){
          $(forms).find('.nextbtn').style.pointerEvents="none";
     } 
     }



    else if($(forms).attr('id')==="edufrm"){
     countfield=0,pdiv=7;
     for(var i = 0, l=(edufield.length); i < l ;i++ ){
        var valided = !isEmpty(edufield[i]);
        if(!valided){
          countfield++;
        }
      }   

    if(fetches.length===1 || (countfield<7)){  
      for(var i = 0, l  = (edufield.length); i < l ;i++ )
      { 


    var $errorContainer = $(edufield[i]).siblings('.error');
        if($errorContainer.length){
          $(forms).find('.nextbtn').style.pointerEvents="none";
          return;
    } 
        isValid = validateRequired(edufield[i]);
        if(!isValid){
                $(edufield[i]).css("border-color","red");
                $(edufield[i]).siblings('.fa-exclamation-circle').removeClass('d-none');
        }else{
                $(edufield[i]).css("border","1px solid #ced4da");
                $(edufield[i]).siblings('.fa-exclamation-circle').addClass('d-none');
        }
        valid[edufield[i].id] = isValid;
      }
      for(var field in valid)
        {
          if(!valid[field]){
            isFormValid = false;
            break;
          }
          isFormValid = true;
        }
     if(!isFormValid){
          $(forms).find('.nextbtn').style.pointerEvents="none";
     } 
    }


   }



    else if($(forms).attr('id')==="expfrm"){
     countfield=0,pdiv=6;
     for(var i = 0, l=(expfield.length); i < l ;i++ ){
        var valided = !isEmpty(expfield[i]);
        if(!valided){
          countfield++;
        }
      }  


    if(fetches.length===1 || (countfield<6)){ 
      for(var i = 0, l  = (expfield.length); i < l ;i++ )
      { 

        var $errorContainer = $(expfield[i]).siblings('.error');
        if($errorContainer.length){
          $(forms).find('.nextbtn').style.pointerEvents="none";
          return;
        }  
        isValid = validateRequired(expfield[i]);
        if(!isValid){
                $(expfield[i]).css("border-color","red");
                $(expfield[i]).siblings('.fa-exclamation-circle').removeClass('d-none');
        }else{
                $(expfield[i]).css("border","1px solid #ced4da");
                $(expfield[i]).siblings('.fa-exclamation-circle').addClass('d-none');
        }
        valid[expfield[i].id] = isValid;
      }
      for(var field in valid)
        {
          if(!valid[field]){
            isFormValid = false;
            break;
          }
          isFormValid = true;
        }
     if(!isFormValid){
          $(forms).find('.nextbtn').style.pointerEvents="none";
      } 
     }
    }



     else if($(forms).attr('id')==="projfrm"){
     countfield=0,pdiv=7;
     for(var i = 0, l=(projfield.length); i < l ;i++ ){
        var valided = !isEmpty(projfield[i]);
        if(!valided){
          countfield++;
        }
      } 



    if(fetches.length===1 || (countfield<7)){ 
      for(var i = 0, l  = (projfield.length); i < l ;i++ )
      { 

        var $errorContainer = $(projfield[i]).siblings('.error');
        if($errorContainer.length){
          $(forms).find('.nextbtn').style.pointerEvents="none";
          return;
        }
        isValid = validateRequired(projfield[i]);
        if(!isValid){
                $(projfield[i]).css("border-color","red");
                $(projfield[i]).siblings('.fa-exclamation-circle').removeClass('d-none');
        }else{
                $(projfield[i]).css("border","1px solid #ced4da");
                $(projfield[i]).siblings('.fa-exclamation-circle').addClass('d-none');
        }
        valid[projfield[i].id] = isValid;
      }
      for(var field in valid)
        {
          if(!valid[field]){
            isFormValid = false;
            break;
          }
          isFormValid = true;
        }
     if(!isFormValid){
          $(forms).find('.nextbtn').style.pointerEvents="none";
     } 
    }
    }

     else if($(forms).attr('id')==="objfrm"){
      for(var i = 0, l  = (objfield.length); i < l ;i++ )
      { 

       var $errorContainer = $(objfield[i]).siblings('.error');
        if($errorContainer.length){
          $(forms).find('.nextbtn').style.pointerEvents="none";
          return;
        }

       isValid = validateRequired(objfield[0]);
        if(!isValid){
                $(objfield[0]).css("border-color","red");
                $(objfield[0]).siblings('.fa-exclamation-circle').removeClass('d-none');
        }else{
                $(objfield[0]).css("border","1px solid #ced4da");
                $(objfield[0]).siblings('.fa-exclamation-circle').addClass('d-none');
        }
        valid[objfield[0].id] = isValid;

        for(var field in valid)
        {
          if(!valid[field]){
            isFormValid = false;
            break;
          }
          isFormValid = true;
        }
       if(!isFormValid){
          $(forms).find('.nextbtn').style.pointerEvents="none";
       } 
     }
   }

     else if($(forms).attr('id')==="langfrm"){
     countfield=0,pdiv=1;
     for(var i = 0, l=(langfield.length); i < l ;i++ ){
        var valided = !isEmpty(langfield[i]);
        if(!valided){
          countfield++;
        }
      }

    if(fetches.length===1 || (countfield<1)){ 
      for(var i = 0, l  = (langfield.length); i < l ;i++ )
      {
         var $errorContainer = $(langfield[i]).siblings('.error');
        if($errorContainer.length){
          $(forms).find('.nextbtn').style.pointerEvents="none";
          return;
        }


        isValid = validateRequired(langfield[i]);
        if(!isValid){
                $(langfield[i]).css("border-color","red");
                $(langfield[i]).siblings('.fa-exclamation-circle').removeClass('d-none');
        }else{
                $(langfield[i]).css("border","1px solid #ced4da");
                $(langfield[i]).siblings('.fa-exclamation-circle').addClass('d-none');
        }
        valid[langfield[i].id] = isValid;
      }
      for(var field in valid)
        {
          if(!valid[field]){
            isFormValid = false;
            break;
          }
          isFormValid = true;
        }
     if(!isFormValid){
          $(forms).find('.nextbtn').style.pointerEvents="none";
     } 
    }
    }


     // for(var field in valid)
     //    {
     //      if(!valid[field]){
     //        isFormValid = false;
     //        break;
     //      }
     //      isFormValid = true;
     //    }
     // if(!isFormValid){
     //      $(forms).find('.nextbtn').style.pointerEvents="none";
     // } 
    }




    for(let i=1;i<formarray.length;i++){
     $(formarray[i]).find('input,textarea').attr('disabled','disabled');
     $(formarray[i]).find('.nextbtn, .btnback').css('pointer-events','none');
    }


    let anchor = $(menu).find('a');
    let dashmenu = $('.dashmenu').find('li');
    $(menu[0]).children('div').addClass('bg-warning');
    $(anchor[0]).addClass('text-dark');
    $(dashmenu[0]).addClass('dmenu');

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


    // active dashboard menu list on click
     $(dashmenu).on('click',function(e){
      if($(dashmenu).hasClass('dmenu')){
        let store=$('.dmenu').children('a').attr('href');
        $(dashmenu).removeClass('dmenu');
        $(store).addClass('d-none');
      }
        if(!($(e.target).parents('li').hasClass('dmenu'))){
          $(e.target).parents('li').addClass('dmenu');
          let store=$(e.target).parents('li').find('a').attr('href');
          $(store).removeClass('d-none');
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

    //
    $('#cancel').on('click',function(e){
          e.preventDefault();
          $('.profinfo').addClass('d-none');
          $("#edit-profile").show();
          $('.profile').val('');
    });

    //Add links 
    $('.addbtn').on('click',function(e){
        let input = $(this).siblings('input[type="text"]').val();
        if(input && validation(formarray[slideindex])){
        var divs = '<label class="col-md-12 p-0 m-0 mt-1"><input type="text" name="Links" placeholder="Link" class="form-control">';
        $(this).parentsUntil('div').append(divs);
       } 
    });

    //Add skills on clicking plus icon in textarea
    $('.skilladded').on('click',function(e){
        let divs = $(this).siblings('.skillcontainer');
        let input = $(this).siblings('input[type="text"]').val();
        if(input){
        minus = `<div class="skilllist position-relative"><i class="fas fa-circle"></i><textarea type="text" name="sskill" class="form-control col-12 added" role="textbox" contenteditable disabled>${input}</textarea>
        <ul class="star">
          <li data-value="1" class="stars"><i class="fas fa-star"></i></li>
          <li data-value="2" class="stars"><i class="fas fa-star"></i></li>
          <li data-value="3" class="stars"><i class="fas fa-star"></i></li>
          <li data-value="4" class="stars"><i class="fas fa-star"></i></li>
          <li data-value="5" class="stars"><i class="fas fa-star"></i></li>
        </ul>  
        <i class="fas fa-trash-alt d-none "></i>
        <i class="fas fa-pen d-none"></i></div>`;
        $(divs).append(minus);
        $(divs).css('overflow-y','scroll');
        $(this).siblings('input[type="text"]').val('');
        if($(this).siblings('input[type=text]').attr('id')==="interest"  || $(this).siblings('input[type=text]').attr('id')==="achieve"){
          $(this).siblings('.skillcontainer').find('.star').addClass('d-none');
        }
      } 

    });

    //add skills on pressing enter button
    // $('#soft').on('keypress',function(e){
    //     var keycode = (e.keycode ? e.keycode : e.which);
    //     if(keycode == '13'){
    //        $('.skilladded').click();
    //     }
    //  });


   
    //Rating stars
    $(document).on('click','.fa-star',function(e){
        let stars = $(this).parents('ul').find('.fa-star');
        let i=($(this).parents('.skilllist').index());
        let r = $(this).parent('li').data('value');
        if($(this).css('color')==="rgb(169, 169, 169)")
          { 
            for(let k=0;k<r;k++)
               $(stars[k]).css('color',"#ffd700");
          }
        else
          { 
            for(let k=r;k<stars.length;k++)
               $(stars[k]).css('color',"rgb(169, 169, 169)");
          }
      rate[i]=r;  
    });


     //delete the information
    $(document).on('click','.fa-trash-alt',function(e){
       $(this).parent('div').remove();
    });

    //show icons on hover
    $(document).on('mouseover','.skilllist',function(e){
       $(this).children("i:not('.fa-circle,.fa-star')").removeClass('d-none');
    });

    //remove icons on hover
    $(document).on('mouseout','.skilllist',function(e){
       $(this).children("i:not('.fa-circle,.fa-star')").addClass('d-none');
    });
   
    //Enable editing
    $(document).on('click','.fa-pen',function(e){
      $(this).siblings('textarea').removeAttr('disabled').focus();
      // input[0].selectionStart  = input[0].selectionEnd = input.val().length;
    });

    $(document).on('focusout','.skilllist',function(e){
      $(this).children('textarea').attr('disabled',true);
      // input[0].selectionStart  = input[0].selectionEnd = input.val().length;
    });


   const slide = (slideindex)=>{
      if(slideindex >= formarray.length){
        $('#dash').removeClass('d-none');
        $('#dboard').removeClass('d-none');
        $('#manu-bar').addClass('d-none');
        // $('body').css('background-image','url("../images/Pattern-Randomized.svg")');
      }
      for(let i=0;i<formarray.length;i++){
        $(formarray[i]).addClass('d-none');
      } 
        $(formarray[slideindex]).removeClass('d-none');
        $(formarray[slideindex]).find('input,textarea').removeAttr('disabled','disabled');
        $(formarray[slideindex]).find('.nextbtn, .btnback').css('pointer-events','auto');
    }
 

    //Next button on form
    $('.nextbtn').on('click',function(e){
      e.preventDefault();
      fetches = $(formarray[slideindex]).find('.colldiv');
      requiredfield(formarray[slideindex]);
      slide(++slideindex);
      $(progressbar[slideindex]).addClass('progbar');
      $(progressbar[slideindex]).find('.fa-circle').addClass('progbar circle');
      $(progressbar[slidebar]).find('.track').addClass('circle');
      slidebar++;
    });

    //Back button on form
    $('.btnback').on('click',function(e){
      e.preventDefault();
      $(progressbar[slideindex]).removeClass('progbar');
      $(progressbar[slideindex]).find('.fa-circle').removeClass('progbar circle');
      slidebar--;
      $(progressbar[slidebar]).find('.track').removeClass('circle');
      slide(--slideindex);     
    });

    // Add Another education , Experience, Projext, Language
    $('.addinfo').on('click',function(e){
      let btnname,duplicate,coldiv,flag=1,parentdiv,vals;
      var t = e.target;
      fetches = $(t).parents('.forminfo1').find('.colldiv');
      duplicate = $(t).parents('.colldiv');
      fetches = $(formarray[slideindex]).find('.colldiv');
      parentdiv =$(duplicate).parents('.forminfo1');
      requiredfield(formarray[slideindex]);
      if(countfield===pdiv){
        alert("Fill it");
        return; 
      }

      vals = $(duplicate).children('button').text();
      newform = $(duplicate).clone(true);
      $(newform).find('input[type="text"],input[type="date"],textarea').val("");
      $(newform).find('input[type="checkbox"]').prop("checked",false);
      if($(duplicate).parents('.forminfo1').attr('id')==="edufrm"){
        btnname=$(duplicate).find('#degree').val();
        if(btnname==="")
        { 
          return;
        }
      }
      else if($(duplicate).parents('.forminfo1').attr('id')==="expfrm"){
        btnname=$(duplicate).find('#desig').val();
        if(btnname==="")
        { 
          return;
        }
      }
      else if($(duplicate).parents('.forminfo1').attr('id')==="projfrm"){
        btnname=$(duplicate).find('#projname').val();
        if(btnname==="")
        { 
          return;
        }
      }
      else if($(duplicate).parents('.forminfo1').attr('id')==="langfrm"){
        btnname=$(duplicate).find('#lang').val();
        if(btnname==="")
        { 
          return;
        }
      }

      for(let i=0;i<(fetches.length);i++){ 
       coldiv=$(fetches[i]).children('button').text();
       if(btnname.match(coldiv)){
          flag=0;
          break;
       }
      }
      

      if(flag){
       $(duplicate).children('button').text(btnname);
       $(duplicate).children('button').append('<i class="fas fa-plus expand"></i><i class="fas fa-minus d-none expand"></i>');
       $(duplicate).children('button').removeClass('d-none');
       $(duplicate).children('form').addClass('d-none');
       $(duplicate).find('.addinfo, .btnback, .nextbtn').addClass('d-none');
       $(parentdiv).children().first().append(newform);
      }
      else{
        alert("Already exits");
      }
    });  


    //Expand on clicking collapsible
    $('.collapsible').on('click',function(e){
      if($(this).children('.fa-minus').hasClass('d-none')){
        $(this).siblings('form').removeClass('d-none').css({
         "border": "1px solid #5f9ea0",
         "margin": "0px 4em",
         "border-radius": "0em 0em 2em 2em"
        });
        $(this).css({
          "background-color":"#5f9ea0",
          "color":"#f0f8ff"
        });
        $(this).find('.fa-plus').addClass('d-none');
        $(this).find('.fa-minus').removeClass('d-none');
        // $(this).parent('div').siblings('.colldiv').last().addClass('d-none');
      }
      else{
        $(this).css({
          "background-color":"white",
          "color":"black"
        });
        $(this).siblings('form').addClass('d-none');
        $(this).find('.fa-plus').removeClass('d-none');
        $(this).find('.fa-minus').addClass('d-none');
        // $(this).parent('div').siblings('.colldiv').last().removeClass('d-none');
      }  
    });

   //brower file opening function
    $('.upload-photo').on("click",function(e){
     e.preventDefault();
       $("#fileLoader").click();
    });

    //upload photo
    $('input[type="file"]').change(function(e){
       var fileName = URL.createObjectURL(event.target.files[0]);
       if(fileName){
             $(".upload-photo").find('img').attr('src',fileName);
            }
    });

    $(progressbar).on('click',function(e){
       let ids = $(this).attr('href').replace('#','');
       for(let i=0;i<formarray.length;i++){
       if($(formarray[i]).attr('id')===ids){
         $(formarray[i]).removeClass('d-none');
       }else{
       $(formarray[i]).addClass('d-none');
       }
      }
    });


    //Logout alertbox pop out
    $('.logout').on('click',function(e){
      e.preventDefault();
      $('#logoutfrm').removeClass('d-none');
      $('.container-fluid').children('div:not(:first-child)').css('opacity','0.3');
    });

    $('.confirmbtn').on('click',function(e){
      if($(this).text() === "Yes"){    
       window.location = $('.logout').attr('href');      
      }else{
        $('#logoutfrm').addClass('d-none');
        $('.container-fluid').children('div:not(:first-child)').css('opacity','1');
      }
    });


    // //Setting container
    // $('#setting').on('click',function(e){
    //   e.preventDefault();
    //   $('#setfrm').removeClass('d-none');
    //   $('.container-fluid').children('div:not(div #setfrm)').css('opacity','0.3');
    // });


    // //close button
    // $('#close').on('click',function(e){
    //     $('#setfrm').addClass('d-none');
    //     $('.container-fluid').children('div:not(div #setfrm)').css('opacity','1');
    // });

    $(objfield[0]).on('keyup',function(e){
      var words = $(this).val().split(/\s+/).length;
      $('.wordcount').text((541-words)+" words left");
      if(words>542){
        setErrorMessage(objfield[0],"No more than 540 words");
        showErrorMessage(objfield[0]);
      }else{
        removeErrorMessage(objfield[0]);
      }
    });

  $(document).on('keyup keypress','.added', function() {
    $(this).height(30);
    $(this).height(this.scrollHeight);
  });

  //show view button on hover
  $('.tempimg').on('mouseover',function(e){
    $(this).siblings('.view').removeClass('d-none');
    $(this).not('button').css('opacity','0.4');
  })
    
  //hide view button on hover  
  $('.tempimg').on('mouseout',function(e){
    $(this).siblings('.view').addClass('d-none');
     $(this).not('button').css('opacity','1');
  });

  $('.view').on('mouseover',function(e){
     $(this).removeClass('d-none');
     $('.tempimg').not('button').css('opacity','0.4');
  });

  //Subscription button functioning
  $(Subscribebtn).on('click',function(e){
     $('.subpopup').removeClass('d-none');
     $('.container-fluid').children('div:not(".subpopup")').css('opacity','0.3');
  });

  //close subscription plan card
  $(planclosebtn).on('click',function(e){
    $(this).parents('.subpopup').addClass('d-none');
    $('.container-fluid').children('div:not(".subpopup")').css('opacity','1');
  });

  //open form for edit
  $(popupedit).on('click',function(e){
    let prntdiv = $(this).parents('.enteredinfo').attr('id');
    editfrm.forEach((values,keys)=>{
       if(keys===prntdiv){
         let cl = $(`#${values}`).children().first().clone(true);
         $(cl).find('.nextbtn,.btnback').remove();
         $(cl).addClass('contduplicate');
         $(cl).children('h3').append('<span class="position-absolute editclose" style="right: 21px;top: 0px; cursor:pointer"><i class="fas fa-times-circle"></i></span>');
         $(cl).find('input,textarea').attr('disabled',false);
         $(cl).find('.detailsave').parent('div').addClass('col-8');
         var $errorContainer = $(this).siblings('.contduplicate');
         if(!$errorContainer.length){
              $errorContainer = $(this).parentsUntil('div').append(cl);
         }else{
           console.log($(this).parents('.contduplicate'));
           $(this).siblings('.contduplicate').removeClass('d-none');
         }
       }
    });

   //Edit close button
   $(document).on('click','.editclose',function(e){
     $(this).parents('.contduplicate').addClass('d-none');
   })

    
  });
});
