function  employeeId() {
     var arr=[0]
     let j=0;
     for(let i=1000;i<1007;i++)
         {
                
         arr[j]=i;
         j++;

         }
            return arr}
            var array=employeeId() ; 

            function salary(min,max){
                return (1-.075)*(Math.floor(Math.random() * (max - min) ) + min);


            }
            
            
            

let obj1={
    employeeID: 1245,
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    imageURL:"",
    salary:500



};
obj1.salary=salary(1500,2000);
obj1["employeeID"]=array[0];

let obj2={
    employeeID: 1245,
    fullName: "Lana Ali",
    department: "Finance",
    Level: "Senior",
    imageURL:"",
    salary:500



};
obj2["employeeID"]=array[1];
obj2.salary=salary(1500,2000);

let obj3={
    employeeID: 1245,
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    imageURL:"",
    salary:500



};
obj3["employeeID"]=array[2];
obj3.salary=salary(1500,2000);

let obj4={
    employeeID: 1245,
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    imageURL:"",
    salary:500



};
obj4["employeeID"]=array[3];
obj4.salary=salary(1000,1500);    

let obj5={
    employeeID: 1245,
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    imageURL:"",
    salary:500



};
obj5["employeeID"]=array[4];
obj5.salary=salary(1500,2000);

let obj6={
    employeeID: 1245,
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    imageURL:"",
    salary:500



};
obj6["employeeID"]=array[5];
obj6.salary=salary(500,1000)

let obj7={
    employeeID: 1245,
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    imageURL:"",
    salary:500



};
obj7["employeeID"]=array[6];
obj7.salary=salary(1000,1500);
let allEmployees=[obj1,obj2,obj3,obj4,obj5,obj6,obj7]
for (let i = 0; i < allEmployees.length; i++) {
     console.log(allEmployees[i]["fullName"]);
     console.log(allEmployees[i]["salary"]);
     console.log("-----------------------------");
    
}     