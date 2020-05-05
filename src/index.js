//import './index.css';
import './styles/index.scss';
import $ from "jquery";
import "wicg-inert";

console.log($("body")[0]);
const KEYCODE={
    ESC:27
};
/*
const p = document.createElement('p')
p.textContent = "Hello from dev server!.!.!.!"
document.body.appendChild(p);


const p2 = document.createElement('p')
const numbers1 = [1, 2, 3, 4, 5, 6]
const numbers2 = [7, 8, 9, 10]
const numbers3 = [...numbers1, ...numbers2]
p2.textContent = numbers3.join(' ')
document.body.appendChild(p2)
*/
const dialog=$('#TermAndConditions');
const dialog_mask = $('.close-modal');
let prevActiveEle;

$('body').on('click','.open-modal',function(event){
    event.preventDefault();
    $(dialog).addClass('opened');
    $('#TermAndConditions').show();
    $('#TermAndConditions').focus();
    
    prevActiveEle=document.activeElement;

            Array.from(document.body.children).forEach(child => {
                if(child!==dialog[0]){
                    child.inert=true;
                }else{
                    console.log('left child is : ' ,child)
                }
            })

            $(document).keydown(function(e){
                if(e.keyCode===KEYCODE.ESC){
                    console.log('escape pressed');
                    if($('#TermAndConditions').hasClass('opened')){
                        $('.modal-popup').hide();
                        resetItems();
                    }
                }
            })

           $('#TermAndConditions').find('a')[0].focus();

})


$('body').on('click','.close-modal',function(event){
    event.preventDefault();
    $(this).parents('.modal-popup').hide();
    resetItems();
})


function resetItems(){
    console.log('resetting now...');
    Array.from(document.body.children).forEach(child => {
        if(child!==dialog[0]){
            child.inert=false;
        }else{
            console.log('left child no reset needed for : ' ,child)
        }
    })

    dialog.removeClass('opened');
    prevActiveEle.focus();
}

