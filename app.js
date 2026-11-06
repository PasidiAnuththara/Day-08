//=============================Customer List===================================//

const customerList = [];

function addCustomer() {
    let customerId = document.getElementById("txtId").value;
    let customerName = document.getElementById("txtName").value;
    let customerAge = document.getElementById("txtAge").value;
    let customerAddress = document.getElementById("txtAddress").value;
    let customerSalary = document.getElementById("txtSalary").value;


    let customer = {
        id: customerId,
        name: customerName,
        age: customerAge,
        address: customerAddress,
        salary: customerSalary
    };

    customerList.push(customer);
    loadCustomerTable();
    console.log(customerList);
}

function loadCustomerTable() {
    
    let body =`<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Salary</th>
    </tr>
    `

    for (let customer of customerList) {

        body += `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
            <td>${customer.salary}</td>
        </tr>
        `
    }
    document.getElementById("tblCustomers").innerHTML=body;
}
//=================================Item List===========================================//

const itemList = [];

function addItem() {
    let itemId = document.getElementById("itemId").value;
    let itemName = document.getElementById("itemName").value;
    let expDate = document.getElementById("itemExp").value;
    let itemPrice = document.getElementById("itemPrice").value;
    let itemNo = document.getElementById("itemNo").value;

    let item = {
        id: itemId,
        name: itemName,
        exp: expDate,
        rupee: itemPrice,
        call: itemNo
    };

    itemList.push(item);
    loadItemTable();
    console.log(itemList);
}

function loadItemTable() {
    
    let body =`
    <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>Item EXP</th>
        <th>Item Price</th>
        <th>Item Contact</th>
    </tr>
    `

    for (let item of itemList) {

        body += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.exp}</td>
            <td>${item.rupee}</td>
            <td>${item.Call}</td>
        </tr>
        `
    }
    document.getElementById("tblItem").innerHTML=body;
}