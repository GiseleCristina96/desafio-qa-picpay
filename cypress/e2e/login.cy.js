import Login from '../pages/Login';
import generateRandomNumber from '../support/helpers/generateRandomNumber';

describe('Login Tests in Loan Page', () => {

    beforeEach(() => {
        // Antes de cada teste, abre a página de empréstimo do PicPay
        Login.openPage();
    });

    it('TC1: Should login with invalid CPF', () => {
        // Valida a presença da principal label na página de empréstimo
        Login.isLabelManageYourContractsDisplayed(); // Valida o label 'Gerencie seus contratos'

        // Insere o CPF inválido
        Login.addValueCpfInput(generateRandomNumber(11)); 

        // Clica no botão de login para disparar a validação de CPF
        Login.clickLoginButton(); // Clica no botão de login (para acionar a validação)

        // Valida a mensagem de erro para CPF inválido
        Login.verifyErrorMessage('*CPF Inválido'); 

        // Captura de tela para evidência
        cy.screenshot('TC1: Login com CPF inválido');
    });

    it('TC2: Should login without filling in the required field', () => {
        // Valida a presença da principal label na página de empréstimo
        Login.isLabelManageYourContractsDisplayed(); // Valida o label 'Gerencie seus contratos'

        // Realizar tentativa de enviar o formulário sem preencher o CPF (campo obrigatório)
        Login.verifyRequiredField(); 

        // Valida a mensagem de erro para campo obrigatório
        Login.verifyErrorMessage('*Campo obrigatório'); 

        // Captura de tela para evidência
        cy.screenshot('TC2: Login sem preencher campo obrigatório');
    });
});
