var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme","light");
}


var storyImg = document.getElementsByClassName("story2")[0];
var storyopen = document.getElementsByClassName("story-opens")[0];
var bodyBg = document.getElementsByTagName("body");
storyImg.addEventListener("click",()=>{
    // bodyBg.style.background ="grey";

    if(storyopen.style.top == "-350px"){
        storyopen.style.top = "300px";
    }
    else{
        storyopen.style.top = "-350px"
    }
})

var storyImg1 = document.getElementsByClassName("story3")[0];
var storyopen1 = document.getElementsByClassName("story-opens")[1];

storyImg1.addEventListener("click", ()=>{
    if(storyopen1.style.top == "-350px"){
        storyopen1.style.top = "300px";
    }
    else{
        storyopen1.style.top = "-350px";
    }
})

var storyImg2 = document.getElementsByClassName("story4")[0];
var storyopen2 = document.getElementsByClassName("story-opens")[2];

storyImg2.addEventListener("click", ()=>{
    if(storyopen2.style.top == "-350px"){
        storyopen2.style.top = "300px";
    }
    else{
        storyopen2.style.top = "-350px";
    }
})

var storyImg3 = document.getElementsByClassName("story5")[0];
var storyopen3 = document.getElementsByClassName("story-opens")[3];

storyImg3.addEventListener("click", ()=>{
    if(storyopen3.style.top == "-350px"){
        storyopen3.style.top = "300px";
    }
    else{
        storyopen3.style.top = "-350px";
    }
})

var textArea = document.getElementById("txtarea");
var postBtn = document.getElementsByClassName("post-btn")[0];

textArea.addEventListener("click",()=>{
    postBtn.style.display = "visible";
})