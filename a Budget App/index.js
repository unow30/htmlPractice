let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

//Set Budget Function

totalAmountButton.addEventListener("click", () =>{
    tempAmount = totalAmount.value;
    //Bad input
    if(tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    }else{
        errorMessage.classList.add("hide");
        // Set Bidget
        amount.innerHTML = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        // Clear input
        totalAmount.value = "";
    }
});

// Disable edit and delete button function

const disableButton = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach(element =>{
        element.disabled = bool;
    })
}

// modify list elements function

const modifyElement = (element, edit = false) =>{
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".product").innerText;
        userAmount.value = parentAmount;
    if(edit){
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableButton(true);
    }
    console.log('지출금액',currentExpense, '상품금액',parentAmount)
    currentBalance.innerText = parseInt(currentExpense) + parseInt(parentAmount);
    parentDiv.remove();
};

// Create list function

const listCreator = (expenseName, expenseValue) =>{
    let subListContent = document.createElement("div");
    subListContent.classList.add("sublist-content", "flex-space");
    list.appendChild(subListContent);
    subListContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount>${expenseValue}</p>`;
    
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
         modifyElement(deleteButton);
    });
    subListContent.appendChild(editButton);
    subListContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(subListContent);
};

// Add expenses function

checkAmountButton.addEventListener("click", () => {
    // Check empty
    if(!userAmount.value || !productTitle.value){
        productTitleError.classList.remove("hide");
        return false;
    }
    // Enable buttons
    disableButton(false);
    // Expense
    let expenditure = parseInt(userAmount.value);
    // Total expense (existing + new)
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;
    // Total balance = budget - total expense
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;
    // Create list
    console.log('listCreater들어가는값',productTitle.value, userAmount.value)
    listCreator(productTitle.value, userAmount.value);
    // Clear inputs
    productTitle.value = "";
    userAmount.value = "";
});