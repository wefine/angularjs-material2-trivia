import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { routes } from './app.route';
import { AppComponent, CategoriesComponent, QuestionAddUpdateComponent, QuestionsComponent, TagsComponent } from './components';
import { CategoryService, QuestionService, TagService } from './services';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent, QuestionAddUpdateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // Forms
        FormsModule,
        SharedModule,
        // Router
        RouterModule.forRoot(routes),
        FormsModule,
        HttpModule
    ],
    providers: [
        CategoryService, TagService, QuestionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
