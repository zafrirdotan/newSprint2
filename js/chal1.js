
$(document).ready(function(){
    gChals = getDataLS();

});

var gImgs = [
    { 
        name: 'stars',
        Src: 'img/game1Imgs/1.gif'
    }, 
    { 
        name: 'rabbit',
        Src: 'img/game1Imgs/2.jpg'
    },
    { 
        name: 'beach',
        Src: 'img/game1Imgs/3.jpg'
    },
    { 
        name: 'crying',
        Src: 'img/game1Imgs/4.jpg'
    },
    { 
        name: 'walking',
        Src: 'img/game1Imgs/5.jpg'
    }    
];
var gGame1Quess = [
    {
        name: 'Star',
        imgSrc: gImgs[0].Src,
        trueAns: 'Dora is reaching for the stars',
        falseAns: 'Dora is reaching for the moon',
    },
    {
        name: 'rabbit',
        imgSrc: gImgs[1].Src,
        trueAns: 'Dora is holding a rabbit',
        falseAns: 'Dora is holding a kangaroo'
    },
    {
        name: 'beach',
        imgSrc: gImgs[2].Src,
        trueAns: 'Dora is at the beach',
        falseAns: 'Dora is on the moon'
    },
    {
        name: 'crying',
        imgSrc: gImgs[3].Src,
        trueAns: 'Dora is crying',
        falseAns: 'Dora is smiling'
    },
    {
        name: 'walking',
        imgSrc: gImgs[4].Src,
        trueAns: 'Dora is walking',
        falseAns: 'Dora is swiming'
    }

];


var gCurrQues = 0;

$(document).ready(function(){    

    // console.log('gChal: ', currName);
    renderQues(gGame1Quess, gCurrQues);
   


});

function renderQues(arrOfQuess, i) {

    // render img
    var strHTMLImg = '<img src="'+ arrOfQuess[i].imgSrc +'" alt="">';

    $('.game1Img').html(strHTMLImg);
    // render ansors
    var oneOrZero = Math.round(Math.random());
    console.log('oneOrZero: ', oneOrZero);
    
  
    var strHTMLAns1;
    var strVALAns1;

    var strHTMLAns2;
    var strVALAns2;

    if(oneOrZero === 0){
        strTEXTAns1 = arrOfQuess[i].trueAns;
        strVALAns1 = true;
        strTEXTAns2 = arrOfQuess[i].falseAns;
        strHTMLAns2 = false;

    }else{
        strTEXTAns1 = arrOfQuess[i].falseAns;
        strVALAns1 = false;
        strTEXTAns2 = arrOfQuess[i].trueAns;
        strVALAns2 = true;
    }

    $('.ans1').text(strTEXTAns1);
    $('.ans1').val(strVALAns1);

    $('.ans2').text(strTEXTAns2);
    $('.ans2').val(strVALAns2);
}




function button1Clicked(value, id) {
   console.log('id: ', id);
   console.log('value: ', value, typeof(value));


   if( value === 'true' ){
        console.log('pushedRightgAns');
        
        $('.ans1').addClass('rightAns');
        
        gCurrQues++;
        
        if (gCurrQues === gGame1Quess.length){
             alert('end of the game');
             goToNextLevel(chal2);
             // the game ends herrrrrrrrrrrrrre  and in line 163 also!
            //  var currName = JSON.parse(localStorage.getItem('currName'));
             var gChal = JSON.parse(localStorage.getItem('player'))
            //   localStorage.setItem('name', JSON.stringify(gCurrQues));
             console.log('after game 1 gchals',gChal);
            
        }

        setTimeout(function(){ 
            renderQues(gGame1Quess, gCurrQues);
            $('.ans1').removeClass('rightAns');
            $('.ans2').removeClass('wrongAns');
        }, 1000);

   }else{
        console.log('pushedWrongAns');  
        $('.ans1').addClass('wrongAns');

   }     
}









function button2Clicked(value, id) {
   console.log('id: ', id);
   console.log('value: ', value ,typeof(value));
   

   if( value === 'true' ){
        console.log('pushedRightgAns');
        
        $('.ans2').addClass('rightAns');
        
        gCurrQues++;

        if (gCurrQues === gGame1Quess.length) {
            alert('end of the game');
            goToNextLevel(chal2);
            // the game ends herrrrrrrrrrrrrre  and in line 163 also!
            //  var currName = JSON.parse(localStorage.getItem('currName'));
             var gChal = JSON.parse(localStorage.getItem('player'));
             gChal[0].isSolved = true;
             localStorage.setItem('player', JSON.stringify(gChal));
             console.log('after game 1 gchals',gChal);
             str = '/C:/coding%20acadmy/sprint2/index.html';
             window.location = str;

        }
        
        setTimeout(function(){ 
            renderQues(gGame1Quess, gCurrQues);
            $('.ans2').removeClass('rightAns');
            $('.ans1').removeClass('wrongAns');
        }, 1000);

   }else{
        console.log('pushedWrongAns');  
        $('.ans2').addClass('wrongAns');

   }     
}