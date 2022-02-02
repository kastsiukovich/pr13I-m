// task1
var list = document.querySelector('#todo-list');
list.addEventListener('click', function(event){
    // console.log(event.target.tagName)
    if(event.target.tagName === 'P'){
        event.target.classList.toggle('task-no-active');
    }
})

// task2
// answer-item-show

var list2 = document.querySelector('.collection');
list2.addEventListener('click', function(event){
    if(!event.target.classList.contains('answer-item')){
        event.target.nextElementSibling.classList.toggle('answer-item-show')
        
    }
})

// task3
var btnOpenModal = document.getElementById('open-modal');
var modal = document.querySelector('#modal1');

btnOpenModal.addEventListener('click', function(){
    modal.classList.add('modal_open');
})
document.body.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target !== btnOpenModal && !e.target.closest('#modal1')){
        modal.classList.remove('modal_open')
    }
})

// task4
var photoAct = document.querySelector('.container');

photoAct.addEventListener('click', function(e){
    var photo1 = document.querySelector('.active-image');
    if(!e.target.closest('.active-image'));



    
})

  
   
// var getAtr = 
// event.target.src   или event.target.getAttribute('src')
photo2.addEventListener('click', function(e){
    

    photo2.classList.add('active-image');
    // e.target.src =
}) 