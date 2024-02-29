// 切换主页头像
document.getElementById("alt-avatar").onclick =  function(e){
    if(e.target.src.search("alt") >=0){
        e.target.src = "_assets/avatars/default.jpg";
        document.getElementById("main-avatar").src = "_assets/avatars/alt.jpg";
    }
    else if(e.target.src.search("default") >=0) {
        e.target.src = "_assets/avatars/alt.jpg";
        document.getElementById("main-avatar").src = "_assets/avatars/default.jpg";
    }
}
