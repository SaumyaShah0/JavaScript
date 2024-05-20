const accountId = 4548421984
let accountEmail = "saumyashah516@gmail.com"
var accountPassword = "2121451"
accountCity = "Ahmedabad"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "45768421845154512"
accountCity = "Vadodara"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/