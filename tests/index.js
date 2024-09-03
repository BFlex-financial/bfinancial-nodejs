import { Client, Transaction } from '../';

const client = new Client().login("admin");
const payment = client.payments;

payment.create(new Transaction({
  payer_email: "test@gmail.com",
  amount: 22
}).pix()).then(
  (data) => {
    console.log(data.qr_code.literal);
  }
)