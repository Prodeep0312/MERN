// var housekeeper1={
//     name:"Rosy",
//     isPreviouslyTrained:true,
//     age:23,
//     experienceInYears:3
// }

// alert(housekeeper1.name +"'s experience is:"+housekeeper1.experienceInYears+" years");

function HouseKeeper(name,age,isPreviouslyTrained,experienceInYears)
{
    this.name=name;
    this.age=age;
    this.isPreviouslyTrained=isPreviouslyTrained;
    this.experienceInYears=experienceInYears;
    this.cleaning=function(){
       alert("CLEANINGGGG!!"); 
    }
}

var housekeeper1=new HouseKeeper("Ashley",21,true,0);
var housekeeper2=new HouseKeeper("Jade",26,true,4);


alert(housekeeper1.age);
alert(housekeeper2.name);
housekeeper1.cleaning();