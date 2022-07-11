// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE

function submitAnswer() {
    var answer = document.getElementById("text-7fdc").value;
    var ajaxURL = {
        url: window.location.pathname,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: JSON.stringify({
            "answer": answer
        }),
      };

    $.ajax(ajaxURL)
        .then(function (response) {
            response = JSON.parse(response);
            if(response.message==="wrong answer"){
                window.location.href = "/app/images/meme.jpg";
            }
            else{
                window.location.href = "/currentLevel";
            }
        })
        .catch((err) => {
            console.log(err);
            alert("Internal Server Error Alert Occured");
        });
}

function logout() {
    var redirectURL = "http://" + document.domain + ":3000/";
    console.log(redirectURL)
    debugger;
    var auth = catalyst.auth;
    auth.signOut(redirectURL);
}