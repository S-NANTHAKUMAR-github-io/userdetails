function ajaxRequest( url, data, successHandler, failureHandler) {

    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            successHandler(JSON.parse(this.responseText));
        }else if(this.readyState == 4 && this.status!=200){
            failureHandler(JSON.parse(this.responseText));
        }
    };
    req.send(JSON.stringify(data));
}
