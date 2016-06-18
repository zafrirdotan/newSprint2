var numsToPlace = [];
// var dropsClass = ['#drop1','#drop2'];
// var difficulty = [{level: 1,amount: 10},{level: 2,amount: 20},{level: 3,amount: 30},];

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
    drawStaticNums();
    readyDragDrop();
}

function drawDraggables(){
    
    var elContainer = document.querySelector('.draggableNums');
    var strHTML ='<ul>';
    var i = 1;
        while (numsToPlace.length < 2){
            var rand = parseInt((Math.random()*10)+1);
            if (!numsToPlace.includes(rand)){
                numsToPlace.push(rand);
                strHTML += '<li id=drag' + i +' class="draggable">'+ rand + '</li>';
                i++;
            }
        }
    elContainer.innerHTML = strHTML;
        
}

function drawStaticNums(){
    
    var elContainer = document.querySelector('.staticNums');
    var strHTML ='<ul class=staticNums>';
    
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

function setDroppable(dragsValues,dropsIds,dragsIds){
    // console.log('drop1 :',dropsClass[0]);
    console.log('dragsNums : ',dragsValues);
    console.log('dropsIds :',dropsIds);
    console.log('dragsIds : ',dragsIds);
    
    // for (var i = 0; i < 2; i++) {
    //     $(dropsIds[i]).droppable({
    //         drop: function (e, ui) {
   //              var draggedId = $('#' + ui.draggable.attr('id'));
    //             $(ui.draggable).css('position', 'static').appendTo(this);           //the dragges item ,define its css   
    //             $(dropsIds[i]).replaceWith('<li>' + draggedId.html() + '<li>');                 //replace with
    //             $(".staticNums li").eq(dragsNums[i]).remove();                                  //remove the prev item
    //             isWin();

    //         }
    //     });
    // }
    // console.log('what: ',$(ui-droppable))
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
        alert('WIN');
    }
    else{
        console.log('not win yet');
    } 
}


// function getDiffByLevel(level) {
//         var  levelCell = difficulty.filter(function(levelCell, i) {
//             return difficulty[i].level === level;
//         });
//     return levelCell[0].amount;
// }

init();