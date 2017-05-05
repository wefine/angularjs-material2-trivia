import { AngularjsMaterial2TriviaPage } from "./app.po";

describe('angularjs-material2-trivia App', () => {
    let page: AngularjsMaterial2TriviaPage;

    beforeEach(() => {
        page = new AngularjsMaterial2TriviaPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
