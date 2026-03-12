document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})

document.getElementById("btn-whatsapp").addEventListener("click" , function(){
    let numero = "5598985442358"

    let mensagem = "olá, vim pelo site da feedwork, e quero saber mais sobre seus serviços."

    let url = "https://wa.me/" + numero + "?Text=" + encodeURIComponent(mensagem)

    window.open(url, "_blank" )

})

document.getElementById("form-contato")
.addEventListener("submit", function(event){
    event.preventDefault();
    
    emailjs.sendform(
        "SERVICE_ID",
        "TEMPLATE_ID",
        this
    ).then(function(){
        alert("mensagem emviada com sucesso");
    }, function(error){
        alert("erro ao enviar a mensagem");

    });
});