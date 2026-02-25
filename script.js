//Data Types:
// string
// number
// boolean
// array
// object
// function
// undefined
// null

// Chapter-1 Aleat Name
document.getElementById("name").onclick = () => {
   alert("Imran Shahzad")
   let statement = "alert('Imran Shahzad')"
   document.getElementById("statement").innerHTML = statement
   document.getElementById("output").innerHTML = ""
}

// Chapter-2 Aleat Number
document.getElementById("num").onclick = () => {
   alert("1234567890")
   let statement = "alert('1234567890')"
   document.getElementById("statement").innerHTML = statement
   document.getElementById("output").innerHTML = ""
}

// Chapter-3 Show Veriable Names
document.getElementById("ver").onclick = () => {
   document.getElementById("statement").innerHTML = ""
   document.getElementById("output").innerHTML = ""

   let html = "<ul> <li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string Floribundas to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>"
   document.getElementById("output").innerHTML = html
}

// Chapter-4 Show camelCase 
document.getElementById("camel").onclick = () => {
   document.getElementById("statement").innerHTML = ""
   document.getElementById("output").innerHTML = ""

   let html = "I teach the camelCase naming convention. Why 'camelCase'? Because there is a hump or two (or three) in the middle if the name is formed by more than one word. A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like <code>response</code>, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up."
   document.getElementById("output").innerHTML = html
}

// Chapter-5 Sum 2 numbers 
document.getElementById("sum").onclick = () => {
   var num1 = Number(prompt("Insert 1st number"))
   var num2 = Number(prompt("Insert 2nd number"))
   let sum = num1 + num2
   document.getElementById("statement").innerHTML = "let sum = num1 + sum2"
   document.getElementById("output").style.textAlign = "center"
   document.getElementById("output").innerHTML  = sum
}

// Chapter-6 Subtract 2 numbers 
document.getElementById("sub").onclick = () => {
   var num1 = prompt("Insert 1st number")
   var num2 = prompt("Insert 2nd number")
   let subtract = num1 - num2
   document.getElementById("statement").innerHTML = "let subtract = num1 - sum2"
   document.getElementById("output").style.textAlign = "center"
   document.getElementById("output").innerHTML  = subtract
}

// Chapter-7 Multiple 2 numbers 
document.getElementById("mul").onclick = () => {
   var num1 = prompt("Insert 1st number")
   var num2 = prompt("Insert 2nd number")
   let multiple = num1 * num2
   document.getElementById("statement").innerHTML = "let multiple = num1 * sum2"
   document.getElementById("output").style.textAlign = "center"
   document.getElementById("output").innerHTML  = multiple
}

// Chapter-8 Divide 2 numbers 
document.getElementById("divide").onclick = () => {
   var num1 = prompt("Insert 1st number")
   var num2 = prompt("Insert 2nd number")
   var divide = num1 / num2
   document.getElementById("statement").innerHTML = "let divide = num1 / sum2"
   document.getElementById("output").style.textAlign = "center"
   document.getElementById("output").innerHTML  = divide
}

// Chapter-9 Calculation 
document.getElementById("calculation").onclick = function () {
   let equation = prompt("Insert Equation")
   let result = eval(equation)
   document.getElementById("statement").innerHTML = equation
   document.getElementById("output").style.textAlign = "center"
   document.getElementById("output").innerHTML  = result

   // let output = document.getElementById("output")
   // output.style.textAlign = "center"
   // output.innerHTML = result
}
   





// Clear Buttons
document.getElementById("btnstatement").onclick = () => {
   document.getElementById("statement").innerHTML = ""
}

document.getElementById("btnoutput").onclick = () => {
   document.getElementById("output").innerHTML = ""
}