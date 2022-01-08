const element = document.getElementById("root");

function container(){
   return `
   ${header()}
    <div id="container" onchange="calc()">
        <div id="column1">        
                    <label for="">ML</label>
                    <input type="number" name="" id="mlColumn1" value="269" >

                    <label for="">Preço</label>
                    <input type="number" name="" id="priceColumn1" value="">

                    <div id="result1"></div>
            </div>
            <div id="column2">
                    <label for="">ML</label>
                    <input type="number" name="" id="mlColumn2" value="350" >

                    <label for="">Preço</label>
                    <input type="number" name="" id="priceColumn2" value="">

                    <div id="result2"></div>
            </div>

    </div>
   `
}

function header(){
    return `
    <header>
        <h1>Latinha, Lata ou Latão?</h1>
    </header>`
}

function selector(id){
    return Number(document.querySelector(id).value)
}

function calc(){
   let ml1= selector("#mlColumn1")
   let price1 = selector("#priceColumn1")
   let ml2 = selector("#mlColumn2")
   let price2 = selector("#priceColumn2")

   let total1 = price1 * (1000/ml1)
   let total2 = price2 * (1000/ml2)

   let result1 = document.getElementById("result1").innerHTML = total1.toFixed(2)
   let result2 = document.getElementById("result2").innerHTML = total2.toFixed(2)

   if(result1 < result2){
    document.getElementById("result1").style.border = "1px solid green";
    document.getElementById("result2").style.border = "0px";
   }
   else{
    document.getElementById("result2").style.border = "1px solid green";
    document.getElementById("result1").style.border = "0px";
   }
  

   return result1 + result2
}

element.innerHTML = container()