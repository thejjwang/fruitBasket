const fruitBasketContainer = document.getElementById('fruitBasketContainer');
const fruitBasketItem = document.getElementById('fruitBasketItem');
const btn = document.getElementById('addBtn');
const fruitInput = document.getElementById('fruitInput');
const imageInput = document.getElementById('imageInput');

let fruitBasket = [];

const renderFruitBasket = async () => {
    try {
        let response = await fetch("http://localhost:3000/items");
        let data = await response.json();
        fruitBasket = data;
        console.log(fruitBasket);
    }
    catch (err) {
        console.log(err);
    }

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

const clearInputs = () => {
    fruitInput.value = '';
    imageInput.value = '';
}

const addFruit = async () => {
    const newFruit = {
        name: fruitInput.value,
        image: imageInput.value,
        id: Date.now()
    };
    try {
        await fetch("http://localhost:3000/items/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newFruit)
            });

    } catch {
        console.log(error)
    }
    // render fruit to the display area
    renderFruitBasket();
    // clear the input fields when btn is clicked
    clearInputs();
}

// function intaking fruit id
const deleteFruitFromBasket = async (id) => {
    // filter out fruitBasket array if the id does not match with the ids in the array 
        try {
            await fetch(`http://localhost:3000/items/${id}`, {
                method: "DELETE",
            })
        } catch {
            console.log(error)
        }

    // for (let i = 0; i < fruitBasket.length; i++) {
    //     fruitBasket[i].id === id && fruitBasket.splice(i, 1);
    // }
    // show the updated fruits (newly deleted fruit is gone now)
}

// when btn is clicked call addFruit()
btn.addEventListener('click', addFruit);
renderFruitBasket();


