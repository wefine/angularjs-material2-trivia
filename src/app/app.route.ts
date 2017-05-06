import { Routes } from '@angular/router';
import { CategoriesComponent, QuestionsComponent, TagsComponent } from './components/index';
import { QuestionAddUpdateComponent } from './components/question/question-add-update.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'tags',
        component: TagsComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent
    },
    {
        path: 'question/add',
        component: QuestionAddUpdateComponent
    }
];
