
let card_btn = document.getElementsByClassName('btn-primary');
let card_container = document.getElementsByTagName('tbody')[0];
let quantityFields = document.getElementsByClassName('num');
let delete_buttons = document.getElementsByClassName('button-danger');

for(let i =0; i < card_btn.length; i++)
{
    card_btn[i].addEventListener('click', addcard)
}

function addcard(event)
{
    let itemcontainer = document.createElement('tr')
    let btn = event.target
    let btngrandparent =  btn.parentElement.parentElement
    let btnparent = btn.parentElement
    let itemimg = btngrandparent.children[0].src
    let itemname = btnparent.children[0].innerText
    let itemprice = btnparent.children[1].innerText

    itemcontainer.innerHTML = `
    <td><input class="" type="checkbox"></td>
    <td><img class="" src=${itemimg} width="40" alt=""></td>
    <td class="">
    <h3 class = "item-name">${itemname}</h3>
    </td>
    <td class="item-price"><h3>${itemprice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="total-price"><h3>${itemprice}</h3></td>
    <td><button class="button-danger" type="button">Remove</button></td>
    `   

    card_container.appendChild(itemcontainer)
    for(let i=0;i<quantityFields.length; i++)
    {
        quantityFields[i].value=1;
        quantityFields[i].addEventListener('change', total_price)
    }

    for(let i=0; i<delete_buttons.length; i++)
    {
        delete_buttons[i].addEventListener("click", removeItem)
    }
}

function total_price(event)
{
    let qty = event.target;
    qtyparent = qty.parentElement.parentElement;
    item_price_fields = qtyparent.getElementsByClassName('item-price')[0];
    total_price_fields = qtyparent.getElementsByClassName('total-price')[0];
    item_price_fields = item_price_fields.innerText.replace('$','');
    total_price_fields.children[0].innerText = '$' + qty.value * item_price_fields;
}

function removeItem(event)
{
    delete_buttons = event.target;
    delete_parent_buttons = delete_buttons.parentElement.parentElement;
    delete_parent_buttons.remove();
}
