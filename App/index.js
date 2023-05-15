const body = document.querySelector("body");
const umbrellaPreviewImg = document.querySelector("#Umbrella-Preview");
const uploadButton = document.querySelector(".upload-btn");
const loader = document.querySelector(".loader");
const uploadButtonLoader = document.querySelector(".upload-btn-loader");
const uploadIcon = document.querySelector(".upload-icon");
const logo = document.querySelector("#logo");
const fileInput = document.querySelector("#upload");

fileInput.addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  showLoader();
  loading();

  const file = event.target.files[0];
  document.querySelector("#filename").innerHTML = file.name;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    logo.src = reader.result;
  });

  reader.readAsDataURL(file);
}

function showLoader() {
  loader.style.display = "block";
  uploadButtonLoader.style.display = "block";
  logo.style.display = "none";
  umbrellaPreviewImg.style.display = "none";
  uploadIcon.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  uploadButtonLoader.style.display = "none";
  logo.style.display = "block";
  umbrellaPreviewImg.style.display = "block";
  uploadIcon.style.display = "block";
}

function loading() {
  setTimeout(hideLoader, 3000);
}

function resetFileInput() {
  document.querySelector("#filename").innerHTML = "UPLOAD LOGO";
  logo.style.display = "none";
  uploadButton.reset();
}

function changeClass(obj) {
  showLoader();
  loading();
  body.style.backgroundColor = obj.bg_color;
  uploadButton.style.backgroundColor = obj.btn_color;
  umbrellaPreviewImg.setAttribute("src", obj.src);
}
