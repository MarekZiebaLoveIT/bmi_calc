'use strict'

// zmienna dla wyniku po przesunięciu suwaków
const res = document.querySelector('#wynik');

// zmienna dla diva na którym ma się pojawić wynik skopiowany z poprzedniej strony
const divRes = document.querySelector('.bmiRes');

// zmienna dla drugiego (obracającego się) przycisku
const btn = document.querySelector('#indicators');

// zmienna dla obrazka rozety z zakresem BMI
const bmiClock = document.querySelector('.bmiClock');

// zmienna dla sekcji z suwakami
const choice = document.querySelector('#choose');

// zmienna dla diva w którym ma się pojawiać opis adekwatnie do wyniku BMI
const result = document.querySelector('.result');

// zmienna dla przycisku resetującego
const resetBtn = document.querySelector('.resetBtn');




////////////////////////////////////////////////////////////////////


// zdarzenie do przesuwania ekranu bez ruszania suwaków
window.onscroll = function() {
    showClock();
};

function showClock () {
    if(res.value === '') {
        bmiClock.style.display = 'block';   // pokazanie tarczy wyników BMI
        divRes.style.display = 'none';      // ukrycie miejsca wyświetlania skopiowanego wyniku BMI z formularza
        resetBtn.style.display = 'none';
    } else {
        //odwrotność powyższych opisów
        bmiClock.style.display = 'none';
        divRes.style.display = 'block';
    }
}

/////////////////////////////////////////////////////////////////////

// jQuery do wyświetlania wyniku oraz przycisku reset

$(function(){
    
    $('.secondbtn').on('click', function(){
        $('.bmiRes').text(parseFloat($('#wynik').val()).toFixed(1))
        if ($('#wynik').val() < 18.5 && $('#wynik').val() != '') {
            $('.small').fadeIn(3000);
            $('.normal, .high').hide();
        } else if ($('#wynik').val() > 25 && $('#wynik').val() != '') {
            $('.high').fadeIn(3000);
            $('.normal, .small').hide();
        } else if ($('#wynik').val() <= 25 && $('#wynik').val() >= 18.5 && $('#wynik').val() != ''){
            $('.normal').slideDown(3000);
            $('.small, .high').hide();
        }
        $('.resetBtn').show();
    });

    $('.resetBtn').on('click', () => {
        $('.bmiRes').empty();
        $('.small, .normal, .high').hide();
        choice.scrollIntoView();
        $('.bmiRes, .resetBtn').css('display', 'none');
        $('form').trigger('reset');
    });

    $('a').on('click', function(e){
        // e.preventDefault();
        const goToSection = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(goToSection).offset().top - 80
        }, 1000)
    });
    
});







