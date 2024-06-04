let value = [1,2,1,2,4,2,6,4]
let checkObje = {}
let newArray = []

for (let index = 0; index < value.length; index++) {
    const element = value[index];
    if(!checkObje[element]){
        checkObje[element]= true
        newArray.push(element)
    }   
}

console.log("newArray: ", checkObje)

