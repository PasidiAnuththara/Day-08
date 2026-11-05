const itemName=[];

function btnClick(){
    let nameitem1=document.getElementById("cusId").value;
    let nameitem2=document.getElementById("cusName").value;

    let customer(){
        id: ;
        name: customerName
    }

    itemName.push(nameitem);
    loadItem();
}
function loadItem(){
    document.getElementById("olItem").innerHTML="";
    for(let iName of itemName){
        document.getElementById("olItem").innerHTML+=`<li>${iName}</li>`
    }
}


const customerName = [];

function btnClickme(){
    let txtName=document.getElementById("textname").value;
    customerName.push(txtName);
    // console.log(customerName);
    loadNames();

}
function loadNames(){
    document.getElementById("olCustomer").innerHTML="";
    for(let cName of customerName){
        document.getElementById("olCustomer").innerHTML+=`<li>${cName}</li>`
    }
}








// const customerList = [];

// function addCustomer() {
//     let customerId = document.getElementById("txtId").value;
//     let customerName = document.getElementById("txtName").value;
//     let customerAge = document.getElementById("txtAge").value;
//     let customerAddress = document.getElementById("txtAddress").value;
//     let customerSalary = document.getElementById("txtSalary").value;


//     let customer = {
//         id: customerId,
//         name: customerName,
//         age: customerAge,
//         address: customerAddress,
//         salary: customerSalary
//     };

//     customerList.push(customer);
//     loadCustomerTable();
//     console.log(customerList);
// }

// function loadCustomerTable() {
    
//     let body =`<tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Address</th>
//         <th>Salary</th>
//     </tr>`

//     for (let customer of customerList) {

//         body += `
//         <tr>
//             <td>${customer.id}</td>
//             <td>${customer.name}</td>
//             <td>${customer.age}</td>
//             <td>${customer.address}</td>
//             <td>${customer.salary}</td>
//         </tr>
//         `
//     }
//     document.getElementById("tblCustomers").innerHTML=body;
// }