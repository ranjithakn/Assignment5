// JavaScript source code

/*Skip to content
Pull requests
Issues
Codespaces
Marketplace
Explore
@ranjithakn
zakruvalcaba /
    lab08
Public

Fork your own copy of zakruvalcaba / lab08

Code
Issues
Pull requests
Actions
Projects
Security

Insights

lab08 / js / script.js /
@zakruvalcaba
zakruvalcaba Minor updates to JavaScript
Latest commit 01f8f4e Mar 9, 2023
History
1 contributor
51 lines(43 sloc) 1.47 KB*/
// GLOBAL VARIABLES
let monthlyRate
let months
let futureValue
let monthlyInterest
let investment          // THE INVESTMENT TEXT BOX
let rate                // THE RATE TEXT BOX
let years               // THE YEARS TEXT BOX
let calculate           // THE CALCULATE BUTTON
let output              // THE OUTPUT TAG



// OPTION 1
// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id).value

// GET THE DOM ELEMENTS
investment = $('investment')
rate = $('rate')
years = $('years')
calculate = $('calculate')
output = $('output')

document.write(investment);
// OPTION 2
// let investment   = document.getElementById('investment')
// let rate         = document.getElementById('rate')
// let years        = document.getElementById('years')
// let calculate    = document.getElementById('calculate')
// let output       = document.getElementById('output')

// CALCULATE THE INVESTMENT AND RETURN THE RESULT
function calculateInvestment(investment, rate, years) {
    monthlyRate = rate / 12 / 100
    months = years * 12

    for (let i = 0; i < months; i++) {
        monthlyInterest = investment * monthlyRate
        investment += monthlyInterest
    }

    return investment
}

calculate.addEventListener('click', () => {
    futureValue = calculateInvestment(
        parseFloat(investment.value),
        parseFloat(rate.value),
        parseFloat(years.value)
    )

    output.innerHTML = `Future value on investment: $${futureValue.toFixed(2)}`
})
onclick = "getName()"