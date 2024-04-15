function newList(array) {
let sorted = array.sort((a,b)=>a.localeCompare(b))
let final = ""
for(let i=0; i<sorted.length; i++){
    
    final+= `${i+1}.${sorted[i]}\n`
}
return final
}
console.log(newList(["John", "Bob", "Christina", "Ema"]));