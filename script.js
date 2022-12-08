/* 
🌟 APP: Money Calculator | COMPLETED THE PROJECT CONGRATULATIONS! 🌟

These are the 3 functions you must use 👇
=========================================
calculateBill() ✔️
increasePeople() ✔️
decreasePeople() ✔️

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billInputPP = document.getElementById('billTotalInput')
const tipInputPP = document.getElementById('tipInput')
const totalMoneyLeftDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div

// ** Calculate the total bill per person COMPLETED WELL DONE! **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  // get bill from user input & convert it into a number
  const money = Number(billInputPP.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const percentage = Number(tipInputPP.value)

  // get the total tip amount
  const moneyAmount = percentage * money

  // calculate the total (tip amount + bill)
  const totalMoney = moneyAmount / 100

  // update the perPersonTotal on DOM & show it to user
  totalMoneyLeftDiv.innerText = `$${totalMoney.toFixed(2)}`

}
