function sendEmail() {
	Email.send({
	Host: "aqsa2205@gmail.com",
	Username : "info@gipes.com.pk",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}