
let nameArr = [];
function display(names){
    
     if( nameArr.length>5 ){
        
       const limited= alert('You added a maximum player.')
        return limited;
      }
      document.getElementById('selectPlayer').innerText= nameArr.length;
    const tableBody = document.getElementById('playerName');
    tableBody.innerHTML= '';
    for(i =0; i< names.length; i++){
    
     const playername = nameArr[i].name;
    
    const tr = document.createElement('tr');
    tr.innerHTML= `<th scope="row">${i+1}</th>
    <td>${playername }</td>`

    tableBody.appendChild(tr);

}
}
function addToCart(element){
   
   const playerMame = element.parentNode.children[0].innerText;
  
   const arrObject = {
    name:playerMame
   }
   
   nameArr.push(arrObject);
  
 
 display(nameArr);

}


function getInputElementById(input){
    const inputField = document.getElementById(input);
    const inputString = inputField.value;
    const inputValue = parseInt(inputString);
    inputField.value='';
    return inputValue;
}
function getTextElementById(input){
    const inputText = document.getElementById(input);
    const inputString = inputText.innerText;
    const inputTextValue = parseInt(inputString);
    return inputTextValue;
}
function setInputText(elementText,newValue){
    const inputTextValue = document.getElementById(newValue);
    inputTextValue.innerText= elementText;
   
}

document.getElementById('costBTN').addEventListener('click',function(){
    const totalPlayer = getTextElementById('selectPlayer');
    const expenses =getInputElementById('cost');
    const playerExpense =totalPlayer * expenses;
     setInputText(playerExpense,'costTotal');
})
document.getElementById('totalCostBTN').addEventListener('click',function(){
    const totalPlayer = getInputElementById('coach');
    const expenses =getInputElementById('manager');
    const total =getTextElementById('costTotal');

    const playerExpense =totalPlayer + expenses +total;
    setInputText(playerExpense,'total');
})

