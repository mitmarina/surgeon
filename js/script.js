let itemBtn1 = document.querySelector('.btn-item1');

let itemBtn2 = document.querySelector('.btn-item2');
console.log(itemBtn2);
let itemBtn3 = document.querySelector('.btn-item3');
let itemBtn4 = document.querySelector('.btn-item4');
console.log(itemBtn4);

let item1 = document.getElementById('surgeon-operation-item1');
let item2 = document.getElementById('surgeon-operation-item2');
let item3 = document.getElementById('surgeon-operation-item3');
let item4 = document.getElementById('surgeon-operation-item4');



itemBtn1.addEventListener("click", function()  {

    item1.style.display="flex";
    item3.style.display="none";
    item4.style.display="none";
    item2.style.display="none";
    itemBtn1.classList.add('active');
    itemBtn2.classList.remove('active');
    itemBtn3.classList.remove('active');
    itemBtn4.classList.remove('active');

});


itemBtn2.addEventListener("click", function()  {

    item1.style.display="none";
    item3.style.display="none";
    item4.style.display="none";
    item2.style.display="flex";
    itemBtn2.classList.add('active');
    itemBtn1.classList.remove('active');
    itemBtn3.classList.remove('active');
    itemBtn4.classList.remove('active');

});

itemBtn3.addEventListener("click", function()  {

    item1.style.display="none";
    item2.style.display="none";
    item4.style.display="none";
    item3.style.display="block";
    itemBtn3.classList.add('active');
    itemBtn1.classList.remove('active');
    itemBtn2.classList.remove('active');
    itemBtn4.classList.remove('active');
});

itemBtn4.addEventListener("click", function()  {

    item1.style.display="none";
    item2.style.display="none";
    item3.style.display="none";
    item4.style.display="block";
    itemBtn4.classList.add('active');
    itemBtn1.classList.remove('active');
    itemBtn2.classList.remove('active');
    itemBtn3.classList.remove('active');
});



// $(function(){
//     $('.phone').mask("+7(999)999-99-99");
// });


let select = document.querySelector('.surgeon-form-select-arrow');
let option = document.querySelector('.surgeon-form-select-option');

select.addEventListener('click', function() {
    option.style.display="block";
})



