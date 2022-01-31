<h1 align="center">
  Right Barbecue
</h1>

<p align="center">
Aplicação web contruída para criar e gerenciar churrascos.
</p>

<div>
  <img src="https://rightbarbecue.gramachodev.com.br/dashboard.png" alt="demo-web-1" height="425">
  <br>
  <img src="https://rightbarbecue.gramachodev.com.br/barbecue.png" alt="demo-web-2" height="425">
  <br>
  <img src="https://rightbarbecue.gramachodev.com.br/create-barbecue.png" alt="demo-web-3" height="425">
</div>

<hr />

*Esta aplicação contém apenas a parte Front-End do projeto.*

## Iniciando

1. Clone este repositório utilizando `git clone https://github.com/netogramacho/rigthBarbecue.git`
2. mova o terminal para o diretório correto: `cd rightBarbecue`<br />
3. Execute `yarn` para instalar as dependências<br />
4. Execute `yarn start` para iniciar a aplicação.
5. Você pode ver uma demo da aplicação em `https://rightbarbecue.gramachodev.com.br/`.


### Content

Contém a estrutura principal do layout e todas as rotas.


### Login

View para realização do login (este exemplo não tem iteração com Back-End).


### Dashboard

View que mostra os churrascos existentes e uma opção para criação de um novo currasco.

#### BarbecueCard

Componente que renderiza um card com as propriedades recebidas.

Propriedades {
    name: string,
    date: string,
    totalValue: number,
    totalGuests: number
}


### Barbecue 

View que exibe todos os detalhes de um determinado churrasco churrasco, recebendo o id do churrasco através da url.

#### BarbecueReport

Componente que renderiza o relatório com todos os detalhes do churrasco com o id recebido.

Propriedades {
    id: number
}

#### ReportGuestLine

Componente que renderiza uma linha com os detalhes do convidado com as propriedades recebidas.

Propriedades {
    name: string,
    value: number,
    payed: boolean
}


### CreateBarbecue 

View para criação de um novo churrasco.

#### InputText 

Componente que renderiza um input tipo texto com as propriedades recebidas.

Propriedades {
    label: string,
    name: string,
    value: string,
    onChange: void,
    placeholder: string
}

#### InputRadio 

Componente que renderiza um input tipo radio com as propriedades recebidas.

Propriedades {
    label: string,
    name: string,
    onChange: void,
    radios: [{
        id: string,
        value: string,
        description: string
    }]
}
