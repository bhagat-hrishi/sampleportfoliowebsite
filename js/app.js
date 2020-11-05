const mainNav = document.querySelector('.main-nav');

const dropDown = document.querySelector('.drop-down');

const navUnorderedList = document.querySelector('.nav-items');

function dropDownFunction(){
    navUnorderedList.classList.toggle('open');
    if(navUnorderedList.classList.contains('open'))
    {
        // console.log(navUnorderedList.classList)
        dropDown.innerHTML = ` CLOSE <i class="fa fa-close"></i> `
        dropDown.style.color ='#3498db';
        dropDown.style.backgroundColor = 'white';

    }else {
        // console.log(navUnorderedList.classList)
        dropDown.innerHTML=`
            <i class="fa fa-bars" style="font-size: 3vh;"></i>
        `
         dropDown.style.color ='white';
        dropDown.style.backgroundColor = '#3498db';
    }    
}   

dropDown.addEventListener('click',dropDownFunction)


