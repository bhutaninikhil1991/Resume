/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------
 ====================================*/



'use strict';


$(window).on('load', function() {
  /*------------------
  	Preloder
  --------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");

});


(function($) {

  $("ul#myList").css("column-count", 2);

  /*------------------
  	Background set
  --------------------*/
  $('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });


  $('.review-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true
  });



  $('.progress-bar-style').each(function() {
    var progress = $(this).data("progress");
    var prog_width = progress + '%';
    if (progress <= 100) {
      $(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
    } else {
      $(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
    }
  });


  $('.lan-prog').each(function() {
    var progress = $(this).data("lanprogesss");
    var ele = '<span></span>';
    var ele_fade = '<span class="fade-ele"></span>';

    for (var i = 1; i <= 5; i++) {
      if (i <= progress) {
        $(this).append(ele);
      } else {
        $(this).append(ele_fade);
      }
    }
  });

  function hideCloudPlatformTitle(provider) {

    $(`.${provider}-border-div`).css({
      "display": "inline-block",
      "width": "100%",
      "border-style": "solid",
      "border-width": "0px 0px 0px 0px"
    })
    $(`.${provider}.arrow2.right2`).show();
    $(`.${provider}.arrow2.down2`).hide();
    $(`.${provider}-toggle.0`).show();
    $(`.${provider}-toggle.1`).hide();
    $(`.${provider}-ul`).hide();
    $(`.${provider}-toggle`).data('toggle', 0);
  }

  function showCloudPlatformTitle(provider) {

    $(`.${provider}-border-div`).css({
      "display": "inline-block",
      "width": "100%",
      "border-color": "blue",
      "border-style": "solid",
      "border-width": "0px 3px 0px 3px"
    })
    $(`.${provider}.arrow2.right2`).hide();
    $(`.${provider}.arrow2.down2`).show();
    $(`.${provider}-toggle.0`).hide();
    $(`.${provider}-toggle.1`).show();
    $(`.${provider}-ul`).show();
    $(`.${provider}-toggle`).data('toggle', 1);
  }

  var onFrontendTitleClick = function() {
    $(document).on('click', '#javascript-toggle-main, #css-toggle-main', function(event) {
      event.preventDefault();
      const providers = ['javascript']
      const provider = $(this).attr('id').split("-")[0];
      const toggle = parseInt($(`.${provider}-toggle`).data('toggle'));
      const hideProviders = providers.filter(i => i != provider)
      hideProviders.forEach(i => hideCloudPlatformTitle(i));
      if (toggle) {
        hideCloudPlatformTitle(provider);
      } else {
        showCloudPlatformTitle(provider)
      }
    });
  };
  onFrontendTitleClick();

  var onBackendTitleClick = function() {
    $(document).on('click', '#dotnet-toggle-main, #framework-toggle-main', function(event) {
      event.preventDefault();
      const providers = ['dotnet, framework']
      const provider = $(this).attr('id').split("-")[0];
      const toggle = parseInt($(`.${provider}-toggle`).data('toggle'));
      const hideProviders = providers.filter(i => i != provider)
      hideProviders.forEach(i => hideCloudPlatformTitle(i));
      if (toggle) {
        hideCloudPlatformTitle(provider);
      } else {
        showCloudPlatformTitle(provider)
      }
    });
  };
  onBackendTitleClick();


  var onOtherTitleClick = function() {
    $(document).on('click', `#vizualization-toggle-main,
											#testing-toggle-main,
											#version-toggle-main,
                      #integration-toggle-main
											`, function(event) {
      event.preventDefault();
      var otherArr = ['vizualization', 'testing', 'version', 'integration']
      const tool = $(this).attr('id').split("-")[0];
      const toggle = parseInt($(`.${tool}-toggle`).data('toggle'));
      const hideTools = otherArr.filter(i => i != tool)
      hideTools.forEach(i => hideCloudPlatformTitle(i));
      if (toggle) {
        hideCloudPlatformTitle(tool);
      } else {
        showCloudPlatformTitle(tool)
      }
    });
  };
  onOtherTitleClick();


  /*------------------
  	Popup
  --------------------*/
  $('.portfolio-item .port-pic').magnificPopup({
    type: 'image',
    mainClass: 'img-popup-warp',
    removalDelay: 500,
  });




  if ($().circleProgress) {

    //Set progress circle 1
    $("#progress1").circleProgress({
      value: 0.90,
      size: 175,
      thickness: 2,
      fill: "#40424a",
      emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 2
    $("#progress2").circleProgress({
      value: 0.90,
      size: 175,
      thickness: 2,
      fill: "#40424a",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle white
    $("#progress3").circleProgress({
      value: 0.85,
      size: 175,
      thickness: 2,
      fill: "#40424a",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle white
    $("#progress4").circleProgress({
      value: 0.80,
      size: 175,
      thickness: 2,
      fill: "#40424a",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress5").circleProgress({
      value: 0.75,
      size: 175,
      thickness: 2,
      fill: "#009fff",
      emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress6").circleProgress({
      value: 0.83,
      size: 175,
      thickness: 2,
      fill: "#009fff",
      emptyFill: "rgba(0, 0, 0, 0)"
    });
  }

})(jQuery);
