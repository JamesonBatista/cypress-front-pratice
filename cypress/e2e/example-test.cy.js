
describe('Testes de estudo com CYPRESS', () => {
  let env = Cypress.env();
  before(() => {
    cy.visit(env.base)
  })
  it('Efetuando os primeiros passos', () => {

    // usando o find apos do get, os elementos dentro do get que tem o atributo passado no find será guardado para o passo seguinte.
    get('#registrationForm') // validação em camadas
      .find('.form-group') // segunda camada
      .find('.input-group') // terceira camada
      .find('.form-control.small-input') // até chegar na classe referente
      .eq(0) // o *eq* quando se está filtrando serve para determinar a posição do elemento que você quer.
      .type('Primeira escrita  ')

    // como também, poderíamos pegar o elemento diretamente
    get('[placeholder="First Name"]')
      .type(', Segunda escrita')
  })
})


// function que pode ajudar na redução de código
function get(element) {
  // o should vai sempre garantir que elemento esteja visível.
  return cy.get(element).should('exist').should('be.visible')

}