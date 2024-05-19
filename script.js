let url = "https://664a61d9a300e8795d41d346.mockapi.io/Smartphones"

async function smartPhones() {
    try {
        const response = await fetch(url)
      
        if (!response.ok) {
            throw new Error(response.statusText)

        }
        const smartPhones = await response.json()
        for (let smartPhone of smartPhones) {
            let card = document.createElement('div')
            card.innerHTML = `
            <img src='${smartPhone.imgUrl}'>
            <p>Brand: ${smartPhone.brand} </p>
            <p>Price: ${smartPhone.price}</p>
            <button onclick='addToFav(this, ${smartPhone.id})'>Add to Cart </button>
            `
            document.querySelector('.container').appendChild(card)
        }

    } catch (error) {
        console.log(error)

    }
}
smartPhones()

let myFav= JSON.parse(localStorage.getItem('smph')) || []
let myId = [];
let items = document.querySelector('#items')

class selectedSmartPhone {
    constructor(imgUrl, brand, price) {
        this.imgUrl = imgUrl;
        this.brand = brand;
        this.price = price;
    }
}


function addToFav(btn, elId) {

    items.innerHTML++

    let smartPhoneItem = new selectedSmartPhone(btn.parentElement.children[0].src, btn.parentElement.children[1].innerText, btn.parentElement.children[2].innerText)
    myFav.push(smartPhoneItem)
    let strMysmartPhone = JSON.stringify(myFav)
    localStorage.setItem('smph', strMysmartPhone)


}
items.innerHTML = JSON.parse(localStorage.getItem('smph')).length;