function Paypal() {
  this.makePayment = function (amount) {
    console.log(`Paypal payment of Rs ${amount} has been received`);
  };
}

function Stripe() {
  this.sendPayment = function (amount) {
    console.log(`Stripe payment of Rs ${amount} has been received`);
  };
}

function PaypalAdaptor(payPalInstance) {
  this.paypal = payPalInstance;
  this.pay = function (amount) {
    this.paypal.makePayment(amount);
  };
}

function StripeAdapter(stripInstace) {
  this.stripe = stripInstace;
  this.pay = function (amount) {
    this.stripe.sendPayment(amount);
  };
}

const paypal = new Paypal();
const stripe = new Stripe();

const paypalAdapter = new PaypalAdaptor(paypal);
const stripeAdapter = new StripeAdapter(stripe);

paypalAdapter.pay(897.0);
stripeAdapter.pay(987.99);
