var d = document.getElementById('container');//通过id获取版div节点对象
//d.innerHTML = d.innerHTML + '<img id ="first" src="./picture/抽籤.gif">';//在div中追加内权容22323
var sec = 8;
var timer;
//d.innerHTML+=
function game(flag){
    //document.write('<img id ="first" src="./picture/抽籤.gif">');
    if(flag==1)
         again.style.visibility =(again.style.visibility == "hidden") ? "visible" : "hidden";
    else{
        d.innerHTML = "";
    }
    d.innerHTML+='<video id = "first" width="360" height="270" autoplay="autoplay"  muted="true"><source type="video/mp4" src="./picture/抽籤.mp4"></source></video>';
    var imgnumber = Math.floor(Math.random()*17);
    var option_imgurl = ['./picture/餵豬.jpg',
                     './picture/焚化.jpg',
                     './picture/掩埋.jpg',
                     './picture/堆肥.jpg',
                     './picture/化製.jpg',
                     './picture/生質能.jpg',
                    ];
    if (flag==0){
        a=1;
        number = imgnumber;
        sec= 8;
        hidepic(a,number);
        setTimeout(function(){
    //second.style.visibility =(second.style.visibility == "hidden") ? "visible" : "hidden";
            d.innerHTML+='<img id ="third" style = "position:absolute;top:100px;left:400px;z-index:3;margin-left:250px;" src="'+option_imgurl[0]+'">';
            d.innerHTML+='<img id ="forth" style = "position:absolute;top:200px;left:400px;z-index:4;margin-left:250px;" src="'+option_imgurl[1]+'">';
            d.innerHTML+='<img id ="fifth" style = "position:absolute;top:300px;left:400px;z-index:5;margin-left:250px;" src="'+option_imgurl[2]+'">';
            d.innerHTML+='<img id ="sixth" style = "position:absolute;top:400px;left:400px;z-index:6;margin-left:250px;" src="'+option_imgurl[3]+'">';
            d.innerHTML+='<img id ="seventh" style = "position:absolute;top:500px;left:400px;z-index:7;margin-left:250px;" src="'+option_imgurl[4]+'">';
            d.innerHTML+='<img id ="eighth" onclick="nextpage_feedpigs('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:8;"></img>';
        },8000);
    }
    else{
        a=2;
        number = -1;
        sec= 8;
        hidepic(a,number);
        setTimeout(function(){
    //second.style.visibility =(second.style.visibility == "hidden") ? "visible" : "hidden";
            d.innerHTML+='<img id ="forty" style = "position:absolute;top:100px;left:400px;z-index:40;margin-left:250px;" src="'+option_imgurl[0]+'">';
            d.innerHTML+='<img id ="forty_one" style = "position:absolute;top:200px;left:400px;z-index:41;margin-left:250px;" src="'+option_imgurl[1]+'">';
            d.innerHTML+='<img id ="forty_two" style = "position:absolute;top:300px;left:400px;z-index:42;margin-left:250px;" src="'+option_imgurl[2]+'">';
            d.innerHTML+='<img id ="forty_three" style = "position:absolute;top:400px;left:400px;z-index:43;margin-left:250px;" src="'+option_imgurl[3]+'">';
            d.innerHTML+='<img id ="forty_four" style = "position:absolute;top:500px;left:400px;z-index:44;margin-left:250px;" src="'+option_imgurl[4]+'">';
            d.innerHTML+='<img id ="twenty_one" onclick="nextpage_feedpigs('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:21;"></img>';
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
        //textfield.value = "圖片被隱藏";
            let throwawayNode = d.removeChild(document.getElementById("first"));
            if(a == 1)
                d.innerHTML+='<img id ="second" style = "position:absolute;top:20px;left:20px;z-index:2" src="'+first_imgurl[number]+'">';
            else
                d.innerHTML+='<img id ="two_round" style = "position:absolute;top:20px;left:20px;z-index:21" src="'+second_imgurl[0]+'">';
    }
    else{
        setTimeout("hidepic("+a+","+number+")",1000);
    }
}
function nextpage_feedpigs(number){
    //console.log(number);
    if(number != -1){
        third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
        forth.style.visibility =(forth.style.visibility == "hidden") ? "visible" : "hidden";
        fifth.style.visibility =(fifth.style.visibility == "hidden") ? "visible" : "hidden";
        sixth.style.visibility =(sixth.style.visibility == "hidden") ? "visible" : "hidden";
        seventh.style.visibility =(seventh.style.visibility == "hidden") ? "visible" : "hidden";
        eighth.style.visibility =(eighth.style.visibility == "hidden") ? "visible" : "hidden";
        second.style.visibility =(second.style.visibility == "hidden") ? "visible" : "hidden";
    }
    else{
        forty.style.visibility =(forty.style.visibility == "hidden") ? "visible" : "hidden";
        forty_one.style.visibility =(forty_one.style.visibility == "hidden") ? "visible" : "hidden";
        forty_two.style.visibility =(forty_two.style.visibility == "hidden") ? "visible" : "hidden";
        forty_three.style.visibility =(forty_three.style.visibility == "hidden") ? "visible" : "hidden";
        forty_four.style.visibility =(forty_four.style.visibility == "hidden") ? "visible" : "hidden";
        two_round.style.visibility =(two_round.style.visibility == "hidden") ? "visible" : "hidden";
        twenty_one.style.visibility =(twenty_one.style.visibility == "hidden") ? "visible" : "hidden";
    }
    switch(number){
        case 0:
            document.write('<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬0</div>');
            break;
        case 1:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "ninth" style = "width:1000px;height:1000px;position:absolute;z-index:9;">餵豬18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_two" style = "width:1000px;height:1000px;position:absolute;z-index:22;">餵豬19</div>';
    }
    if(number!=-1)
        d.innerHTML+='<img id ="eleventh" onclick="nextpage_incineration('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:11;"></img>';
    else    
        d.innerHTML+='<img id ="twenty_three" onclick="nextpage_incineration('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:23;"></img>';
}
function nextpage_incineration(number){
    
    //third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
    if(number!=-1){
        ninth.style.visibility =(ninth.style.visibility == "hidden") ? "visible" : "hidden";
        eleventh.style.visibility =(eleventh.style.visibility == "hidden") ? "visible" : "hidden";
    }
    else{
        twenty_two.style.visibility =(twenty_two.style.visibility == "hidden") ? "visible" : "hidden";
        twenty_three.style.visibility =(twenty_three.style.visibility == "hidden") ? "visible" : "hidden";
    }
    switch(number){
        case 0:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "tenth" style = "width:1000px;height:1000px;position:absolute;z-index:10;">焚化18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_four" style = "width:1000px;height:1000px;position:absolute;z-index:24;">焚化19</div>';
            break;
    }
    if(number!=-1)
        d.innerHTML+='<img id ="twelfth" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:12;"></img>';
    else
        d.innerHTML+='<img id ="twenty_five" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:25;"></img>';
}
function nextpage_Buried(number){
    
    //third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
    if(number!=-1){
        tenth.style.visibility =(tenth.style.visibility == "hidden") ? "visible" : "hidden";
        twelfth.style.visibility =(twelfth.style.visibility == "hidden") ? "visible" : "hidden";
    }
    else{
        twenty_four.style.visibility =(twenty_four.style.visibility == "hidden") ? "visible" : "hidden";
        twenty_five.style.visibility =(twenty_five.style.visibility == "hidden") ? "visible" : "hidden";
    }
    switch(number){
        case 0:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "thirteen" style = "width:1000px;height:1000px;position:absolute;z-index:13;">掩埋18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_six" style = "width:1000px;height:1000px;position:absolute;z-index:26;">掩埋19</div>';
            break;
    }
    if(number!=-1)
        d.innerHTML+='<img id ="fourteenth" onclick="nextpage_compost('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:14;"></img>';
    else
        d.innerHTML+='<img id ="twenty_seven" onclick="nextpage_compost('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:27;"></img>';
}
function nextpage_compost(number){
    
    //third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
    if(number!=-1){
        thirteen.style.visibility =(thirteen.style.visibility == "hidden") ? "visible" : "hidden";
        fourteenth.style.visibility =(fourteenth.style.visibility == "hidden") ? "visible" : "hidden";
    }
    else{
        twenty_six.style.visibility =(twenty_six.style.visibility == "hidden") ? "visible" : "hidden";
        twenty_seven.style.visibility =(twenty_seven.style.visibility == "hidden") ? "visible" : "hidden";
    }
    switch(number){
        case 0:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "fifteenth" style = "width:1000px;height:1000px;position:absolute;z-index:15;">堆肥18</div>';
            break;
        default:
            d.innerHTML+='<div id = "twenty_eight" style = "width:1000px;height:1000px;position:absolute;z-index:28;">堆肥19</div>';
            break;
    }
    if(number!=-1)
        d.innerHTML+='<img id ="sixteenth" onclick="nextpage_chemistry('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:16;"></img>';
    else
        d.innerHTML+='<img id ="twenty_nine" onclick="nextpage_chemistry('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:29;"></img>';
}
function nextpage_chemistry(number){
    
    //third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
    if(number!=-1){
        fifteenth.style.visibility =(fifteenth.style.visibility == "hidden") ? "visible" : "hidden";
        sixteenth.style.visibility =(sixteenth.style.visibility == "hidden") ? "visible" : "hidden";
    }
    else{
        twenty_eight.style.visibility =(twenty_eight.style.visibility == "hidden") ? "visible" : "hidden";
        twenty_nine.style.visibility =(twenty_nine.style.visibility == "hidden") ? "visible" : "hidden";
    }
    switch(number){
        case 0:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "seventeenth" style = "width:1000px;height:1000px;position:absolute;z-index:17;">化製18</div>';
            break;
        default:
            d.innerHTML+='<div id = "thirty" style = "width:1000px;height:1000px;position:absolute;z-index:30;">化製19</div>';
            break;
    }
    if(number!=-1)
        d.innerHTML+='<img id ="eighteenth" onclick="nextpage_biomass('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:18;"></img>';
    else
        d.innerHTML+='<img id ="thirty_one" onclick="nextpage_biomass('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:31;"></img>';
}
function nextpage_biomass(number){
    
    //third.style.visibility =(third.style.visibility == "hidden") ? "visible" : "hidden";
    if(number!=-1){
        seventeenth.style.visibility =(seventeenth.style.visibility == "hidden") ? "visible" : "hidden";
        eighteenth.style.visibility =(eighteenth.style.visibility == "hidden") ? "visible" : "hidden";
    }
    else{
        thirty.style.visibility =(thirty.style.visibility == "hidden") ? "visible" : "hidden";
        thirty_one.style.visibility =(thirty_one.style.visibility == "hidden") ? "visible" : "hidden";
    }
    switch(number){
        case 0:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能0</div>';
            break;
        case 1:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能1</div>';
            break;
        case 2:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能2</div>';
            break;
        case 3:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能3</div>';
            break;
        case 4:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能4</div>';
            break;
        case 5:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能5</div>';
            break;
        case 6:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能6</div>';
            break;
        case 7:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能7</div>';
            break;
        case 8:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能8</div>';
            break;
        case 9:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能9</div>';
            break;
        case 10:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能10</div>';
            break;
        case 11:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能11</div>';
            break;
        case 12:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能12</div>';
            break;
        case 13:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能13</div>';
            break;
        case 14:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能14</div>';
            break;
        case 15:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能15</div>';
            break;
        case 16:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能16</div>';
            break;
        case 17:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能17</div>';
            break;
        case 18:
            d.innerHTML+='<div id = "ninteenth" style = "width:1000px;height:1000px;position:absolute;z-index:19;">生質能18</div>';
            break;
        default:
            d.innerHTML+='<div id = "thirty_two" style = "width:1000px;height:1000px;position:absolute;z-index:32;">生質能19</div>';
            break;
    }
    if(number!=-1)
        d.innerHTML+='<img id ="drawagain" onclick="draw_again('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:21;"></img>';
    else
        d.innerHTML+='<img id ="final" onclick="Final('+number+')" src="./picture/下一頁1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:33;"></img>';        
}
function clean(){
    console.log("end");
    game(0)
}
function draw_again(a){
    ninteenth.style.visibility =(ninteenth.style.visibility == "hidden") ? "visible" : "hidden";
    drawagain.style.visibility =(drawagain.style.visibility == "hidden") ? "visible" : "hidden";
    d.innerHTML+='<img id ="again" onclick="game('+1+')" src="./picture/再玩一次1.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:50;"></img>';
    //document.write('<img id ="again" onclick="('+number+')" src="./picture/下一頁.png" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:33;"></img>');  
}
function Final(a){
    final.style.visibility =(final.style.visibility == "hidden") ? "visible" : "hidden";
    //thirty_one.style.visibility =(thirty_one.style.visibility == "hidden") ? "visible" : "hidden";
    thirty_two.style.visibility =(thirty_two.style.visibility == "hidden") ? "visible" : "hidden";
    d.innerHTML+='<img id = "fifty_one" style = "width:1000px;height:1000px;position:absolute;z-index:51;" src = "./picture/發電成功.jpg">';
    d.innerHTML+='<img id =" fifty_two" onclick="clean()" src="./picture/再玩一次2.jpg" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:52;"></img>';

   
}
//game(0);