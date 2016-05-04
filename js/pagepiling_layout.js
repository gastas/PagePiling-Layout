(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.pagePiling = {
    attach: function (context) {
      $(document).ready(function() {

        $('#pagepiling').pagepiling();

  	  });
    }
  };

})(jQuery, Drupal);
