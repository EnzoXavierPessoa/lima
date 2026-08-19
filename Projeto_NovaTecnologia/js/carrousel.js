document.addEventListener("DOMContentLoaded", listener = () => {
    const prevButton = document.querySelector(".carrousel-bnt.prev");
    const nextbutton = document.querySelector("carrousel-btn.next");
})  const carouselContainer = document.querySelector(.carousel-container"):
    const
    const totalItems - carouselItema.lenght;
    let currentIndex = 0;

    }
    const changeSlide = () => [
        carouselContainer.style = () =>
            carouselContainer.style.transform = 'translatex(-${currentIndex * 100}%)';
    )
    const nextSlide = () => {
        currentIndex = (currentIndex - 1);
        changeSlide();
    }
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", nextSlide);

    setInternal(nextSlide, 7000);

    chengeSlide();
})
