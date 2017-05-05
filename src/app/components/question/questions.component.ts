import { Component, OnDestroy, OnInit } from '@angular/core';

import { Category, Question } from '../../model';
import { QuestionService } from '../../services';

@Component({
    selector: 'zx-question',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
    questions: Question[];
    categories: Category[];
    sub: any;

    constructor(
        private questionService: QuestionService,
        private categoryService: QuestionService) {
    }

    ngOnInit() {
        this.sub = this.questionService.getQuestions()
            .subscribe(questions => this.questions = questions);

        this.sub = this.questionService.getQuestions()
            .subscribe(questions => this.questions = questions);
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}
