let products = [];

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

let tableBody = document.querySelector(".table .table-body");

for (const product of products) {
  tableBody.innerHTML += `<tr>
    <td cat-id="${product.id}"><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.cost}</td>
    <td>${product.count}</td>
    <td class="icon-del"><i class="fa-solid fa-trash"></i></td>
  </tr>`;
};
let deleteIcon = document.querySelectorAll(".icon-del i");

deleteIcon.forEach((element) => {
  element.addEventListener("click", function () {
    let id = parseInt(this.parentNode.parentNode.firstElementChild.getAttribute("cat-id"));
    console.log(this.parentNode.parentNode.firstElementChild.getAttribute("cat-id"));
    products = products.filter(m=>m.id != id);
    localStorage.setItem("products", JSON.stringify(products));
    this.parentNode.parentNode.remove();
    console.log(products.filter(m=>m.id != id))
    document.querySelector("sup").innerText = products.length
    
    
    // Swal.fire({
    //   position: "top-center",
    //   icon: "success",
    //   title: "Product deleted",
    //   showConfirmButton: false,
    //   timer: 1000,
    // });
    
  });
});
document.querySelector("sup").innerText= products.length
console.log(document.querySelector("sup").innerText)




$(function () {


  let scrollSection = document.getElementById("scroll-section");
   

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 195|| document.documentElement.scrollTop > 195) {
       scrollSection.style.top = "0";
    } else {
       scrollSection.style.top = "-200px";
       $("div").removeClass("inActive");
    }
  }  
   
});

let dropdownBtnn= document.querySelectorAll(".dropdown-btnn")
 
dropdownBtnn.forEach( element=>{
 element.addEventListener("click", function(){
    console.log(this.nextElementSibling)
    this.nextElementSibling.classList.toggle("drop-show")
 })
})