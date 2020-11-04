var Counter=0;


function modeAdjust(){
    var selected=document.getElementById("inputGroupSelect01");
    if(selected.value=="light"){
        for(var i=0;i<document.querySelectorAll("label").length;i++){
            document.querySelectorAll("label")[i].style.color="black";
        }
        
        document.querySelector("h1").style.color="black";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector(".card").style.backgroundImage="linear-gradient(to right,#FEF8DD,#E1F8DC,#ACDDDE)";
        for(var i=0;i<document.querySelectorAll("select").length;i++){
            document.querySelectorAll("select")[i].style.backgroundColor="white";
        }
        for(var i=0;i<document.querySelectorAll("input").length;i++){
            document.querySelectorAll("input")[i].style.backgroundColor="white";
        }
        document.querySelector("#save").classList.add("btn-outline-success");
        document.querySelector("#save").classList.remove("btn-light");
        document.querySelector("#cancel").classList.add("btn-outline-danger");
        document.querySelector("#cancel").classList.remove("btn-dark");
        document.getElementById("fontSize").style.backgroundImage="linear-gradient(to right,#FEF8DD,#FFE7C7)";
        document.getElementById("mode").style.backgroundImage="linear-gradient(to right,#CAF1DE,#E1F8DC)";
        
    }else if(selected.value=="dark"){
        for(var i=0;i<document.querySelectorAll("label").length;i++){
            document.querySelectorAll("label")[i].style.color="#E8E7E3";
        }
        document.querySelector("h1").style.color="#E8E7E3";
        document.querySelector("body").style.backgroundColor="#3F4551";
        document.querySelector(".card").style.backgroundImage="linear-gradient(to right,#878787,#656565,#333333,black)";
        for(var i=0;i<document.querySelectorAll("select").length;i++){
            document.querySelectorAll("select")[i].style.backgroundColor="#E8E7E3";
        }
        for(var i=0;i<document.querySelectorAll("input").length;i++){
            document.querySelectorAll("input")[i].style.backgroundColor="#E8E7E3";
        }
        for(var i=0;i<document.querySelectorAll("option").length;i++){
            document.querySelectorAll("option")[i].style.backgroundColor="#E8E7E3";
        }
        document.querySelector("#save").classList.remove("btn-outline-success");
        document.querySelector("#save").classList.add("btn-light");
        document.querySelector("#cancel").classList.remove("btn-outline-danger");
        document.querySelector("#cancel").classList.add("btn-dark");
        document.getElementById("mode").style.backgroundImage="linear-gradient(to right,black,black)";
        document.getElementById("fontSize").style.backgroundImage="linear-gradient(to right,black,black)";
    }
}


function addFollow(){
    var name=document.querySelector("#FollowInput").value;
    var newList=document.createElement("li");
    newList.classList.add("list-group-item");
    newList.classList.add("d-flex");
    newList.classList.add("justify-content-between");
    newList.classList.add("lh-condensed");
    var newListDiv=document.createElement("div");
    var newListH6=document.createElement("h6");
    newListH6.innerText=name;
    var newListBtn=document.createElement("button");
    var newListEmoji=document.createElement("i");
    newListEmoji.classList.add("fas");
    newListEmoji.classList.add("fa-user-times");
    newListBtn.classList.add("deleteButton");
    newListBtn.value=Counter;
    Counter++;
    newListH6.classList.add("my-0");
    newListBtn.onclick=function deleteUser(){
        newList.remove();
    }
    newListBtn.appendChild(newListEmoji);
    newListDiv.appendChild(newListH6);
    newList.appendChild(newListDiv);
    newList.appendChild(newListBtn);
    document.querySelector(".followingList").appendChild(newList);
    // console.log("done");
}

document.getElementById("FollowInput").addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addFollow();
    }
});

