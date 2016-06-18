var gImgs = [
    {
        name: 'elephant',
        src: '/img/game3Imgs/1.jpg'
    },
    {
        name: 'cuala',
        src: '/img/game3Imgs/2.jpg'
    },
    {
        name: 'monkey',
        src: '/img/game3Imgs/3.jpg'
    }
];

var gLevels = [
    {
        level: 1,
        upToNum: 10
    }
];

var gCurrLevel = 1;

$(document).ready(function(){
    console.log('gImgs[0].src: ',gImgs[0].src);
    $('.game3Img').css('background-image', 'url('+ gImgs[0].src +')');
    creatQues()
   
})




function creatQues() {

    var gArrOfAns = [];
    var gQuess =[];
    var gAnss = [];
    var strHTMLQues ='';
    var containerQues = document.querySelector('.game3Img');
    
    var strHTMLAns = '';
    var containerAns = document.querySelector('.game3Ans');

    for ( var i = 0 ; gAnss.length < 9; i++) {
        var a = Math.ceil(Math.random()*10);
        var b = Math.ceil(Math.random()*10);
        var ans = a + b;
        if(gAnss.indexOf(ans) !== -1) continue;
        gAnss.push(ans);
        var strQues = a + '+' + b;
        var quesClass = ans +'&' + i;
        var quesAndAns = { strQues, ans, quesClass};
        strHTMLQues += '<div class="grid" id='+ i +'" >' + strQues  + '</div>';
        
        gQuess.push(quesAndAns);
        gArrOfAns.push(quesAndAns);    
    }
    containerQues.innerHTML = strHTMLQues;
    
   
    gQuess.forEach(function(quesAndAns, i){
        $('#'+ i).droppable({
        scope: quesAndAns.quesClass,
        hoverClass: "drop-hover",
        tolerance: "intersect",
        drop: function( event, ui ) {
             $('.'+ quesAndAns.quesClass).addClass('invisible' );
            } 
            
        });
        console.log('quesAndAns ',quesAndAns);
    });

//   need to solve this
    // gArrOfAns.sort(function(a,b){
    //     return a-b;
    // })

    gArrOfAns.forEach(function(quesAndAns, j) {
        strHTMLAns += '<div class="ansBox '+ quesAndAns.quesClass + '" id="'+ quesAndAns.ans + 'id' + j + '">' + quesAndAns.ans + '</div>';   
        });           
    containerAns.innerHTML = strHTMLAns;

            console.log('draggable');
    gArrOfAns.forEach(function(quesAndAns, j) {
        
        
        $('#'+ quesAndAns.ans +'id'+ j).draggable({
            addClasses: false,
            revert: "invalid",
            revertDuration: 200,
            scope: quesAndAns.quesClass,
            snap: true,
            snapMode: "inner",
            snapTolerance: 100,
           
                
           
            

         
        });
            
          console.log('quesAndAns ',quesAndAns);
    })
    
}

