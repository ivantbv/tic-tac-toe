//store the gameboard as an array inside of a Gameboard object
//tuck everything inside of a factory function

 //const Gameboard = (function(){    
    const container = document.querySelector('.board');
    const allDivs = document.querySelectorAll('.board div')
    const vsDiv = document.querySelector('.versus')
    const vsComputer = document.querySelector('.AI');
    const vsPlayer = document.querySelector('.player');
    const emptyDiv = document.querySelector('.empty');
    const resetButton = document.querySelector('.reset')
    const backButton = document.querySelector('.back')
    //const emptyDiv2 = document.querySelector('.another-empty')
    const markerX = 'X'
    const markerO = 'O'
    const markersArr = ['X', 'O']
    let AI = false;
    let human = false;
    let counter = 0;
    let positionArr = ['','','',
                       '','','',
                       '','',''];
    
    vsPlayer.addEventListener('click', () => {
        human = true;
        AI = false;
        toggleRemovedClass()
        resetBtn();
    } );

    backButton.addEventListener('click', toggleRemovedClass)

    vsComputer.addEventListener('click', () => {
        AI = true;
        human = false;
        toggleRemovedClass()

        resetBtn();

    } )
    
    const playerTurnText = document.createElement('span')
    emptyDiv.appendChild(playerTurnText);
    playerTurnText.textContent = 'X turn'

    container.classList.toggle('removed')
    emptyDiv.classList.toggle('removed')
    resetButton.classList.toggle('removed')
    backButton.classList.toggle('removed');

    container.addEventListener('click', game);

    resetButton.addEventListener('click', resetBtn);

    function computerPlay(e) { 
        if (container.children.textContent !== markerX && container.children.textContent !== markerO && e.target.textContent === '') {           
            setTimeout(function() {
            let emptyIndices = positionArr
          let emptyIn =  emptyIndices.map( function (marker, index) { return{ marker: marker, index: index }})
            .filter(x => x.marker == '')
            .map(x => x.index);
          
          let computerIndex = emptyIn[Math.floor(Math.random() * emptyIn.length)];
          container.children[computerIndex].textContent = markerO;
            }, 290);
            //container.children[Math.floor(Math.random() * 9)].textContent= markerO;
            //container.children.textContent = markerX
            //counter = 1;
            playerTurnText.textContent = 'X turn'
            emptyDiv.appendChild(playerTurnText)

            e.target.textContent = markerX
        }
        
    }
    
    function game(e) {

        if (AI == true && human == false) {
//////////////////

           computerPlay(e)
           
           for (let i = 0; i < positionArr.length; i++) {    
            positionArr[i] = container.children[i].textContent 
            }
           
            winCondition(markerO);
            winCondition(markerX);
           if (playerTurnText.textContent === 'Its a tie' || playerTurnText.textContent === 'O wins' || playerTurnText.textContent === 'X wins' ) {
               container.removeEventListener('click', game);
           }
         
///////////////////////   
            
        } else if (AI == false && human == true) {
       
        if (e.target.textContent === '') {
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
        
    }

    function winCondition(marker) {
        if (!positionArr.includes('')) {

            playerTurnText.textContent = 'Its a tie'
           return
       } else {
       // let winCond1 = [positionArr[0].includes(marker), positionArr[1].includes(marker), positionArr[2].includes(marker)]
        if (positionArr[0].includes(marker) && positionArr[1].includes(marker) && positionArr[2].includes(marker)) {
             playerTurnText.textContent = `${marker} wins`
             return;
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

    function toggleRemovedClass() {
        container.classList.toggle('removed')
        emptyDiv.classList.toggle('removed')
        vsDiv.classList.toggle('removed')
        resetButton.classList.toggle('removed')
        backButton.classList.toggle('removed');
    }

    function resetBtn() {
        counter = 0;
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].textContent = '';
        }
        
        positionArr = ['','','',
                       '','','',
                       '','',''];
       playerTurnText.textContent = 'X turn';
       container.addEventListener('click', game);
    }
     //return {}
    //private function convention - start with a '_'
 //})()