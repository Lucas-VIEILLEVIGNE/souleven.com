/* EmailJS */

function validate()
{
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {

        e.preventDefault();

        if(name.value == "" || email.value == ""|| msg == "")
        {
            emptyerror();
        }
        else
        {
            sendmail(name.value, email.value, msg.value);
            success();
        }

    });
}

validate();

/* Sweet Alert */

function sendmail(name,email,msg)
{

    emailjs.send("service_k1anvxa","template_vyasrf1",
    {
        to_name: name,
        from_name: email,
        message: msg
    });

}

function emptyerror()
{

    swal(
    {
        title: "Erreur !",
        text: "Un ou plusieurs champs ne sont pas remplis",
        icon: "error"
    });

};

function success()
{

    swal(
    {
        title: "Envoyé !",
        text: "L'email a bien été envoyé !",
        icon: "success"
    });

};