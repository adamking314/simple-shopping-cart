$(document).ready(function () {
    var updateTotalCost = function (ele) {
        var itemCost = parseFloat($(ele).find('.cost input').val());
        var itemAmount = parseFloat($(ele).find('.amount input').val());
        // totalCost is cost times amount
        var totalCost = itemCost * itemAmount;
        $(ele).find('.totalCost').html(totalCost);

        return totalCost;
    };

    var calculateCartTotal = function () {
        var cartTotal = 0;
        $('.cartItem').each(function () {
            var itemTotal = updateTotalCost(this);
            cartTotal += itemTotal;
        });
        $('.cartTotal').html(cartTotal);
    };

    // Trigger the calculations on input change
    $(document).on('input', '.cost input, .amount input', function () {
        calculateCartTotal();
    });

    // Initial calculation
    calculateCartTotal();

    $(document).on('click', '.btn.remove', function (event) {
        $(this).closest('tr').remove();
        calculateCartTotal();
    });

    $('#btn-add').on('click', function () {
        $('tbody').append('<tr class="cartItem">' +
            '<td class="name"><input type="text"></td>' +
            '<td class="cost"><input type="number"></td>' +
            '<td class="amount"><input type="number"></td>' +
            '<td class="totalCost"></td>' +
            '<td><button class="btn remove">Remove Item</button></td>' +
            '</tr>');
    });
});
