let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

 
   var name=prompt("YOUR NAME")
  document.getElementById("d1").innerHTML="WELCOME "+name;
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
       //TO ASSIGN THE VALUE OF BUTTON PRESSED TO THE SCREEN.
        if (buttonText == '') {
          screenValue += buttonText;
            screen.value = screenValue;
        }
        //TO CLEAR THE SCREEN.
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        //TO ON THE CALCULATOR BY SHOWING ZERO ON THE OUTPUT SCREEN.
        else if (buttonText == 'ON') {
          screenValue="0";
          screen.value = screenValue;
        }
         
        
          //FOR RESETING THE CALCULATOR
          else if (buttonText == 'RESET') {
            screenValue="RESETTING <PRESS ON>  ";
            screen.value = screenValue;
          }
          //FOR DELETING THE LAST CHARACTER
          else if (buttonText == 'DEL') {
            screenValue=screenValue.substr(0, screenValue.length - 1);;
            screen.value = screenValue;
          }
          //TO REPLACE ZERO WITH THE NUMBER PRESSED IN THE BEGINING.
          //ALSO NOT TO REPLACE ZERO BY ANY OPERATOR.
          else if(screenValue=="0"){
            if(buttonText=='*'||buttonText=='+'||buttonText=='/'||buttonText=='%'||buttonText=='='||buttonText=='-'){
            screenValue= "0"+buttonText;
            screen.value=screenValue;
            }
            else{
            screenValue=buttonText;
            screen.value=screenValue;
          }
        }
          //TO CALL THE EVAL FUNCTION TO EVALUATE THE EQUATION
          else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        //TO SHOW ERROR WHEN USER STARTS WITH OPERATORS.
        else if( screenValue==""&&(buttonText=='*'||buttonText=='+'||buttonText=='/'||buttonText=='%')){
               
            screenValue="Syntax Error<PRESS AC>";
            screen.value=screenValue;
            
        }
       else {
            screenValue += buttonText;
            screen.value = screenValue;
        
      }
    })
  }
    
  

    
 