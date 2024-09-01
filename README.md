> [!WARNING]
> Se pretende trabalhar com linguagens de alto nível (Js ou Ts), recomendamos fortemente a lib de [TypeScript]() para outro runtime fora o Node.js. Como, Bun, ou Deno.

```js
const client = new Client().login("admin");
const payment = client.payments;

const info = {
  amount: 2,
  payer_email: "test@gmail.com"
};

/*
  Gera o pagamento pix, e envia para o data o conteúdo
  necessário para que seja possível o cliente efetuar o 
  pagamento.
*/
payment.create(new Transaction(info).pix()).then(pix => {;
  console.log(pix);
}).catch(payment_error => {
  console.log(payment_error)
})
```
