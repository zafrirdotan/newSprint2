var numsToPlace = [];
var dropsClass = ['#drop1','#drop2'];
var difficulty = [{level: 1,amount: 10},{level: 2,amount: 20},{level: 3,amount: 30},];

    // $('input').on('change', function() {
    //     var $diff = $('input[name=difficulty]:checked').val() 
    //     $diff = parseInt($diff);
    //     var amount = getDiffByLevel($diff);
    //     amount++;
    //     init(amount)
    //     setNumOfDrag($diff);
    // });
    
function init(amount){
    drawDraggables();
    drawPlacedNums();
    readyDragDrop();
}

function drawDraggables(){
    
    var elContainer = document.querySelector('.numsToPlace');
    var strHTML ='<ul>';
    
    for (var i = 1;i < 3;i++){
        var rand = parseInt((Math.random()*10)+1);
        numsToPlace.push(rand);
        strHTML += '<li id=drag' + i +' class="wiggle-me">'+ rand + '</li>';
    }
    elContainer.innerHTML = strHTML;
        
}

function drawPlacedNums(){
    
    var elContainer = document.querySelector('.PlacedNums');
    var strHTML ='<ul class=winNums>';
    
    for (var i = 1;i < 11;i++){
        if (i === numsToPlace[0]){
            strHTML += '<li id="drop'+ 1 +'"></li>';
        } else if (i === numsToPlace[1]){
            strHTML += '<li id="drop'+ 2 +'"></li>';
        } else {
            strHTML += '<li>'+ i + '</li>';
        }
    }
    elContainer.innerHTML = strHTML;
}


function setDraggable(drags){
    for (var i = 0; i < 3; i++){
        $(drags[i]).draggable({
        opacity: 0.5,
        revert: 'invalid'
        });    
    }
}

function setDroppable($drags,dropsIds,dragsIds){
    // console.log('drop1 :',dropsClass[0]);
    console.log('$drags : ',$drags);
    console.log('dropsIds :',dropsIds);
    console.log('dragsIds : ',dragsIds);
    
    // for (var i = 0; i < 2; i++) {
    //     $(dropsIds[i]).droppable({
    //         drop: function (e, ui) {
    //             var draggedNumId = ui.draggable.attr('id');
    //             var draggedClassName = '#' + draggedNumId;
    //             var $dr = $(draggedClassName);
    //             var num = $dr.html();
    //             $(ui.draggable).css('position', 'static').appendTo(this);           //the dragges item ,define its css   
    //             $(dropsIds[i]).replaceWith('<li>' + num + '<li>');                 //replace with
    //             $(".winNums li").eq($drags[i]).remove();                                  //remove the prev item
    //             isWin();

    //         }
    //     });
    // }
    $(dropsIds[0]).droppable({
        drop: function (e, ui) {
            var draggedNumId = ui.draggable.attr('id');
            var draggedClassName = '#' + draggedNumId;
            var $dr = $(draggedClassName);
            var num = $dr.html();
            $(ui.draggable).css('position', 'static').appendTo(this);           //the dragges item ,define its css   
            $(dropsIds[0]).replaceWith('<li>'+ num +'<li>');                 //replace with
            $(".winNums li").eq($drags[0]).remove();                                  //remove the prev item
            isWin();

        }
    });
    $(dropsIds[1]).droppable({
        drop: function (e, ui) {
            var draggedNumId = ui.draggable.attr('id');
            var draggedClassName = '#' + draggedNumId;
            var $dr = $(draggedClassName);
            var num = $dr.html();
            $(ui.draggable).css('position', 'static').appendTo(this);
            $(dropsIds[1]).replaceWith('<li>'+ num +'<li>');
            $(".winNums li").eq($drags[1]).remove();
            isWin();
        }
    });
}

function readyDragDrop(){
    var $drag1 = $('#drag1').html();
    var $drag2 = $('#drag2').html();
    var $drags = [];
    var dragsIds = setNumOfDrag(1);
    var dropsIds = setNumOfDrops(1);
    $drags.push($drag1,$drag2);
    
    setDraggable(dragsIds);
    setDroppable($drags,dropsIds,dragsIds);
}
function setNumOfDrag(diff){
    var drags = [];
    numberOfDropDrag = diff * 2;
    for (var i = 1;i < numberOfDropDrag + 1 ; i++ ){
        drags.push('#drag' + i);
    }
    return drags;
}

function setNumOfDrops(diff){
    var drops = [];
    numberOfDropDrag = diff * 2;
    for (var i = 1;i < numberOfDropDrag + 1 ; i++ ){
        drops.push('#drop' + i);
    }
    return drops;
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
    }
    else{
        console.log('not win yet');
    } 
}

function getHomePage(){
    return 'http://127.0.0.1:8080';
}



function getDiffByLevel(level) {
        var  levelCell = difficulty.filter(function(levelCell, i) {
            return difficulty[i].level === level;
        });
    return levelCell[0].amount;
}


init();