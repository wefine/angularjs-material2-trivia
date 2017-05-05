import { Component, OnDestroy, OnInit } from '@angular/core';

import { TagService } from '../../services';
@Component({
    selector: 'zx-tag',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
    tags: string[];
    sub: any;

    constructor(private tagService: TagService) {
    }

    ngOnInit() {
        this.sub = this.tagService.getTags()
            .subscribe(tags => this.tags = tags);
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}
