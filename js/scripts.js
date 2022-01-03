
let VacationCalculate =document.getElementById('vacationCalc')

VacationCalculate.addEventListener('submit',calcExpenses)

function getValues(){

    let 
    destiny =document.getElementById('destiny').value ,
    budget =document.getElementById('budget').value,
    acomodation =document.getElementById('acomodation').value,
    transport =document.getElementById('transport').value,
    food =document.getElementById('food').value;


    return{destiny,budget,acomodation,transport,food}

}
function calcExpenses(e){

    e.preventDefault();

    const{destiny,budget,acomodation,transport,food}=getValues();

    /*console.log(destiny,budget)*/

    let expenses=parseInt(acomodation)
    +parseInt(transport)+parseInt(food)

    let balance =budget-expenses
    UI(destiny,budget,balance)
    /*console.log(destiny,budget,balance)*/
}
    

function UI(destiny,budget,balance){

        let result =document.getElementById('result')
        let dataPrint =document.createElement('div')

        dataPrint.innerHTML=
        `
        <div class="container-data row">
            <div class="col s4">
                <h6>${destiny}</h6>
            </div>
            <div class="col s4">
                <h6>${budget}</h6>
            </div>
            <div class="col s4">
                <h6>${balance}</h6>
            </div>
            
        </div>
        `
        
        result.appendChild(dataPrint)
        
        reset();

    }

    function reset(){

document.getElementById('vacationCalc').reset()



    }
    

