function add(a,b)
{
    return a+b
}
const mul=(a,b)=>
{
    return a*b
}
console.log(mul(12,11));

const obj=
{
    name:"Thenu",
    age:19,
    message:function()
    {
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.message());
//multiplied by 3
const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((n)=>n*3)
console.log(mappednum);
//positive number
const posinum=numbers.filter((n)=>n>0)
console.log(posinum);
//odd number
const oddnum=numbers.filter((n)=>n%2!==0)
console.log(oddnum);
//even number
const evennum=numbers.filter((n)=>n%2==0)
console.log(evennum);
//total sum
const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);
//price-total
const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500}
]
const totalprice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totalprice);
//more than 5k
const products1=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500},
    {name:'game',price:2500},
    {name:'tab',price:4500},
    {name:'ac',price:12500}
]
const x=products1.filter((n)=>n.price>5000)
console.log(x);
//Destructuring 1
const user={name:'cr7',password:'12345678'}
const {name,password}=user
console.log(name);
console.log(password);
//Destructuring 2
const number=[1,2,3,4,5,6,7,8]
const [first,second,third]=number
console.log(first);
console.log(second);
console.log(third);
//spread operator 1
const arr1=[1,2,3,4]
const copy=[...arr1,5,6,7,8]
console.log(copy);
//spread operator 2
const arr11=[1,2,3,4]
const arr21=[5,6,7,8]
const copy1=[...arr21,...arr11]
console.log(copy1);
//spread operater 3
const number1=[1,2,3,4,5,6,7,8]
const [first1,second1,third1,...remaining]=number1
console.log(remaining);
//rest operator
function add1(...arguments)
{
    return arguments
}
console.log(add1(1,2,3,4,5));
//callback--calling function in parameter
function call()
{
    console.log('from inside callback');
}
function fun(name,callback)
{
    callback()
    return `${name} from outside callback`
}
console.log(fun('function',call));
//async
async function fetchUsers()
{
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data=await response.json()
//console.log(data);
data.map((a)=>console.log(a.name))
}
catch(error)
{
    console.log(error);
}
}
fetchUsers()