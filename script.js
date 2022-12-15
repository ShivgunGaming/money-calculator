/* 
🌟 APP: Money Calculator 🌟
*/

const billInputPP = document.getElementById('billTotalInput')
const tipInputPP = document.getElementById('tipInput')
const totalMoneyLeftDiv = document.getElementById('perPersonTotal')


const calculateBill = () => {
  
  const money = Number(billInputPP.value)

  
  const percentage = Number(tipInputPP.value)

  
  const moneyAmount = percentage * money

  
  const totalMoney = moneyAmount / 100

  
  totalMoneyLeftDiv.innerText = `$${totalMoney.toFixed(2)}`

}
