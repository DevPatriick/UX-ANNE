const open_menu = document.querySelector('#opend');
const close_menu = document.querySelector('#closed');
const menu = document.querySelector('.menurresponsive');


function openmenu(){
    open_menu.style.display='none';
    close_menu.style.display='block';
    menu.style.display='block';
}

function closemenu(){
    open_menu.style.display='block';
    close_menu.style.display='none';
    menu.style.display='none';
}

open_menu.addEventListener('click', openmenu);
close_menu.addEventListener('click', closemenu);




const vice = document.querySelector('.vice p');
const vyce = document.querySelector('.menuservice');
function openservice(){
    if(vyce.style.display='none'){
        vyce.style.display='block'
    }
    else if( vyce.style.display='block'){
        vyce.style.display='none'
    }
}


vice.addEventListener('click', openservice);
