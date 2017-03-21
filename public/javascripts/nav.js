/* DOM ready*/
            $(function(){
                alert("DOM ready");

				// Persistent navigation
                var navTop = $('#floatingbar').offset().top;
                console.log(navTop);

                //capture window scroll event
                $(window).scroll(function(){

                    if($(window).scrollTop() > navTop){
                        //add the floater cass to invoke the css for persistant scrolling
                        $('#floatingbar').addClass('floater');
                        $('footer a.top').fadeIn(200);

                }
                else{
                    //remove the class
                    $('#floatingbar').removeClass('floater');
                    $('footer a.top').fadeOut(200);
                }
                });

				//add additional necessary offset for Webkit


				/* click handler to animate scroll to top */
                $('footer a.top').click(function(event){
                    /* stop default anchor behavior */
                    event.preventDefault();
                    $('body').animate({scrollTop: 0}, 300);
    //                 $("html, body").animate({
    //     scrollTop: $("body").scrollTop() == 0 ? 300 : 0
    // }, "slow", "easeOutBounce");
    // return false;
                });


			});
			// end DOM ready
