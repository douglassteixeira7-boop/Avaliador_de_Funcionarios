function avaliarFuncionario(){
    let nome = document.getElementById("nome").value
    let anos = Number(document.getElementById("anos").value)
    let salario = Number(document.getElementById("salario").value)

    let nivel;
    let bonus;
    let pagamento;

    if (anos < 2){
        nivel = "Júnior";
    }else if(anos <=5 ){
        nivel = "Pleno";
    }else{
        nivel = "Sênior";
    }


    if (salario > 2.500){
        bonus = 300;
    }else{
        bonus = 0;
    }

    
    pagamento = salario + bonus;
    

    document.getElementById("resultado").innerHTML = `
    <h2>Resultado </h2>
    <p>Funcionário ${nome}</p>
    <p>Nível: ${nivel}</p>
    <p>Salário: ${salario.toFixed(2)}</p>
    <p>Bônus: ${bonus.toFixed(2)}</p>
    <p>Pagamento: ${pagamento.toFixed(2)}</p>
    `
}