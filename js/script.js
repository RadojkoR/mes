// APP OBJECT
const app = {};

// CONSTRUCT INIT METHOD 
app.init = () => {
    app.startSlide();
    app.startSlideInt();
};
  
// GALLERY VIDEO NADZOR
app.fullScreenBox = document.querySelector("#fullScreenBox");
app.fullScreen = document.querySelector("#fullScreen");

app.singleImg = document.querySelectorAll(".galleryImg");
app.singleImg.forEach(el => el.addEventListener('click', event => {    
    // console.log(event.target.attributes.src);
    app.openFullScreen(event.target.src);

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
        app.current = -1;
    };
    app.slideRight()
});

// GALLERY INTERFONI
app.fullScreenBoxInt = document.querySelector("#fullScreenBoxInt");
app.fullScreenInt = document.querySelector("#fullScreenInt");
app.closeButtonInt = document.querySelector("#fullScreenBoxInt span");

app.singleImgInt = document.querySelectorAll(".galleryImgInt");
app.singleImgInt.forEach(elInt => elInt.addEventListener('click', e => {
    // console.log(e.target.src);
    app.openFullScreenInt(e.target.src);
}));

app.openFullScreenInt = (picInt) => {
    app.fullScreenBoxInt.style.display = "flex";
    // console.log(picInt);
    app.fullScreenInt.src = picInt;
}

// CLOSE BUTTON INTERFONI
app.closeButtonInt.addEventListener("click", () => {
    // console.log("work");
    app.closeFullScreenInt();
});

app.closeFullScreenInt = () => {
    fullScreenBoxInt.style.display = "none";
};

// SLIDER INTERFONI SECTION
let sliderImagesInt = document.querySelectorAll(".slideImgInt");
app.arrowLeftInt = document.querySelector(".arrowLeftInt");
app.arrowRightInt = document.querySelector(".arrowRightInt");
app.currentInt = 0;

app.startSlideInt = () => {
    sliderImagesInt[0];
};

app.slideLeftInt = () => {
    sliderImagesInt[app.currentInt - 1];
    app.currentInt--;
    
    app.fullScreenInt.src = sliderImagesInt[app.currentInt].firstElementChild.src;
};

app.arrowLeftInt.addEventListener("click", () => {
    
    if(app.currentInt === 0) {
        app.currentInt = sliderImagesInt.length;
    };
    app.slideLeftInt()
});

// SHOW NEXT INTERFONI
app.slideRightInt = () => {
    sliderImagesInt[app.currentInt +1];
    app.currentInt++;
    
    app.fullScreenInt.src = sliderImagesInt[app.currentInt].firstElementChild.src;
};

app.arrowRightInt.addEventListener("click", () => {
    
    if(app.currentInt === sliderImagesInt.length - 1) {
        app.currentInt = -1;
    };
    app.slideRightInt()
});

// CALL THE INIT METHOD
app.init()