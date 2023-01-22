var x=30
if(x===30){
    console.log("matched")
}

const arr=[2,3,4,5]
console.log(arr[0])

const app=require('./app')
console.log(app.x)
console.log(app.z())

let result=arr.filter((item)=>{
return item>=2
})
console.warn(result)

