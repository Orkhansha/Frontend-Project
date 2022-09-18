let products = [];

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

let tableBody = document.querySelector(".table .table-body");
let total=0;
for (const product of products) {
  tableBody.innerHTML += `<tr>
    <td cat-id="${product.id}"><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.cost}</td>
    <td><i class="fa-solid fa-minus"></i>${product.count}<i class="fa-solid fa-plus"></i></td>
    <td class="icon-del"><i class="fa-solid fa-trash"></i></td>
  </tr>`;

};
//   document.querySelector("#subtotal").innerHTML=total
//   console.log(total)
// let minus= document.querySelectorAll(".fa-minus")

// minus.forEach(element=>{
//   element.addEventListener("click", function(){
//     // e.preventDefault();
//     let qiymet=this.parentElement.innerText
//     // console.log(qiymet-=1)
    
    
   
//   })
// })
// console.log(minus)
let deleteIcon = document.querySelectorAll(".icon-del i");

deleteIcon.forEach((element) => {
  element.addEventListener("click", function () {
    let id = parseInt(this.parentNode.parentNode.firstElementChild.getAttribute("cat-id"));
    products = products.filter(m=>m.id != id);
    localStorage.setItem("products", JSON.stringify(products));
    this.parentNode.parentNode.remove();
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
// console.log(document.querySelector("sup").innerText)


// function dec(x){
//   let search=products.filter((s)=>{
//       return s.id==x
//   })[0];
//   search.count--
//   if(search.count==0){
//       products.splice(products.indexOf(search),1)
//   }
//   // sebetload()
//   document.querySelector("sup").innerText=products.length
// }
// function inc(x){
//   products.filter((product)=>{
//       return product.id==x
//   }).count++;
//   // console.log(this)
// }

///////////////////////////////////////////////////////////////////////////////
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