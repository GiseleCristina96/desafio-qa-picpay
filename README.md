# Desafio Quality Assurance Sênior
   Este projeto utiliza o framework de automação Cypress e a linguagem JavaScript para realizar testes automatizados na página de login de empréstimos do PicPay (https://meus-emprestimos.picpay.com/). O objetivo é validar alguns cenários como campo obrigatório e mensagens de erro.

## Configuração do Projeto
   1. *Clone o repositório*
      ```
      git clone https://github.com/seu-usuario/desafio-qa-picpay.git
      ```
   2. *Acesse o diretório desafio-qa-picpay*
      ```
      cd desafio-qa-picpay
      ```
   3. *Instale as dependências*
      ```
      npm install
      ```    

### No modo interativo (Cypress Test Runner)

Se você deseja rodar os testes no modo interativo, abra o Cypress Test Runner com:

```bash
npx cypress open
```

Depois, basta escolher o arquivo de teste para executar.
Exemplo, Na UI do cypress:

```
- Clicar em E2E Testing
- Selecionar Chrome e clicar em `Start E2E Testing in Chrome`
- No menu, selecionar Specs
- Clicar em login.cy.js
```

### Logs e Resultados

No modo interativo, os logs de execução são exibidos diretamente na interface gráfica do Cypress.

## Estrutura do projeto
   ```
   |-- cypress/
   |   |-- e2e/              # Testes de ponta a ponta
   |   |   |-- login.cy.js   # Arquivo com os testes do login
   |   |-- pages/
   |   |   |-- Login.js  # Arquivo com as ações feitas nos testes      
   |   |-- reports/          # Relatório e screenshots gerados
   |   |   |-- screenshots/  # Captura de tela dos testes, evidências dos passos solicitados.
   |   |-- support/          # Arquivos de suporte e comandos personalizados
   |   |   |-- commands.js   # Arquivo com comandos personalizados
   |   |   |-- e2e.js        # Arquivo com configurações dos testes e2e
   |   |   |-- helpers/      # Nova pasta para funções auxiliares
   |   |   |   |-- generateRandomNumber.js  # Arquivo com funções de apoio, como manipulação de dados, formatação, etc.
   |-- cypress.config.js     # Configurações do Cypress
   |-- package.json          # Dependências e scripts do projeto
   |-- README.md             # Informações do projeto
   ```
