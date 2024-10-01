const images = [
    "carouselImage1", 
    "carouselImage2", 
    "carouselImage3", 
    "carouselImage4", 
    "carouselImage5"
];

let currentIndex = 0;

function nextImage() {
    // Sembunyikan gambar yang sedang aktif
    document.getElementById(images[currentIndex]).style.display = "none";
    
    // Pindah ke gambar berikutnya
    currentIndex = (currentIndex + 1) % images.length;
    
    // Tampilkan gambar berikutnya
    document.getElementById(images[currentIndex]).style.display = "block";
}
