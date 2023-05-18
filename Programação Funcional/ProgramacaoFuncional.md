# Por que programação funcional ?
 - Organizar uma linha de raciocinio 
 - Entender uma nova maneira de abordar os problemas 
 - Algumas tecnologias tem como requisto 

# Programação Funcional ?

 - É um paradigma de programação como a Orientação a Objetos, por exemplo 
 * Uma maneira de resolver problemas

# Funções 
* Pequenas taregas dentro de uma função 
* Abstrair um problema e isolar ele dentro da função 
* Não modificar dados fora dela 
* PEquenas e bem especificas no que fazem 

# Caracteristicas principais da função 
* Um dado (ou mais )entra em uma função e um novo dado sai dessa função 
* Não altera dados 
* Não guarda estado stateless

# Linguagens funcionais 

* JS (multiparadigma)
* PHP (multiparadigma)
* Elixir
* Haskell

# Pontos Positivos 

* Facil manutenção 
* facil uso de testes 
    Funções isoladas e consistentes 
* Códigos mais confiaveis 

# Paradigmas 
* Programação Imperativa 
* Programação Declarativa 

# DADOS 

* Imutalibilidade
* Stateless 

# Funções 
* INdependentes 
* Puras
* Higher-order
* First-class
* Composição

# Programação Imperativa 

* O codigo é pensado e gerado em sequencia.
* O codigo é pensado como um passo-a-passo, como uma receita de bolo 
* Uma coisa depende da outra 
* O estado de uma dado é alterado constantemente causando mutações nas variaveis 
* Orientação a Objetos é um tipo de paradigma imperativo

# Programação declaritiva 

* O codigo é gerado para fazer algo, não importa como 
* O que fazer e não como fazer 
* Não há necessidade de um passo a passo no código 
* Programação funcional é um tipo de paradigma declarativo

# Imutabilidade 

* Uma variavel não vai variar 
* Se voce precisar mudar uma variavel, voce não muda, voce cria uma nova 

# Stateless 
* Não guarda estado 
* A função só conhece dados entregues a ela 
* A resposta não poderá variar

# Funções 

Vamos conhecer algumas caracteristicas das funções na programação funcional 
- Funções Independentes 
- Funções Puras 
- First-class Functions 
- Higher-order Functions
- Composição de Funções 

# Funções Independetes 

* Deverá ter ao menos 1 argumento 
* deverá retornal algo 
* Nada que acontecer la dentro afeta o mundo externo 
    * dados imutaveis 
    * não guardar estado 
* Não faremos uso de loops(for,while),mas se houver necessidade de tal, usaremos recursão(a função chama ela mesma)