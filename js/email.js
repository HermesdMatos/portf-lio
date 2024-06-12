
(function () {
  emailjs.init('a2uOU8jhxLjb4j-6m');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('service_b0kxxgq', 'template_3fomga9', this)
    .then(function () {
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Sua mensagem foi enviada com sucesso.',
        confirmButtonText: 'OK'
    }).then(() => {
      form.reset(); // Limpa o formulário
    });
      
    }, function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente.',
        confirmButtonText: 'OK'
      });
    });
});