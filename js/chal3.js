var gLevels = [
    {
        level: 1,
        upToNum: 10
    }
];
var gCurrLevel = 1;

$(document).ready(function(){
    // renderImg()
    creatQues()
   
})




function creatQues() {
   
    var gArrOfAns = [];
    var gQuess =[]
    var strQues;
    var a;
    var b;
    var ans;
    var strHTMLQues ='';
    var containerQues = document.querySelector('.game3Img');
    
    var strHTMLAns = '';
    var containerAns = document.querySelector('.game3Ans');

    for (var i = 0; i < 9; i++) {
        a = Math.ceil(Math.random()*10);
        b = Math.ceil(Math.random()*10);
        ans = a + b;
        strQues = a + '+' + b;
        var quesAndAns = { strQues, ans };
        strHTMLQues += '<div class="grid" id='+ i +' data-ans="'+ ans +'" >' + strQues  + '</div>';
        gQuess.push(quesAndAns);
        gArrOfAns.push(ans);    
    }
    containerQues.innerHTML = strHTMLQues;
    
   
    gQuess.forEach(function(quesAndAns, i){
        $('#'+ i).droppable({
        scope: quesAndAns.ans     
            });
    });

   
    gArrOfAns.sort(function(a,b){
        return a-b;
    })

    gArrOfAns.forEach(function(ans, j) {
        strHTMLAns += '<div class="ans" id="'+ ans + 'id' + j + '">' + ans + '</div>';   
        });           
    containerAns.innerHTML = strHTMLAns;

    gArrOfAns.forEach(function(ans, j) {
        
        
        $('#'+ans+'id'+ j).draggable({
            revert: "invalid",
            revertDuration: 200,
            scope: ans 
         
        });
    })
    
}

