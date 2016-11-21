import {
  OnInit,
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  HostBinding
} from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
 animations:[ 
  trigger('scaleDown', [
    state('in', style({ transform: 'scale(1)' })),
    transition('in => void', [
      animate('500ms ease', style({transform: 'scale(0)'}))
      ])
    ])
  ]})

export class WelcomeComponent implements OnInit {


	@HostBinding('@scaleDown') hostAnimation = "in";

  constructor() { }

  ngOnInit() {
  }

}
