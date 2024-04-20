// ITERATION 1



function updateSubtotal(product) {
    
  const price = product.querySelector('.price span')
  
  const quantity = product.querySelector('.quantity input')
  
  const priceE = price.innerHTML;
  
  const quantityeE = document.getElementByClasId("input").value;

  const result = priceE * quantityeE;
     
  const subTotalElement = document.querySelector(".subtotal");

  return result;
};

 
const result = priceE * quantityeE;

let subTotalElement = document.querySelector(".subtotal");

window.addEventListener("click", updateSubtotal() {
  const products = document.querySelector("product");
  products.forEach(product => {
    const quantityInput = product.querySelector(".quantity input");
    quantityInput.addEventListener("input", () => {
      updateSubtotal(product);
    });
    const removeButton = product.querySelector("btn-remove");
    removeButton.addEventListener("click", () => {
      product.remove();
      updateSubtotal();
    });
  })
} ) ;
function updateTotal () {
  const subtotal = document.querySelectorAll("subtotal span");
  let total = 0;
  subtotalss.forEach(subtotal => {
    total += subtotal.textContent
  });
  const totalElement = document.querySelector("#total-value span");
  totalElement.textContent = total.toFixed[2]
}

//2
function calculateAll() {
  const allProducts = document.getElementsByName("product");
 let total = 0;
  for(const allProducts of allProducts) {
    const subtotal = updateSubtotal(allProducts);
    total += subtotal;
  }
  const totalElement1 = document.querySelector("#total-value span");
  totalElement1.textContent = total;
}
document.addEventListener("DOMContentLoaded", calculateAll)
// ITERATION 4
document.addEventListener("DOMContentLoaded", function () {
  const removeButtons = document.querySelectorAll(".btn btn-success");

  removeButtons.forEach(button => {
    button.addEventListener("click", removeProduct);
  });

});
function removeProduct(event) {
  const target = event.currentTarget.parentNode.ParentNode;
  target.remove();
  calculateAll();
  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {
  const nombre = nombreIpnut.value;
  const precio = precioInput.value

  const nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${precio.toFixed(2)}</td>
    <td><input type="number" class="cantidad" value="1"></td>
    <td><button class="eliminar">Eliminar</button></td>
  `;
  tablaProductos.appendChild(nuevaFila);
  nombreInput.value = '';
  precioInput.value = '';

  botonCalcularTodo.addEventListener("click", calculartodo);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
