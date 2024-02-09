window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector(".menuMobile").style.transition = '0.2s'   
            document.querySelector(".menuMobile").style.transform = 'rotate(180deg)'
            document.querySelector(".menu nav ul").style.display = 'none';
        }
        else{
            document.querySelector(".menuMobile").style.transition = '0.2s'
            document.querySelector(".menuMobile").style.transform = 'rotate(90deg)'
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}