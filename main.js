document.addEventListener("DOMContentLoaded", function() {
    const incrementButtons = document.querySelectorAll(".increment");
    const decrementButtons = document.querySelectorAll(".decrement");
    const counters = document.querySelectorAll(".counter");
    const subtotalElement = document.querySelector(".subtotal p");
    const discountElement = document.querySelector(".discount p");
    const totalElement = document.querySelector(".total p");
    const paymentButton = document.querySelector(".btn");

    // Function to update the subtotal, discount, and total
    function updateValues() {
        let subtotal = 0;

        counters.forEach((counter, index) => {
            let quantity = parseInt(counter.textContent);
            let price = 10; // Replace with the actual product price
            subtotal += quantity * price;
        });

        let discount = 10; // Replace with the actual discount amount
        let total = subtotal - discount;

        subtotalElement.textContent = "$" + subtotal;
        discountElement.textContent = "-$" + discount;
        totalElement.textContent = "$" + total;
    }

    // Event listener for increment buttons
    incrementButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let currentValue = parseInt(counters[index].textContent);
            currentValue++;
            counters[index].textContent = currentValue;
            updateValues();
        });
    });

    // Event listener for decrement buttons
    decrementButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let currentValue = parseInt(counters[index].textContent);
            if (currentValue > 1) {
                currentValue--;
                counters[index].textContent = currentValue;
                updateValues();
            }
        });
    });

    // Event listener for the "Process to payment" button
    paymentButton.addEventListener("click", function() {
        // Replace with your actual payment processing logic
        alert("Payment processed successfully!");
    });

    // Initialize values
    updateValues();
});


let quantityElements = document.getElementsByClassName("quantity");
let buttons = document.getElementsByClassName("myButton");

for (let i = 0; i < quantityElements.length; i++) {
    let element = quantityElements[i].innerHTML;
    let quantityValue = parseInt(element);

    if (quantityValue === 0 && buttons[i]) {
        console.log(buttons[i]);
        buttons[i].disabled = true;
        buttons[i].style.backgroundColor = "grey";
        buttons[i].style.cursor = "default";
    }
}

// sidebar icons 
let list = document.querySelectorAll(".list")
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "list"
        }
        list[i].className = "list active"
    }
}