let myImgs = [
    "img/Bilder/bertvthul-avenue-815297.jpg",
    "img/Bilder/camera-man-river-7411236.jpg",
    "img/Bilder/carlos_ramon_bonilla-desert-2646209.jpg",
    "img/Bilder/cernetice-dolomites-5076487.jpg",
    "img/Bilder/gruendercoach-bird-7967356.jpg",
    "img/Bilder/heckimg-tree-7619791.jpg",
    "img/Bilder/himmelstraeume-bachalpsee-7572681.jpg",
    "img/Bilder/kanenori-landscape-7373484.jpg",
    "img/Bilder/kanenori-sunset-7133867.jpg",
    "img/Bilder/kanenori-windsurfing-7241074.jpg",
    "img/Bilder/tieubaotruong-field-9295186.jpg",
    "img/Bilder/trondmyhre4-water-6579313.jpg",
];

let currentIndex = 0;

let dialogImg = document.getElementById("dialog-img");
let dialogTitle = document.getElementById("dialog-title");
let imageCounter = document.getElementById("image-counter")

const dialogRef = document.getElementById("myDialog");

function renderThumbnails() {
    let contentRef = document.getElementById('thumbnails')
    for (let index = 0; index < myImgs.length; index++) {
        contentRef.innerHTML += `<button aria-haspopup="dialog"
        onclick="openDialog(${index})" 
        class="renderedThumbnails">
        <img class="previewImages" src="${myImgs[index]}"></button>`;

    }
}

function openDialog(index) {
    let fileName = myImgs[index].split("/").pop();  //remove / and display only the Last component

    currentIndex = index;
    dialogTitle.innerText = fileName;
    dialogImg.src = myImgs[index];
    imageCounter.innerText = `${index + 1} / ${myImgs.length}`;
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= myImgs.length) {
        currentIndex = 0;
    }

    updateDialog();
}

function prevImage() {
    if (currentIndex === 0) {
        currentIndex = myImgs.length - 1;
    } else {
        currentIndex--;
    }

    updateDialog();
}

function updateDialog() {
    let fileName = myImgs[currentIndex].split("/").pop();

    dialogImg.src = myImgs[currentIndex];
    dialogTitle.innerText = fileName;
    imageCounter.innerText = `${currentIndex + 1} / ${myImgs.length}`;
}

function eventBubblingProtection(event) {
    event.stopPropagation();
}