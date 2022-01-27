/*----------Change symbol----------*/
let arrowLanguage=document.getElementById('language_checkbox');
let drop_arrow=document.getElementById('drop_arrow');

function arrowChange(){
    if(arrowLanguage.checked === true){
        drop_arrow.innerHTML='▲';
    }
    else{
        drop_arrow.innerHTML='▼';
    }
}
/*----------Change symbol----------*/
/*----------Change language----------*/
let en = document.getElementById('en');
let ua = document.getElementById('ua');
let ru = document.getElementById('ru');


let sSopCw = document.getElementById('s_s_o_o_c_w');

function changeLanguage(){
    let en_language = document.getElementById('en_language');
    let ua_language = document.getElementById('ua_language');
    let ru_language = document.getElementById('ru_language');
    let actual = document.getElementById('language_actual');

    if (ua.checked === true){
        actual.innerHTML=ua_language.innerHTML;
        ua.checked = false;
        language(ukrainianText);
        sSopCw.style.maxWidth = '500px'
    } else if (ru.checked === true){
        actual.innerHTML=ru_language.innerHTML;
        ru.checked = false;
        language(russianText);
        sSopCw.style.maxWidth = '600px';

    } else if (en.checked === true){
        actual.innerHTML=en_language.innerHTML;
        en.checked = false;
        language(englishText)
    }
}
let englishText =['The Spirit of Digital Agency.', 'More About us', 'Get in Touch.', 
'See some of our Creative work.', 'See More of These.', 
'Your email', 'Subject', 'Message here...', 'Send Message',
'Home.', 'About us.', 'Portfolio.', 'Blog.', 'Contact us.', 
'© 2019 - Doob,All Right Reserved'];
let ukrainianText =['Дух Цифрових Агенств.', 'Більше Про нас', 'Зв\'язатись.', 
'Подивіться деякі з наших Творчих робіт.', 'Переглянути більше.', 
'Ваш e-mail', 'Тема', 'Ваше повідомлення...', 'Надіслати повідомлення',
'Головна.', 'Про нас.', 'Портфоліо.', 'Блог.', 'Зв\'язок.',
 '© 2019 - Doob, Всі Права Захищені'];
let russianText =['Дух Цифровых Агентств.', 'Больше О нас', 'Связаться.', 
'Посмотрите некоторые из наших Творческих работ.', 'Узнать больше.', 
'Ваш e-mail', 'Тема', 'Ваше сообщение...', 'Отправить сообщение',
'Главная.', 'О нас.', 'Портфолио.', 'Блог.', 'Связь.', 
'© 2019 - Doob, Все Права Защищены'];

function language(array){
    let tSoDA = document.getElementById('t_s_o_d_a'), 
    bB = document.getElementById('button_button'),
    touch = document.getElementById('touch');

    tSoDA.innerHTML = array[0];
    bB.innerHTML = array[1]; 
    touch.innerHTML  = array[2];

    let moreOfThere = document.getElementById('more_of_there');
    
    sSopCw.innerHTML = array[3];
    moreOfThere.innerHTML =array[4];

    let contactContactUs = document.getElementById('contact_contact_us'),
    contactTouch = document.getElementById('contact_touch'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    bBC = document.getElementById('button_button_contact');

    contactContactUs.innerHTML = array[13].toUpperCase();
    contactTouch.innerHTML = touch.innerHTML;
    email.placeholder = array[5];
    subject.placeholder = array[6];
    message.placeholder = array[7];
    bBC.innerHTML = array[8];

    let allR =document.getElementById('doob_all_r');
    allR.innerHTML = array[14];

    let home = document.getElementById('header_home'),
    aboutUs = document.getElementById('header_about_us'),
    portfolio = document.getElementById('header_portfolio'),
    blog = document.getElementById('header_blog'),
    contactUs = document.getElementById('header_contact_us');
    let footerHome = document.getElementById('footer_home'),
    footerAboutUs = document.getElementById('footer_about_us'),
    footerPortfolio = document.getElementById('footer_portfolio'),
    footerBlog = document.getElementById('footer_blog'),
    footerContactUs = document.getElementById('footer_contact_us');

    let contactUsButton = document.getElementById('contact_us_button');

    home.innerHTML = array[9];
    footerHome.innerHTML = home.innerHTML;
    aboutUs.innerHTML = array[10];
    footerAboutUs.innerHTML =  aboutUs.innerHTML;
    portfolio.innerHTML = array[11];
    footerPortfolio.innerHTML = portfolio.innerHTML;
    blog.innerHTML = array[12];
    footerBlog.innerHTML = blog.innerHTML;
    contactUs.innerHTML = array[13];
    footerContactUs.innerHTML = contactUs.innerHTML;

    contactUsButton.innerHTML = contactUs.innerHTML


}

/*----------Change language----------*/



/*----------Slider----------*/
let slides = document.getElementsByClassName('item');
let dots = document.getElementsByClassName('slider-dots_item');
let slideIndex=1;
let iterration = true;
let pause = false;
let bool;
let animation = setInterval(function(){
    if(pause==false){
        if(slideIndex === 2){
            slideIndex--;
            iterration===true
        }
        if(iterration===true){
            slides[slideIndex - 1].style.display = 'none';
            dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(' '+'active', '');
            slides[slideIndex].style.display = 'flex';
            dots[slideIndex].className += ' '+'active';
        } else if(iterration===false){
            slides[slideIndex - 1].style.display = 'flex';
            dots[slideIndex - 1].className += ' '+'active';
            slides[slideIndex].style.display = 'none';
            dots[slideIndex].className = dots[slideIndex].className.replace(' '+'active', '');
        } 
    }
    iterration = !iterration;
}, 6000);

showSlides(slideIndex);

function currentSlide(n) {
    pause = true;
    setTimeout(function(){
        pause = false;
    }, 8000)
    showSlides(slideIndex = n);
    setTimeout(function(){
        dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(' '+'active', '');
        dots[slideIndex].className = dots[slideIndex].className.replace(' '+'active', '');
    }, 14000)
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' '+'active', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex-1].className += ' '+'active';
}
/*----------Slider----------*/
/*
*/