import {
  applySpec,
  pipe,
  ifElse,
  always,
  prop,
  find,
  propEq,
  map,
  omit,
  isNil,
  isEmpty,
} from 'ramda'

const getPending_review = pipe(
  prop('products'),
  ifElse(
    find(propEq('analysis', true)),
    always(true),
    always(false)
  )
)

const buildProduct = orderStatus => applySpec({
  status: ifElse(
    propEq('analysis', true),
    always('pending_analysis'),
    always(orderStatus),
  ),
  productId: prop('productId'),
  quantity: pipe(
    prop('quantity'),
    Number,
  )
})

const buildProducts = values => pipe(
  prop('products'),
  map(buildProduct(prop('status', values)))
)(values)

const getCustomerId = values => {
  let customerId = prop('customerId', values)
  if (isNil(customerId) || isEmpty(customerId)) {
    customerId = null
  }

  return customerId
}

const buildOrder = applySpec({
  pending_review: getPending_review,
  userId: prop('userId'),
  customerId: getCustomerId,
  status: prop('status'),
  products: buildProducts,
})

const removeCustomerIdNull = payload => {
  if (!prop('customerId', payload)) {
    console.log(payload, 'vai vendo')
    return omit(['customerId'], payload)
  }

  return payload
}

export default pipe(
  buildOrder,
  removeCustomerIdNull
)
