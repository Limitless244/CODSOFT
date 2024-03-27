function appendToDisplay(value) {

    document.getElementById('display').value += value;

  }

  

  function clearDisplay() {

    document.getElementById('display').value = '  ';

  }

  function del(){

    document.getElementById('display').value=document.getElementById('display').value.slice(0,-1);

}

  function calculate() {

    let expression = document.getElementById('display').value;

    let result = eval(expression);

    document.getElementById('display').value = result;}

    
