let favNumber = 42;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(res => {
    console.log(res);
});

// 2.
let numbers = [1, 10, 33, 45]
$.getJSON(`${baseURL}/${numbers}?json`).then(res => {
    console.log(res);
});

// 3. 
Promise.all(numbers).then(num => {
    return $.getJSON(`${baseURL}/${num}?json`)
}).then(res => {
    Object.keys(res).forEach(fact =>
        $("body").append(`<p>${res[fact]}</p>`))
})