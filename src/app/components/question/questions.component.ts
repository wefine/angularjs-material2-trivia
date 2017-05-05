import { Component, OnInit } from "@angular/core";

import { Category, Question } from "../../model";
import { QuestionService } from "../../services";

@Component({
    selector: 'question-list',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
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
        if (this.sub)
            this.sub.unsubscribe();
    }

}
