(function( $ ){
    $.fn.slider = function() {
     
     var elements = {
         container: this,
         items: this.find('li'),
         countOfItems: this.find('li').length
     };

     var params = {
        widthOfWrapper: elements.items.css('width')
     }

     var current = 0;

     function slide () {
        console.log(params.widthOfWrapper)
     }

     function chengeCurrent (newCurrent ) {

        if(current === newCurrent || (current  === 0 && newCurrent < 0) || (current  === elements.countOfItems && newCurrent === elements.countOfItems + 1)) {
            return false
        } else{
            console.log(newCurrent)
            slide()
            return current = newCurrent
        }
     }


     function createBtn () {

         var btn = {
             prev: $('<button class="s-btn s-btn_prev">prev</button>'),
             next: $('<button class="s-btn s-btn_next">next</button>')
         }

         btn.prev.on('click', function(){
            chengeCurrent(current - 1)
         });

         btn.next.on('click', function(){
            chengeCurrent(current + 1)
         });

         elements.container
            .append(btn.prev)
            .append(btn.next)
     }


     function init () {

        var elem = $('<div class="s-wrap"><div class="s-container"></div></div>');

        elements.items.each(function(i, el){
            var background = $(el).find('img').attr('src');
            $(el).css('background-image', 'url(' + background + ')')
        })

        createBtn();
        elem.appendTo(elements.container);
        elements.items.appendTo('.s-container');
    }
   
     init();

     console.log(elements.items)

    };
  })( jQuery );