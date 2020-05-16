var d = document.getElementById('container');

var sec = 8;
var timer;
var option_imgurl = ['./picture/餵豬.png',
                     './picture/焚化.png',
                     './picture/掩埋.png',
                     './picture/堆肥.png',
                     './picture/化製.png',
                     './picture/生質能1.jpg',
                     './picture/生質能2.jpg'
                    ];
//d.innerHTML+=
function game(flag){
    if(flag==1){
        document.getElementById("again").style.display = "none"
        document.getElementById("fail_result").style.display = "none"
    }
    else{
        console.log("TEST");
        d.innerHTML = "";
    }
    d.innerHTML+='<video id = "first" autoplay="autoplay"  muted="true" ><source type="video/mp4" src="./picture/抽籤.mp4"></source></video>';
    var imgnumber = Math.floor(Math.random()*17);
    document.getElementById("container").style.textAlign = "left";
    if (flag==0){
        a=1;
        number = imgnumber;
        sec= 8;
        hidepic(a,number);
        setTimeout(function(){
            d.innerHTML+='<img id ="eighth" onclick="nextpage_feedpigs('+number+')" src="./picture/下一頁1.png" style = "cursor:pointer;height:15vw;width:15vw;">';
        },8000);
    }
    else{
        a=8;
        number = -1;
        sec= 8;
        hidepic(a,number);
        setTimeout(function(){
            d.innerHTML+='<img id="twenty_one" onclick="nextpage_feedpigs('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:21;"></img>';
        },8000)
    }
}
function hidepic(a,number)
{   
    var first_imgurl = ['./picture/小籠包.png', 
              './picture/太陽餅.png',
              './picture/方塊酥.png',
              './picture/牛角麵包.png', 
              './picture/白糖粿.png',
              './picture/竹筍.png',
              './picture/肉圓.png',
              './picture/洋蔥.png',
              './picture/烏魚子.png', 
              './picture/草莓.png',
              './picture/貢丸.png',
              './picture/魚乾.png', 
              './picture/麻糬.png',
              './picture/諾貝爾奶凍.png',
              './picture/營養三明治.png', 
              './picture/釋迦.png',
              './picture/貢糖.png',
                ];
    var second_imgurl = ['./picture/豆干.png'];
    sec--;
    console.log(sec)
    if (sec==0){
            let throwawayNode = d.removeChild(document.getElementById("first"));
            if(a == 1)
                d.innerHTML+='<img id ="second" style = "height:40vw;width:40vw;margin-left:20%" src="'+first_imgurl[number]+'">';
            else
                d.innerHTML+='<img id ="two_round" style ="height:40vw;width:40vw;margin-left:20%" src="'+second_imgurl[0]+'">';
    }
    else{
        setTimeout("hidepic("+a+","+number+")",1000);
    }
}
function nextpage_feedpigs(number){
    //console.log(number);
    switch(number){
        case 0:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%;">餵豬16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%">餵豬17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "ninth" style = "width:100%;height:100%">餵豬18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_two" style = "width:100%;height:100%;">餵豬19</div>';
    }
    if(number != -1){
        document.getElementById("eighth").style.display = "none"
        document.getElementById("second").style.display = "none"
        d.innerHTML+='<img id = "third" style = "width:30%;height:30%;" src="'+option_imgurl[0]+'">';
    }
    else{
        d.innerHTML+='<img id = "forty" style = "width:30%;height:30%;" src="'+option_imgurl[0]+'">';
        document.getElementById("two_round").style.display = "none"
        document.getElementById("twenty_one").style.display = "none"
    }
    if(number!=-1)
        d.innerHTML+='<img id ="eleventh" onclick="nextpage_incineration('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:11;">';
    else    
        d.innerHTML+='<img id ="twenty_three" onclick="nextpage_incineration('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;z-index:23;">';
}
function nextpage_incineration(number){
    
    switch(number){
        case 0:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%">焚化7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "tenth" style = "width:100%;height:100%;">焚化18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_four" style = "width:100%;height:100%;">焚化19</div>';
            break;
    }
    if(number!=-1){
        document.getElementById("third").style.display = "none"
        document.getElementById("ninth").style.display = "none"
        document.getElementById("eleventh").style.display = "none"
        d.innerHTML+='<img id = "forth" style = "width:30%;height:30%;" src="'+option_imgurl[1]+'">';
        d.innerHTML+='<img id ="twelfth" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:12;">';
    }
    else{
        document.getElementById("forty").style.display = "none"
        document.getElementById("twenty_two").style.display = "none"
        document.getElementById("twenty_three").style.display = "none"
        d.innerHTML+='<img id = "forty_one" style = "width:30%;height:30%;" src="'+option_imgurl[1]+'">';
        d.innerHTML+='<img id ="twenty_five" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:25;">';
    }
}
function nextpage_Buried(number){
    
    switch(number){
        case 0:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%">掩埋7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%">掩埋8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "thirteen" style = "width:100%;height:100%;">掩埋18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_six" style = "width:100%;height:100%;">掩埋19</div>';
            break;
    }
    if(number!=-1){
        document.getElementById("forth").style.display = "none"
        document.getElementById("tenth").style.display = "none"
        document.getElementById("twelfth").style.display = "none"
        d.innerHTML+='<img id = "fifth" style = "width:30%;height:30%;" src="'+option_imgurl[2]+'">';
        d.innerHTML+='<img id ="fourteenth" onclick="nextpage_compost('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:14;"></img>';
    }
    else{
        document.getElementById("forty_one").style.display = "none"
        document.getElementById("twenty_four").style.display = "none"
        document.getElementById("twenty_five").style.display = "none"
        d.innerHTML+='<img id = "forty_two" style = "width:30%;height:30%;" src="'+option_imgurl[2]+'">';
        d.innerHTML+='<img id ="twenty_seven" onclick="nextpage_compost('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:27;"></img>';
    }
}
function nextpage_compost(number){
    switch(number){
        case 0:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;">堆肥15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;;">堆肥16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;;">堆肥17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "fifteenth" style = "width:100%;height:10%;;">堆肥18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_eight" style = "width:100%;height:10%;;">堆肥19</div>';
            break;
    }
     if(number!=-1){
        document.getElementById("fifth").style.display = "none"
        document.getElementById("thirteen").style.display = "none"
        document.getElementById("fourteenth").style.display = "none"
        d.innerHTML+='<img id = "sixth" style = "width:30%;height:30%;" src="'+option_imgurl[3]+'">';
        d.innerHTML+='<img id ="sixteenth" onclick="nextpage_chemistry('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;">';
    }
    else{
        document.getElementById("forty_two").style.display = "none"
        document.getElementById("twenty_six").style.display = "none"
        document.getElementById("twenty_seven").style.display = "none"
        d.innerHTML+='<img id = "forty_three" style = "width:30%;height:30%;" src="'+option_imgurl[3]+'">';
        d.innerHTML+='<img id ="twenty_nine" onclick="nextpage_chemistry('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;">';
    }
}
function nextpage_chemistry(number){
    switch(number){
        case 0:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:100%">化製11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "seventeenth" style = "width:100%;height:10%">化製18</div>';
            break;
        default:
            d.innerHTML+='<div id = "thirty" style = "width:100%;height:10%">化製19</div>';
            break;
    }
    if(number!=-1){
        document.getElementById("sixth").style.display = "none"
        document.getElementById("fifteenth").style.display = "none"
        document.getElementById("sixteenth").style.display = "none"
        d.innerHTML+='<img id = "seventh" style = "width:30%;height:30%;" src="'+option_imgurl[4]+'">';
        d.innerHTML+='<img id ="eighteenth" onclick="nextpage_biomass('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;">';
    }
    else{
        document.getElementById("forty_three").style.display = "none"
        document.getElementById("twenty_eight").style.display = "none"
        document.getElementById("twenty_nine").style.display = "none"
        d.innerHTML+='<img id = "forty_four" style = "width:30%;height:30%;" src="'+option_imgurl[4]+'">';
        d.innerHTML+='<img id ="thirty_one" onclick="nextpage_biomass('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;">';
    }
}
function nextpage_biomass(number){
    
    //third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
    
    switch(number){
        case 0:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "ninteenth" style = "width:100%;height:10%">生質能18</div>';
            break;
        default:
            d.innerHTML+='<div id = "thirty_two" style = "width:100%;height:10%">生質能19</div>';
            break;
    }
    if(number!=-1){
        document.getElementById("seventh").style.display = "none"
        document.getElementById("seventeenth").style.display = "none"
        document.getElementById("eighteenth").style.display = "none"
        d.innerHTML+='<img id = "fail" style = "width:30%;height:30%;" src="'+option_imgurl[5]+'">';
        d.innerHTML+='<img id ="drawagain" onclick="draw_again('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;">';
    }
    else{
        document.getElementById("forty_four").style.display = "none"
        document.getElementById("thirty").style.display = "none"
        document.getElementById("thirty_one").style.display = "none"
        d.innerHTML+='<img id = "succeed" style = "width:30%;height:30%;" src="'+option_imgurl[6]+'">';
        d.innerHTML+='<img id ="final" onclick="Final('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;">';        
    }
        
}
function clean(){
    console.log("end");
    game(0)
}
function draw_again(a){
    document.getElementById("fail").style.display = "none"
    document.getElementById("ninteenth").style.display = "none"
    document.getElementById("drawagain").style.display = "none"
    d.innerHTML+='<img id = "fail_result" style = "width:40%;height:40%;margin-left:30%" src = "./picture/生質能(電電).jpg">';
    d.innerHTML+='<img id ="again" onclick="game('+1+')" src="./picture/再玩一次1.png" style="cursor:pointer;height:15vw;width:15vw;margin-left:8%"></img>';
    //document.write('<img id ="again" onclick="('+number+')" src="./picture/下一頁.png" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:33;"></img>');  
}
function Final(a){
    document.getElementById("thirty_two").style.display = "none"
    document.getElementById("succeed").style.display = "none"
    document.getElementById("final").style.display = "none"
    d.innerHTML+='<img id = "fifty_one" style = "width:40%;height:40%;margin-left:30%" src = "./picture/生質能(健美電電).jpg">';
    d.innerHTML+='<img id ="fifty_two" onclick="clean()" src="./picture/再玩一次1.png" style="cursor:pointer;height:15vw;width:15vw;margin-left:8%"></img>';
}
//game(0);