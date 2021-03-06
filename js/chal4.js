var numOfSheeps;
var difficulty = [{level: 1,amount: 1},{level: 2,amount: 3},{level: 3,amount: 5},];

    $('input').on('change', function() {
        var diffic = parseInt($('input[name=difficulty]:checked').val()); 
        var amount = getDiffByLevel(diffic) + 1;
        // console.log('amount',amount);
        init(amount)
    });

function init(amount){
    var diffic = parseInt($('input[name=difficulty]:checked').val()); 
    amount = getDiffByLevel(diffic) + 1;
    drawSheeps(amount);
    drawChoises(numOfSheeps);
    choiseClicked();
}

function drawSheeps(amount){
    var rand = parseInt(Math.random()*5) + amount;
    numOfSheeps = rand;
    var elContainer = document.querySelector('.sheepsContainer');
    var strHTML ='';
    for (var i = 0;i < rand ; i++){
        if (i%2 === 0){
            strHTML += '<img src="img/game4/1.png" alt="">' 
        } else {
            strHTML += '<img src="img/game4/2.png" alt="">' 
        }
    }
    elContainer.innerHTML = strHTML;
}

function drawChoises(numOfSheeps){
    var elContainer = document.querySelector('.choisesContainer');
    var strHTML ='<ul>';
    for (var i = 1;i < numOfSheeps + 1 ; i++){
        strHTML += ' <li id="choise'+ i +'">'+ i + '</li>';
    }
    strHTML +='</ul>';
    elContainer.innerHTML = strHTML;
}

function choiseClicked(){
        $('li').click(function( event ) {
            $('body').unbind();
            var str = '#' + event.target.id;
            var selectedChoise = parseInt($(str).text().match(/\d+/)[0], 10); 
            if (selectedChoise === numOfSheeps) {
                $('.welcomePopUp')
                .css('zIndex',2)
                .show();
                
                $('.messege').text('good job ,you finished all games');
                $('.btnPlay')
                .text('finish')
                .attr("onclick","removePopup();goToNextLevel('chal5');");
            }
            else {
                alert('try again');
            }                     
        });
    
}

function getDiffByLevel(level) {
    var levelCell = difficulty.filter(function (levelCell, i) {
        return difficulty[i].level === level;
    });
    return levelCell[0].amount;
}

init();
