//store the gameboard as an array inside of a Gameboard object
//tuck everything inside of a factory function

 //const Gameboard = (function(){    
    const container = document.querySelector('.board');
    //const allDivs = document.querySelectorAll('.board div')
    const vsDiv = document.querySelector('.versus')
    const vsComputer = document.querySelector('.AI');
    const vsPlayer = document.querySelector('.player');
    const emptyDiv = document.querySelector('.empty');
    const resetButton = document.querySelector('.reset')
    const backButton = document.querySelector('.back')
    const playerMark = document.querySelector('.player-mark')
    const robotMark = document.querySelector('#robot-mark')
    const playerMark2 = document.querySelector('#second-player-mark')
    const currentMarkComputer = document.querySelector('#current-mark-robot');
    const currentMarkPlayer1 = document.querySelector('#current-mark-player');
    const currentMarkPlayer2 = document.querySelector('#current-mark-playertwo')
    const markerX = 'X'
    const markerO = 'O'
    //const markersArr = ['X', 'O']
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
        if (currentMarkComputer.textContent == markerX) {
            playerTurnText.textContent == 'O turn'
        } else if (currentMarkComputer.textContent == markerO) {
            playerTurnText.textContent == 'X turn'
        }

    } )
    
    const playerTurnText = document.createElement('span')
    emptyDiv.appendChild(playerTurnText);
    playerTurnText.textContent = 'X turn'

    container.classList.toggle('removed')
    emptyDiv.classList.toggle('removed')
    resetButton.classList.toggle('removed')
    backButton.classList.toggle('removed');
    robotMark.classList.toggle('removed');
    playerMark.classList.toggle('removed');

    container.addEventListener('click', game);

    resetButton.addEventListener('click', resetBtn);

    function computerPlay(e, mark) { 
        if (container.children.textContent !== markerX && container.children.textContent !== markerO && e.target.textContent === '') { 
          if (AI == true && currentMarkComputer.textContent == markerX && currentMarkPlayer1.textContent == markerO) {
            e.target.textContent = markerO;
            for (let i = 0; i < positionArr.length; i++) {    
          positionArr[i] = container.children[i].textContent 
          }
          let emptyIndices = positionArr
        let emptyIn =  emptyIndices.map( function (marker, index) { return{ marker: marker, index: index }})
          .filter(x => x.marker === '')
          .map(x => x.index);
          
          let computerIndex = emptyIn[Math.floor(Math.random() * emptyIn.length)];
                
         
          winCondition(markerO);
          winCondition(markerX);
        playerTurnText.textContent === 'O wins' ? container.children[computerIndex].textContent = '' : container.children[computerIndex].textContent = markerX;
       
        playerTurnText.textContent = 'O turn'
          emptyDiv.appendChild(playerTurnText)
          } else if (currentMarkComputer.textContent == markerO && currentMarkPlayer1.textContent == markerX) {
            e.target.textContent = markerX;
                for (let i = 0; i < positionArr.length; i++) {    
              positionArr[i] = container.children[i].textContent 
              }
         
              let emptyIndices = positionArr
            let emptyIn =  emptyIndices.map( function (marker, index) { return{ marker: marker, index: index }})
              .filter(x => x.marker === '')
              .map(x => x.index);
              
              let computerIndex = emptyIn[Math.floor(Math.random() * emptyIn.length)];
                    
              winCondition(markerO);
              winCondition(markerX);
            playerTurnText.textContent === 'X wins' ? container.children[computerIndex].textContent = '' : container.children[computerIndex].textContent = mark;
           
            playerTurnText.textContent = 'X turn'
              emptyDiv.appendChild(playerTurnText)
              
          }
        }
        
    }

    currentMarkPlayer1.addEventListener('click', (e) => {
        if (e.target.textContent == markerX) {
            e.target.textContent = markerO
            currentMarkComputer.textContent = markerX;
        } else if (e.target.textContent == markerO) {
            e.target.textContent = markerX
            currentMarkComputer.textContent = markerO;
            //computerPlay(e, markerO)
        }
        //currentMarkComputer.textContent);
    })

    currentMarkPlayer2.addEventListener('click', (e) => {
        
    })

    currentMarkComputer.addEventListener('click', (e) => {
        if (e.target.textContent == markerO) {
            e.target.textContent = markerX
            currentMarkPlayer1.textContent = markerO;
            //emptyDiv.textContent = 'X turn'
            for (let i = 0; i < positionArr.length; i++) {    
                positionArr[i] = container.children[i].textContent 
                }
           
                let emptyIndices = positionArr
              let emptyIn =  emptyIndices.map( function (marker, index) { return{ marker: marker, index: index }})
                .filter(x => x.marker === '')
                .map(x => x.index);
                
                let computerIndex = emptyIn[Math.floor(Math.random() * emptyIn.length)];
                      
                winCondition(markerO);
                winCondition(markerX);
              playerTurnText.textContent === 'X wins' ? container.children[computerIndex].textContent = '' : container.children[computerIndex].textContent = markerX;
                
              if (playerTurnText.textContent == 'X wins') {
              playerTurnText.textContent = 'X wins'
                emptyDiv.appendChild(playerTurnText)
              } else if (playerTurnText.textContent == 'O wins') {
                  playerTurnText.textContent = 'O wins'
                emptyDiv.appendChild(playerTurnText)
              } else {
                  playerTurnText.textContent = 'O turn'
                emptyDiv.appendChild(playerTurnText)
              }
            

            
             } else if (e.target.textContent == markerX) {
            e.target.textContent = markerO
           // computerPlay(e, markerO)
            currentMarkPlayer1.textContent = markerX;
            //emptyDiv.textContent = 'O turn'

            //e.target.textContent = markerO;
             }
          
    })
    
    function game(e) {

        if (AI == true && human == false) {
          computerPlay(e, markerO)
           for (let i = 0; i < positionArr.length; i++) {   
                positionArr[i] = container.children[i].textContent
            }

            winCondition(markerO);
            winCondition(markerX);

           if (playerTurnText.textContent === 'Its a tie' || playerTurnText.textContent === 'O wins' || playerTurnText.textContent === 'X wins' ) {
               container.removeEventListener('click', game);
           } 
            
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
        let childArr = [];
        for (let i = 0; i < container.children.length; i++) {
            childArr.push(container.children[i].textContent);
        }
    
       if (childArr.includes('')){
        
        if (positionArr[0].includes(marker) && positionArr[1].includes(marker) && positionArr[2].includes(marker)) {
            playerTurnText.textContent = `${marker} wins`
       } else if (positionArr[0].includes(marker) && positionArr[3].includes(marker) && positionArr[6].includes(marker)) {
           playerTurnText.textContent = `${marker} wins`
         
      } else if (positionArr[1].includes(marker) && positionArr[4].includes(marker) && positionArr[7].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
    
      } else if (positionArr[2].includes(marker) && positionArr[5].includes(marker) && positionArr[8].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
      
      } else if (positionArr[3].includes(marker) && positionArr[4].includes(marker) && positionArr[5].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
     
      } else if (positionArr[6].includes(marker) && positionArr[7].includes(marker) && positionArr[8].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
    
      } else if (positionArr[0].includes(marker) && positionArr[4].includes(marker) && positionArr[8].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
      
      } else if (positionArr[2].includes(marker) && positionArr[4].includes(marker) && positionArr[6].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
      }  
    } else if (!childArr.includes('')) {
        fullBoardWinConditions(marker)
       
    }
    }

    function fullBoardWinConditions(marker) {
        if (positionArr[0].includes(marker) && positionArr[1].includes(marker) && positionArr[2].includes(marker)) {
            playerTurnText.textContent = `${marker} wins`
       } else if (positionArr[0].includes(marker) && positionArr[3].includes(marker) && positionArr[6].includes(marker)) {
           playerTurnText.textContent = `${marker} wins`
         
      } else if (positionArr[1].includes(marker) && positionArr[4].includes(marker) && positionArr[7].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
    
      } else if (positionArr[2].includes(marker) && positionArr[5].includes(marker) && positionArr[8].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
      
      } else if (positionArr[3].includes(marker) && positionArr[4].includes(marker) && positionArr[5].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
     
      } else if (positionArr[6].includes(marker) && positionArr[7].includes(marker) && positionArr[8].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
    
      } else if (positionArr[0].includes(marker) && positionArr[4].includes(marker) && positionArr[8].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
      
      } else if (positionArr[2].includes(marker) && positionArr[4].includes(marker) && positionArr[6].includes(marker)) {
       playerTurnText.textContent = `${marker} wins`
      }  else {
        playerTurnText.textContent = 'Its a tie'
      }
    }

    function toggleRemovedClass() {
        container.classList.toggle('removed')
        emptyDiv.classList.toggle('removed')
        vsDiv.classList.toggle('removed')
        resetButton.classList.toggle('removed')
        backButton.classList.toggle('removed');

        if (AI == true && human == false) {
        robotMark.classList.toggle('removed');
        playerMark.classList.toggle('removed');
    } else if (human == true && AI == false) {
        playerMark.classList.toggle('removed');
        playerMark2.classList.toggle('removed')
    }
    }

    function resetBtn() {
        counter = 0;
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].textContent = '';
        }
        
        positionArr = ['','','',
                       '','','',
                       '','',''];
        if (AI == true && currentMarkComputer.textContent == markerX && currentMarkPlayer1.textContent == markerO) {
            playerTurnText.textContent = 'O turn';

            for (let i = 0; i < positionArr.length; i++) {    
                positionArr[i] = container.children[i].textContent 
                }
           
                let emptyIndices = positionArr
              let emptyIn =  emptyIndices.map( function (marker, index) { return{ marker: marker, index: index }})
                .filter(x => x.marker === '')
                .map(x => x.index);
                
                let computerIndex = emptyIn[Math.floor(Math.random() * emptyIn.length)];
                      
                winCondition(markerO);
                winCondition(markerX);
              playerTurnText.textContent === 'X wins' ? container.children[computerIndex].textContent = '' : container.children[computerIndex].textContent = markerX;
                
              if (playerTurnText.textContent == 'X wins') {
              playerTurnText.textContent = 'X wins'
                emptyDiv.appendChild(playerTurnText)
              } else if (playerTurnText.textContent == 'O wins') {
                  playerTurnText.textContent = 'O wins'
                emptyDiv.appendChild(playerTurnText)
              } else {
                  playerTurnText.textContent = 'O turn'
                emptyDiv.appendChild(playerTurnText)
              }
        }
       playerTurnText.textContent = 'X turn';
       container.addEventListener('click', game);
    }

     //return {}
    //private function convention - start with a '_'
 //})()