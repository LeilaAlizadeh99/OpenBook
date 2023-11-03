const checkBox = document.querySelector('#hide input');
const heading = document.querySelectorAll('.title')[1];
const ul = document.querySelector('ul');

checkBox.addEventListener('change', function(e){
    if(checkBox.checked){
        heading.style.display = 'none';
        ul.style.display = 'none';
    }
    else{
        heading.style.display = 'block';
        ul.style.display = 'initial';
    }
})