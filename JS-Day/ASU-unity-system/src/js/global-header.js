jQuery(document).ready(function ($) {
  'use strict';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#asu-header').addClass('scrolled');
    } else {
      $('#asu-header').removeClass('scrolled');
    }
  });

  // Add a class of .scrolled as the window moves beyond the top of the screen.
  // Retrigger the dropdown max-height calculation when this occurs.
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#asu-header').addClass('scrolled');
    } else {
      $('#asu-header').removeClass('scrolled');
    }
  });

  // Adjusts the height of the top container once the search bar receives and loses the focus.
  $('#header-top input[type="search"]').focusin(function () {
    $('#header-top').css({ height: 48 });
    $('#wrapper-header-top').css({ height: 48 });
  });

  $('#header-top input[type="search"]').focusout(function () {
    $('#header-top').css({ height: '' });
    $('#wrapper-header-top').css({ height: '' });
  });

  // Scrolled top header upon dropdown menu initiation.
  $('#menubar').on('show.bs.collapse', function () {
    $('#asu-header').addClass('scrolled');
  });

  /*  Calculate height of the mobile header.
   *
   *  topPadding = 16px. Scrolled class added upon dropdown initiation.
   *  navbarBrand = 48px. Height of ASU Logo in mobile view, including padding. Static value.
   *  navbarTitle = Either 16px (one line) or 32px (two lines) + 16px bottom padding
   */
  function mobileHeaderHeight() {
    var topPadding = 16;
    var navbarBrand = $('.navbar-brand').height();
    var navbarTitle = $('nav.navbar .title').height() + 16;
    return topPadding + navbarBrand + navbarTitle;
  }

  function pinBottomMenu() {
    var viewport = $(window).height();
    var menuTall = $('#menubar.show').height();
    var headerTall = mobileHeaderHeight();
    var pinnedTall = $('.navbar-mobile-footer').height();
    var maxTall = viewport - headerTall - pinnedTall;

    // Does the height of the dropdown require the form to be pinned to the bottom of the window?
    if (viewport >= menuTall + headerTall) {
      $('#menubar').css({ maxHeight: '' });
      $('.navbar-mobile-footer').removeClass('pinned');
      $('.navbar-mobile-footer').removeClass('shadow');
      restoreTopValue();
    } else {
      $('#menubar').css({ maxHeight: maxTall });
      $('.navbar-mobile-footer').addClass('pinned');
      $('.navbar-mobile-footer').addClass('shadow');
      recordTopValue();
    }
  }

  function resetCalcValues() {
    $('#menubar').css({ maxHeight: '' });
    $('.navbar-mobile-footer').removeClass('pinned');
    $('.navbar-mobile-footer').removeClass('shadow');
  }

  var topValue = $(document).scrollTop();

  function recordTopValue() {
    topValue = $(document).scrollTop();
    $('#asu-header').closest('body').addClass('dropdown-pinned');
  }

  function restoreTopValue() {
    $('#asu-header').closest('body').removeClass('dropdown-pinned');
    topValue = $(document).scrollTop(topValue);
  }

  // Does the initial menu expansion require the bottom menu to be pinned?
  $('#menubar').on('shown.bs.collapse', function () {
    pinBottomMenu();
  });

  // Once the menu contracts, kill off the max height for the menubar.
  $('#menubar').on('hidden.bs.collapse', function () {
    resetCalcValues();
    restoreTopValue();
  });

  // Does an internal menu dropdown expansion require the bottom menu to be pinned?
  // Only trigger the recalculation if the bottom menu is NOT already pinned.
  $('#menubar .dropdown').on('shown.bs.dropdown', function () {
    if ($('.navbar-mobile-footer').hasClass('pinned') == false) {
      resetCalcValues();
      pinBottomMenu();
    }
  });

  // Does any internal menu dropdown contraction require the bottom menu to be pinned?
  $('#menubar .dropdown').on('hidden.bs.dropdown', function () {
    resetCalcValues();
    pinBottomMenu();
  });

  // Has the menubar scroll reached the bottom of the container? Remove the shadow if so.
  $('#menubar').on('scroll', function () {
    if (
      $('#menubar.show').prop('offsetHeight') +
        $('#menubar.show').prop('scrollTop') ===
      $('#menubar.show').prop('scrollHeight')
    ) {
      // the menu is at the end of its scroll
      $('.navbar-mobile-footer').removeClass('shadow');
    } else {
      $('.navbar-mobile-footer').addClass('shadow');
    }
  });

  // Figure stuff out again if the window resizes.
  $(window).resize(function () {
    // Only calculate new values if the menubar is open.
    if ($('.navbar-toggler').hasClass('collapsed')) {
      // Menu is closed. No need for further action.
    } else {
      topValue = $(document).scrollTop();
      $('body').removeClass('dropdown-pinned');
      resetCalcValues();
      pinBottomMenu();
    }
  });
});
