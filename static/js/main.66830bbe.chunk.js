(this["webpackJsonpreact-card-app"]=this["webpackJsonpreact-card-app"]||[]).push([[0],{3:function(e,t,a){e.exports=a(9)},8:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(2),o=a.n(i),c={display:"flex",justifyContent:"start",flexDirection:"row",padding:".2rem",width:"532px",margin:"1rem"},l={margin:".2rem",marginRight:".3rem",width:"50px",height:"50px",borderRadius:"30px",background:"gray"},d={},s={display:"inline-flex",alignItems:"center"},m={fontSize:"13pt",fontWeight:"bold",paddingRight:"1rem"},u=function(e){var t=e.item,a=e.cardData;return n.a.createElement("div",{className:"userComment"},n.a.createElement("div",{style:c},n.a.createElement("img",{alt:"profile-pic",style:l}),n.a.createElement("div",{style:d},n.a.createElement("div",null,n.a.createElement("div",{style:{paddingLeft:"1rem"}},n.a.createElement("div",{style:s},n.a.createElement("p",{style:m},t.username),n.a.createElement("p",{style:{fontSize:"8pt",color:"gray"}},t.date)),n.a.createElement("p",{style:{marginTop:"-.6rem",fontFamily:"calibri"}},t.comment)),a))))},h={width:"440px",border:"1px solid #ccc",borderRadius:"2px",background:"white",padding:"1rem"},p={borderRadius:"6px",background:"rgb(249, 249, 249)"},f={background:"black",objectFit:"cover",width:"440px",height:"240px",borderRadius:"6px 6px 0px 0px"},g={padding:".3rem"},y={display:"block",textAlign:"right",fontSize:"8pt",color:"gray",textDecoration:"none"},E=function(e){var t=e.data;return console.log(t),n.a.createElement("div",{style:h},n.a.createElement("div",{style:p},n.a.createElement("img",{alt:"card-img",style:f,src:t.img}),n.a.createElement("div",{style:g},n.a.createElement("h2",{style:{fontSize:"10pt",margin:"0"}},t.title),n.a.createElement("p",{style:{fontSize:"10pt"}},t.desc),n.a.createElement("a",{style:y,href:t.img},"source"))))},b=function(e){var t=e.items;return n.a.createElement("section",{className:"userCommentGrid"},t.userData.map((function(e){return n.a.createElement(u,{key:e.id,item:e,cardData:n.a.createElement(E,{data:(a=e.cardId,t.cardData.find((function(e){return e.id===a})))})});var a})))},w={width:"30rem"},x=function(){return n.a.createElement("div",{style:w},n.a.createElement("h1",null,"react-card-app"),n.a.createElement("h3",null,"a React Project of creating cards to study how to utilize react."),n.a.createElement("p",null,"Special thanks to Dave Ceddia from his article ",n.a.createElement("a",{href:"https://daveceddia.com/react-practice-projects/"},"6 Fun React Project Ideas.")," This was the first project he listed on his site and I thought to myself this would be fun to do. ",n.a.createElement("br",null),n.a.createElement("br",null),'Although I am satisfied with what I have done so far, I may try to encorporate parts like a "retweet" or "like" button. But in doing so they may just be empty functions of a button. Other plans would include things such as a mobile viewport format and fetching json information from another site.'),n.a.createElement("a",{href:"https://github.com/milkndcoffee/react-card-app"},"Access the source code here!"))};a(8);var v=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(x,null),n.a.createElement(b,{items:{cardData:[{id:0,img:"https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",title:"Sunflowers!",desc:"A beautiful picture containing a bright surplus of sunflowers"},{id:1,img:"https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",title:"Bulldawg",desc:"Look at this photogenic bulldog! One of the cutest in the world"},{id:2,img:"https://images.unsplash.com/photo-1519077204685-ed90d0cc05b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",title:"Ramen",desc:"What makes ramen so unique from other foods? Click on the article and find out now!"}],userData:[{id:0,cardId:0,username:"fakeguy01",comment:"woah, these flowers r cool",date:"08-15-2020"},{id:1,cardId:2,username:"ramenlover",comment:"ugh, this article is all wrong!! what a disgrace to ramen lovers all around the world!!!",date:"08-15-2020"},{id:2,cardId:1,username:"sophine",comment:"i need me one of these",date:"08-14-2020"},{id:3,cardId:0,username:"5unfl0w3r_h4t3r",comment:"so ugly lmao wym @fakeguy01",date:"08-21-2020"}]}}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.66830bbe.chunk.js.map