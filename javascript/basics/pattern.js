let prompt =require("prompt-sync")({sigint:true})
let n=prompt("n: ")
for (let i=0 ; i<n;i++){
    let pattern=""
    for (let j=0; j<n;j++){
        pattern +="* "
        
    }
    console.log(pattern);  
}
