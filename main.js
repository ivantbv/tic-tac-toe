//store the gameboard as an array inside of a Gameboard object
//tuck everything inside of a factory function

//as an option, make the player choose X or O to play

 //const Gameboard = (function(){

    
    let container = document.querySelector('#board');
    let allDivs = document.querySelectorAll('#board div')
    let markers = ['O', 'X'];
    let markerX = 'X'
    let markerO = 'O'
    let counter = 0;
    let positionArr = ['','','',
                       '','','',
                       '','',''];

    container.addEventListener('click', (e) => {
        //let dataEl = document.querySelectorAll(`div[data-num]`)
        //let dataEl = document.querySelectorAll('.square[data-num]')
        
        if (e.target.textContent === '') {
            //e.preventDefault();
            counter++
            if (counter % 2 === 0) {
            e.target.textContent = markerO
            counter = 0;
            
        } else if (counter % 2 !== 0) {
            e.target.textContent = markerX;
            counter = 1;
            
        }
    }
 
        for (let i = 0; i < positionArr.length; i++) {    
        positionArr[i] = container.children[i].textContent
            
        }

        winCondition('O');
        winCondition('X', container.style.pointerEvent);
        
    }) 

    function winCondition(marker, event) {
        if (!positionArr.includes('')) {

           console.log ('Its a tie')
           return `Its a tie`
       } else {
       // let winCond1 = [positionArr[0].includes(marker), positionArr[1].includes(marker), positionArr[2].includes(marker)]
        if (positionArr[0].includes(marker) && positionArr[1].includes(marker) && positionArr[2].includes(marker)) {
             console.log(`${marker} wins`)
             event = 'none'
             //container.disabled = true;
            return false;
            //`${marker} wins` //make a pop-up window with ${marker} wins
        } else if (positionArr[0].includes(marker) && positionArr[3].includes(marker) && positionArr[6].includes(marker)) {
            console.log(`${marker} wins`)
            container.style.pointerEvent = 'none'
           return `${marker} wins`
       } else if (positionArr[1].includes(marker) && positionArr[4].includes(marker) && positionArr[7].includes(marker)) {
        console.log(`${marker} wins`)
        return `${marker} wins`
       } else if (positionArr[2].includes(marker) && positionArr[5].includes(marker) && positionArr[8].includes(marker)) {
        console.log(`${marker} wins`)
        return `${marker} wins`
       } else if (positionArr[3].includes(marker) && positionArr[4].includes(marker) && positionArr[5].includes(marker)) {
        console.log(`${marker} wins`)
        return `${marker} wins`
       } else if (positionArr[6].includes(marker) && positionArr[7].includes(marker) && positionArr[8].includes(marker)) {
        console.log(`${marker} wins`)
        return `${marker} wins`
       } else if (positionArr[0].includes(marker) && positionArr[4].includes(marker) && positionArr[8].includes(marker)) {
        console.log(`${marker} wins`)
        return `${marker} wins`
       } else if (positionArr[2].includes(marker) && positionArr[4].includes(marker) && positionArr[6].includes(marker)) {
        console.log(`${marker} wins`)
        return `${marker} wins`
       } 
    }
       
    }
    

    // allDivs.forEach(square => square.addEventListener('click', function(e){
         
    // }))



     //return {}
    //private function convention - start with a '_'
 //})()