/**
 * By. Lucas Silveira <contato.lucasdwbfff@gmail.com>
 */

class Client {
  constructor() {}
  /**
   * 
   * @param {string} api_key your API-Key
   * @returns {object} PaymentInterface type
   */
  login(api_key) {
    return { payments: Payment(api_key) };
  }
}

class Payment {
  constructor(api_key) {
    this.__api_url = "http://127.0.0.1:8080";
    this.__prefix = 'Bearer ';
    this.__api_key = api_key;
  }

  create(payment_data) {
    return new Promise(async (resolve, reject) => {
      const request = await fetch(`${this.__api_url}/payment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization-key": this.__prefix + this.__api_key
        },
        body: JSON.stringify(payment_data)
      });

      const response = await request.json();
      (data.code == 200 ? resolve : reject)(response.data);
    });
  }
}

class Transaction {
  constructor(info) {
    this.info = info;
  }

  pix() {
    const data = this.info;
    return { 
      method: "Pix",
      amount: data.amount,
      payer_email: data.payer_email
    }
  }
  
  card() {
    const data = this.info;
    return { 
      method: "Card",

      amount: data.amount,
      cvv: data.cvv,
      number: daat.number,
      
      payer_cpf: data.payer_cpf,
      payer_email: data.payer_email,
      payer_name: data.payer_name,
      
      expiration_month: data.expiration_month,
      expiration_year: data.expiration_year,
    }
  }
}

export { Client, Transaction };
