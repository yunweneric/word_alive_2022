// const image = document.getElementById('image');
// const selectedFile = document.getElementById('input').files[0];
// const inputElement = document.getElementById("input");
// inputElement.addEventListener("change", handleFiles, false);
// function handleFiles() {
//     const fileList = this.files;
//     console.log(fileList)
//     /* now you can work with the file list */
// }
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");
const preview = document.getElementById("preview");
const workingImg = document.getElementById("workingImg");
const cropBtn = document.getElementById("cropBtn");
const cropperDiv = document.getElementById("cropper");
const output = document.getElementById("output");
const downloadBtn = document.getElementById("downloadBtn");


const cropper = new Cropper(workingImg, {
    aspectRatio: 1 / 1,

});

cropBtn.addEventListener('click', function (event) {
    var croppedImage = cropper.getCroppedCanvas({
        width: 160,
        height: 160,
        minWidth: 256,
        minHeight: 256,
        maxWidth: 4096,
        maxHeight: 4096,
        // fillColor: '#fff',
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
    }).toDataURL('image/png');
    output.src = croppedImage;
});
downloadBtn.addEventListener('click', function (e) {
    DownloadAsImage()
})

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    clearDynamicLink(link);
}

function DownloadAsImage() {
    var element = document.getElementById("view");
    html2canvas(element,).then(function (canvas) {
        var myImage = canvas.toDataURL();
        downloadURI(myImage, "avatar.png");
    });
}

fileSelect.addEventListener("click", (e) => {
    if (fileElem) {
        fileElem.click();
    }
}, false);


fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
    cropperDiv.style.visibility = "visible";
    const fileList = this.files;
    const file = fileList[0];
    workingImg.file = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        workingImg.src = e.target.result;

        console.log('====================================');
        console.log(workingImg);
        console.log('====================================');
        const cropper = new Cropper(workingImg, {
            aspectRatio: 1 / 1,
        });
    };
    reader.readAsDataURL(file);



    // const fileList = this.files;
    // // for (let i = 0; i < fileList.length; i++) {
    // const file = fileList[0];
    // // if (!file.type.startsWith('image/')) { continue }
    // const img = document.createElement("img");
    // img.classList.add("obj");
    // img.file = file;
    // preview.appendChild(img);
    // const reader = new FileReader();
    // reader.onload = (e) => { img.src = e.target.result; };
    // reader.readAsDataURL(file);
    // }


}
    // let dd = cropper;

//     cropper.getCroppedCanvas();

//     cropper.getCroppedCanvas({
//         width: 160,
//         height: 90,
//         minWidth: 256,
//         minHeight: 256,
//         maxWidth: 4096,
//         maxHeight: 4096,
//         fillColor: '#fff',
//         imageSmoothingEnabled: false,
//         imageSmoothingQuality: 'high',
//     });
// }