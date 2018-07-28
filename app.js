class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI {
    constructor() {

    }

    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
        <div class="card-body">
        <strong>Product Name</strong> ${product.name}
        <strong>Product Price</strong> ${product.price}
        <strong>Product Year</strong> ${product.year}
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
        </div>
        `;
        productList.appendChild(element);

    }

    resetForm() {
        document.getElementById('product-form').reset();

    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'info');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000); //Está en milisegundos
    }
}



//DOM events in navigator
document.getElementById('product-form').addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);
    const ui = new UI();

    if (name === '' || price === '' || year === '') {
        ui.showMessage('Complete Fields Please', 'danger');
    } else {
        ui.showMessage('Product Added Successfully', 'success');
        ui.addProduct(product);
    }
    ui.resetForm();

    event.preventDefault();
});

document.getElementById('product-list').addEventListener('click', (event) => {
    const ui = new UI();
    ui.deleteProduct(event.target);
    console.log(event.target)
});