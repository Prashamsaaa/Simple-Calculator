document.addEventListener("DOMContentLoaded",()=> {
    const outputElement = document.
    getElementById("output");
    let currentExpression = "";

    function updateOutput(value){
        outputElement.textContent = value;
    }

    function handleBUttonClick(value){
        currentExpression +=value;
        updateOutput(currentExpression);
    }

    function calculate() {
        try {
          const result = eval(currentExpression);
          updateOutput(result);
          currentExpression = result.toString();
        } catch (error) {
          updateOutput("Error");
          currentExpression = "";
        }
      }

    document.getElementById("btn-0").
    addEventListener("click",()=>{
        handleBUttonClick('0')
    })

    document.getElementById("btn-1").
    addEventListener("click",()=>{
        handleBUttonClick('1')
    })
    document.getElementById("btn-2").
    addEventListener("click",()=>{
        handleBUttonClick('2')
    })
    document.getElementById("btn-3").
    addEventListener("click",()=>{
        handleBUttonClick('3')
    })
    document.getElementById("btn-4").
    addEventListener("click",()=>{
        handleBUttonClick('4')
    })
    document.getElementById("btn-5").
    addEventListener("click",()=>{
        handleBUttonClick('5')
    })
    document.getElementById("btn-6").
    addEventListener("click",()=>{
        handleBUttonClick('6')
    })
    document.getElementById("btn-7").
    addEventListener("click",()=>{
        handleBUttonClick('7')
    })
    document.getElementById("btn-8").
    addEventListener("click",()=>{
        handleBUttonClick('8')
    })
    document.getElementById("btn-9").
    addEventListener("click",()=>{
        handleBUttonClick('9')
    })

    document.getElementById("btn-plus").
    addEventListener("click",()=>{
        handleBUttonClick('+')
    })
    document.getElementById("btn-sub").
    addEventListener("click",()=>{
        handleBUttonClick('-')
    })
    document.getElementById("btn-dot").
    addEventListener("click",()=>{
        handleBUttonClick('.')
    })
    document.getElementById("btn-div").
    addEventListener("click",()=>{
        handleBUttonClick('/')
    })
    document.getElementById("btn-mul").
    addEventListener("click",()=>{
        handleBUttonClick('*')
    })
    document.getElementById("btn-percent").
    addEventListener("click",()=>{
        handleBUttonClick('%')
    })

    document.getElementById("btn-ac").addEventListener("click", function () {
        currentExpression = "";
        updateOutput("0");
      });
    document.getElementById("btn-equals").addEventListener("click", function () {
        calculate();
      });

    document.getElementById("btn-del").addEventListener("click", function () {
        currentExpression = currentExpression.slice(0, -1);
        updateOutput(currentExpression || "0");
      });
    
})