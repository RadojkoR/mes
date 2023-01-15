// APP OBJECT
const app = {};

// CONSTRUCT INIT METHOD 
app.init = () => {
    app.startSlide()
};
  
// GALLERY VIDEO NADZOR
app.fullScreenBox = document.querySelector("#fullScreenBox");
app.fullScreen = document.querySelector("#fullScreen");

app.singleImg = document.querySelectorAll(".galleryImg");
app.singleImg.forEach(el => el.addEventListener('click', event => {    
    // console.log(event.target.attributes.src);
    app.openFullScreen(event.target.attributes.src.value);

})); 

app.openFullScreen = (pic) => {
    // console.log(pic);
    app.fullScreenBox.style.display = "flex";
    app.fullScreen.src = pic;
}
// CLOSE BUTTON
app.closeButton = document.querySelector("#fullScreenBox span")

app.closeButton.addEventListener('click', () => {    
    app.closeFullScreen();
});

app.closeFullScreen = () => {
    // fullScreenBoxInt.style.display = "none";
    fullScreenBox.style.display = "none";
}

// SLIDER

let sliderImages = document.querySelectorAll('.slideImg');
app.arrowLeft = document.querySelector('.arrowLeft');
app.arrowRight = document.querySelector('.arrowRight');
app.current = 0;

app.startSlide = () => {
sliderImages[0];
// console.log(sliderImages[app.current].firstElementChild.src);

};



app.slideLeft = () => {
    sliderImages[app.current - 1];
    app.current--;
    // console.log(app.current);
    app.fullScreen.src = sliderImages[app.current].firstElementChild.src;
};

app.arrowLeft.addEventListener('click', () => {
    // console.log(sliderImages.length);
    // console.log(sliderImages[app.current].firstElementChild.src);
    if(app.current === 0) {
        app.current= sliderImages.length;    
    };
    app.slideLeft()
    // console.log(app.fullScreen.src);
    
});

// SHOW NEXT
app.slideRight = () => {
    sliderImages[app.current + 1];
    app.current++;
    // console.log(app.current);
    app.fullScreen.src = sliderImages[app.current].firstElementChild.src;
};

app.arrowRight.addEventListener('click', () => {

    if(app.current === sliderImages.length - 1) {
        app.current= -1;
    };
    app.slideRight()
});

// GALLERY INTERFONI


// CALL THE INIT METHOD
app.init()