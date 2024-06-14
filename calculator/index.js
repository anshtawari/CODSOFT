let butun=document.querySelectorAll("button");
let oprator=document.querySelectorAll(".oprator");
let display=document.querySelector(".display");
let arr1=[] //arr1 to store the expression
let op1=0; let oprate;//op1 to to the arr1 in string form and show in display
//calcfxn to check if a no. button is pressed or other button
let calcfun=(event)=>{
    if(isNaN(event.target.value)){ //NaN=not a number
        opfxn(event)
    }
    else{
        let val=event.target.value;
        arr1.push(val); //add the value in array
        op1=arr1.join("") //converted the arrayto string
        display.innerText=op1 //to display it
    }
    }
let opfxn=(event)=>{  //there are diffeent fxn according to button value clicked
    let val=event.target.value; 
    if(val=="clr"){
        clrfxn() //to clear all the displa screen
    }
    else if(val=="del"){
        delfxn() //to delete a single digit
    }
    else if(val=="dot"){
        dotfxn() //for putting a dot have to make it coz . is not a number
    }
    else if(val=="equal"){
        
        equalfxn()// when pressing the = button to get result
    }
    else{
        opratfxn(val) //to identify oprator (i think it can be minimized)
    }
}   
let clrfxn=()=>{
    display.innerText=""
    arr1=[];
}
let delfxn=()=>{
    arr1.pop();
    op1=arr1.join("")
    display.innerText=op1
}
let dotfxn=()=>{
    arr1.push("."); 
    op1=arr1.join("")
    display.innerText=op1
}
let opratfxn=(val)=>{
    if(arr1.length==0){
        display.innerText="put a value first" //checking if someone write expression only without first no.
    }
    else{   // this is to display the oprators in screen 
        switch (val) {
            case "plus":
                displ("+")
                break;
            case "minus":
                displ("-")
                break;
            case "multiply":
                displ("*")
                break;
            case "devide":
                displ("/")
                break;       
            default:
                display.text="error"
                break;
        }
    }
}
function displ(op) {
    arr1.push(op); 
    op1=arr1.join("")
    display.innerText=op1
}
let equalfxn=()=>{
     try {let op1=arr1.join('');
     op1=eval(op1);
     display.innerText=op1
    }catch{
        display.style.color="red"
        display.innerText="ERROR"
    }

    //  let cot=oklfxn(opration)
}
// let oklfxn=(expression)=>{
//     let result = new Function('return ' + expression)();
//     return result;
// }
butun.forEach((but)=>{
    but.addEventListener("click",calcfun)
})
 