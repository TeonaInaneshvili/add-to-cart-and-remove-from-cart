let selectedSmartPhone = JSON.parse(localStorage.getItem('smph'))
console.log(selectedSmartPhone)

for (let smartPhone of selectedSmartPhone) {
    let card = document.createElement('div')
    card.innerHTML = `
    <img src = '${smartPhone.imgUrl}'>
    <p>Model:${smartPhone.brand} </p>
    <p>Price ${smartPhone.price}</p>
    
    <button onclick="deletesmph(this)"> Delete from Cart </button>
    `

    document.querySelector('.favContainer').appendChild(card)
}
let items = document.querySelector('#items')
function deletesmph(btn) {
    btn.parentElement.remove()
    items.innerHTML--


    let myFav = JSON.parse(localStorage.getItem('smph'))
    let index = myFav.findIndex(item => item.imgSrc === btn.parentElement.querySelector('img').src)

    if (index !== -1) {
        myFav.splice(index, 1);
        let stringMySmartPhone = JSON.stringify(myFav)
        localStorage.setItem('smph', stringMySmartPhone)
    }
}
items.innerHTML = JSON.parse(localStorage.getItem('smph')).length;