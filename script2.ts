{const obj1:{a:number,b:string} = { a: 1, b: "hello" }; 
const obj2:{b:String,c:boolean} = { b: "world", c: true }; 
const obj3:{c:boolean,d:number[]} = { c: false, d:[1,2,3,4]};
function combinedObjects(obj1:any,...args:any[]){
    for(let arg of args){
     obj1={...obj1,...arg}
    }
    Object.keys(obj1).forEach(key=>{
        if(obj1[key]===null){
            delete obj1[key]
        }
    })
    return obj1;
 }
const obj4=combinedObjects(obj1,obj2,obj3);
console.log(obj4);
}
