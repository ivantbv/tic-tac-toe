//store the gameboard as an array inside of a Gameboard object
//players are stored in objects
//tuck everything inside of a factory function
//

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
        //console.log(e.target.textContent)
        // console.log(dataEl.length);
        // console.log(e.target.textContent)
        for (let i = 0; i < positionArr.length; i++) {
            
           
            
        positionArr[i] = e.target.textContent
        //container.children[i].textContent
            if (positionArr[i] == markerX) {

            } else if (positionArr[i] == markerO) {
            }
        }

        //fill the positionArr with the corresponding numbers to its indexes
        
    })      
    
    allDivs.forEach(square => square.addEventListener('click', function(e){
         
        // if (counter % 2 === 0) {
        //     e.target.textContent = markerO
        // } else if (counter % 2 !== 0) {
        //     e.target.textContent = markerX;
        // }

        //when a marker is cicked, make the array take this marker inside
        //at the correct index position, corresponding to the board.
        // markers.forEach(marker => {
        //     e.target.textContent = marker;    
        //     if (e.target.innerHTML) {
        //      e.target.textContent = marker;
        //      console.log(marker)
        //     }        
        // })
        //positionArr.push(e.target.textContent);

       // console.log(e.target)
        // for (let i = 0; i < allDivs.length; i++) {
        //     positionArr[i] = square.textContent;
        //     console.log(positionArr)
        // }

        console.log(container.children[1].textContent)
        
        //if the counter is even - put first marker, otherwise second
        // positionArr.forEach((position, index) => {
        //     let sliced = positionArr.slice(index)
        //     sliced.push(square.textContent);
        //         //container.children.textContent)
        // })

   //console.log(square.textContent);
    }))



     //return {}
    //private function convention - start with a '_'
 //})()