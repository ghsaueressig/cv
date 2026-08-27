# Curriculum Vitae — Guilherme Henke Saueressig

Currículo profissional desenvolvido como uma aplicação web estática utilizando **HTML5 e CSS3**, com foco em apresentar informações profissionais, acadêmicas e técnicas de forma simples, responsiva e acessível.

O projeto também funciona como um exemplo prático de desenvolvimento front-end e pode ser utilizado como base para a criação de outros currículos ou portfólios pessoais.

## Acesso

**Currículo online:**
https://ghsaueressig.github.io/cv/

**Repositório:**
https://github.com/ghsaueressig/cv

---

## Sobre o projeto

Este repositório contém a implementação do meu currículo em formato de página web.

A proposta é substituir um currículo exclusivamente em formato de documento por uma página que possa ser acessada diretamente pelo navegador, compartilhada através de um link e publicada gratuitamente utilizando o GitHub Pages.

O projeto foi desenvolvido buscando manter uma estrutura simples, sem a necessidade de frameworks ou bibliotecas JavaScript, tornando o código fácil de entender, modificar e manter.

Atualmente, o currículo apresenta informações sobre:

* Perfil profissional;
* Experiência profissional;
* Formação acadêmica;
* Reconhecimentos e prêmios;
* Idiomas;
* Competências e tecnologias;
* Links para perfis profissionais e organizações relacionadas às experiências.

---

## Funcionalidades

### Currículo em formato web

Todo o conteúdo do currículo é apresentado em uma única página HTML, organizada em diferentes seções.

A estrutura atual contempla:

* **Informações pessoais**
* **Experiência profissional**
* **Educação**
* **Reconhecimentos e prêmios**
* **Idiomas**
* **Links profissionais**

Essa organização permite que o visitante encontre rapidamente as principais informações sobre formação e experiência.

### Design responsivo

A página possui regras de CSS específicas para dispositivos com telas menores.

Em telas reduzidas, elementos como os ícones das redes sociais são redimensionados para preservar a organização e a legibilidade do conteúdo.

O objetivo é permitir que o currículo seja consultado tanto em computadores quanto em dispositivos móveis.

### Links externos

As experiências profissionais e instituições de ensino possuem links para seus respectivos sites ou páginas.

Também estão disponíveis links diretos para:

* GitHub
* LinkedIn
* Organizações relacionadas às experiências profissionais
* Instituições de ensino

Isso permite que o visitante navegue diretamente para outras fontes de informação.

### Identidade visual das organizações

As experiências profissionais e instituições de ensino são acompanhadas por seus respectivos logotipos.

Além de melhorar a identificação visual, isso permite diferenciar rapidamente as diferentes organizações apresentadas no currículo.

### Preparação para impressão

A estrutura do currículo foi pensada para que o conteúdo possa ser utilizado também como documento impresso ou convertido para PDF através das funcionalidades de impressão do navegador.

Dessa forma, a mesma fonte de informação pode ser utilizada tanto como currículo online quanto como documento tradicional.

---

## Tecnologias utilizadas

| Tecnologia       | Utilização                                   |
| ---------------- | -------------------------------------------- |
| **HTML5**        | Estrutura e conteúdo da página               |
| **CSS3**         | Estilização, layout e responsividade         |
| **Google Fonts** | Fonte utilizada na apresentação do currículo |
| **GitHub Pages** | Hospedagem da versão online                  |
| **Git/GitHub**   | Versionamento e publicação do projeto        |

O projeto atualmente não depende de frameworks como React, Vue ou Angular, nem de um back-end ou banco de dados.

Essa abordagem mantém a aplicação leve e adequada para hospedagem como site estático.

---

## Estrutura do projeto

A estrutura principal do repositório é composta por:

```text
cv/
├── index.html
├── styles.css
├── README.md
├── LinkedIn_icon.svg.png
├── Logo_CompassoUOL_Positivo.png
├── biotecno logo.png
├── hey peppers logo.png
├── saueressig imoveis logo.jpg
├── std arqui logo.jpg
└── unijui logo.png
```

### `index.html`

É o arquivo principal da aplicação.

Contém a estrutura HTML do currículo e as informações apresentadas ao visitante, incluindo experiências profissionais, formação acadêmica, reconhecimentos e idiomas.

### `styles.css`

Arquivo responsável pela estilização da página.

Entre suas responsabilidades estão:

* Tipografia;
* Cores;
* Espaçamento;
* Alinhamento dos elementos;
* Estilização dos links;
* Organização dos ícones;
* Adaptação para telas menores.

### Imagens

O repositório contém imagens utilizadas principalmente para representar:

* Organizações;
* Instituições de ensino;
* Redes profissionais.

Esses arquivos são utilizados diretamente pela página HTML.

---

## Organização do conteúdo

O currículo é dividido em seções para facilitar a leitura.

### Experiência profissional

Apresenta as experiências profissionais e acadêmicas relacionadas ao desenvolvimento de software, tecnologia, educação e outras atividades.

Cada experiência pode apresentar:

