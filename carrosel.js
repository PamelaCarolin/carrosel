const carouselWrapper = document.getElementById('carousel-wrapper');

for (let i = 1; i <= 9; i++) {
    const imgElement = document.createElement('div');
    imgElement.classList.add('item');
    imgElement.innerHTML = `<img src="${i}.jpeg" alt="Image ${i}">`;
    carouselWrapper.appendChild(imgElement);
}
