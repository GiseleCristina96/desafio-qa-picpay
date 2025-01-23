class Login {
    
    // ============================
    // Seletores
    // ============================

    get labelManageYourContracts() {
        return cy.get('.gap-2 > .font-bold').contains('Gerencie seus contratos');
    }

    get cpfInputField() {
        return cy.get('#mat-input-0').should('be.visible').and('exist');
    }

    get errorMessage() {
        return cy.get('#mat-mdc-error-0');
    }

    get submitButton() {
        return cy.get('.bg-primary-500');
    }

    // ============================
    // Métodos
    // ============================

    // Abre a página de empréstimos
    openPage() {
        cy.visit('/');
        cy.screenshot('Tela empréstimo - Picpay');
    }

    // Inserir no campo CPF
    async addValueCpfInput(cpf) {
		await this.cpfInputField.type(cpf);
        cy.screenshot('Inserindo CPF');
	}

    // Clica e valida campo obrigatório
    verifyRequiredField() {
        this.cpfInputField.click();
        this.submitButton.click();
    }

    // Método para clicar no botão de acessar
    clickLoginButton() {
        this.submitButton.click();  // Clica no botão de Acessar
        cy.screenshot('Clicando no botão de login');
    }

    // Verifica se o label "Gerencie seus contratos" está visível
    async isLabelManageYourContractsDisplayed() {
        await this.labelManageYourContracts.should('be.visible').and('exist');
    }

    // Verifica se a mensagem de erro está sendo exibida corretamente
    verifyErrorMessage(mensagem) {
        this.errorMessage.should('contain', mensagem);  // Verifica se a mensagem de erro está contida no elemento
        cy.screenshot(`Mensagem de erro: ${mensagem}`);  // Captura uma screenshot com o nome da mensagem de erro
    }
}

module.exports = new Login();
