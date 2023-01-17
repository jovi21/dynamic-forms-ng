import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../../models/question-base.model';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:  [QuestionService]
})
export class HomeComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
