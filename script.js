let container=document.createElement("div");
container.innerHTML=`<ul type="none"><div class="a"><li>Home</li></div> <div class="a"><li>Explore</li></div><div class="a"><li>shorts</li></div><div class="a"><li>Subscriptions</li></div><div class="a"><li>Library</li></div></ul><nav><div><img class="you" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"></div><div class="title">YouTube Clone</div>
<div><input type="text" class="inp" placeholder="Search 'channelinformation' or 'playlists' or 'subscribersanduseractivity' or 'searchsongs' or 'create playlist'"></div><button type="button" onclick="foo()" onclick="playlist()">Search</button></nav><img class="icon" ><p class="channelname"></p><div class="main"><div><img class="thumbnail"><p class="Video-title"></p><div> </div>`;
document.body.append(container);
var arr3=[];

async function api (){
    try{
    var a= await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyBYN5zZdvzffk_KpWfzY4o8fgQSCRatxoc&maxResults=25");
    var youtube=await a.json();
  
    var inp =document.querySelector(".inp").value;
    
    
    var m=document.querySelector(".channelname")
    m.innerText="The WeekEnd Vevo";
    m.style.fontWeight="800"
    

      var c=document.querySelector(".icon");
      c.src=youtube.items[0].snippet.thumbnails.high.url;
      
     
      var thumb=document.querySelector(".thumbnail");
         thumb.src=youtube.items[0].snippet.thumbnails.high.url;
      var title=document.querySelector(".Video-title");
    title.innerText=youtube.items[0].snippet.title;
   

    
    var dim=document.querySelector(".main");
    var dim1=document.createElement("div");
    var para1=document.createElement("p");
    para1.innerText=youtube.items[1].snippet.title;
    var p=document.createElement("img");
    p.src=youtube.items[1].snippet.thumbnails.high.url ;
    dim1.append(p,para1);
    dim.append(dim1);
   dim.style.paddingTop="100px";
   
 


    var dim2=document.createElement("div");
    var p1=document.createElement("img");
    var para2=document.createElement("p");
    para2.innerText=youtube.items[2].snippet.title;
    p1.src=youtube.items[2].snippet.thumbnails.high.url ;
    dim2.append(p1,para2);
    dim.append(dim2);

    var dim3=document.createElement("div");
    var p2=document.createElement("img");
    var para3=document.createElement("p");
    para3.innerText= youtube.items[3].snippet.title;
    p2.src=youtube.items[3].snippet.thumbnails.high.url ;
    dim3.append(p2,para3);
    dim.append(dim3);

    var dim4=document.createElement("div");
    var p3=document.createElement("img");
    var para4=document.createElement("p");
    para4.innerText= youtube.items[4].snippet.title;
    p3.src=youtube.items[4].snippet.thumbnails.high.url ;
    dim4.append(p3,para4);
    dim.append(dim4);

    var dim5=document.createElement("div");
    var p4=document.createElement("img");
    var para5=document.createElement("p");
    para5.innerText= youtube.items[5].snippet.title;
    p4.src=youtube.items[5].snippet.thumbnails.high.url ;
    dim5.append(p4,para5);
    dim.append(dim5);

    var dim6=document.createElement("div");
    var p5=document.createElement("img");
    var para6=document.createElement("p");
    para6.className="h";
    para6.innerText= youtube.items[6].snippet.title;
    para6.style.width="150px"
    
    p5.src=youtube.items[6].snippet.thumbnails.high.url ;
    dim6.append(p5,para6);
    dim.append(dim6);

  
  
    
           }
catch(error){
    console.log(error);
    
}
    
    
}
api();

async function foo(){
  var inp =document.querySelector(".inp").value;
  var chntitle=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyBYN5zZdvzffk_KpWfzY4o8fgQSCRatxoc&maxResults=25");
  var chn=await chntitle.json();
  var textbo=document.createElement("p");
  var arr=[];
  for(i=0;i<chn.items.length;i++){
   arr.push(chn.items[i].snippet.title);
  }
 
  if(inp==="channelinformation"){


  var inpu=document.createElement("textarea");
  var parag=document.createElement("p");
  parag.innerText="Song Published";
  parag.className="parag"
  document.body.append(parag,inpu);
  inpu.className="inpu"
  inpu.value=arr;
console.log(chn);
}
if(inp==="playlists"){
  
  var inpu=document.createElement("textarea");
  var parag=document.createElement("p");
  parag.innerText="Playlists";
  parag.className="parag"
  document.body.append(parag,inpu);
  inpu.className="inpu"
  inpu.value=arr;
console.log(chn);
}
if(inp==="subscribersanduseractivity"){
  var inpu=document.createElement("textarea");
  var parag=document.createElement("p");
  parag.innerText="Playlists";
  parag.className="parag"
  document.body.append(parag,inpu);
  inpu.className="inpu"
  inpu.value=`Subscribers : 30M 
Total results: ${chn.pageInfo.totalResults}`;
}

if(inp==="searchsongs"){


  var arr1=[];
  

  var song=prompt("enter any one song from the below text area");
  var inpu=document.createElement("textarea");
  var parag=document.createElement("p");
  parag.innerText="Song info";
  parag.className="parag"
  document.body.append(parag,inpu);
  inpu.className="inpu"
  inpu.value=arr;
  for(i=0;i<chn.items.length;i++){
    if(chn.items[i].snippet.title==song){
      arr1.push(chn.items[i].snippet);
      inpu.value=`${arr1[0].description} , ${arr1[0].title}`;
      console.log(arr1);
    }
  }
 }

 if(inp==="create playlist"){
  var arr=[];
   
   for(i=0;i<chn.items.length;i++){
    
    arr.push(chn.items[i].snippet.title);
   }
   var inpu=document.createElement("textarea");
   var parag=document.createElement("p");
   var playlistname=prompt("enter new playlist name");
   parag.innerText=playlistname;
   parag.className="parag"
   document.body.append(parag,inpu);
   inpu.className="inpu"
   inpu.value=arr;
   


var songinput=prompt("enter songname from textbox");
arr3.push(songinput);
console.log(arr3);
inpu.value=arr3;
 


  
 }


}


