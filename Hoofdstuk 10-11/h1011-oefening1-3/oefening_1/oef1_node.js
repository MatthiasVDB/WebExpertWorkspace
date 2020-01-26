let mijnArray = new Array();
let totaal = 0;

mijnArray.push(1, 2, 5, 6, 8, 9, 21, 10);

mijnArray.forEach(element => {
    totaal += element;
});

console.log(totaal);