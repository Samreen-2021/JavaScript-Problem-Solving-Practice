//Loop values of object’s properties by using for...in loop and print them.
let cities = {
    first: 'karachi',
    second: 'Lahore',
    third: 'Islamabad',
    fourth: 'Quetta'
};
let i = 0;
for ( i  in cities) {
    console.log(cities[i]);
}
