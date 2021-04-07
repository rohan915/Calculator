let display = document.querySelector("#display");
let addButton = document.querySelector("#add")
let number1 = "";
let number2 = "";
 let switching = false;
 let equal = document.querySelector("#equal")
 let div = document.querySelector("#divide")
 let mult = document.querySelector("#multiply");
 let sub = document.querySelector("#subtract")
 let done = false
 let divResult;

 operation = "";

let elements = document.getElementsByClassName("num")



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    if (done == true) {
        divResult = num1 - num2
    } else {
        divResult = num2 - num1
    }
    return divResult;
}

function multiply(num1, num2) {
    return num2 * num1
}

function divide(num1, num2) {
   
        divResult = num2 / num1

    


    
  

    return divResult
}

function operate() {

    if (operation != "") {
        switch(operation) {
            case "add": 
            display.value = `${add(number1, number2)}`
            

            break;

            case "divide":
                display.value = `${divide(number1, number2)}`

            break;

            case "multiply":
                display.value = `${multiply(number1, number2)}`

            break;

            case "subtract":
                display.value = `${subtract(number1, number2)}`

            break;
        }
    }

}

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (e) => {
        if (done == false) {
            display.value += `${e.target.id}`
            number1 = Number(display.value)


        } else if (done == true) {
            display.value += `${e.target.id}`
            number2 = Number(display.value)

        }
        
      
            
        
        
       
        

        
        
        
    })
}

addButton.addEventListener("click", () => {
    
    if (number1 != "" || done == true)  {


        
        number2 = Number(display.value)
        operation = "add"
        display.value = ""
        

    }
})
div.addEventListener("click", () => {
    if (number1 != "")  {
        
        number2 = Number(display.value)
        operation = "divide"
        display.value = ""
        

    }

})

mult.addEventListener("click", () => {
    if (number1 != "") {
        number2 = Number(display.value)
        operation = "multiply"
        display.value = ""
        
    }
})

sub.addEventListener("click", () => {
    if (number1 != "") {
        number2 = Number(display.value)
        operation = "subtract"
        display.value = ""
        
    }

})
equal.addEventListener("click", () => {
operate()
done = true
number1 = Number(display.value)
number2 = ""





})



document.querySelector("#clear").addEventListener("click", () => {
    display.value = ""
    done = false;
})
