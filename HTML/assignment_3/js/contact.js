cnt_validate()
{
var name = document.getElementById('cnt_name').value;
var email = document.getElementById('cnt_email').value;
var mess = document.getElementById('cnt_mess').value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(name == ""){
	var err_mess1 = "This is Required";
}

if(email == ""){
	var err_mess2 = "This is Required";
}

if(mess == ""){
	var err_mess3 = "This is Required";
}

if(email.match(mailformat))
{
	var err_mess2="";
}
else{
	var err_mess2="Not a valid email address";
}
$("#er_name").html(err_mess1);
$("#er_email").html(err_mess2);
$("#er_mess").html(err_mess3);

}