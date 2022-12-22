function scrollLeft() {
    const allImages = document.getElementById("img-scroll").querySelectorAll(); 
    for (i = 0; i < allImages.length; i++) {
        let currentImg = allImages[i]; 
        currentImg.style("display: none")
    }
}