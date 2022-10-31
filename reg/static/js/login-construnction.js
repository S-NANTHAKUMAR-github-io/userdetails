var login_html = `
    <form id='loginform'>
        Enter Username : <input type='text' id='username'><br>
        Enter Password : <input type='password' id='password'><br>
        <input type='submit' value='Login'>
    </form><br>
    <button id='register-button'>Register</button>
`;





function success(data){
    console.log(data);
    if(data['code'] == 200){
        var name=data['msg'].split("-")[1];
        var index_html = `
    <button id="logout" >Logout</button>
   <h1> Welcome ${name}</h1> 
`;
console.log(index_html);
        document.body.innerHTML = index_html;
        var script_tag = document.createElement('script');
        script_tag.src = './static/js/logout.js';
        document.body.appendChild(script_tag);
    }
}

function addEvents(){
    var form_tag = document.getElementById('loginform');
    form_tag.addEventListener('submit', function(e){
        var username = document.getElementById("username").value;
        var password  = document.getElementById("password").value;
        var data = {"username": username, "password": password};
        ajaxRequest("./login.php", data, success, success);
        e.preventDefault();
    });

    var registerButton =document.getElementById('register-button');
    registerButton.addEventListener('click', function(){
        document.body.innerHTML=''
        var script_tag = document.createElement('script');
        script_tag.src = './static/js/register-construnction.js';
        document.body.appendChild(script_tag);
    })

}

function init(){
    document.body.innerHTML = login_html;
    addEvents();
}

init();
