/*

  1.0: Create movie => add movie to list of movies.
  1.1: Edit movie successfully => Edit movie, check if edit was successful
  1.2: Delete movie successfully => Delete movie, check if delete was successful

  1.1: Homework: Shows error message, when creating invalid beanie => not navigate
  2.0: Homework: Create a test for successfully editing a beanie.

*/


import { browser, element, by } from 'protractor';

describe('MovieForm component', () => {
    it('1.0: Create movie successfully => add movie, check if movie was added', () => {

        // Log the user in (Not active as for this moment, check routes for more info)
        // browser.get('/login');
        // element(by.css('.btn-success')).click();

        browser.get('/movies');
        // elemsBefore shows how many elements there were before.
        element.all(by.css('.movie-e2e')).then(function (elemsBefore) {
            // element(by.css('[routerlink="/movies"]')).then(function(elemsBefore) {
            // element.all(by.css('.beanie-e2e')).get(0).click();

            // Selecting a component by its custom tag routerlink
            browser.driver.sleep(1000);
            browser.get('/movies/create');
            browser.driver.sleep(1000);
            element(by.id('title')).sendKeys('The Shining');
            element(by.id('description')).sendKeys('Whats up yo');
            element(by.id('year')).sendKeys('2013');
            element(by.id('runtime')).sendKeys('140');
            element(by.id('director')).sendKeys('John Johnson');
            element(by.id('genre')).sendKeys('Horror');
            element(by.id('language')).sendKeys('Danish');
            element(by.id('subtitles')).sendKeys('English');

            // Just to show this... clear empties an input box
            // element(by.id('color')).clear();
            element(by.id('submit-e2e')).click().then(function () {
                // gets movies again, in order to refresh list (needs fixing)
                browser.get('movies/');
                element.all(by.css('.movie-e2e')).then(function (elemsAfter) {
                    expect(elemsAfter.length - elemsBefore.length).toBe(1);
                });
            });
        });
    });

    it('1.1: Edit movie successfully => edit movie, check if edit was successful', () => {

        // Log the user in (Not active as for this moment, check routes for more info)
        // browser.get('/login');
        // element(by.css('.btn-success')).click();

        browser.get('/movies');

        element.all(by.css('.movie-e2e')).then(function (elemsBefore) {

            const elId = elemsBefore.length - 1;

            element(by.id('e2e-edit-' + elId)).click();

            browser.driver.sleep(1000);
            element(by.id('title')).clear();
            element(by.id('title')).sendKeys('The New Title');
            browser.driver.sleep(1000);
            element(by.id('submit-e2e')).click();


            browser.get('/movies').then(function () {
                const elText = element(by.id('e2e-title-' + elId)).getText();
                expect(elText).toBe('The New Title');
            });
        });
    });

    it('1.2: Delete movie successfully => Delete movie, check if delete was successful', () => {

        // Log the user in (Not active as for this moment, check routes for more info)
        // browser.get('/login');
        // element(by.css('.btn-success')).click();


        browser.get('/movies');

        element.all(by.css('.movie-e2e')).then(function (elemsBefore) {

            const elId = elemsBefore.length - 1;

            element(by.id('e2e-delete-' + elId)).click();

            element.all(by.css('.movie-e2e')).then(function (elemsAfter) {
                browser.get('/movies');
                expect(elemsAfter.length - elemsBefore.length).toBe(-1);
            });
        });
    });
});
