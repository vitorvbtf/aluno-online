describe("Testando", () => {
  it("Adicionando Novo Requerimento", () => {
    cy.visit("/");
    cy.get("#inputMatricula").type("2023100");
    cy.get("#inputSenha").type("senha123");
    cy.get("body > form > button").click();
    cy.get(
      "#navbarToggler1 > ul.navbar-nav.mr-auto.mt-2.mt-lg-0 > li:nth-child(5) > a"
    ).click();
    cy.get("body > div > div > div.card-header > a").click();
    cy.get("#inputDisciplina").select(
      "ADS040 - Business Intelligence e Data Warehousing"
    );
    cy.get("#inputProva").select("A3");
    cy.get("#inputArgumentacao").type("Teste automatizado utilizando Cypress");
    cy.get("body > div > div > div.card-body > form > button").click();
    cy.get("body > div > div > div.card-body").contains(
      "ADS040 - Business Intelligence e Data Warehousing"
    );
    cy.get("body > div > div > div.card-body").contains("Pendente");
  });
});
document.querySelector("#inputMatricula");
