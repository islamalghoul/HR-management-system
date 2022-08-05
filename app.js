
let main =document.querySelector("main")
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
arrOfObj=[]
function allobj(name,department,salary,employeeID,imageURL,level){
this.name=name
this.department=department
this.salary=salary
this.employeeID=employeeID
this.imageURL=imageURL
this.level=level
arrOfObj.push(this)

}
allobj.prototype.render= function()
{
 

// document.write(`Employee name : ${this.name} <br>`)

// document.write(`Department : ${this.department}<br>`)
// document.write(`Employee salary : ${this.salary}<br><br><br>`)
}




    let obj1=new allobj("Ghazi Samer","Administration",salary(1500,2000),array[0],"./assests (1)/Ghazi.jpg","Senior")
    let obj2=new allobj("Lana Ali","Finance",salary(1500,2000),array[1],"./assests (1)/Lana.jpg","Senior")
let obj3=new allobj("Tamara Ayoub","Marketing",salary(1500,2000),array[2],"./assests (1)/Tamara.jpg","Senior")
let obj4=new allobj("Safi Walid","Administration",salary(1000,1500),array[3],"./assests (1)/Safi.jpg","Mid-Senior")
let obj5=new allobj("Omar Zaid","Development",salary(1500,2000),array[4],"./assests (1)/Omar.jpg","Senior")
let obj6=new allobj("Rana Saleh","Development",salary(500,1000),array[5],"./assests (1)/Rana.jpg","Junior")
let obj7=new allobj("Hadi Ahmad","Finance",salary(1000,1500),array[6],"./assests (1)/Hadi.jpg","Mid-Senior")








function ShowEmployees ()
{   
    
    let divAll  =document.createElement("div");
    main.appendChild(divAll);
    divAll.id="mainContaner"




let noEmployess = arrOfObj.length;
let noRows = Math.ceil(noEmployess /3) ;


for (let i = 0; i < noRows; i++) {
    
    let divRow=document.createElement("div");
    divRow.className="row";  
    divAll.appendChild(divRow);
    
    
}
let divRow=document.getElementsByClassName("row");
for (let j = 0; j < noRows; j++) {


for (let i = 0; i < 3 ; i++) {
    let divEmp=document.createElement("div");
    divEmp.className="emp"
    

    divRow[j].appendChild(divEmp); 
    if(j===2)
    {
        break;  
    }          
}
}
let divEmp=document.getElementsByClassName("emp")
for (let j = 0; j < noEmployess; j++) {
    
    let pic=document.createElement("img");
    pic.src=arrOfObj[j]["imageURL"]
    pic.width=300
    divEmp[j].appendChild(pic)
    let p= document.createElement("p")
    p.textContent="name : "+arrOfObj[j]["name"]+"- ID:"+arrOfObj[j]["employeeID"]
 divEmp[j].appendChild(p)
  p= document.createElement("p")
 p.textContent="Depaertment : "+arrOfObj[j]["department"]+"- level"+arrOfObj[j]["level"]
divEmp[j].appendChild(p)
p= document.createElement("p")
 p.textContent=+arrOfObj[j]["salary"]
divEmp[j].appendChild(p)
}

}
ShowEmployees();
