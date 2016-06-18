var numOfSheeps;


function init(){
    drawChoises();
    drawSheeps();
    choiseClicked();
}

function drawSheeps(){
    var rand = parseInt(Math.random()*5) + 1;
    numOfSheeps = rand;
    var elContainer = document.querySelector('.sheepsContainer');
    var strHTML ='';
    for (var i = 0;i < rand ; i++){
        if (i%2 === 0){
            strHTML += '<img src="img/sheep-game4new.png" alt="">' 
        } else {
            strHTML += '<img src="img/sheep-game4reverse.png" alt="">' 
            
        }
    }
    elContainer.innerHTML = strHTML;
}

function drawChoises(){
    var elContainer = document.querySelector('.choisesContainer');
    var strHTML ='<ul>';
    for (var i = 1;i < 6 ; i++){
        strHTML += ' <li id="choise'+ i +'">'+ i + '</li>';
    }
    strHTML +='</ul>';
    elContainer.innerHTML = strHTML;
}

function choiseClicked(){
    $('#choise1,#choise2,#choise3,#choise4,#choise5').click(function(){
        $('body').click(function( event ) {
            $('body').unbind();
            var str = event.target.id;
            str = '#' + str;
            var num = parseInt($(str).text().match(/\d+/)[0], 10); 
            if (num === numOfSheeps) {
                $('.welcomePopUp').css('zIndex',2);
                $('.welcomePopUp').show();
                $('.messege').text('good job ,you finished all games');
                $('.btnPlay')
                .text('finish')
                .attr("onclick","removePopup();goToNextLevel('chal5');");
            }
            else {
                alert('try again');
            }                     
        });
    });
    
}

init();
