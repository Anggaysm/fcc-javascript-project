//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    const rules = /^(1 ?)?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/
    return rules.test(str)
  }
  
  console.log(telephoneCheck("555-555-5555"));
  //true