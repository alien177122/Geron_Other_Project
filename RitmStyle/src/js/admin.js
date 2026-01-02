const titlePreview=document.querySelector("#title")
const titleField=document.querySelector("#title-field")
const base_url="http://localhost:5501/src/img/"
function setTitle(){
    titlePreview.innerHTML=titleField.value
}
function saveTitle(){
    localStorage.setItem("banner-title",titleField.value)

    alert("заголовок сохранен")
}
function setDefaultValues(){
    const titlePreview=document.querySelector("#title")
    const imagePreview=document.querySelector("#image")
    const title=localStorage.getItem("banner-title")
    if (title){
        titlePreview.innerHTML=title
        titleField.value=title
    }
    const image=localStorage.getItem("banner-image");
    if (image){
        imagePreview.src=image
    }
}

setDefaultValues();

function saveImage(){
    const fileInput=document.querySelector("#image-field")
    const imageName= fileInput.files[0].name

    localStorage.setItem("banner-image", base_url+imageName)
    alert("kartinka saved UOOUO")
}