import { Component, OnInit } from '@angular/core';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service'
import {Alien, NewEncounter} from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn,AbstractControl} from '@angular/forms';
import {cantBe} from '../shared/validators';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  providers: [AliensService, EncountersService],
  styleUrls: ['./report.component.scss']
})


export class ReportComponent implements OnInit {

aliensList: Alien[];
reportForm: FormGroup;
NO_ALIEN_SELECTED = '(none)';

  constructor(
    private aliensService: AliensService,
    private encounterService: EncountersService,
    private router: Router
  ) {

aliensService.getAliens().subscribe((aliens)=> {
  this.aliensList = aliens;
  console.log();
}, (err) => {
  console.log(err);
}); 
}

  ngOnInit() {
    this.reportForm=new FormGroup({
      atype: new FormControl(this.NO_ALIEN_SELECTED,[cantBe(this.NO_ALIEN_SELECTED)]),
      action: new FormControl('',[Validators.required, Validators.maxLength(450)])
    })
  }

private getDate(){
const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

}

onSubmit(event){
  event.preventDefault();

  const date = this.getDate();
  const atype = this.reportForm.get('atype').value
  const action = this.reportForm.get('action').value
  const encounter = new NewEncounter(date , atype, action, '4');

  this.encounterService.submitEncounter(encounter)

  .subscribe((enc) => {
    this.router.navigate(['/encounters']);
console.log('got encounter: ', enc) ;    
    });
   }
}


