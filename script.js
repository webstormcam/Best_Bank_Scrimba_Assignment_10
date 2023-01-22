const accountStats = document.getElementById('accounts-stats')
let spendingStats = document.getElementById('spending-stats')
const accounts = [
    {
        id: 1,
        title: "Main Account",
        balance: "6,700.56",
        spendings: [
            {
                category: "Rent",
                spent: "1450"
            },
            {
                category: "Groceries",
                spent: "564"
            },
            {
                category: "Restaurants",
                spent: "123"
            },
            {
                category: "Transport",
                spent: "81"
            },
            {
                category: "Internet",
                spent: "50"
            }
           

        ]
    },
    {
        id: 2,
        title: "Expenses",
        balance: "5,134.63",
        spendings: [
            {
                category: "Netflix",
                spent: "19.99"
            },
            {
                category: "HBO Max",
                spent: "14.99"
            },
            {
                category: "Setapp",
                spent: "9.99"
            },
          
        ]
       
    },
    {
        id: 3,
        title: "Savings",
        balance: "36,500.12",
        spendings: [],
       
    }
]
renderAcccounts()
renderButtons()
initialRender()


function renderAcccounts(){
    let accountsOnPage=``
    for(let i = 0; i < accounts.length;i++){
     let account =`<div id=${accounts[i].id} class="account">
     <p>${accounts[i].title}</p>
     <p>${accounts[i].balance}</p>
     </div>`   
       accountsOnPage += account
    }
accountStats.innerHTML = accountsOnPage
}

function renderButtons(){
    
    for(let i= 0; i<accounts.length;i++){
        document.getElementById(accounts[i].id).addEventListener('click',function(){
            let spendingOnPage =``
            let spendature = ``
          for(let j=0;j<accounts[i].spendings.length;j++){
           spendature =  `<div style="width:${accounts[i].spendings[j].spent*0.20+350}px;" class="spent">
            <p>${accounts[i].spendings[j].category}</p>
            <p>$${accounts[i].spendings[j].spent}</p>
            
            </div>
            `
            spendingOnPage+=spendature
    
          }
         
           spendingStats.innerHTML=spendingOnPage
        })
    }
}


function initialRender(){
    let spendingOnPage =``
            let spendature = ``
    for(let j=0;j<accounts[0].spendings.length;j++){
        spendature =  `<div style="width:${accounts[0].spendings[j].spent*0.20+350}px;" class="spent">
         <p>${accounts[0].spendings[j].category}</p>
         <p>$${accounts[0].spendings[j].spent}</p>
         
         </div>
         `
         spendingOnPage+=spendature
 
       }
       spendingStats.innerHTML=spendingOnPage
}





