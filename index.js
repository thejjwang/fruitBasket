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
    // render fruit to the display area
    renderFruitBasket();
    // clear the input fields when btn is clicked
    clearInputs();
}

// function intaking fruit id
const deleteFruitFromBasket = (id) => {
    // filter out fruitBasket array if the id does not match with the ids in the array 
    for (let i = 0; i <= fruitBasket.length-1; i++) {
        fruitBasket[i].id === id ? fruitBasket.splice(i, 1) : renderFruitBasket();
    }
    // show the updated fruits (newly deleted fruit is gone now)
    renderFruitBasket();
}


const renderFruitBasket = () => {
    // clear ul before rendering
    fruitBasketContainer.innerHTML = '';
    // for each item in fruitBasket array add a div with the fruit info
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
                //setting id to the atribute on the btn named id
                const id = parseInt(button.getAttribute('id'));
                deleteFruitFromBasket(id);
            })
        })
    })
}

// when btn is clicked call addFruit()
btn.addEventListener('click', addFruit);
renderFruitBasket();


