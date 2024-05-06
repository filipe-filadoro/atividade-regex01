document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var regexNome = /^[^\d]+$/; 
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     var regexTelefone = /^[1-9]{2}\)[2-9][0-9]{3,4}[0-9]{4}$/; 

    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    
    if (!regexNome.test(nome)) {
        alert('Por favor, insira um nome válido (sem números).');
        return;
    }

    
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    
    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira um telefone válido (com DDD no padrão brasileiro).');
        return;
    }

    
    alert('Formulário enviado com sucesso!');
});