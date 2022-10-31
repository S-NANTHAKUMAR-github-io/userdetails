function logoutUser(){
    ajaxRequest("./logout.php", {},successHandler, failureHandler)
}


function successHandler(result){
    if(result['code'] === '200'){
        console.log(result['msg']);
        document.body.innerHTML='';
        var style_tag = document.createElement('script');
        style_tag.src = './static/js/login-construnction.js';
        document.body.appendChild(style_tag);
    }else{

    }
}

function failureHandler(error){
    console.log("error");
    console.log(error);
}


document.getElementById("logout").addEventListener("click", function(){
    logoutUser();
})