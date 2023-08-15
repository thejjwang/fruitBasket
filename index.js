const fruitBasketContainer = document.getElementById('fruitBasketContainer');
const fruitBasketItem = document.getElementById('fruitBasketItem');
const btn = document.getElementById('btn');
const fruitInput = document.getElementById('fruitInput');
const imageInput = document.getElementById('imageInput');

let fruitBasket = [
    {
        name: 'apple',
        image: 'https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png',
        id: 0
    },
    {
        name: 'banana',
        image: 'https://th-thumbnailer.cdn-si-edu.com/4Nq8HbTKgX6djk07DqHqRsRuFq0=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg',
        id: 1
    }
];

const clearInputs = () => {
    fruitInput.value = '';
    imageInput.value = '';
}

const addFruit = () => {
    const newFruit = {
        name: fruitInput.value,
        image: imageInput.value,
        id: fruitBasket.length
    };
    fruitBasket.push(newFruit);
    renderFruitBasket();
    clearInputs();
}

const deleteFruitFromBasket = (id) => {
    fruitBasket = fruitBasket.filter(item => item.id !== id);
    renderFruitBasket();
}

const renderFruitBasket = () => {
    fruitBasketContainer.innerHTML = '';
    fruitBasket.forEach(item => {
       
        fruitBasketContainer.innerHTML += 
        `<div class="itemContainer">
            <li>${item.name}</li>
            <img src=${item.image}></img>
            <button class="deleteBtn" id=${item.id}>Delete</button>
        </div>`
        const deleteBtns = document.querySelectorAll('.deleteBtn');
        deleteBtns.forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.getAttribute('id'));
                deleteFruitFromBasket(id);
            })
        })
    })
}

btn.addEventListener('click', addFruit);
renderFruitBasket();


