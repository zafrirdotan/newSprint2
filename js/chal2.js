

// $(document).ready(function(){
//     var prevChal = 'chal1';
//     var gChals = getDataLS();
//     console.log('reportSolved(prevChal): ', reportSolved(prevChal));
    
//     if(!(reportSolved(prevChal))){window.location.href = prevChal+'.html';}

// });
var numToPlace = [];
// var gChals = JSON.parse(localStorage.getItem('daniel'));

function init(){
    // console.log('userRecord: ', userRecord);
    // console.log('res',userRecord[1]);
    // console.log('gchals: ',gChals);
    
    
}

function renderUpContain(){
    var elContainer = document.querySelector('.upCont2');
    var strHTML ='<ul>'
    for (var i = 1;i < 3;i++){
        var rand = parseInt((Math.random()*10)+1);
        numToPlace.push(rand);
        strHTML += '<li id=drag' + i +' class="wiggle-me">'+ rand + '</li>';
    }
        elContainer.innerHTML = strHTML;
        console.log('strHTML: ',strHTML);
}

function renderDownContain(){
    var elContainer = document.querySelector('.downCont2');
    var strHTML ='<ul class=winNums>';
    for (var i = 1;i < 11;i++){
        // var rand = parseInt((Math.random()*10)+1)
        if (i === numToPlace[0]){
            strHTML += '<li id="li'+ 1 +'"></li>';
        } else if (i === numToPlace[1]){
            strHTML += '<li id="li'+ 2 +'"></li>';
        } else {
            strHTML += '<li>'+ i + '</li>';
            
        }
    }
        elContainer.innerHTML = strHTML;
        console.log('strHTML: ',strHTML);
}



function readyDragDrop(){
    var dragNum1 = $('#drag1').html();
    console.log('dragNum1: ',dragNum1);
    var dragNum2 = $('#drag2').html();
    console.log('dragNum2: ',dragNum2);
    
    $('#drag1').draggable({
        opacity: 0.5,
        revert: 'invalid',
        drop: function (event, ui) {
            $(ui.draggable).css({ maxHeight: $(this.height) });
        }
    });
    $('#drag2').draggable({
        opacity: 0.5,
        revert: 'invalid'
    });
    $('#li1').droppable({
        drop: function (e, ui) {
            $(ui.draggable).css('position', 'static').appendTo(this);
            $('#li1').replaceWith('<li>'+dragNum1 +'<li>');
            $(".winNums li").eq(dragNum1).remove();
            isWin();

        }
    });
    $('#li2').droppable({
        drop: function (e, ui) {
            $(ui.draggable).css('position', 'static').appendTo(this);
            $('#li2').replaceWith('<li>'+dragNum2 +'<li>');
            $(".winNums li").eq(dragNum2).remove();
            isWin();

        }
    });
}

 
function isWin(){
    
    var win = true;
    var i = 1;
    $("li").each(function(){
            var x = parseInt($(this).text())
            if ( x !== i) win = false;
            i++;
        });
    if (win){
        alert('WIN');
        // gChals.currChalId = 'game3';
        // gChals[1].isSolved = true;
        // localStorage.setItem('daniel',JSON.stringify(gChals));
        // var currName = JSON.parse(localStorage.getItem('player'));
        var gChal = JSON.parse(localStorage.getItem('player'));
        gChal[1].isSolved = true;
        localStorage.setItem('player', JSON.stringify(gChal));
    //  console.log('after game 1 gchals',gChal);
        // console.log('gchals after win: ',gChal);
        // str = '/C:/coding%20acadmy/sprint2/index.html';
        // window.location = str;
        
        
    }
    else{
        console.log('not win yet');
          
    } 
}


init();
renderUpContain();
renderDownContain();
readyDragDrop();