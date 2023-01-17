import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../models/question-base.model';
import { DropdownQuestion } from '../models/question-dropdown.model';
import { TextboxQuestion } from '../models/question-textbox.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new DropdownQuestion({
        key: 'hero',
        label: 'Select your hero',
        options: [
          {key: 'luffy',  value: 'Luffy'},
          {key: 'goku',  value: 'Goku'},
          {key: 'naruto',   value: 'Naruto'},
          {key: 'zoro', value: 'Zoro'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
