//javascript se utiliza o 0 a frente do número para represenntar porcetagem .

let nomeFuncionario = prompt("Informe o nome do funcionário: ");
let salarioBrutoFuncionario = prompt("Informe o salário do funcionário: ");

let descontoInss=salarioBrutoFuncionario *0.08;
let descontoVt=salarioBrutoFuncionario *0.06;

let calcdescontos = descontoInss + descontoVt;


let salarioLiquido = salarioBrutoFuncionario - calcdescontos;

document.write("<br>");
document.write(nomeFuncionario);
document.write("<br>");
document.write(descontoVt);
document.write("<br>");
document.write(descontoInss);
document.write("<br>");
document.write(salarioLiquido);




