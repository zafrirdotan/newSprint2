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
        maxNum: 10
    },
    {
        level: 2,
        maxNum: 20
    },
    {
        level: 3,
        maxNum: 100
    }
];

var gIndexLevel = 0;

$(document).ready(function(){
   
    $('.game3Img').css('background-image', 'url('+ gImgs[gIndexLevel].src +')');

    creatQues(gLevels[gIndexLevel].maxNum);
   
})




function creatQues(maxNum) {

    var gAnss = [];
    var gQuess =[];
    var strHTMLQues ='';
    var containerQues = document.querySelector('.game3Img');
    var strHTMLAns = '';
    var containerAns = document.querySelector('.game3Ans');

    var gDroped = 0;

    for ( var i = 0 ; gAnss.length < 9; i++) {
        var a = Math.ceil(Math.random()*maxNum);
        var b = Math.ceil(Math.random()*maxNum);
        var ans = a + b;
        if(gAnss.indexOf(ans) !== -1){ 
            i--;
            continue;
        }
        var strQues = a + '+' + b;
        var quesAndAns = { strQues, ans};
        strHTMLQues += '<div class="grid" id='+ i +'>' + strQues  + '</div>';
        
        gQuess.push(quesAndAns);
        gAnss.push(ans);    
    }
    containerQues.innerHTML = strHTMLQues;
    
   
    gQuess.forEach(function(quesAndAns, i){
        $('#'+ i).droppable({
        scope: quesAndAns.ans,
        drop: function( event, ui ) {
             $('#'+ i).addClass('invisible');
             $('#'+ quesAndAns.ans +'id').addClass('invisible');
             gDroped++
             if(gDroped === gAnss.length){
                alert('iiiihaaa');
                gIndexLevel++;
                $('.level').html('level ' + gLevels[gIndexLevel].level)
                $('.game3Img').css('background-image', 'url('+ gImgs[gIndexLevel].src +')');
                // the game ends herrrrrrrrrrrrrre 
                // if( gIndexLevel = 3 ) goToNextLevel(chal2);
                creatQues(gLevels[gIndexLevel].maxNum);
             }
            }     
        });
            console.log('quesAndAns.ans: ',quesAndAns.ans, typeof(quesAndAns.ans));
    });

   
    gAnss.sort(function(a,b){
        return a-b;
    })

    gAnss.forEach(function(ans, j) {
        strHTMLAns += '<div class="ans" id="'+ ans + 'id">' + ans + '</div>';   
        }); 

    containerAns.innerHTML = strHTMLAns;

    gAnss.forEach(function(ans, j) {
        
          console.log('ans',ans, typeof(ans));
        $('#'+ans+'id').draggable({
            revert: "invalid",
            revertDuration: 200,
            scope: ans,

         
        });
    })
    
}

