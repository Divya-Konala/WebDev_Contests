// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button

document.getElementById("payBtn").onclick = function (e) {
  let grandTotal=JSON.parse(localStorage.getItem("grandTotal"));
  let totalAmount=grandTotal.totalAmount;
  console.log(totalAmount);
  var options = {
    key: "rzp_test_9OXl2wK2vH03Va", // Enter the Key ID generated from the Dashboard
    amount: totalAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "MyShop Checkout",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#000",
    },
    image:
      "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
      handler: function () {
          // Redirect the user to the shop.html page after the payment is completed
          window.location.href = "../../shop/index.html";
        },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  // clear mycart - localStorage
  e.preventDefault();
};
