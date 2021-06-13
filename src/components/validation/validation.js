const nameValidation = function () {
  let regEx = /^[A-Z]([a-zA-Z]+\s)*[a-zA-Z]+$/g
  let args = [...arguments]
  if (regEx.test(args)) {
    return true
  }

  return false
}

const priceValidation = function () {
  let regEx = /^\d{0,8}(\.\d{1,})?$/g

  let args = [...arguments]

  if (regEx.test(args)) {
    console.log(args)
    return true
  }

  return false
}

export { nameValidation, priceValidation }
