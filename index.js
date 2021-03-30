let pratosCadastrados = [
    {nome : "Carne de Panela", preço: 12.0 }, 
    {nome : "Bife Acebolado", preço: 10.0 }, 
    {nome: "Frango Grelhado", preço: 11.50 }
];

let acompanhamentosCadastrados = [
    {nome: "Arroz", preço: 5.0},
    {nome: "Salada", preço: 8.50},
    {nome: "Batata Frita", preço: 10.00},
    {nome: "Maionese", preço: 6.00},
]; 

function calc(){
    
    let preçoFinal = 0;


    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let local = document.getElementById("endereco").value;

    if(nome === "" || telefone === "" || local === "" )
    {
        let saida = document.getElementById("saida");
        saida.innerHTML = `Preencha os campos obrigatórios!`;
    }
    else{
        let pratos = document.getElementsByName("option_pp");
        let pratoEscolhido;
        
        for(var ele of pratos){
            if(ele.checked){
                pratoEscolhido = pratosCadastrados[ele.value];
                preçoFinal += pratosCadastrados[ele.value].preço;
            }
        }
    
        let acompanhamentosEscolhidos = [];
        let acompanhamentos = document.getElementsByName("option_a");

        for(var ele of acompanhamentos){
            if(ele.checked){
                acompanhamentosEscolhidos.push(acompanhamentosCadastrados[ele.value]);
                preçoFinal += acompanhamentosCadastrados[ele.value].preço;
            }
        }

        let convenio = document.getElementsByName("option_conv");
        let convenioEscolhido;
        
        for(var ele of convenio){
            if(ele.selected){
                convenioEscolhido = parseFloat(ele.value);
            }
        }

        //saida
        let saida = document.getElementById("saida");

        saida.innerHTML = `Caro(a) <br>${nome}</>`;
        saida.innerHTML += `<br><br>Dados Pessoais <br>Contato: ${telefone}, Endereço: ${local}`;
        saida.innerHTML += `<br><br>Seu prato está em preparação <br><br>`;
        saida.innerHTML += `Você escolheu ${pratoEscolhido.nome} - R$ ${pratoEscolhido.preço}`;

        if(acompanhamentosEscolhidos.length > 0){
            saida.innerHTML += `<br>Você escolheu os seguintes acompanhamentos:`;
            for(var ele of acompanhamentosEscolhidos){
                saida.innerHTML += `<br>${ele.nome} - R$ ${ele.preço}`;
            }
        }
        if(convenioEscolhido > 0)
        {
            preçoFinal = preçoFinal - (convenioEscolhido * preçoFinal);
            saida.innerHTML += `<br><br> <br> TOTAL DO PEDIDO (DESCONTO DO CONVÊNIO) R$ ${preçoFinal} </br>`;
        }
        else{
            saida.innerHTML += `<br><br> <br> TOTAL DO PEDIDO R$ ${preçoFinal} </br>`;
        }
        
    }
}

function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("endereco").value = "";

    var rads = document.getElementsByName('option_a');
    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            rads[i].checked = 0;
        }
    } 
}