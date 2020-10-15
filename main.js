//store the gameboard as an array inside of a Gameboard object
//tuck everything inside of a factory function

//as an option, make the player choose X or O to play

 //const Gameboard = (function(){

    
    const container = document.querySelector('.board');
    const allDivs = document.querySelectorAll('#board div')
    //let markers = ['O', 'X'];
    const vsDiv = document.querySelector('.versus')
    const vsComputer = document.querySelector('.AI');
    const vsPlayer = document.querySelector('.player');
    const emptyDiv = document.querySelector('.empty');
    //const emptyDiv2 = document.querySelector('.another-empty')
    const markerX = 'X'
    const markerO = 'O'
    let counter = 0;
    let positionArr = ['','','',
                       '','','',
                       '','',''];

    vsPlayer.addEventListener('click', () => {
        container.classList.toggle('removed')
    emptyDiv.classList.toggle('removed')
    vsDiv.classList.toggle('removed')

    })
    
    const playerTurnText = document.createElement('span')
    emptyDiv.appendChild(playerTurnText);
    playerTurnText.textContent = 'X turn'

    container.classList.toggle('removed')
    emptyDiv.classList.toggle('removed')

    function game(e) {
        if (e.target.textContent === '') {
            //e.preventDefault();
            counter++
            if (counter % 2 === 0) {
            e.target.textContent = markerO
            counter = 0;
            playerTurnText.textContent = 'X turn'
            emptyDiv.appendChild(playerTurnText);
        } else if (counter % 2 !== 0) {
            e.target.textContent = markerX;
            counter = 1;
            
            playerTurnText.textContent = 'O turn'
            emptyDiv.appendChild(playerTurnText)
        }
    }
 
        for (let i = 0; i < positionArr.length; i++) {    
        positionArr[i] = container.children[i].textContent
            
        }

        winCondition(markerO);
        winCondition(markerX);

        if (playerTurnText.textContent === 'Its a tie' || playerTurnText.textContent === 'O wins' || playerTurnText.textContent === 'X wins' ) {
            container.removeEventListener('click', game);
        }
    }

    container.addEventListener('click', game);
    
    function winCondition(marker) {
        if (!positionArr.includes('')) {

            playerTurnText.textContent = 'Its a tie'
           return
       } else {
       // let winCond1 = [positionArr[0].includes(marker), positionArr[1].includes(marker), positionArr[2].includes(marker)]
        if (positionArr[0].includes(marker) && positionArr[1].includes(marker) && positionArr[2].includes(marker)) {
             playerTurnText.textContent = `${marker} wins`
             return;
            //`${marker} wins` //make a pop-up window with ${marker} wins
        } else if (positionArr[0].includes(marker) && positionArr[3].includes(marker) && positionArr[6].includes(marker)) {
            playerTurnText.textContent = `${marker} wins`
            return;
       } else if (positionArr[1].includes(marker) && positionArr[4].includes(marker) && positionArr[7].includes(marker)) {
        playerTurnText.textContent = `${marker} wins`
        return
       } else if (positionArr[2].includes(marker) && positionArr[5].includes(marker) && positionArr[8].includes(marker)) {
        playerTurnText.textContent = `${marker} wins`
        return 
       } else if (positionArr[3].includes(marker) && positionArr[4].includes(marker) && positionArr[5].includes(marker)) {
        playerTurnText.textContent = `${marker} wins`
        return
       } else if (positionArr[6].includes(marker) && positionArr[7].includes(marker) && positionArr[8].includes(marker)) {
        playerTurnText.textContent = `${marker} wins`
        return 
       } else if (positionArr[0].includes(marker) && positionArr[4].includes(marker) && positionArr[8].includes(marker)) {
        playerTurnText.textContent = `${marker} wins`
        return 
       } else if (positionArr[2].includes(marker) && positionArr[4].includes(marker) && positionArr[6].includes(marker)) {
        playerTurnText.textContent = `${marker} wins`
        return 
       } 
    }
    
       
    }
    
    
    // allDivs.forEach(square => square.addEventListener('click', function(e){
         
    // }))



     //return {}
    //private function convention - start with a '_'
 //})()