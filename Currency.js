function convert(){
    var dollar=118.14;
    var euro=120.10;
    var jaza=prompt("Enter the currency you wish to Convert the Kenyan shilling to: \n USD \n EURO");

    switch(jaza){
        case 'USD':
            var shilingi=parseInt(prompt("Enter the amount in Ksh"));
            var hesabu= Math.round(shilingi/dollar);
            alert("The value is " + hesabu + " Dollars");
            var rudisha= parseInt(prompt("Enter the amount in Dollars you wish to convert to Ksh"));
            var another= dollar*rudisha;
            alert("The value is "+ another +" Shillings");
            break;
        case 'EURO':
            var mambo=parseInt(prompt("Enter the amount in Ksh"));
            var piga= Math.round(mambo/euro);
            alert("The value is " + piga + " Euros");
            var chukua= parseInt(prompt("Enter the amount in Euros you wish to convert to Ksh"));
            var mahesabu= euro*chukua;
            alert("The value is "+ mahesabu +" Shillings");
            break;
        default:
            alert("Please select an option from the list");
    }
}
convert();