import React from 'react'

const Plan = () => {

  const handleSuccess = (amount, subscriptionType) => (data) => {
    const payload = {
      amount: amount.toString(),
      checkoutToken: prop('token', data),
      encryptionKey: PAGARME_ENCRYPTION_KEY,
      subscriptionType
    }
    console.log(payload)
  }

  const handleError = data => {
    console.log('Error', data)
  }

  const handleCheckout = (amount, title) => {
    const checkout = new window.PagarMeCheckout.Checkout({
      encryption_key: PAGARME_ENCRYPTION_KEY,
      success: handleSuccess(amount, title),
      error: handleError
    })

    checkout.open({
      amount,
      maxInstallments: 6,
      defaultInstallment: 1,
      customerData: 'false',
      createToken: 'true',
      paymentMethods: 'credit_card',
      postback_url: 'https://dev.menthor.co/api/pagarme/postback',
      items: [{
        id: `subscription-${title}`,
        title,
        unit_price: amount,
        quantity: 1,
        tangible: false
      }]
    })
  }

  return (
    <h1>Plan</h1>
  )
}

export default Plan
