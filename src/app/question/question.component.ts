import { Component} from '@angular/core';
import * as data from '../../assets/questions.json';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  answer_a : string = "../../assets/answer_A_pole.png";
  answer_b : string = "../../assets/answer_B_pole.png";
  answer_c : string = "../../assets/answer_C_pole.png";
  answer_d : string = "../../assets/answer_D_pole.png";
  listData : any = (data as any).default;
  score : number =  0;

  action_a() {
    this.answer_a = "../../assets/answer_A_pole_active.png";
  }
  not_action_a() {
    this.answer_a = "../../assets/answer_A_pole.png";
  }
  ans_a() {
    if (this.listData[this.score].answer == "a") {
      this.answer_a = "../../assets/question_A_sucsses.png";
      this.score++;
    }
    else {
      this.answer_a = "../../assets/question_A_wrrong.png";
      this.score = 0;
    }
  }

  action_b() {
    this.answer_b = "../../assets/answer_B_pole_active.png";
  }
  not_action_b() {
    this.answer_b = "../../assets/answer_B_pole.png";
  }
  ans_b() {
    if (this.listData[this.score].answer == "b") {
      this.answer_b = "../../assets/question_B_sucsses.png";
      this.score++;
    }
    else {
      this.answer_b = "../../assets/question_B_wrrong.png";
      this.score = 0;
    }
  }

  action_c() {
    this.answer_c = "../../assets/answer_C_pole_active.png";
  }
  not_action_c() {
    this.answer_c = "../../assets/answer_C_pole.png";
  }
  ans_c() {
    if (this.listData[this.score].answer == "c") {
      this.answer_c = "../../assets/question_C_sucsses.png";
      this.score++;
    }
    else {
      this.answer_c = "../../assets/question_C_wrrong.png";
      this.score = 0;
    }
  }

  action_d() {
    this.answer_d = "../../assets/answer_D_pole_active.png";
  }
  not_action_d() {
    this.answer_d = "../../assets/answer_D_pole.png";
  }
  ans_d() {
    if (this.listData[this.score].answer == "d") {
      this.answer_d = "../../assets/question_D_sucsses.png";
      this.score++;
    }
    else {
      this.answer_d = "../../assets/question_D_wrrong.png";
      this.score = 0;
    }
  }
}
