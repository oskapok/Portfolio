jQuery(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
        
        sheight=this.firstChild.naturalHeight;
        
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
		   	
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
            $( "body" ).addClass( "noScroll" );
            width = window.innerWidth - 50;
            height =window.innerHeight - 30;
            document.querySelector('#lightbox img').style.maxWidth = width+'px';
            document.querySelector('#lightbox img').style.maxHeight = height+'px';
            sheight = document.querySelector('#lightbox img').clientHeight;
            sheight = document.querySelector('#lightbox img').style.marginTop = ((height+30)/2)-(sheight/2)+'px';
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
            
			$('body').append(lightbox);
            $( "body" ).addClass( "noScroll" );
         

            width = window.innerWidth - 50;
            height =window.innerHeight - 30;
            
            document.querySelector('#lightbox img').style.maxWidth = width+'px';
            document.querySelector('#lightbox img').style.maxHeight = height+'px';            
           if(sheight<height)
               sheight = document.querySelector('#lightbox img').style.marginTop = ((height+30)/2)-(sheight/2)+'px';
            else
                {
                 sheight=height;
                  sheight = document.querySelector('#lightbox img').style.marginTop = ((height+30)/2)-(sheight/2)+'px';  
                }
            
		}
        
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
    $( "body" ).removeClass( "noScroll" );   
		$('#lightbox').hide();
	});

});