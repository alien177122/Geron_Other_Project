
const cards = [
  {
    name: "Шарф вязаный",
    price: 20,
    img: "",
  },
  {
    name: "Худи х/б черная",
    price: 35,
    img: "./src/img/hoodi.png",
  },
  {
    name: "Майка",
    price: 12.99,
    img: "./src/img/mayka2.png",
  },
];

const modalInfo = {
  title: "Пример заголовка",
  description: "Приятно, граждане, наблюдать, как предприниматели в сети интернет, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут описаны максимально подробно. И нет сомнений, что сделанные на базе интернет-аналитики выводы обнародованы. Безусловно, граница обучения кадров напрямую зависит от существующих финансовых и административных условий.",
  acceptText: "Подтверждение",
  cancelText: "Отмена",
  acceptFunc: () => alert("Ок"),
  cancelFunc: () => alert("Отмена"),
}


const cardsCopy = [...cards]

function setCards(cardsArray) {
  // получаем контейнер, в котором находятся карточки
  const container = document.querySelector(".products .container");
  container.innerHTML = "";
  // перебор карточек
  cardsArray.forEach((item) => {
    container.innerHTML += `
    <div class="products-card">
      <div class="img-box">
        <img src=${item.img || "./src/img/yellow.png"}>
      </div>
      <div class="title">
        <h3>${item.name}</h3>
        <h4 id="conext">$${item.price.toFixed(2)}</h4>
      </div>
    </div>
    `;
  });
}
//setCards(cards);

document.querySelector(".loader").style.display = "none"

// fetch("./src/pages/product.html")
//   .then((data) => {
//     return data.text();
//   })
//   .then((res) => {
//     document.querySelector(".product-page").innerHTML = res;
//   });

// window.addEventListener("click", (event) => {
//   event.target.style.background = "red"
// })

function changeSize(element) {
  element.style.fontSize = "24px";
}
function navigate(event) {  
  window.scrollTo(0, event.pageY + 500)
}



// filter - позволяет убрать лишние элементы из массива и вернуть новый массив
const numbers = [2, 5423, 32, 13, 2, 45, 243, 2, 54, 356, 43, 52, 77777777]

const filteredNumbers = numbers.filter(item => item > 60)


// sort - сортировка элементов

function sortCards(sortType) {
  if (sortType === "high") {
    cards.sort((a, b) => a.price - b.price)
  }
  else if (sortType === "low") {
    cards.sort((a, b) => b.price - a.price)
  }
  else {
    setCards(cardsCopy);
    return;
  }

  setCards(cards);
}

function navigate(element) {
  // получение селектора страницы
  const pageName = "." + element.href.split("#")[1]

  // убираем все активные страницы
  const activePages = document.querySelectorAll(".fullpage");
  activePages.forEach(item => {
    item.classList.remove("active");
  })

  // включаем нужную страницу
  document.querySelector(pageName).classList.add("active")
}

function setSize(elem) {
  document.querySelectorAll(".size p").forEach(item => {
    item.classList.remove("active")
  })

  elem.classList.add("active")
}

function setColor(elem) {
  document.querySelectorAll(".color div").forEach(item => {
    item.classList.remove("active")
  })

  elem.classList.add("active")
}

function changeCount(btn) {
  const count = btn.parentNode.querySelector(".count");
  // преобразуем счет в число
  const countValue = Number(count.value)

  if (btn.value == "+") {
    count.value = countValue + 1;
  }
  else {
    countValue > 1 && (count.value = countValue - 1);
  }
}


function activeCheckbox(elem) {
  const checkbox = elem.parentNode.querySelector(".checkbox-container");
  if (elem.checked) {
    checkbox.classList.add("active");
  }
  else {
    checkbox.classList.remove("active");
  }
}

function setCheckboxes() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]")

  checkboxes.forEach(item => {
    if (item.checked) {
      item.parentNode.querySelector(".checkbox-container").classList.add("active");
    }
  })
}

setCheckboxes();


function openModal() {
  const modalContainer = document.querySelector(".modal-container");
  // поиск элементов внутри модалки
  const modalTitle = modalContainer.querySelector("#modal-title");
  const modalDescription = modalContainer.querySelector("#modal-content");

  const acceptBtn = modalContainer.querySelector("#modal-accept")
  const closeBtn = modalContainer.querySelector("#modal-cancel")
  
  //подставляем значения в элементы
  modalTitle.innerHTML = modalInfo.title
  modalDescription.innerHTML = `<p>${modalInfo.description}</p>`

  acceptBtn.value = modalInfo.acceptText
  closeBtn.value = modalInfo.cancelText

  // Добавляем функции кнопкам
  acceptBtn.onClick = modalInfo.acceptFunc
  closeBtn.onClick = modalInfo.cancelFunc

  // включаем модалку
  modalContainer.classList.add("open");
}

function closeModal() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.remove("open");
}

function setDefaultValues(){
  const titlePreview=document.querySelector("#main h1")
  const imagePreview=document.querySelector("#main img")

  const title=localStorage.getItem("banner-title")
  if (title){
      titlePreview.innerHTML=title
  }
  const image=localStorage.getItem("banner-image");
  if (image){
      imagePreview.src=image
  }
}

setDefaultValues();

fetch("https://run.mocky.io/v3/9c446d66-156a-499c-b257-42581c540eba")
.then(async (res)=>{
  const data = await res.json()

  const newCards=data.map((item)=>{
    return{
      ...item,
      price:Number(item.price)
    }
  })
  setCards(newCards);
})

function burger(isOpen){
   //  ищем nav меню
   const navMenu=document.querySelector(".nav-menu nav")
   if (isOpen){
    navMenu.style.animationName = "open-burger"
    navMenu.classList.add("open")
   }
   else {
    navMenu.style.animationName="close-burger"
    setTimeout(()=>{
      navMenu.classList.remove("open")
    }, 350)
   }
}