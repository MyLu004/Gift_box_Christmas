const click=document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const Shawdow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text')
const buttonClick = document.querySelector('.button');
const videoBox = document.querySelector('.video-box video');

buttonClick.addEventListener('click',()=>{
    if(click.className === 'click'){
        click.classList.add('active');
        giftBox.classList.add('active');
        Shawdow.classList.add('active');
        giftContainer.classList.add('active');
        text.classList.add('active');
        text.classList.remove('active2');
        videoBox.classList.add('active');
        videoBox.classList.remove('active2');

        setTimeout(() =>{
            videoBox.play();
        },2000);
    }

    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shawdow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')
        videoBox.classList.remove('active')
        videoBox.classList.add('active2')

        videoBox.pause();
    }

});

document.addEventListener("DOMContentLoaded",function(){
    var video = document.getElementById("Amongus_video")
    video.autoplay = true;
});
