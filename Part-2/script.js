//1. 

let baseURL = "http://deckofcardsapi.com/api/deck";

//1. 
// $.getJSON(`${baseURL}/new/draw/?count=1`).then(res => {
//     let { suit, value } = res.cards[0];
//     console.log(`${value}, ${suit}`)
// })

//2. 
//Request to deck of card for single card from newly shuffled deck. Then one more card from same deck.

// $.getJSON(`${baseURL}/new/draw`).then(res => {
//     card1 = res.cards[0];
//     let { suit, value } = card1;
//     console.log(`${value}, ${suit}`)
//     let deck_id = res.deck_id;
//     console.log(`deck_id: ${deck_id}`)
//     return $.getJSON(`${baseURL}/${deck_id}/draw/?count=1`);
// }).then(res => {
//     card2 = res.cards[0]
//     let { suit, value } = card2;
//     console.log(`${value}, ${suit},deck_id: ${res.deck_id}`)
// })

//3. 
//Build HTML page that lets you draw cards from a deck.

let deck_id = null;
let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`${baseURL}/new/shuffle/`).then(res => {
    deck_id = res.deck_id;
    $btn.show();
});

$btn.on('click', function () {
    $.getJSON(`${baseURL}/${deck_id}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    });
});