var gChals = [
    {
        id: 'chal1',
        name: 'The Garden',
        isSolved: true
    },
    {
        id: 'chal2',
        name: 'The Forest',
        isSolved: true
    },
    {
        id: 'chal3',
        name: 'The Beach',
        isSolved: true
    }
];


function getChals() {return gChals;}

function getChalById(chalId) {
    var chal = gChals.filter(function(chal, i) {
        return gChals[i].id === chalId;
    });
    return chal[0];
}
console.log(getChalById('chal1'));



function renderChals(selector) {
    var elContainer = document.querySelector(selector);
    var strHTML ='';
    gChals.forEach(function(chal,i){
        strHTML += '<div onclick="redirect(this)" id="' +chal.id + '" class="game '+ chal.id + '">'+ chal.name +'</div>';
    })
        console.log('str: ',strHTML);
        elContainer.innerHTML = strHTML;
        console.log('elContainer: ', elContainer);
    
}

function reportSolved(chalId){
   var chal = getChalById(chalId);
    return chal.isSolved;    
}

// console.log(reportSolved('chal1'));
 

 function goToNextLevel(id){
     console.log('i am hire');
     upDateLS()
     window.location.href = id+'.html';
 }

 function upDateLS(){
    localStorage.setItem('chals',JSON.stringify(gChals)); 
 }

 function getDataLS() {
       var tempGChals = localStorage.getItem('chals');
       console.log('tempGChals: ', tempGChals);
       return tempGChals;
 }

 function finishChal(id){
     console.log('id: ', id);
     console.log('.id', '.' + id);
    //  console.log(getChalById('chal1'));
    //  var chal = getChalById(id)
    //  chal.isSolved = true;
     document.querySelector( '.' + id ).disabled = false; 
 }
