

    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    console.log(`O prwtos pextis rollare  ${diceRoll1}` )


    switch(diceRoll1){
        case 1:
            const one = document.getElementById("kaka1");
            one.setAttribute("src","./images/dice1.png" );
        
            break;

             case 2:
            const two = document.getElementById("kaka1");
            two.setAttribute("src","./images/dice2.png" );
        
            break;

             case 3:
            const three = document.getElementById("kaka1");
            three.setAttribute("src","./images/dice3.png" );
        
            break;

             case 4:
            const four = document.getElementById("kaka1");
            four.setAttribute("src","./images/dice4.png" );
        
            break;

             case 5:
            const five = document.getElementById("kaka1");
            five.setAttribute("src","./images/dice5.png" );
        
            break;

             case 6:
            const six = document.getElementById("kaka1");
            six.setAttribute("src","./images/dice6.png" );
        
            break;

           
          default:const def = document.getElementById("kaka1");
            def.setAttribute("src","./images/dice6.png" );

            break;
         
    }





let diceRoll2 = Math.floor(Math.random() * 6) + 1;
  console.log(`O deuteros pextis rollare  ${diceRoll2}` )


    switch(diceRoll2){
        case 1:
            const one = document.getElementById("kaka2");
            one.setAttribute("src","./images/dice1.png" );
        
            break;

             case 2:
            const two = document.getElementById("kaka2");
            two.setAttribute("src","./images/dice2.png" );
        
            break;

             case 3:
            const three = document.getElementById("kaka2");
            three.setAttribute("src","./images/dice3.png" );
        
            break;

             case 4:
            const four = document.getElementById("kaka2");
            four.setAttribute("src","./images/dice4.png" );
        
            break;

             case 5:
            const five = document.getElementById("kaka2");
            five.setAttribute("src","./images/dice5.png" );
        
            break;

             case 6:
            const six = document.getElementById("kaka2");
            six.setAttribute("src","./images/dice6.png" );
        
            break;

           default:const def = document.getElementById("kaka1");
            def.setAttribute("src","./images/dice6.png" );

            break;
          
         
    }


    if (diceRoll1>diceRoll2){
     const change =  document.getElementById("result");
         
          change.textContent = " Player 1 Wins !";
           
    }

    else if(diceRoll2>diceRoll1) {
        const change =  document. getElementById("result");
           change.textContent = " Player 2 wins !";
    }
    else {
         const change =  document. getElementById("result");
           change.textContent = "Draw !";

    }


   