* Organização;
* Cargo ou função;
* Tipo de vínculo;
* Período;
* Localização;
* Descrição das atividades;
* Competências relacionadas;
* Link para a organização.

### Educação

Apresenta a formação acadêmica, incluindo cursos concluídos, cursos transferidos e formação atualmente em andamento.

### Reconhecimentos e prêmios

Seção destinada à apresentação de premiações e reconhecimentos acadêmicos.

### Idiomas

Apresenta os idiomas e respectivos níveis de proficiência.

---

## Como executar localmente

Por ser uma aplicação web estática, não é necessário instalar dependências ou configurar um servidor para visualizar o projeto.

### 1. Clonar o repositório

```bash
git clone https://github.com/ghsaueressig/cv.git
```

### 2. Entrar no diretório

```bash
cd cv
```

### 3. Abrir o projeto

Abra o arquivo `index.html` diretamente no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## Como personalizar

O projeto pode ser facilmente adaptado para outros currículos.

### Alterando informações

As informações apresentadas na página podem ser modificadas diretamente no:

```text
index.html
```

É possível alterar:

* Nome;
* Informações pessoais;
* Contato;
* Experiências;
* Formação;
* Competências;
* Idiomas;
* Reconhecimentos;
* Links externos.

### Alterando a aparência

As principais características visuais podem ser modificadas no:

```text
styles.css
```

Por exemplo:

```css
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
}
```

A partir desse arquivo é possível alterar cores, fontes, tamanhos, espaçamentos e regras de responsividade.

### Adicionando uma nova experiência

Uma nova experiência pode ser adicionada seguindo a estrutura das experiências existentes no `index.html`.

De maneira geral, cada entrada contém:

```html
<div>
    <p class="aligned-content">
        <strong>Organização · Cargo</strong>
    </p>

    <p>Período · Localização</p>

    <p>
        Descrição das atividades realizadas.
    </p>

    <p>
        <strong>Competências:</strong>
        Tecnologia 1 · Tecnologia 2 · Tecnologia 3
    </p>
</div>
```

Isso permite manter um padrão visual consistente entre as diferentes experiências.

---

## Publicação

O projeto pode ser publicado como um site estático utilizando o **GitHub Pages**.

Após disponibilizar os arquivos no repositório, o GitHub Pages pode servir o `index.html` diretamente como página inicial.

A versão atualmente publicada está disponível em:

**https://ghsaueressig.github.io/cv/**

---

## Características do projeto

| Característica            | Status                    |
| ------------------------- | ------------------------- |
| HTML5                     | Implementado              |
| CSS3                      | Implementado              |
| Layout responsivo         | Implementado              |
| Links externos            | Implementado              |
| Ícones e logotipos        | Implementado              |
| Estrutura em página única | Implementado              |
| Hospedagem estática       | Implementado              |
| GitHub Pages              | Implementado              |
| JavaScript                | Não necessário atualmente |
| Back-end                  | Não utilizado             |
| Banco de dados            | Não utilizado             |

---

## Objetivos do projeto

Além de servir como currículo profissional, o projeto possui objetivos de aprendizado e demonstração de conhecimentos em desenvolvimento web.

Entre eles:

* Praticar desenvolvimento com HTML e CSS;
* Aplicar conceitos de design responsivo;
* Organizar informações em uma interface web;
* Utilizar versionamento com Git;
* Publicar uma aplicação estática através do GitHub Pages;
* Manter uma página profissional acessível através de um endereço web;
* Utilizar o próprio projeto como demonstração prática de conhecimentos de desenvolvimento front-end.

---

## Possíveis melhorias futuras

Algumas funcionalidades podem ser incorporadas futuramente, caso façam sentido para o projeto:

* [ ] Separar completamente conteúdo e estilos;
* [ ] Adicionar modo claro/escuro;
* [ ] Melhorar a experiência em dispositivos móveis;
* [ ] Adicionar uma seção de projetos;
* [ ] Adicionar links para projetos relevantes do GitHub;
* [ ] Criar uma versão específica para impressão;
* [ ] Adicionar suporte a múltiplos idiomas;
* [ ] Melhorar acessibilidade e semântica HTML;
* [ ] Adicionar metadados para SEO;
* [ ] Automatizar a geração de uma versão PDF;
* [ ] Adicionar testes de acessibilidade e compatibilidade entre navegadores.

---

## Licença

Este projeto é disponibilizado para fins pessoais, acadêmicos e de demonstração.

Consulte o arquivo [`LICENSE`](LICENSE), caso uma licença específica seja adicionada ao projeto.

---

## Autor

**Guilherme Henke Saueressig**

Estudante de Ciência da Computação e desenvolvedor de software com interesse em desenvolvimento web, inteligência artificial e tecnologia.

* GitHub: [@ghsaueressig](https://github.com/ghsaueressig)
* LinkedIn: [Guilherme Henke Saueressig](https://www.linkedin.com/in/guilhermehsaueressig)

---

**Currículo online:**
https://ghsaueressig.github.io/cv/
