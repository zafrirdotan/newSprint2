var gLevels = [
    {
        level: 1,
        upToNum: 10
    }
];
var gCurrLevel = 1;

$(document).ready(function(){
    renderImg()
    creatQues()
   
})

function renderImg() {
     var imgSrc = 'img/game3Imgs/elephant.jpg'; 
     var strHTMLImg = '<img src="'+ imgSrc +'" alt="">';

    $('.game3Img').html(strHTMLImg);
}






function creatQues() {
   
    var gArrOfAns = [];
    
    var strQues;
    var a;
    var b;
    var ans;
    var strHTMLQues ='';
    var containerQues = document.querySelector('.game3grid');
    
    var strHTMLAns = '';
    var containerAns = document.querySelector('.game3Ans');

    for (var i = 0; i < 9; i++) {
        a = Math.ceil(Math.random()*10);
        b = Math.ceil(Math.random()*10);
        ans = a + b;
        strQues = a + '+' + b;
        strHTMLQues += '<div class="grid" id='+ (i+1) +' data-ans="'+ ans +'" >' + a + '+' + b  + '</div>';
        gArrOfAns.push(ans);    
    }
    containerQues.innerHTML = strHTMLQues;
    
    gArrOfAns.sort(function(a,b){
        return a-b;
    })

    gArrOfAns.forEach(function(ans, j) {
        strHTMLAns += '<div class="ans" id='+ (j+1) +'>' + ans + '</div>';   
        });           
    containerAns.innerHTML = strHTMLAns;

    $('.ans').draggable();
   
    $('.grid').droppable({
        drop: function (e, ui) {
            $(ui.draggable).css('position', 'static').appendTo(this);
            $('#li1').replaceWith('<li>'+dragNum1 +'<li>');
            $(".winNums li").eq(dragNum1).remove();
            isWin();

        }
    });
    

}
