$(document).ready(function () {
  /* HEADROOM INIT */
  var myElement = document.querySelector('nav')
  var headroom = new Headroom(myElement)
  headroom.init()
  /* HEADROOM INIT */

  /* ANIMSITION INIT */
  $('.animsition').animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-up-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', // animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function (url) { window.location.href = url; }
  })
/* ANIMSITION INIT */
})

/* SMOOTH ANCHOR SCROLLING */
$(function () {
  // Parse int to turn "120px" into 120 integer.
  // -3 to make it scroll past the sticky navigation
  // var navHeight = parseInt($('nav').css('height'), 10) - 3
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html,body').animate({
          // Including the height of the fixed nav
          scrollTop: (target.offset().top)
        }, 500)
        return false
      }
    }
  })
})
/* SMOOTH ANCHOR SCROLLING */
