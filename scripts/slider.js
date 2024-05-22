let mas=[ {'alt':"1", 'src':"img/s1.png"}, {'alt':"s2", 'src':"img/s2.png"}, {'alt':"3", 'src':"img/s3.png"}, {'alt':"4", 'src':"img/s4.png"}]; //массив с фотографиями для слайдера
let img= document.body.querySelector('.img'); //поиск контейнера для слайда
img.style.backgroundImage='url("'+mas[0].src+'")'; //стилизация фонового изображения слайда
let dots = document.querySelectorAll('.dot'); //получение всех маркеров-индикаторов
let dotIndex=0; //номер текущего индикатора
function prev(){ //функция, переключающая слайд назад
    let prevNum=Number(img.dataset.sequence)-1;
    dotIndex -=1;
    if(prevNum<0){
        prevNum=mas.length-1;
        dotIndex = dots.length-1;
    }
    img.dataset.sequence = `${prevNum}`;
    img.style.backgroundImage='url("'+mas[prevNum].src+'")';
    thisSlide(dotIndex);
}
function next(){ //функция, переключающая слайд вперед
    let nextNum=Number(img.dataset.sequence)+1;
    dotIndex +=1;
    if(nextNum>mas.length-1){
        nextNum=0;
        dotIndex=0;
    }
    img.dataset.sequence = `${nextNum}`;
    img.style.backgroundImage='url("'+mas[nextNum].src+'")';
    thisSlide(dotIndex);
}
dots.forEach((dot, index)=>{ //функция, переключающая слайду по нажатию на кнопки
    dot.addEventListener('click', ()=>{
        img.dataset.sequence = index;
        dotIndex = index;
        img.style.backgroundImage = 'url("'+mas[index].src+'")';
        thisSlide(dotIndex);
    })
});
let thisSlide = (index)=>{ //функция индикации маркера
    for (let dot of dots) {
    dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}
setInterval(()=>{next()}, 6000); //добавление автоматического переключения слайда по времени
