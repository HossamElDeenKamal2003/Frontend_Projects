var saturate = document.getElementById('saturate');
var contrast = document.getElementById('contrast');
var brightness = document.getElementById('brightness');
var sepia = document.getElementById('sepia');
var grayscale = document.getElementById('Grayscale');
var blur = document.getElementById('Blur');
var hueRotate = document.getElementById('hue-rotate');
var upload = document.getElementById('upload');
var download = document.getElementById('true')
var image = document.getElementById('img');
var reset = document.querySelector('span');
var imgBox = document.querySelector('.img_box');

function reset_filters(){
    image.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}
reset.onclick = reset_filters;
window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
}
upload.onchange = function(){
    reset_filters();
    download.style.display = 'block';
    reset.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}

let filters = document.querySelectorAll('ul li input');
filters.forEach(filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
    })
})


