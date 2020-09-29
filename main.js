//store the gameboard as an array inside of a Gameboard object
//players are stored in objects
//tuck everything inside of a factory function
//

 //const Gameboard = (function(){
    let container = document.querySelector('#board');
    let allDivs = document.querySelectorAll('#board div')
    let markers = ['O', 'X'];
    let counter = 0;
    
    allDivs.forEach(square => square.addEventListener('click', function(e){
        markers.forEach(marker => {
            e.target.innerHTML = marker;    
            if (e.target.innerHTML) {
             e.target.textContent == e.target.innerHTML
            }        
        })
        counter++
        
        //if the counter is even - put first marker, otherwise second
        if (counter % 2 === 0) {
            e.target.innerHTML = markers[0]
        } else if (counter % 2 !== 0) {
            e.target.innerHTML = markers[1]
        }

    }))

     //return {}
    //private function convention - start with an '_'
 //})()