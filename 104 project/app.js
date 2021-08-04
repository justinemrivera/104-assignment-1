var salon={
    name:"Furry Fashionista",
    telephone:"555-555-555",
    address:{
        street:"Palm",
        number:"345"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Full Service",
            ownerName:"Shaggy",
            contactPhone:"555-555-555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Nails Cut",
            ownerName:"Shaggy",
            contactPhone:"555-555-555"
            },
            {
            name:"Benny",
            age:30,
            gender:"Male",
            breed:"Yorkie",
            service:"Shampoo and dry",
            ownerName:"Justine",
            contactPhone:"555-222-555"
        },
        {
            name:"Kayla",
            age:21,
            gender:"Female",
            breed:"Poodle",
            service:"Hair Cut",
            ownerName:"Justine",
            contactPhone:"555-222-555"
            }
    ]
}

/*console.log(`${salon.name} opens from ${salon.hour.open} to ${salon.hour.close}.`)*/

function displayInfo(){
document.getElementById("footer-site").innerHTML=`
<p>${salon.name}</p>
<p>${salon.address.street}, ${salon.address.number} telephone number: ${salon.telephone}
<p>The salon is open from ${salon.hour.open} to ${salon.hour.close}</p>
`;
}
displayInfo();


document.write(`There are ${salon.pets.length} pets in the salon`);


for(var i=0;i<salon.pets.length;i++){
  document.write(`<p>Pet Name: ${salon.pets[i].name}</p>`)
}









/*console.log("App");
//object literal
const person={
    name:"Justine",
    city:"New York",
    age:27,
    student:true,
    music:["Coldplay","Oasis","Beatles"],
    address:{
        street:"University",
        number:"262-K"
    }
}
console.log(person.name);
console.log(person.age); 
console.log(person.music[1]);
console.log(person.address.number);*/