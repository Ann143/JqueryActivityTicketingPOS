//function for getting the value of price and dispaly it
$(document).ready(function () {
    $('.movies-type').on('change', function() {
         $('#price').text(($(this).find(':selected').data('price')));
      });
//this function multiply the price and quantity
    $('#quantity').keyup(function(){

        let price= parseFloat($('#price').text());
        let quantity = parseInt(this.value);
            //this will display the result
        let result = price * quantity;
        $('#total').text(result);
    });
//this function subtract the cash and total
    $('#cash').keyup(function(){

        let total = parseFloat($('#total').text());
        let cash = parseInt(this.value);
            //this will display the result 
        let result = cash - total;
        $('#change').text(result);

    });


});