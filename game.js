var d = document.getElementById('container');

var sec = 8;
var timer;
var option_imgurl = ['./picture/餵豬.png',
                     './picture/焚化.png',
                     './picture/掩埋.png',
                     './picture/堆肥.png',
                     './picture/化製.png',
                     './picture/生質能(電電).png',
                     './picture/生質能2.jpg'
                    ];

function game(flag){
    //15-23 移除部分HTML 
    if(flag==1){
        document.getElementById("l").style.display = "none"
        document.getElementById("barninteenth").style.display = "none"
        document.getElementById("again").style.display = "none"
        document.getElementById("fail_result").style.display = "none"
        document.getElementById("ninteenth").style.display = "none"
    }
    else{
        console.log("TEST");
        d.innerHTML = "";
    }
    //播放抽籤影片
    d.innerHTML+='<video id = "first" autoplay="" playsinline muted="true" ><source type="video/mp4" src="./picture/抽籤.mp4"></source></video>';
    //隨機挑選縣市(不包含豆干)
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
//延遲出現食物圖片
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
//餵豬頁面
function nextpage_feedpigs(number){
    //console.log(number);
     if(number != -1){
        document.getElementById("eighth").style.display = "none"
        document.getElementById("second").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "third" style = "width:20%;height:20%;" src="'+option_imgurl[0]+'"></div>';
    }
    else{
        d.innerHTML+='<div style = "text-align:center"><img id = "forty" style = "width:20%;height:20%;" src="'+option_imgurl[0]+'"></div>';
        document.getElementById("two_round").style.display = "none"
        document.getElementById("twenty_one").style.display = "none"
    }
    switch(number){
        case 0:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 1:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 2:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 3:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 4:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 5:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 6:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 7:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 8:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">糟糕！根據你所在的縣（市）規定，你是不可以被拿去養豬的！不過你可以搭上廚餘車，運到鄰近縣市，再根據行政院環保署的規定，接受攝氏90度蒸煮一小時後，餵給豬隻做為食物！不然按下next，試試其他5種方法吧！</div>';
            break;
        case 9:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 10:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 11:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">糟糕！根據你所在的縣（市）規定，你是不可以被拿去養豬的！不過你可以搭上廚餘車，運到鄰近縣市，再根據行政院環保署的規定，接受攝氏90度蒸煮一小時後，餵給豬隻做為食物！不然按下next，試試其他5種方法吧！</div>';
            break;
        case 12:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">糟糕！根據你所在的縣（市）規定，你是不可以被拿去養豬的！不過你可以搭上廚餘車，運到鄰近縣市，再根據行政院環保署的規定，接受攝氏90度蒸煮一小時後，餵給豬隻做為食物！不然按下next，試試其他5種方法吧！</div>';
            break;
        case 13:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 14:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 15:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">糟糕！根據你所在的縣（市）規定，你是不可以被拿去養豬的！不過你可以搭上廚餘車，運到鄰近縣市，再根據行政院環保署的規定，接受攝氏90度蒸煮一小時後，餵給豬隻做為食物！不然按下next，試試其他5種方法吧！</div>';
            break;
        case 16:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%;">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">糟糕！根據你所在的縣（市）規定，你是不可以被拿去養豬的！不過你可以搭上廚餘車，運到鄰近縣市，再根據行政院環保署的規定，接受攝氏90度蒸煮一小時後，餵給豬隻做為食物！不然按下next，試試其他5種方法吧！</div>';
            break;
        case 17:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        case 18:
            d.innerHTML+='<div style = "text-align:center" id = "ninth" style = "width:100%;height:100%">餵豬</div><div id = "barninth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "b" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
        default:
            d.innerHTML+='<div style = "text-align:center" id = "twenty_two" style = "width:100%;height:100%;">餵豬</div><div id = "bartwenty_two"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "a" style = "width:100%;height:100%;">你變成了養豬廚餘！依照行政院環保署的規範，你必須被攝氏90度的高溫烹煮一小時後，才能變成豬豬們的大餐。不過，如果你的身上有細菌或病毒，豬豬吃下肚後，可能就會生病...不如按下next，試試其他5種方法吧！</div>';
            break;
    }
   
    if(number!=-1)
        d.innerHTML+='<div style = "text-align:right"><img id ="eleventh" onclick="nextpage_incineration('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:11;"></div>';
    else    
        d.innerHTML+='<div style = "text-align:right"><img id ="twenty_three" onclick="nextpage_incineration('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;z-index:23;"></div>';
}
//焚化頁面
function nextpage_incineration(number){
    if(number!=-1){
        document.getElementById("b").style.display = "none"
        document.getElementById("barninth").style.display = "none"
        document.getElementById("third").style.display = "none"
        document.getElementById("ninth").style.display = "none"
        document.getElementById("eleventh").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id ="forth" style = "width:20%;height:20%;" src="'+option_imgurl[1]+'"></div>';
        
    }
    else{
        document.getElementById("a").style.display = "none"
        document.getElementById("bartwenty_two").style.display = "none"
        document.getElementById("forty").style.display = "none"
        document.getElementById("twenty_two").style.display = "none"
        document.getElementById("twenty_three").style.display = "none"
        d.innerHTML+='<div id = "forty_one" style = "text-align:center"><img id = "forty_one" style = "width:20%;height:20%;" src="'+option_imgurl[1]+'"></div>';
        //d.innerHTML+='<img id ="twenty_five" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:25;">';
    }
    switch(number){
        case 0:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 1:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 2:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 3:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 4:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 5:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">可惜！你所在的縣市政府不太打算焚化廚餘，且若是進行焚化，會壓縮原先垃圾焚燒空間，且會產生戴奧辛，降低焚化爐壽命，是下下策的做法唷！請按下next，到下面4種方式看看吧！</div>';
            break;
        case 6:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 7:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 8:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">可惜！你所在的縣市政府不太打算焚化廚餘，且若是進行焚化，會壓縮原先垃圾焚燒空間，且會產生戴奧辛，降低焚化爐壽命，是下下策的做法唷！請按下next，到下面4種方式看看吧！</div>';
            break;
        case 9:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "d" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 10:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 11:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 12:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">可惜！你所在的縣市政府不太打算焚化廚餘，且若是進行焚化，會壓縮原先垃圾焚燒空間，且會產生戴奧辛，降低焚化爐壽命，是下下策的做法唷！請按下next，到下面4種方式看看吧！</div>';
            break;
        case 13:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 14:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 15:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">可惜！你所在的縣市政府不太打算焚化廚餘，且若是進行焚化，會壓縮原先垃圾焚燒空間，且會產生戴奧辛，降低焚化爐壽命，是下下策的做法唷！請按下next，到下面4種方式看看吧！</div>';
            break;
        case 16:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">可惜！你所在的縣市政府不太打算焚化廚餘，且若是進行焚化，會壓縮原先垃圾焚燒空間，且會產生戴奧辛，降低焚化爐壽命，是下下策的做法唷！請按下next，到下面4種方式看看吧！</div>';
            break;
        case 17:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        case 18:
            d.innerHTML+='<div style = "text-align:center" id = "tenth" style = "width:100%;height:100%;">焚化</div><div id = "bartenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "c" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
        default:
            d.innerHTML+='<div style = "text-align:center" id = "twenty_four" style = "width:100%;height:100%;">焚化</div><div id = "bartwenty_four"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "d" style = "width:100%;height:100%;">你將跟著你的「垃圾」朋友一起進入焚化爐被燃燒！可是原本就有好多的垃圾朋友，這樣一來會佔據他們原本的使用空間，影響垃圾焚化效率，且燃燒過程中會產生戴奧辛，降低焚化爐壽命。請按下next，到下面4種方式看看吧！</div>';
            break;
    }
    
    if(number!=-1)
        d.innerHTML+='<div style = "text-align:right"><img id ="twelfth" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:12;"></div>';
    else
        d.innerHTML+='<div style = "text-align:right"><img id ="twenty_five" onclick="nextpage_Buried('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:25;"></div>';

}
//掩埋頁面
function nextpage_Buried(number){
    if(number!=-1){
        document.getElementById("c").style.display = "none"
        document.getElementById("bartenth").style.display = "none"
        document.getElementById("forth").style.display = "none"
        document.getElementById("tenth").style.display = "none"
        document.getElementById("twelfth").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "fifth" style = "width:20%;height:20%;" src="'+option_imgurl[2]+'"></div>';
        
    }
    else{
        document.getElementById("d").style.display = "none"
        document.getElementById("bartwenty_four").style.display = "none"
        document.getElementById("forty_one").style.display = "none"
        document.getElementById("twenty_four").style.display = "none"
        document.getElementById("twenty_five").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "forty_two" style = "width:20%;height:20%;" src="'+option_imgurl[2]+'"></div>';
    }
    switch(number){
        case 0:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 1:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 2:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 3:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 4:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 5:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 6:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 7:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">你將被埋入土壤中進行腐化，可是這樣一來你會散發出臭味，而且也有土壤污染和污水外漏的疑慮，再加上很多縣市並沒有足夠的空間來掩埋，所以算不上是一個好方法唷！不如再次按下next，試試剩下的3種方法吧！</div>';
            break;
        case 8:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 9:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 10:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 11:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 12:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">你將被埋入土壤中進行腐化，可是這樣一來你會散發出臭味，而且也有土壤污染和污水外漏的疑慮，再加上很多縣市並沒有足夠的空間來掩埋，所以算不上是一個好方法唷！不如再次按下next，試試剩下的3種方法吧！</div>';
            break;
        case 13:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">你將被埋入土壤中進行腐化，可是這樣一來你會散發出臭味，而且也有土壤污染和污水外漏的疑慮，再加上很多縣市並沒有足夠的空間來掩埋，所以算不上是一個好方法唷！不如再次按下next，試試剩下的3種方法吧！</div>';
            break;
        case 14:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 15:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">你將被埋入土壤中進行腐化，可是這樣一來你會散發出臭味，而且也有土壤污染和污水外漏的疑慮，再加上很多縣市並沒有足夠的空間來掩埋，所以算不上是一個好方法唷！不如再次按下next，試試剩下的3種方法吧！</div>';
            break;
        case 16:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 17:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        case 18:
            d.innerHTML+='<div style = "text-align:center" id = "thirteen" style = "width:100%;height:100%;">掩埋</div><div id = "barthirteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "e" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
        default:
            d.innerHTML+='<div style = "text-align:center" id = "twenty_six" style = "width:100%;height:100%;">掩埋</div><div id = "bartwenty_six"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "f" style = "width:100%;height:100%;">真可惜！你來到了無法進行掩埋的城市！事實上，掩埋會帶來發臭以及土壤、污水污染的問題，不如藉此機會按下next，試試剩下的3種方法吧！</div>';
            break;
    }

    if(number!=-1)
        d.innerHTML+='<div style = "text-align:right"><img id ="fourteenth" onclick="nextpage_compost('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:14;"></img></div>';
    else
        d.innerHTML+='<div style = "text-align:right"><img id ="twenty_seven" onclick="nextpage_compost('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;z-index:27;"></img></div>';
}
//推肥頁面
function nextpage_compost(number){
    if(number!=-1){
        document.getElementById("e").style.display = "none"
        document.getElementById("barthirteen").style.display = "none"
        document.getElementById("fifth").style.display = "none"
        document.getElementById("thirteen").style.display = "none"
        document.getElementById("fourteenth").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "sixth" style = "width:20%;height:20%;" src="'+option_imgurl[3]+'"></div>';
    }
    else{
        document.getElementById("f").style.display = "none"
        document.getElementById("bartwenty_six").style.display = "none"
        document.getElementById("forty_two").style.display = "none"
        document.getElementById("twenty_six").style.display = "none"
        document.getElementById("twenty_seven").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "forty_three" style = "width:20%;height:20%;" src="'+option_imgurl[3]+'"></div>';
    }
    switch(number){
        case 0:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 1:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 2:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 3:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">哎呀！你所在的縣（市）無法進行熟廚餘堆肥，且若要進行堆肥，也會產生臭味、且需要添購其他設備等問題，請按下next，看看剩下的2個方法吧！</div>';
            break;
        case 4:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 5:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 6:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 7:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 8:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 9:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 10:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 11:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 12:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 13:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 14:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">哎呀！你所在的縣（市）無法進行熟廚餘堆肥，且若要進行堆肥，也會產生臭味、且需要添購其他設備等問題，請按下next，看看剩下的2個方法吧！</div>';
            break;
        case 15:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 16:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 17:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;;">堆肥</div><div id = "barfifteen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        case 18:
            d.innerHTML+='<div style = "text-align:center" id = "fifteenth" style = "width:100%;height:100%;;">堆肥</div><div id = "barfifteen"><hr></div>'
            d.innerHTML+='<div style = "text-align:center" id = "g" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
        default:
            d.innerHTML+='<div style = "text-align:center" id = "twenty_eight" style = "width:100%;height:100%;;">堆肥</div><div id = "bartwenty_eight"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "h" style = "width:100%;height:100%;">來來來！到桶子裡來！你將被裝入堆肥桶中，再倒入「肥土菌」後，在經過擠壓等程序後，最終變成液態的肥料，用來澆灌作物、植物。這樣的程序不論在一般家庭中，或在專業的堆肥場都可以進行哦！然而由於你屬於熟廚餘，如果要進行堆肥，會產生臭味、且需要添購其他設備，有些麻煩。要不試試按下next，看看剩下的2個方法吧！</div>';
            break;
    }
     
    if(number!=-1)
        d.innerHTML+='<div style = "text-align:right"><img id ="sixteenth" onclick="nextpage_chemistry('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;"></div>';
    else
        d.innerHTML+='<div style = "text-align:right"><img id ="twenty_nine" onclick="nextpage_chemistry('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;"></div>';
}
//化製頁面
function nextpage_chemistry(number){
    if(number!=-1){
        document.getElementById("g").style.display = "none"
        document.getElementById("barfifteen").style.display = "none"
        document.getElementById("sixth").style.display = "none"
        document.getElementById("fifteenth").style.display = "none"
        document.getElementById("sixteenth").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "seventh" style = "width:20%;height:20%;" src="'+option_imgurl[4]+'"></div>';
       
    }
    else{
        document.getElementById("h").style.display = "none"
        document.getElementById("bartwenty_eight").style.display = "none"
        document.getElementById("forty_three").style.display = "none"
        document.getElementById("twenty_eight").style.display = "none"
        document.getElementById("twenty_nine").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "forty_four" style = "width:20%;height:20%;" src="'+option_imgurl[4]+'"><div>';
        
    }
    switch(number){
        case 0:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 1:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 2:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 3:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 4:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 5:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 6:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 7:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">你要被帶到工廠裡了！經過化製的過程你將變成化學肥料，拿來照顧植物。然而這樣的過程會產生臭味、也會帶來空氣汙染的問題！不如按下next，試試其他方法吧！</div>';
            break;
        case 8:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 9:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 10:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製10</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 11:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 12:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 13:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 14:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 15:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 16:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 17:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        case 18:
            d.innerHTML+='<div style = "text-align:center" id = "seventeenth" style = "width:100%;height:100%">化製</div><div id = "barseventeen"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "i" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
        default:
            d.innerHTML+='<div style = "text-align:center" id = "thirty" style = "width:100%;height:100%">化製</div><div id = "barthirty"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "j" style = "width:100%;height:100%;">哦噢！這是一個無法進行化製的縣市！且就算進行化製，也會有產生臭味、空氣污染的疑慮，請按下next，到下一個步驟看看吧！</div>';
            break;
    }
    if(number !=-1)
         d.innerHTML+='<div style = "text-align:right"><img id ="eighteenth" onclick="nextpage_biomass('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;"></div>';
    else
        d.innerHTML+='<div style = "text-align:right"><img id ="thirty_one" onclick="nextpage_biomass('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;"></div>';
}
//生質能頁面
function nextpage_biomass(number){
    
    if(number!=-1){
        document.getElementById("i").style.display = "none"
        document.getElementById("barseventeen").style.display = "none"
        document.getElementById("seventh").style.display = "none"
        document.getElementById("seventeenth").style.display = "none"
        document.getElementById("eighteenth").style.display = "none"
        //d.innerHTML+='<img id = "fail" style = "width:30%;height:30%;" src="'+option_imgurl[5]+'">';
        d.innerHTML+='<div style = "text-align:center"><img id = "fail_result" style = "width:20%;height:20%;" src = "./picture/生質能(電電失敗).png"></div>';
        
        //d.innerHTML+='<img id ="drawagain" onclick="draw_again('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;;cursor:pointer;">';
    }
    else{
        document.getElementById("j").style.display = "none"
        document.getElementById("barthirty").style.display = "none"
        document.getElementById("forty_four").style.display = "none"
        document.getElementById("thirty").style.display = "none"
        document.getElementById("thirty_one").style.display = "none"
        d.innerHTML+='<div style = "text-align:center"><img id = "succeed" style = "width:20%;height:20%;" src="'+option_imgurl[5]+'"></div>';
        
    }
    switch(number){
        case 0:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 1:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 2:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 3:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 4:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 5:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 6:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 7:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 8:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 9:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 10:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 11:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 12:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 13:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 14:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 15:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 16:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 17:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        case 18:
            d.innerHTML+='<div style = "text-align:center" id = "ninteenth" style = "width:100%;height:100%">生質能</div><div id = "barninteenth"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "l" style = "width:100%;height:100%;">你在的縣市現在還沒有生質能發電廠哦！真可惜...因為生質能是個既環保又能消化廚餘的好方法呢！要不按下再玩一次，重新抽獎再來一次廚餘之旅吧！</div>';
            break;
        default:
            d.innerHTML+='<div style = "text-align:center" id = "thirty_two" style = "width:100%;height:100%">生質能</div><div id = "barthirty_two"><hr></div>';
            d.innerHTML+='<div style = "text-align:center" id = "k" style = "width:100%;height:100%;">你將被打碎，經過酸化的程序，然後待在缺乏氧氣的儲存槽裡一陣子，接著你會變成沼氣，然後！你會被點燃，最後變成電能，達到資源永續利用的效果！恭喜你囉！你為環境進了一份力！</div>';
            break;
    }
    
    if(number!=-1)
        d.innerHTML+='<div style = "text-align:right"><img id ="again" onclick="game('+1+')" src="./picture/再玩一次1.png" style="cursor:pointer;height:15vw;width:15vw;margin-left:8%"></img></div>';
    else
        d.innerHTML+='<div style = "text-align:right"><img id ="final" onclick="Final('+number+')" src="./picture/下一頁1.png" style="height:15vw;width:15vw;cursor:pointer;"></div>';
}
function clean(){
    console.log("end");
    game(0)
}
function draw_again(a){
    document.getElementById("fail").style.display = "none"
    document.getElementById("ninteenth").style.display = "none"
    document.getElementById("drawagain").style.display = "none"
    d.innerHTML+='<img id = "fail_result" style = "width:40%;height:40%;margin-left:30%" src = "./picture/生質能(電電).png">';
    d.innerHTML+='<img id ="again" onclick="game('+1+')" src="./picture/再玩一次1.png" style="cursor:pointer;height:15vw;width:15vw;margin-left:8%"></img>';
    //document.write('<img id ="again" onclick="('+number+')" src="./picture/下一頁.png" style="cursor:pointer;position:absolute;top:700px;left:100px;z-index:33;"></img>');  
}
//結束並重新抽籤
function Final(a){
    document.getElementById("k").style.display = "none"
    document.getElementById("thirty_two").style.display = "none"
    document.getElementById("succeed").style.display = "none"
    document.getElementById("final").style.display = "none"
    document.getElementById("barthirty_two").style.display = "none"
    d.innerHTML+='<img id = "fifty_one" style = "width:40%;height:40%;margin-left:30%" src = "./picture/生質能(健美電電).jpg">';
    d.innerHTML+='<img id ="fifty_two" onclick="clean()" src="./picture/再玩一次2.png" style="cursor:pointer;height:15vw;width:15vw;margin-left:8%"></img>';
}
//game(0);