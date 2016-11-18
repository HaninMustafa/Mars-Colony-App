import {
  OnInit,
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  //animations trigers, transition
})

export class WelcomeComponent implements OnInit {


//adding Hostbinding

  constructor() { }

  ngOnInit() {
  }

}
