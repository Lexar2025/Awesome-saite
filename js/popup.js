$(document).ready(()=>{
    $('.portfolio-item').on('click', (e) =>{
        e.stopPropagation();
        createPopup(e.currentTarget);
    });

    $('.control-item').on('click', (e) => 
    {
    e.stopPropagation();
    slideTestimonials(e.currentTarget);
    });
});

function createPopup(item)
{
    console.log(item);

    const clicked = $(item);
    const src = clicked.data('src');
    const container=$('<div>', {'class':'popup-container'});
    const img = $('<img>', {'class':'popup','src': src});

    container.append(img);

    $('body').append(container);
    setTimeout(() =>{container.addClass('ready');});

    img.on('click', () => 
        {
            container.removeClass('ready');
            setTimeout(() => {container.remove();}, 250);
        });
}

function slideTestimonials(item)
{
    const clicked = $(item);
    if(clicked.hasClass('active'))
        {return;}
        const index = $('.control-item').index(clicked);
        console.log(index);
        const width = $('.testimonials-card').outerWidth(true);
        const scroll = width * 2 * index;
        $('.testimonials-inner').css('transform', 'translateX(-'+ scroll +'px)');
        $('.control-item').removeClass('active');
        $('.control-item').eq(index).addClass('active');
}
// ожидаем загрузку страницы  
$(document).ready(() => {  
    // проходим циклом по каждому элементу с классом .countup  
    $('.countup').each(function() {  
        // передаем переменной текущий элемент  
        const that = $(this),  
              countTo = that.attr('data-end');  

        // создаем объект jQuery функция animate()  
        // которой передаем параметры  
        // в первом параметре:  
        // countNum - значение, на котором будет остановка счетчика  

        $({ countNum: 0 }).animate({  
            countNum: countTo  
        },  
        // второй параметр: объект со значениями  
        // 1. длительность анимации,  
        // 2. плавность анимации,  
        // 3. функция, что должно выполняться на каждом шаге  
        // 4. функция, что должно выполняться при завершении  

        {  
            duration: 8000,  
            easing: 'linear',  
            step: function() {  
                that.text(Math.floor(this.countNum));  
            },  
            complete: function() {  
                that.text(this.countNum);  
            }  
        });  
    });  
});