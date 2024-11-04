

var data = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Maple Street, New York, NY"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      address: "456 Oak Avenue, Los Angeles, CA"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      address: "789 Pine Road, Chicago, IL"
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emilybrown@example.com",
      address: "321 Birch Lane, Miami, Florida"
    },
    {
      id: 5,
      name: "Chris Wilson",
      email: "chriswilson@example.com",
      address: "654 Cedar Street, Austin, tx"
    },
    {
    id: 6,
    name: "Chris",
    email: "chris@example.com",
    address: "625 Cedar Street, Austin, TX"
  }

  ];
  

function createTable(){
    var tableRef = document.createElement("table");
    var tr1 = document.createElement("tr");


    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");

    th1.innerText = "Id";
    th2.innerText = "Name";
    th3.innerText = "Email";
    th4.innerText = "Address";
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);   
    
    tableRef.appendChild(tr1);

    
tableRef.width = "400px";
tableRef.frame = "box";
tableRef.rules = "all";
tableRef.style.margin = "auto";
tableRef.cellPadding = "10px";

tr1.style.backgroundColor = "green";
tr1.style.color = "violet";
tr1.style.fontWeight = "bold"; 
tr1.style.textAlign = "center"; 
tr1.style.height = "40px";


for(let user of data){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerText = user.id;
    td2.innerText = user.name;
    td3.innerText = user.email;
    td4. innerText = user.address;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tableRef.appendChild(tr);

}



var bodyRef = document.getElementsByTagName("body");
         bodyRef[0].appendChild(tableRef)
         console.log(bodyRef);
}