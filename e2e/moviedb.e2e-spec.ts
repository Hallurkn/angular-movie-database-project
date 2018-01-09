/*

  1.0: Create movie => add movie to list of movies.
  1.1: Homework: Shows error message, when creating invalid beanie => not navigate
  2.0: Homework: Create a test for successfully editing a beanie.

*/


import { browser, element, by } from 'protractor';

describe('MovieForm component', () => {
    it('1.0: Create movie successfully => add movie to the list', () => {

        browser.get('/login');
        browser.driver.sleep(2000);

        element.all(by.css('.btn-success')).click();
        browser.get('/movies/create');
        browser.driver.sleep(10000);




        // elemsBefore shows how many elements there were before.
        element.all(by.css('.movies-e2e')).then(function (elemsBefore) {
            // element(by.css('[routerlink="/beanie"]')).then(function(elemsBefore) {
            // element.all(by.css('.beanie-e2e')).get(0).click();
            browser.driver.sleep(1000);

            // Just to show this... clear empties an input box
            // element(by.id('color')).clear();

            // Selecting a component by its custom tag routerlink
            // element(by.css('[routerlink="/movies/create"]')).click();
            // element(by.id('color')).sendKeys('Green');
            // element(by.id('size')).sendKeys('3');
            // element(by.id('fabric')).sendKeys('Cotton');

            // element(by.id('submit-e2e')).click().then(function () {

            //     element.all(by.css('.beanie-e2e')).then(function (elemsAfter) {
            //         // browser.sleep(10000);
            //         expect(elemsAfter.length - elemsBefore.length).toBe(1);
            //     });
            // });
        });
    });
});
