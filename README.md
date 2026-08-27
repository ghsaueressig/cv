# Curriculum Vitae — Guilherme Henke Saueressig

Currículo profissional desenvolvido como uma aplicação web estática utilizando **HTML5 e CSS3**, com foco em apresentar informações profissionais, acadêmicas e técnicas de forma simples, responsiva e acessível.

O projeto também funciona como um exemplo prático de desenvolvimento front-end e é publicado utilizando o GitHub Pages.

## Sobre o projeto

Este repositório contém a implementação do meu currículo em formato de página web.

A proposta é disponibilizar as informações profissionais e acadêmicas através de uma página que possa ser acessada diretamente pelo navegador e compartilhada através de um único link.

O projeto utiliza tecnologias web fundamentais, mantendo uma estrutura simples e sem dependências de frameworks front-end.

---

## Funcionalidades

### Currículo em formato web

As informações do currículo são organizadas em uma única página, incluindo:

* Informações pessoais;
* Experiência profissional;
* Formação acadêmica;
* Reconhecimentos e prêmios;
* Idiomas;
* Competências;
* Links profissionais.

### Modo claro e modo escuro

O currículo possui um botão para alternar entre **modo claro** e **modo escuro**.

A troca de tema é realizada através de JavaScript e CSS, sem a utilização de bibliotecas externas.

O tema selecionado também é armazenado no `localStorage` do navegador.

Dessa forma, a preferência do usuário é mantida mesmo depois que a página é fechada e aberta novamente.

A lógica responsável pela funcionalidade está separada no arquivo:

```text
script.js
```

Enquanto as características visuais dos dois temas são definidas em:

```text
styles.css
```

### Design responsivo

A página possui regras de CSS para adaptação a diferentes tamanhos de tela.

O objetivo é permitir a consulta do currículo em computadores, tablets e dispositivos móveis.

### Links externos

O currículo possui links para perfis profissionais, organizações e instituições relacionadas às experiências apresentadas.

### Identidade visual

As experiências profissionais e instituições de ensino podem ser acompanhadas por seus respectivos logotipos.

### Publicação online

O projeto pode ser publicado diretamente como um site estático através do GitHub Pages.

---

## Tecnologias utilizadas

| Tecnologia       | Utilização                                  |
| ---------------- | ------------------------------------------- |
| **HTML5**        | Estrutura e conteúdo da página              |
| **CSS3**         | Estilização, layout, responsividade e temas |
| **JavaScript**   | Alternância e persistência do tema          |
| **LocalStorage** | Armazenamento da preferência de tema        |
| **Git/GitHub**   | Versionamento e hospedagem do código        |
| **GitHub Pages** | Publicação do currículo online              |

---

## Estrutura do projeto

```text
cv/
├── index.html
├── styles.css
├── script.js
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

Arquivo principal da aplicação.

Contém a estrutura e o conteúdo do currículo.

### `styles.css`

Responsável pela aparência da página, incluindo:

* Layout;
* Tipografia;
* Cores;
* Responsividade;
* Modo claro;
* Modo escuro;
* Estilização do botão de tema.

### `script.js`

Contém a lógica JavaScript utilizada para alternar entre os temas.

Também utiliza o `localStorage` para armazenar a preferência do usuário.

### Imagens

Os arquivos de imagem são utilizados principalmente para representar organizações e instituições relacionadas ao currículo.

---

## Funcionamento do modo escuro

A funcionalidade utiliza uma classe CSS aplicada ao elemento `<body>`.

No modo claro:

```text
<body>
```

No modo escuro:

```text
<body class="dark-mode">
```

O JavaScript é responsável por alternar essa classe quando o usuário pressiona o botão.

O CSS então utiliza essa classe para alterar as características visuais da página.

O tema escolhido é armazenado no navegador:

```javascript
localStorage.setItem("theme", "dark");
```

Quando a página é carregada novamente, o `script.js` verifica essa informação e restaura automaticamente o tema escolhido.

---

## Como executar localmente

Por ser uma aplicação web estática, não são necessárias dependências ou configurações de servidor.

### 1. Clone o repositório

```bash
git clone https://github.com/ghsaueressig/cv.git
```

### 2. Entre no diretório

```bash
cd cv
```

### 3. Abra o projeto

Abra o arquivo `index.html` no navegador.

Durante o desenvolvimento, também é possível utilizar uma extensão como **Live Server** no Visual Studio Code.

---

## Como personalizar

### Informações

As informações do currículo podem ser alteradas no:

```text
index.html
```

### Aparência

As características visuais podem ser alteradas no:

```text
styles.css
```

### Comportamento

A lógica do modo escuro e outras funcionalidades JavaScript pode ser implementada no:

```text
script.js
```

---

## Objetivos do projeto

Além de funcionar como currículo profissional, o projeto serve como uma aplicação prática para demonstrar conhecimentos em desenvolvimento web.

Entre os objetivos estão:

* Praticar HTML e CSS;
* Praticar JavaScript;
* Aplicar conceitos de responsividade;
* Implementar alternância de temas;
* Trabalhar com `localStorage`;
* Utilizar Git e GitHub;
* Publicar uma aplicação estática utilizando GitHub Pages;
* Manter um currículo profissional acessível através da web.

---

## Possíveis melhorias futuras

* [ ] Melhorar a acessibilidade;
* [ ] Adicionar uma seção de projetos;
* [ ] Adicionar links para projetos relevantes do GitHub;
* [ ] Criar uma versão específica para impressão;
* [ ] Adicionar suporte a múltiplos idiomas;
* [ ] Melhorar SEO;
* [ ] Adicionar animações sutis;
* [ ] Automatizar a geração de uma versão PDF.

---

## Autor

**Guilherme Henke Saueressig**

Estudante de Ciência da Computação com experiência em desenvolvimento de software.

* GitHub: https://github.com/ghsaueressig
* LinkedIn: https://www.linkedin.com/

---

## Licença

Este projeto é disponibilizado para fins pessoais, acadêmicos e de demonstração.

Consulte o arquivo `LICENSE`, caso uma licença específica seja adicionada ao projeto.
