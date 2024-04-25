//Get value

let previewContainer = document.querySelector('.produkts-preview');
let previewbox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.shop-content .produkt_box').forEach(produkt_box =>{
    produkt_box.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = produkt_box.getAttribute('data-name');
        previewbox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target ){
                preview.classList.add('active');
            }
        });
    };
});

previewbox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});