const { memo } = require("react")

console.log("Hello")
let my_visited_country=[
    "Dhaka",
    "Delhi",
    "Utter_Pradesh",
    "Beijing",
    "Guanzou",
    "Kobe",
    "Hirosima",
    "Okinawa",
    "Tokyo"
]

console.log(my_visited_country.indexOf("Kobe"))
console.log(my_visited_country.lastIndexOf('Tokyo'))
console.log(my_visited_country.length)
my_visited_country[3]="Saitama"
console.log(my_visited_country)
const nullTye=null;
console.log(typeof nullTye)
let myName;
if(myName==undefined)console.log("TRUE")
else console.log("FALSE")

console.log(my_visited_country.unshift("Istanbul"))
console.log(my_visited_country.unshift("Nanzing"))
console.log(my_visited_country.unshift("Sydney"))
console.log(my_visited_country.unshift("Paris"))
console.log(my_visited_country.unshift("Berlin"))
console.log(my_visited_country.unshift("New York"))
console.log(my_visited_country.unshift("Mountain View,California"))
console.log(my_visited_country)

var x=[4,2,1,5,7,9,3]
var sorting=x.sort((a,b)=>a-b)
sorting=x.sort((a,b)=>b-a)
console.log(sorting)

/**
 * 1.Primitive Type data
 * =>int
 * =>float
 * =>bigint
 * =>symbol
 * =>boolean
 * =>null
 * =>defined
 * 
 * 2.Non-primitive data
 * =>array
 * =>object
 * =>function
 * =>Date 
 * 
 */
var Person={name:"Rifat"}
console.log("Person",Person)
var NewPerson=Person;
Person.name="Shahriar"
console.log("Shahriar",NewPerson)
console.log({}=={})
console.log(5===5)
console.log(10==10)
//**Stack memory
//**Heap memory */
let x1=36,y=56,z=34;
console.table([x1,y,z])
let name="Abu Al Shahriar Rifat"
let spliced=Array.from(name).splice(0,1,'m')
let sliced=Array.from(name).slice(0,5)
let spliceIs=Array.from(name);
let modified=spliceIs.splice(0,1,'m')
console.log(modified)

//Object in Javascript
var x={}
console.log( typeof x)
x.name="Rifat Shahriar,phd,postdoc"
x.Bsc="IT,Sharda University,India",
x.Msc="Civil and Transpotation Engineering,Hohai University,China"
x.second_Msc="Computer Vision,Germany",
x.Third_Msc="Computer Vision,Finland",
x.Phd="Phd in Computer Science,Sydney University,Australia",
x.PostDoc="Postdoc,Melborne University,Australia,",
x.Profession="Research Scientist,Meta,Sydney,Australia",
x.Ismarried=true
console.log(x);

for (let i in x){
    console.log(x[i])
}
console.log(x.name)
console.log(x.Bsc)
console.log(x.Third_Msc)
console.log(x.Phd)
console.log(x["PostDoc"])
console.log(x["Profession"])







