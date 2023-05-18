# Utilização no mercado 

* Na maioria dos sistemas atuais
* Varias linguagens (JS, TS,Java,Python ...)
* Utilizado por Analistas de Sistemas e não somente por programadores
    * Na fase de levantamento de requisitos de sistema 
    * Via graficos,desenhos e textos

# Onde e quando eu vou utilizar 

* Linguagens
* Quando quiser aplicação Padrões de Projetos
* Qaundo quiser organizar seu código 
* Para melhor entendimento do código, pensando nele como Objeto 
* Quando precisar fazer reuso de código
* Para separar a complexidade de código,abstrair código e expor de maneira mais simples
* Para classificar as rotinas e trechos de códigos

# Conceitos

* Precisamos entender os conceitos e paradigma e não somente códigos 
* Uma boa fundamentação
* Pegue papel e caneta, e anote os pontos para que você possa revisar posteriormente

# Objetos 
Todo objeto possui:
- Propriedades e funcionamentos
- Estado e comporatamento 
- atributos e metodos

# Abstratos vs Mundo Real 
 
 Trazemos a representação de algo do mundo real para objetos 
 - Pessoa
 - Aluno
 - Produto 
 - Carrinho de compras 
 
 Porém, alguns objetos na programação não são faceis de indentificar, pois são abstratos como, por exemplo:
 - Automação
 - Autorização
 _ Nem todo objeto do mundo real fará parte do seu sistema

# Classes 

 As classes na orientação a objetos funcionam como um molde para os objetos. Os objetos
 são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe

 * Exemplo: maquina de biscoito 
    *Instancias 

# Classes em JS 
    * Syntactical sugar 
    * Prototype

## Encapsulamento 
- dirigir o carro vs conhecer o motor do carro
 Colocar numa capsula 
 Agrupamento de funções e variaveis
 Esconder detalhes de implementação
 Camada de segurança para atributos ou metodos
  
# Confusão e Solução
Programação Estruturada x Orientação a Objeto

Programação Estruturada 
    * Processa a entrada e manipulação dos dados, até a saida
    * Uso de sequencias, estruturas de repetições e condições 
    * Uso de uma rotina maior, ou sub-rotinas 
    * Não existem restrições as variavies

Programação Orientada a Objetos 
    * Surge para trazer um cuidado ao uso estruturado
        * N~~ao elimina por compleo o uso estruturado 
    * Conceitos como Objetos e Classes 
    * Cuidados com variaveis e rotinas ( Encapsulamento)
    * Melhor resuo de código (herança)


## Herança 
*Pais e filhos 
* Objetos podem herdar, ou estender, caracteristicas bases
* Uma copia de atributos e metodos de outra classe

# Polimorfismo (muitas formas)
Quando um objeto estende de outro (herença) talvez haja a necessidade de reescrever uma ou mais caracteristicas( atributos e metodos) nesse novo objeto 

Recriaremos então um método ( ou mais) da classe herdada.

# Abstração 
 Template ou identidade de uma classe que será construida no futuro
 * Atriburos e métodos podem ser criados na classe de Abstração (Superclasse)MAS
 * A implementação dos métodos e atriburos, só poderá ser fieta na classe que irá herdar essa Abstração