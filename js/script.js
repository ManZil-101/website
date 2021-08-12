$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["A Physics Graduate",
            "Research Interest in High Energy Physics",
            "Freelancer",
            "Editor Withal an Interested in Tech-Startup | Investment",
            " Entrepreneur"
        ],
        typeSpeed: 100,
        backSpeed: 0,
        loop: true
    });


    // owl carousel script

});


///ppopo upp 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});


//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
window.onload = () => { //after window loaded
        filterItem.onclick = (selectedItem) => { //if user click on filterItem div
            if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
                filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
                selectedItem.target.classList.add("active"); //add that active class on user selected item
                let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
                filterImg.forEach((image) => {
                    let filterImges = image.getAttribute("data-name"); //getting image data-name value
                    //if user selected item data-name value is equal to images data-name value
                    //or user selected item data-name value is equal to "all"
                    if ((filterImges == filterName) || (filterName == "all")) {
                        image.classList.remove("hide"); //first remove the hide class from the image
                        image.classList.add("show"); //add show class in image
                    } else {
                        image.classList.add("hide"); //add hide class in image
                        image.classList.remove("show"); //remove show class from the image
                    }
                });
            }
        }
        for (let i = 0; i < filterImg.length; i++) {
            filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
        }
    }
    //fullscreen image preview function
    //selecting all required elements
const previewBox = document.querySelector(".preview-box"),
    categoryName = previewBox.querySelector(".title p"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    shadow = document.querySelector(".shadow");

function preview(element) {
    //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
    let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
    previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
    categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
    previewBox.classList.add("show"); //show the preview image box
    shadow.classList.add("show"); //show the light grey background
    closeIcon.onclick = () => { //if user click on close icon of preview box
        previewBox.classList.remove("show"); //hide the preview box
        shadow.classList.remove("show"); //hide the light grey background
        document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
    }
}


function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}