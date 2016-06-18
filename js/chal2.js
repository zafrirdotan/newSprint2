var numsToPlace;
var difficulty = [{level: 1,amount: 10},{level: 2,amount: 20},{level: 3,amount: 30},];

    $('input').on('change', function() {
        var $diffic = $('input[name=difficulty]:checked').val() 
        $diffic = parseInt($diffic);
        var amount = getDiffByLevel($diffic) + 1;
        init(amount,$diffic)
        
    });
    
function init(amount,diffic){
    diffic = $('input[name=difficulty]:checked').val() 
    diffic = parseInt(diffic);
    amount = getDiffByLevel(diffic) + 1;
    console.log('amount',amount);
    numsToPlace = [];
    drawDraggables(diffic);
    drawStaticNums(amount);
    readyDragDrop();
}

function drawDraggables(diffic){
    console.log('diffic',diffic);
    
    var elContainer = document.querySelector('.draggableNums');
    var strHTML ='<ul>';
    var i = 1;
        while (numsToPlace.length < 2){
            var rand = parseInt((Math.random()*10*diffic)+1);
            if (!numsToPlace.includes(rand)){
                numsToPlace.push(rand);
                strHTML += '<li id=drag' + i +' class="draggable">'+ rand + '</li>';
                i++;
            }
        }
    elContainer.innerHTML = strHTML;
        
}

function drawStaticNums(amount){
    
    var elContainer = document.querySelector('.staticNums');
    var strHTML ='<ul class=staticNums>';
    
    for (var i = 1;i < amount;i++){
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

function setDroppable(dragsValues,dropsIds,dragsIds){
    // console.log('dragsNums : ',dragsValues);
    // console.log('dropsIds :',dropsIds);
    // console.log('dragsIds : ',dragsIds);
    $(dropsIds[0]).droppable({
        drop: function (e, ui) {
            var draggedId = $('#' + ui.draggable.attr('id'));
            $(dropsIds[0]).replaceWith('<li>'+ draggedId.html() +'<li>');                 //replace with
            $(".staticNums li").eq(dragsValues[0]).remove();                                  //remove the prev item
            $(ui.draggable).css('position', 'static').appendTo(this);           //the dragged item ,define its css   
            isWin();
        }
    });
    $(dropsIds[1]).droppable({
        drop: function (e, ui) {
            var draggedId = $('#' + ui.draggable.attr('id'));
            $(dropsIds[1]).replaceWith('<li>'+ draggedId.html() +'<li>');
            $(".staticNums li").eq(dragsValues[1]).remove();
            $(ui.draggable).css('position', 'static').appendTo(this);
            isWin();
        }
    });
}

function readyDragDrop(){
    var drag1 = $('#drag1').html();
    var drag2 = $('#drag2').html();
    var dragsValues = [];
    var dragsIds = setNumOfDrag(1);
    var dropsIds = setNumOfDrops(1);
    
    dragsValues.push(drag1,drag2);
    
    setDraggable(dragsIds);
    setDroppable(dragsValues,dropsIds,dragsIds);
}

//sets the number of drag according to the difficulty and pushes their id's to an array

function setNumOfDrag(diffic){
    var drags = [];
    numberOfDropDrag = diffic * 2;
    for (var i = 1;i < numberOfDropDrag + 1 ; i++ ){
        drags.push('#drag' + i);
    }
    return drags;
}

//sets the number of drop according to the difficulty and pushes their id's to an array

function setNumOfDrops(diffic){
    var drops = [];
    numberOfDropDrag = diffic * 2;
    for (var i = 1;i < numberOfDropDrag + 1 ; i++ ){
        drops.push('#drop' + i);
    }
    return drops;
}
//checks if win condition are met,all draggable items are in place
function isWin(){
    
    var win = true;
    var i = 1;
    $("li").each(function(){
                var x = parseInt($(this).text())
                if ( x !== i) win = false;
                i++;
             });
    if (win){
         $('.welcomePopUp')
            .css('zIndex',2)
            .show();
         $('.messege').text('good job ,you may go to the next level');
         $('.btnPlay').attr("onclick","removePopup();goToNextLevel('chal3');");
    }
    else{
        console.log('not win yet');
    } 
}


function getDiffByLevel(level) {
    var levelCell = difficulty.filter(function (levelCell, i) {
        return difficulty[i].level === level;
    });
    return levelCell[0].amount;
}


init(11,1);