function fontAdjust(){
    //document.querySelector("body").style.fontSize="x-small";
    var labels=document.querySelectorAll("label");
    var headers=document.querySelectorAll("h1");
    var smallheader=document.querySelectorAll("h6");
    var buttons=document.querySelectorAll("button");
    var curr=document.getElementById("selectedFont");
    var options=document.querySelectorAll("option");
    var selections=document.querySelectorAll("select");
    var inputs=document.querySelectorAll("input");
    var lists=document.querySelectorAll("li");

    // if(curr.value=="xs"){
    //     document.querySelector("body").style.fontSize="x-small";
    // }
    // else if(curr.value=="s"){
    //     document.querySelector("body").style.fontSize="small";
    // }
    // else if(curr.value=="m"){
    //     document.querySelector("body").style.fontSize="medium";
    // }
    // else if(curr.value=="l"){
    //     document.querySelector("body").style.fontSize="large";
    // }
    // else if(curr.value=="xl"){
    //     document.querySelector("body").style.fontSize="x-large";
    // }
    if(curr.value=="xs"){
        for(var i=0;i<labels.length;i++){
            labels[i].style.fontSize="x-small";
        }
        for(var i=0;i<headers.length;i++){
            headers[i].style.fontSize="x-small";
        }
        for(var i=0;i<smallheader.length;i++){
            smallheader[i].style.fontSize="x-small";
        }
        for(var i=0;i<buttons.length;i++){
            buttons[i].style.fontSize="x-small";
        }
        for(var i=0;i<options.length;i++){
            options[i].style.fontSize="x-small";
        }
        for(var i=0;i<selections.length;i++){
            selections[i].style.fontSize="x-small";
        }
        for(var i=0;i<inputs.length;i++){
            inputs[i].style.fontSize="x-small";
        }
        for(var i=0;i<lists.length;i++){
            lists[i].style.fontSize="x-small";
        }
    }
    else if(curr.value=="s"){
        for(var i=0;i<labels.length;i++){
            labels[i].style.fontSize="small";
        }
        for(var i=0;i<headers.length;i++){
            headers[i].style.fontSize="small";
        }
        for(var i=0;i<smallheader.length;i++){
            smallheader[i].style.fontSize="small";
        }
        for(var i=0;i<buttons.length;i++){
            buttons[i].style.fontSize="small";
        }
        for(var i=0;i<options.length;i++){
            options[i].style.fontSize="small";
        }
        for(var i=0;i<selections.length;i++){
            selections[i].style.fontSize="small";
        }
        for(var i=0;i<inputs.length;i++){
            inputs[i].style.fontSize="small";
        }
        for(var i=0;i<lists.length;i++){
            lists[i].style.fontSize="small";
        }
    }
    else if(curr.value=="m"){
        for(var i=0;i<labels.length;i++){
            labels[i].style.fontSize="medium";
        }
        for(var i=0;i<headers.length;i++){
            headers[i].style.fontSize="medium";
        }
        for(var i=0;i<smallheader.length;i++){
            smallheader[i].style.fontSize="medium";
        }
        for(var i=0;i<buttons.length;i++){
            buttons[i].style.fontSize="medium";
        }
        for(var i=0;i<options.length;i++){
            options[i].style.fontSize="medium";
        }
        for(var i=0;i<selections.length;i++){
            selections[i].style.fontSize="medium";
        }
        for(var i=0;i<inputs.length;i++){
            inputs[i].style.fontSize="medium";
        }
        for(var i=0;i<lists.length;i++){
            lists[i].style.fontSize="medium";
        }
    }
    else if(curr.value=="l"){
        for(var i=0;i<labels.length;i++){
            labels[i].style.fontSize="large";
        }
        for(var i=0;i<headers.length;i++){
            headers[i].style.fontSize="large";
        }
        for(var i=0;i<smallheader.length;i++){
            smallheader[i].style.fontSize="large";
        }
        for(var i=0;i<buttons.length;i++){
            buttons[i].style.fontSize="large";
        }
        for(var i=0;i<options.length;i++){
            options[i].style.fontSize="large";
        }
        for(var i=0;i<selections.length;i++){
            selections[i].style.fontSize="large";
        }
        for(var i=0;i<inputs.length;i++){
            inputs[i].style.fontSize="large";
        }
        for(var i=0;i<lists.length;i++){
            lists[i].style.fontSize="large";
        }
    }
    else if(curr.value=="xl"){
        for(var i=0;i<labels.length;i++){
            labels[i].style.fontSize="x-large";
        }
        for(var i=0;i<headers.length;i++){
            headers[i].style.fontSize="x-large";
        }
        for(var i=0;i<smallheader.length;i++){
            smallheader[i].style.fontSize="x-large";
        }
        for(var i=0;i<buttons.length;i++){
            buttons[i].style.fontSize="x-large";
        }
        for(var i=0;i<options.length;i++){
            options[i].style.fontSize="x-large";
        }
        for(var i=0;i<selections.length;i++){
            selections[i].style.fontSize="x-large";
        }
        for(var i=0;i<inputs.length;i++){
            inputs[i].style.fontSize="x-large";
        }
        for(var i=0;i<lists.length;i++){
            lists[i].style.fontSize="x-large";
        }
    }
}
