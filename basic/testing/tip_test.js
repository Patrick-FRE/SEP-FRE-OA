var button = document.getElementById("calculate")

        button.addEventListener("click", function(){
            var init_cost = +document.getElementById("bill").value
            var tip_amount = +document.getElementById("tip").value
            var tip = init_cost * tip_amount;
            var total = init_cost + tip;

            document.getElementById("input_tip").value= "$" + tip
            document.getElementById("input_total").value = "$" + total
        })