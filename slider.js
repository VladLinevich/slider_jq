(function( $ ){
    $.fn.slider = function() {
     
     var elements = {
         container: this,
         items: this.find('li'),
         countOfItems: this.find('li').length,
     };

     var pagination = {
         
        wrap: $('<div>', {
            class: 's-pagination'
        }),
        
        item: $('<span>', {
            class:'s-pagination__item'
        })
     }

     var methods = {

        

     }

     var params = {
        widthOfWrapper: Number.parseInt(elements.items.css('width')),
        heightOfWrapper: Number.parseInt(elements.container.css('height'))
     }

     var current = 0;

     function slide (numberOfslide, cb) {

        console.log(numberOfslide)

        $('.s-container').css({
            transform: 'translateX(-' + params.widthOfWrapper * numberOfslide + 'px)'
        })

        !cb ? false : cb();

     }

     function changeCurrent (newCurrent , cb) {
         
        if(current === newCurrent || (current  === 0 && newCurrent < 0) || (current  === elements.countOfItems - 1 && newCurrent === elements.countOfItems)) {
            return false
        } else{
            current = newCurrent
            slide(newCurrent , cb);
        }
     }

     function createPagination () {

        for(i=0; i < elements.countOfItems; i++){
            var elem = pagination.item.text(i + 1)
            elem.clone().appendTo(pagination.wrap)
        }

        pagination.wrap.appendTo(elements.container)

        $('.s-pagination__item').on('click', function(event){
            changeCurrent($(this).index());
        })
     }

     function createBtn () {

         var btn = {
            prev: $('<button class="s-btn s-btn_prev">prev</button>'),
            next: $('<button class="s-btn s-btn_next">next</button>')
         };

         btn.prev.on('click', function(){
            changeCurrent(current - 1)
         });

         btn.next.on('click', function(){
            changeCurrent(current + 1)
         });

         elements.container
            .append(btn.prev)
            .append(btn.next)
     }

     function init () {

        var elem = $('<div class="s-wrap"><div class="s-container"></div></div>');

        elements.items.each(function(i, el){
            var background = $(el).find('img').attr('src');
            $(el).css({
                backgroundImage: 'url(' + background + ')',
                width: params.widthOfWrapper + 'px',
                height: params.heightOfWrapper + 'px',   
            })
        })

        elem.appendTo(elements.container);
        elements.items.appendTo('.s-container');

        $('.s-container').width(elements.countOfItems * params.widthOfWrapper);
        createBtn();
        createPagination();

    }
   
     init();

     console.log(elements.items)

    };
  })( jQuery );