import { images } from "./gallery";
import SimpleLightbox from "simplelightbox";


const ulElem = document.querySelector('.gallery');


function imageTamplate(image) {
    return `<li class="gallery-item">
            <a class="gallery-link" href=${image.original}>
                <img class="gallery-image"
                src=${image.preview} 
                alt=${image.description}
                title=${image.description} />
            </a>
        </li>`}
  function imagesTamplate(arr) {
  return arr.map(imageTamplate).join('');
}
const markup = imagesTamplate(images);
ulElem.innerHTML = markup;

// заборона на завантаження зображення на ПК по кліку
const imgLinkEl =  document.querySelectorAll('.gallery-link');
imgLinkEl.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
    });  
});

ulElem.addEventListener('click', e => {
    if (e.target === e.currentTarget) return;
    const options = {
        captionDelay: 250,
    };
    const lightbox = new SimpleLightbox('.gallery a', options);
});


