import {
  Component,
  OnInit
} from '@angular/core';

class Apple {
  constructor(

    public name: string,
    public color: string
  ) {}

}

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})

export class ListTestComponent implements OnInit {

  appleList: [Apple];
  apple: Apple;

  constructor() {
    this.apple = {
      name: '',
      color: ''
    };
    this.appleList = [

      {
        name: 'l1',
        color: 'l2'
      }, {
        name: 'l3',
        color: 'l4'
      }, {
        name: 'l5',
        color: 'l6'
      }
    ];
  }


addApple(){
  this.appleList.push(this.apple);
  this.apple = {name: '',color: ''};
}
enderAppleForm
  ngOnInit() {
  }

}
