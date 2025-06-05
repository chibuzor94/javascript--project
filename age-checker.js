let age =16
let hasparentalconsent = false

if(age >= 18){
    console.log("You can watch movie")
}else if(age >= 13 || hasparentalconsent){
    console.log("You can watch too")
}else{
    console.log("Access denied")
}