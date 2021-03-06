const Gameboard = (function(){    
    const container = document.querySelector('.board');
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
    const currentMarkPlayer2 = document.querySelector('#current-mark-playertwo');
    const switchMarkers = document.querySelector('.switch-computer');
    const playerTurnText = document.createElement('span')
    const gitHubIcon = document.querySelector('#github');
    const markerX = 'X'
    const markerO = 'O'
    let AI = false;
    let human = false;
    let counter = 0;
    let positionArr = ['','','',
                       '','','',
                       '','',''];
    //public
  const moduleObj = {}

    moduleObj.mainPageOptions = () => {
    vsPlayer.addEventListener('click', () => {
        human = true;
        AI = false;
        toggleRemovedClass()
        resetBtn();
    } );

    vsComputer.addEventListener('click', () => {
        AI = true;
        human = false;
        toggleRemovedClass()
        resetBtn();
    })
  }
     
    
    emptyDiv.appendChild(playerTurnText);
    playerTurnText.textContent = 'X turn'

    moduleObj.removedDivsMainPage = () => {
    container.classList.toggle('removed')
    emptyDiv.classList.toggle('removed')
    resetButton.classList.toggle('removed')
    backButton.classList.toggle('removed');
    robotMark.classList.toggle('removed');
    playerMark.classList.toggle('removed');
    switchMarkers.classList.toggle('removed');
  } 
  

  moduleObj.playPageOptions = () => {

    container.addEventListener('click', game);
    backButton.addEventListener('click', toggleRemovedClass)
    resetButton.addEventListener('click', resetBtn);

    switchMarkers.addEventListener('click', () => {
      if(!positionArr.includes('') || playerTurnText.textContent == 'X wins' || playerTurnText.textContent == 'O wins' || playerTurnText.textContent == 'Its a tie') {
        if (currentMarkComputer.textContent == markerO) {
          currentMarkComputer.textContent = markerX
          currentMarkPlayer1.textContent = markerO;
          currentMarkPlayer2.textContent = markerX;
        } else if (currentMarkComputer.textContent == markerX) {
          currentMarkComputer.textContent = markerO
          currentMarkPlayer1.textContent = markerX;
          currentMarkPlayer2.textContent = markerO;
        }
      }

  if (playerTurnText.textContent !== 'X wins' && playerTurnText.textContent !== 'O wins' && playerTurnText.textContent !== 'Its a tie') {
     
      if (currentMarkComputer.textContent == markerO) {
          currentMarkComputer.textContent = markerX
          currentMarkPlayer1.textContent = markerO;
          currentMarkPlayer2.textContent = markerX;
        computerTurnSwitch(markerX, 'O')
          
           } else if (currentMarkComputer.textContent == markerX) {
          currentMarkComputer.textContent = markerO
          currentMarkPlayer1.textContent = markerX;
          currentMarkPlayer2.textContent = markerO;
            computerTurnSwitch(markerO, 'X')
          }
    }
    })

  }
     //private functions from here on
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
        gitHubIcon.classList.toggle('removed');

        if (AI == true && human == false) {
        robotMark.classList.toggle('removed');
        playerMark.classList.toggle('removed');
        switchMarkers.classList.toggle('removed');
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
        if (AI == true && currentMarkComputer.textContent == markerX) {
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

        if (AI == false && currentMarkPlayer1.textContent == markerO) {
          playerTurnText.textContent = 'X turn'
        } else {
      currentMarkComputer.textContent == markerO ? playerTurnText.textContent = 'X turn' : playerTurnText.textContent = 'O turn';
        } 
      container.addEventListener('click', game);
    }

    function computerTurnSwitch(mark, turn) {
      let emptyIndices = positionArr
      let emptyIn =  emptyIndices.map( function (marker, index) { return{ marker: marker, index: index }})
        .filter(x => x.marker === '')
        .map(x => x.index);
        
        let computerIndex = emptyIn[Math.floor(Math.random() * emptyIn.length)];
              
      playerTurnText.textContent === 'X wins' ? container.children[computerIndex].textContent = '' : container.children[computerIndex].textContent = mark;
        
      if (playerTurnText.textContent == 'X wins') {
      playerTurnText.textContent = 'X wins'
        emptyDiv.appendChild(playerTurnText)
      } else if (playerTurnText.textContent == 'O wins') {
          playerTurnText.textContent = 'O wins'
        emptyDiv.appendChild(playerTurnText)
      } else {
          playerTurnText.textContent = `${turn} turn`
        emptyDiv.appendChild(playerTurnText)
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

    function computerPlay(e, mark) { 
      if (container.children.textContent !== markerX && container.children.textContent !== markerO && e.target.textContent === '') { 
        if (AI == true && currentMarkComputer.textContent == markerX) {
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
        } else {
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
     return moduleObj;
 })()

 Gameboard.playPageOptions();
 Gameboard.mainPageOptions();
 Gameboard.removedDivsMainPage();