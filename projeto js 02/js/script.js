const input_cep = document.getElementById('cep');
const input_rua = document.getElementById('road');
const input_numero = document.getElementById('number');
const input_bairro = document.getElementById('district');
const input_cidade = document.getElementById('city');
const input_estado = document.getElementById('state');
let cep

input_cep.addEventListener('blur', () => {
    cep = input_cep.value;

    if(cep.length !== 8){
        return alert('Cep Invalido');
    }
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
       .then(response => response.json())
       .then(json => {
        input_rua.value = json.logradouro;
        input_bairro.value = json.bairro;
        input_cidade.value = json.localidade;
        input_estado.value = json.uf;
        
        input_numero.focus();
    });
    

})