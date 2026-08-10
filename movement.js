function calculateTotal(price , tickets){
    let total = (price * tickets);
    return total;
}


function showBookingSummary(Movie , Tickets , final_price){
    console.log("Movie: " + Movie);
    console.log("Tickets: " + Tickets);
    console.log("Final Price: " + final_price);
    if(Tickets>0){
        console.log("Booking Status: Confirmed");
    }
    else{
        console.log("Booking Status: No Tickets Selected");
    }
}


let movie = {
    name: "Obsession",
    price: 150,
    availableTickets: 25,
    rating: 7.7
};
console.log(movie);
console.log(movie.rating);
console.log(movie.price);


let age = 22;
if(age<12){
    console.log("Child");
}
else if(age>=12 && age<=17){
    console.log("Teen");
}
else if(age>=18 && age<=59){
    console.log("Adult");
}
else{
    console.log("Senior");
}


let hall = 2;
switch(hall){
    case 1:
        console.log("Hall A");
        break;
    case 2:
        console.log("Hall B");
        break;
    case 3:
        console.log("VIP Hall");
        break;
    default:
        console.log("Invalid Hall");
        break;            
}


let number_of_tickets = 5;
let total_price = calculateTotal( movie.price , number_of_tickets);
if(number_of_tickets>=5){
    console.log("Original total = " + total_price);
    console.log("Discount = " + total_price / 10);
    total_price = total_price - (total_price/10);
    console.log("The Final total = " + total_price);
}
else{
    console.log("Original total = " + total_price);
    console.log("Discount = " + 0);
    console.log("The Final total = " + total_price);
}


console.log("Available Seats : ")
for(let i=1 ; i<=10 ; i++){
    console.log("Seat " + i);
}
console.log("Selected Seats : ")
for(let i=1 ; i<=number_of_tickets ; i++){
    console.log("Seat " + i);
}
let tem = number_of_tickets;
while(tem>0 && movie.availableTickets>0){
    movie.availableTickets--;
    console.log("Available tickets = " + movie.availableTickets);
    tem--;
}


let attempt = 1;
do{
    console.log("Booking attempt: " + attempt);
    attempt++;
}while(attempt<=3);


showBookingSummary(movie.name , number_of_tickets , total_price);


console.log("Available Movies's Tickets Now In Cinema Today:");
let movies = ["Obsession", "Interstellar", "Inception", "Titanic", "Avatar"];
for(let i=0 ; i<movies.length ; i++){
    console.log("Movie " + (i + 1) + ": " + movies[i]);
}
console.log("The First Movie To Be Shown Today: " + movies[0]);
console.log("The Last Movie To Be Shown Today: " + movies[4]);
movies.push("A Quiet Place");
movies.splice(3 , 1);
console.log("Available Movies's Tickets Now In Cinema Tomorrow:");
for(let i=0 ; i<movies.length ; i++){
    console.log("Movie " + (i + 1) + ": " + movies[i]);
}