import { visitMainPage } from '../support/helpers'
import mainPage from '../fixtures/mainPage.json'

describe('MainPage', () => {
  beforeEach(() => {
    visitMainPage()
  })
  it('visits main page and renders data for react related repositories with most starts', () => {
    cy.get(mainPage.repositoriesTable)
      .get(mainPage.repositoriesTableRows)
      .should('have.length', 10)
      .get(mainPage.repositoriesTableLink)
      .should('contain', mainPage.mostStarsItem)
  })
  it('visits main page, passes value to input and check if new hits are shown', () => {
    cy.get(mainPage.searchRepositoriesInput).type(
      mainPage.searchRepositoriesInputValue,
    )
    cy.get(mainPage.repositoriesTable)
      .get(mainPage.repositoriesTableLink)
      .should('contain', mainPage.searchRepositoriesValueToFindInTable)
  })
  it('visits main page and moves to 2nd page', () => {
    cy.get(mainPage.nextPageButton).click()

    cy.get(mainPage.repositoriesTable)
      .get(mainPage.repositoriesTableRows)
      .get(mainPage.repositoriesTableLink)
      .should('contain', mainPage.nextPageValueToFindInTable)
  })
})
