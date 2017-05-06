import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { routes } from './app.route';
import { AppComponent, CategoriesComponent, QuestionsComponent, TagsComponent } from './components';
import { CategoryService, QuestionService, TagService } from './services';

@NgModule({
    declarations: [
        AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent
    ],
    imports: [
        BrowserModule,
        // Material
        MaterialModule.forRoot(),
        // Flex
        FlexLayoutModule,
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
