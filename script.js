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
           

        ],
        displayPrice(){
            console.log(this.spendings)
        }
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
          
        ],
        displayPrice(){
            console.log(this.spendings)
        }
    },
    {
        id: 3,
        title: "Savings",
        balance: "36,500.12",
        spendings: [],
        displayPrice(){
            console.log(this.spendings)
        }
    }
]

const accountStats = document.getElementById('accounts-stats')

function renderAcccounts(){
    let accountsOnPage=``
    for(let i = 0; i < accounts.length;i++){
     let account =`<div onclick="${accounts[i].displayPrice}" class="account">
     <p>${accounts[i].title}</p>
     <p>${accounts[i].balance}</p>
     
     </div>`   


    accountsOnPage+= account
    }
accountStats.innerHTML = accountsOnPage
}


renderAcccounts()