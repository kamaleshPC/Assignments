$(document).ready(function() {
        $.('.sec3_btn').magnificPopup({

             iframe: {
                  markup: '<div class="mfp-iframe-scaler">'+
                            '<div class="mfp-close"></div>'+
                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                  patterns: {
                    youtube: {
                      index: 'youtube.com/', 
                      id: 'v=', 
                      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                      index: 'http://maps.google.',
                      src: '%id%&output=embed'
                    }

                    

                  },

                  srcAction: 'iframe_src', 
                }
        });
    });