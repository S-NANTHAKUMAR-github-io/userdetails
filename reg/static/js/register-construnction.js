var register_html = `
    <form id='registerform'>
        Enter Username : <input type='text' id='username'><br>
        Enter Mail Id  : <input type='email' id='mail'><br>
        Enter Password : <input type='text' id='password'><br>
        <input type='submit' value='Register'>
    </form>
    <button id='login-button'>Login</button>
`;

function success(data){
    console.log(data);
    if(data['code'] == 200){
        alert('register successfully!');
        document.body.innerHTML=''
        var script_tag = document.createElement('script');
        script_tag.src = './static/js/login-construnction.js';
        document.body.appendChild(script_tag);
    }
}

function addEvents(){
    var form_tag = document.getElementById('registerform');
    form_tag.addEventListener('submit', function(e){
        var username  = document.getElementById("username").value;
        var password  = document.getElementById("password").value;
        var mailid    = document.getElementById("mail").value;
        var data = {"username": username, "mailid":mailid, "password": password};
        ajaxRequest("./register.php", data, success, success);
        e.preventDefault();
    });

    var loginButton =document.getElementById('login-button');
    loginButton.addEventListener('click', function(){
        document.body.innerHTML=''
        var script_tag = document.createElement('script');
        script_tag.src = './static/js/login-construnction.js';
        document.body.appendChild(script_tag);
    })

}

function init(){
    document.body.innerHTML = register_html;
    addEvents();
}

init();