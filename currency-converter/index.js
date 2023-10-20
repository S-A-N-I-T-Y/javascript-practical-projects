const droplist = document.querySelectorAll(".drop-list select"),
    from = document.querySelector(".from select"),
    to = document.querySelector(".to select"),
    getButton = document.querySelector('form button')

    const countrycode = {
        "AFN":"",
     "EUR":"",
     "ALL":"",
     "DZD":"",
     "USD":"",
     "EUR":"",
     "AOA":"",
     "XCD":"",
     "XCD":"",
     "ARS":"",
     "AMD":"",
     "AWG":"",
     "AUD":"",
     "EUR":"",
     "AZN":"",
     "BSD":"",
     "BHD":"",
     "BDT":"",
     "BBD":"",
     "BYN":"",
     "EUR":"",
     "BZD":"",
     "XOF":"",
     "BMD":"",
     "BTN":"",
     "BOB":"",
     "USD":"",
     "BAM":"",
     "BWP":"",
     "NOK":"",
     "BRL":"",
     "USD":"",
     "BND":"",
     "BGN":"",
     "XOF":"",
     "BIF":"",
     "CVE":"",
     "KHR":"",
     "XAF":"",
     "CAD":"",
     "KYD":"",
     "XAF":"",
     "XAF":"",
     "CLP":"",
     "CNY":"",
     "AUD":"",
     "AUD":"",
     "COP":"",
     "KMF":"",
     "XAF":"",
     "CDF":"",
     "NZD":"",
     "CRC":"",
     "HRK":"",
     "CUC":"",
     "ANG":"",
     "EUR":"",
     "CZK":"",
     "XOF":"",
     "DKK":"",
     "DJF":"",
     "XCD":"",
     "DOP":"",
     "USD":"",
     "EGP":"",
     "USD":"",
     "XAF":"",
     "ERN":"",
     "EUR":"",
     "SZL":"",
     "ETB":"",
     "FKP":"",
     "DKK":"",
     "FJD":"",
     "EUR":"",
     "EUR":"",
     "EUR":"",
     "XPF":"",
     "EUR":"",
     "XAF":"",
     "GMD":"",
     "GEL":"",
     "EUR":"",
     "GHS":"",
     "GIP":"",
     "EUR":"",
     "DKK":"",
     "XCD":"",
     "EUR":"",
     "USD":"",
     "GTQ":"",
     "GBP":"",
     "GNF":"",
     "XOF":"",
     "GYD":"",
     "HTG":"",
     "AUD":"",
     "EUR":"",
     "HNL":"",
     "HKD":"",
     "HUF":"",
     "ISK":"",
     "INR":"",
     "IDR":"",
     "IRR":"",
     "IQD":"",
     "EUR":"",
     "GBP":"",
     "ILS":"",
     "EUR":"",
     "JMD":"",
     "JPY":"",
     "GBP":"",
     "JOD":"",
     "KZT":"",
     "KES":"",
     "AUD":"",
     "KPW":"",
     "KRW":"",
     "KWD":"",
     "KGS":"",
     "LAK":"",
     "EUR":"",
     "LBP":"",
     "LSL":"",
     "LRD":"",
     "LYD":"",
     "CHF":"",
     "EUR":"",
     "EUR":"",
     "MOP":"",
     "MKD":"",
     "MGA":"",
     "MWK":"",
     "MYR":"",
     "MVR":"",
     "XOF":"",
     "EUR":"",
     "USD":"",
     "EUR":"",
     "MRU":"",
     "MUR":"",
     "EUR":"",
     "MXN":"",
     "USD":"",
     "MDL":"",
     "EUR":"",
     "MNT":"",
     "EUR":"",
     "XCD":"",
     "MAD":"",
     "MZN":"",
     "MMK":"",
     "NAD":"",
     "AUD":"",
     "NPR":"",
     "EUR":"",
     "XPF":"",
     "NZD":"",
     "NIO":"",
     "XOF":"",
     "NGN":"",
     "NZD":"",
     "AUD":"",
     "USD":"",
     "NOK":"",
     "OMR":"",
     "PKR":"",
     "USD":"",
     "ILS":"",
     "PAB":"",
     "PGK":"",
     "PYG":"",
     "PEN":"",
     "PHP":"",
     "NZD":"",
     "PLN":"",
     "EUR":"",
     "USD":"",
     "QAR":"",
     "EUR":"",
     "RON":"",
     "RUB":"",
     "RWF":"",
     "EUR":"",
     "SHP":"",
     "XCD":"",
     "XCD":"",
     "EUR":"",
     "EUR":"",
     "XCD":"",
     "WST":"",
     "EUR":"",
     "STN":"",
     "SAR":"",
     "XOF":"",
     "RSD":"",
     "SCR":"",
     "SLL":"",
     "SGD":"",
     "ANG":"",
     "EUR":"",
     "EUR":"",
     "SBD":"",
     "SOS":"",
     "ZAR":"",
     "GBP":"",
     "SSP":"",
     "EUR":"",
     "LKR":"",
     "SDG":"",
     "SRD":"",
     "NOK":"",
     "SEK":"",
     "CHF":"",
     "SYP":"",
     "TWD":"",
     "TJS":"",
     "TZS":"",
     "THB":"",
     "USD":"",
     "XOF":"",
     "NZD":"",
     "TOP":"",
     "TTD":"",
     "TND":"",
     "TRY":"",
     "TMT":"",
     "USD":"",
     "AUD":"",
     "UGX":"",
     "UAH":"",
     "AED":"",
     "GBP":"",
     "USD":"",
     "USD":"",
     "UYU":"",
     "UZS":"",
     "VUV":"",
     "VES":"",
     "VND":"",
     "USD":"",
     "USD":"",
     "XPF":"",
     "MAD":"",
     "YER":"",
     "ZMW":"",
      }

    ;

droplist.forEach((dropdown, index) => {
    for (currency in countrycode) {
        let selected;
        if (index == 0) {
            selected = currency == "USD" ? "selected" : "";
        }
        else if (index == 1) {
            selected = currency == "NGN" ? "selected" : "";
        }

        // Creating option tag with passing currency code as at ext and value
        let optionTag = `<option value="${currency}" ${selected}>${currency}</option>`
        // Inserting options inside tag elements
        dropdown.insertAdjacentHTML("beforeend", optionTag)
    }
})

window.addEventListener("load", () => {
    getExchangeRate()
})
getButton.addEventListener("click", e => {
    e.preventDefault()
    getExchangeRate()
})

const exchangeIcon = document.querySelector(".drop-list .icon")
exchangeIcon.addEventListener("click", ()=>{
   let hold = from.value
   from.value = to.value 
   to.value = hold
    getExchangeRate()
})

async function getExchangeRate() {
    const amount = document.querySelector(".amount input")
    let exchangeRatetxt = document.querySelector(".exchange-rate")
    let amountVal = amount.value
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
   
    }
    exchangeRatetxt.innerHTML ="Getting Exchange Rate..."
    let url = `https://v6.exchangerate-api.com/v6/52a2dfee7ba82b6d25c3685c/latest/${from.value}`;

    try{
        const res = await fetch(url)
        const data =  await res.json() 
        let exchangeRate = data.conversion_rates[to.value]
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2)
        exchangeRatetxt.innerHTML = `${amountVal} ${from.value} = ${totalExchangeRate} ${to.value}`
        console.log(totalExchangeRate)

    } 
    catch(error){
        console.log(error)
    }
}




