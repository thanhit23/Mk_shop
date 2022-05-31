const selectProductBtn = document.querySelector('.cf_stardust-checkbox__box');
const selectProduct = document.querySelectorAll('input[name="select-product"]');
const selectLength = selectProduct.length
const checkboxProductBtn = document.getElementById('select-all-products');

selectProductBtn.addEventListener('click', () => {
  selectCheckbox(!checkboxProductBtn.checked)
})

function selectCheckbox(value) {
  for (let i = 0; i < selectLength; i++) {
    selectProduct[i].checked = value;
  }
}
