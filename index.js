const fruitBasketContainer = document.getElementById('fruitBasketContainer');
const fruitBasketItem = document.getElementById('fruitBasketItem');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

const fruitBasket = [
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

const arr = [];

const renderFruitBasket = () => {
    fruitBasket.forEach(item => {
        fruitBasketContainer.innerHTML += 
        `<div>
            <li>${item.name}</li>
            <img src=${item.image}></img>
        </div>`

    })
}

btn.addEventListener('click', renderFruitBasket);

renderFruitBasket();