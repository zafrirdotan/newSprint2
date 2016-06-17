var numsToPlace = [];
var numsToDrop = [];
// numsToDrag

function init(){
 
    drawNumsToplace();
    drawPlacedNums();
    readyDragDrop();
}

function drawNumsToplace(){
    var elContainer = document.querySelector('.numsToPlace');
    var strHTML ='<ul>'
    for (var i = 1;i < 3;i++){
        var rand = parseInt((Math.random()*10)+1);
        numsToPlace.push(rand);
        strHTML += '<li id=drag' + i +' class="wiggle-me">'+ rand + '</li>';
    }
        elContainer.innerHTML = strHTML;
        console.log('strHTML: ',strHTML);
}

function drawPlacedNums(){
    var elContainer = document.querySelector('.PlacedNums');
    var strHTML ='<ul class=winNums>';
    for (var i = 1;i < 11;i++){
        // var rand = parseInt((Math.random()*10)+1)
        if (i === numsToPlace[0]){
            strHTML += '<li id="drop'+ 1 +'"></li>';
        } else if (i === numsToPlace[1]){
            strHTML += '<li id="drop'+ 2 +'"></li>';
        } else {
            strHTML += '<li>'+ i + '</li>';
            
        }
    }
        elContainer.innerHTML = strHTML;
        console.log('strHTML: ',strHTML);
}


function setDraggable(){
    $('#drag1').draggable({
        opacity: 0.5,
        revert: 'invalid'
      
    });
    $('#drag2').draggable({
        opacity: 0.5,
        revert: 'invalid'
    });
}

function setDroppable($drag1,$drag2){
    $('#drop1').droppable({
        drop: function (e, ui) {
            var draggedNumId = ui.draggable.attr('id');
            // var num = parseInt(draggedNum.match(/\d+/g));
            var draggedClassName = '#' + draggedNumId;
            var $dr = $(draggedClassName);
            var num = $dr.html();
            // console.log('ui is : ',ui.draggable.attr('id'));
            // console.log('num is : ',num);
            // console.log('draggedClassName is : ',draggedClassName);

            // console.log('draggedNum is : ',draggedNumId);
            
            $(ui.draggable).css('position', 'static').appendTo(this);           //the dragges item ,define its css   
            $('#drop1').replaceWith('<li>'+num +'<li>');                 //replace with
            $(".winNums li").eq($drag1).remove();                                  //remove the prev item
            isWin();

        }
    });
    $('#drop2').droppable({
        drop: function (e, ui) {
            var draggedNumId = ui.draggable.attr('id');
            // var num = parseInt(draggedNum.match(/\d+/g));
            var draggedClassName = '#' + draggedNumId;
            var $dr = $(draggedClassName);
            var num = $dr.html();
            // console.log('ui is : ',ui.draggable.attr('id'));
            // console.log('num is : ',num);
            // console.log('str is : ',draggedClassName);
            
            $(ui.draggable).css('position', 'static').appendTo(this);
            $('#drop2').replaceWith('<li>'+num +'<li>');
            $(".winNums li").eq($drag2).remove();
            isWin();

        }
    });
    
}

function readyDragDrop(){
    var $drag1 = $('#drag1').html();
    // console.log('dragNum1: ',$drag1);
    var $drag2 = $('#drag2').html();
    // console.log('dragNum2: ',$drag2);

    setDraggable();
    setDroppable($drag1,$drag2);
    
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
        var gChal = JSON.parse(localStorage.getItem('player'));
        gChal[1].isSolved = true;
        localStorage.setItem('player', JSON.stringify(gChal));
        // console.log('gchals after win: ',gChal);
        // window.location.href = getHomePage();
    }
    else{
        console.log('not win yet');
    } 
}

function getHomePage(){
    return 'http://127.0.0.1:8080';
}

init();
