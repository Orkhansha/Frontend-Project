let products = [];

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

let tableBody = document.querySelector(".table .table-body");
let total = 0;
for (let product of products) {
  tableBody.innerHTML += `<tr>
    <td scope="col" cat-id="${product.id}"><img src="${
    product.image
  }" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td scope="col">${product.name}</td>
    <td scope="col"><span>${product.cost}</span> $</td>
    <td scope="col"><i class="fa-solid fa-minus"></i><span class="Count">${
      product.count
    }</span><i class="fa-solid fa-plus"></i></td>
    <td scope="col"><span>${product.cost * product.count}</span>$</td>
    <td scope="col" class="icon-del"><i class="fa-solid fa-trash"></i></td>
  </tr>`;

  total += product.cost * product.count;
}
let shipping = document.querySelector("#ship-cost").innerText;
let gst = document.querySelector("#ship-cost-second").innerText;
document.querySelector("#subtotal").innerHTML = total;
document.querySelector("#totalprice").innerHTML =
  parseFloat(shipping) + parseFloat(gst) + parseFloat(total);

//////////////Increment & Decrement////////////////////////
var inc = document.getElementsByClassName("fa-plus");
var dec = document.getElementsByClassName("fa-minus");
for (let i = 0; i < inc.length; i++) {
  var button = inc[i];
  button.addEventListener("click", function (event) {
    var buttonclick = event.target;
    var numbertd = buttonclick.parentNode.children[1];
    var number = numbertd.innerText;
    var newnumber = parseInt(number) + 1;
    numbertd.innerText = newnumber;
    if (numbertd.innerText == newnumber) {
      let old = this.parentNode.nextElementSibling.firstElementChild;
      let oldcost = old.innerText;
      let newcost =
        parseFloat(oldcost) +
        parseFloat(
          this.parentNode.previousElementSibling.firstElementChild.innerText
        );
      old.innerText = newcost;

      var subtotal = document.querySelector("#subtotal");
      var totalprice = document.querySelector("#totalprice");
      var oldsub = subtotal;
      var oldsubtotal = oldsub.innerText;
      var newsub =
        parseFloat(oldsubtotal) +
        parseFloat(
          this.parentNode.previousElementSibling.firstElementChild.innerText
        );
      oldsub.innerText = newsub;
      var oldtotal = totalprice;
      var oldtotalprice = oldtotal.innerText;
      var newtotal =
        parseFloat(oldtotalprice) +
        parseFloat(
          this.parentNode.previousElementSibling.firstElementChild.innerText
        );
      oldtotal.innerText = newtotal;
    }
  });
}

for (let i = 0; i < dec.length; i++) {
  var button = dec[i];
  button.addEventListener("click", function (event) {
    var buttonclick = event.target;
    var numbertd = buttonclick.parentNode.children[1];
    var number = numbertd.innerText;
    var newnumber = parseInt(number) - 1;
    numbertd.innerText = newnumber;
    if (newnumber == 0) {
      let id = parseInt(
        this.parentNode.parentNode.firstElementChild.getAttribute("cat-id")
      );
      products = products.filter((m) => m.id != id);
      localStorage.setItem("products", JSON.stringify(products));
      this.parentNode.parentNode.remove();
      document.querySelector("sup").innerText = products.length;
    }
    if (numbertd.innerText == newnumber) {
      let old = this.parentNode.nextElementSibling.firstElementChild;
      let oldcost = old.innerText;
      let newcost =
        parseFloat(oldcost) -
        parseFloat(
          this.parentNode.previousElementSibling.firstElementChild.innerText
        );
      old.innerText = newcost;

      var subtotal = document.querySelector("#subtotal");
      var totalprice = document.querySelector("#totalprice");
      var oldsub = subtotal;
      var oldsubtotal = oldsub.innerText;
      var newsub =
        parseFloat(oldsubtotal) -
        parseFloat(
          this.parentNode.previousElementSibling.firstElementChild.innerText
        );
      oldsub.innerText = newsub;
      var oldtotal = totalprice;
      var oldtotalprice = oldtotal.innerText;
      var newtotal =
        parseFloat(oldtotalprice) -
        parseFloat(
          this.parentNode.previousElementSibling.firstElementChild.innerText
        );
      oldtotal.innerText = newtotal;
    }
  });
}

/////////////////////////////////////////////////////////////
let deleteIcon = document.querySelectorAll(".icon-del i");

deleteIcon.forEach((element) => {
  element.addEventListener("click", function () {
    let id = parseInt(
      this.parentNode.parentNode.firstElementChild.getAttribute("cat-id")
    );
    products = products.filter((m) => m.id != id);
    localStorage.setItem("products", JSON.stringify(products));
    this.parentNode.parentNode.remove();
    document.querySelector("sup").innerText = products.length;

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Product deleted",
      showConfirmButton: false,
      timer: 1000,
    });
  });
});
document.querySelector("sup").innerText = products.length;

///////////////////////////////////////////////////////////////////////////////
$(function () {
  let scrollSection = document.getElementById("scroll-section");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 195 ||
      document.documentElement.scrollTop > 195
    ) {
      scrollSection.style.top = "0";
    } else {
      scrollSection.style.top = "-200px";
      $("div").removeClass("inActive");
    }
  }
});

let dropdownBtnn = document.querySelectorAll(".dropdown-btnn");

dropdownBtnn.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(this.nextElementSibling);
    this.nextElementSibling.classList.toggle("drop-show");
  });
});
