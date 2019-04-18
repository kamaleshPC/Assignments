$(document).ready(function() {
  // $('.image-link').magnificPopup({
  // type:'image'

  // });
   $('#owl-demo').magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});