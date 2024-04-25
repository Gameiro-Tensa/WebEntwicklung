window.onload =()=>{
    let counter = 0;

    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let tibo_images = document.querySelector('.tibo_images');
    let tibo_info = document.querySelector('.tibo_info');

    let tibo_infos = Array.from(tibo_images.children);
    let screenwidth = tibo_info.getBoundingClientRect().width;
    right.addEventListener('click', vorne);
    left.addEventListener('click', hinter);
    
    function vorne() {
        counter++;
        if(counter === tibo_infos.length - 1){
            cpt = 0; 
        }
        let beweg = -screenwidth * counter;
        tibo_images.style.transform = 'translateX(${beweg}px)'
    }

    function hinter() {

    }
    console.log(tibo_infos);
}