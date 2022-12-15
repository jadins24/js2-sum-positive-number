var a=parseInt(prompt("main array"));
var b=[]; 
var c=0;
for(var i=0;i<a;i++){
    b[i]=parseInt(prompt("enter values"));
}
    document.write(b+"<br>")

for(var j=0;j<a; j++){
    if(b[j]>0){
       c=c+b[j]
    }
    
}
document.write(c)