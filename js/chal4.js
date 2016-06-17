var numOfSheeps;

renderChoises();
renderSheeps();


$('#choise1,#choise2,#choise3,#choise4,#choise5').click(function(){
    $('body').click(function( event ) {
        var str = event.target.id;
        str = '#' + str;
        var num = parseInt($(str).text().match(/\d+/)[0], 10); 
        if (num === numOfSheeps) {
            console.log('WIN');
            alert('WIN');
        }
        else {
            console.log('NOT');
            alert('NOT');
        }                     
    });
});


function renderSheeps(){
    var rand = parseInt(Math.random()*5) + 1;
    numOfSheeps = rand;
    var elContainer = document.querySelector('.upCont4');
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

function renderChoises(){
    var elContainer = document.querySelector('.downCont4');
    var strHTML ='<ul>';
    for (var i = 1;i < 6 ; i++){
        strHTML += ' <li id="choise'+ i +'">'+ i + '</li>';
    }
    strHTML +='</ul>';
    elContainer.innerHTML = strHTML;
}
