import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn,AbstractControl} from '@angular/forms';
import { NewColonist, Job } from '../models';
import JobsService from '../services/jobs.service';
import {cantBe} from '../shared/validators';
import {Router, ActivatedRoute} from '@angular/router';
import ColonistsService from '../services/colonists.service';
import { HostBinding, trigger, state, style, animate, transition } from '@angular/core';


const notNone = (value) => {
return value === '(none)' ? false: true;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[JobsService, ColonistsService],
  animations:[ 
	trigger('scaleIn', [
		state('in', style({ transform: 'translateY(0)' })),
		transition('void => in', [
			style({
				height: '0px',
				transform: 'translateY(-100vh)'
			}),
			animate('0ms 500ms ease', style(
			{
				height: 'auto'
			})
			),
			animate('500ms 500ms ease', style(
			{
				transform: 'translateY(0)'
			})
			)
			])
		])
	]
})

export class RegisterComponent implements OnInit {

	@HostBinding('@scaleIn') hostAnimation = "in";

  colonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;
  NO_JOB_SELECTED = '(none)';

  constructor(jobService: JobsService,    
  private colonistsService: ColonistsService,
  private router: Router

) {

    
    jobService.getJobs().subscribe((jobs) => {
      this.marsJobs = jobs;
     
    }, err => {
      console.log(err);
    });
   }


tooOld(value:number):ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} => {
       return control.value >100 ? {'too old': { value }}: null;
};
}

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required, this.tooOld(100)]),
      age : new FormControl('',[Validators.required, Validators.maxLength(3)]),
      job_id: new FormControl(this.NO_JOB_SELECTED,[cantBe(this.NO_JOB_SELECTED)])
    });
  }





onSubmit(event){
event.preventDefault();
if(this.registerForm.invalid){
//the form is invalid...
} else {
  const name = this.registerForm.get('name').value;
  const age = this.registerForm.get('age').value;
  const job_id = this.registerForm.get('job_id').value;

const colonist = new NewColonist(name, age, job_id);

   this.colonistsService.submitColonist(colonist).subscribe(
     (colonist)=> {
         localStorage.setItem('colonist_id', JSON.stringify(colonist.id));
         this.router.navigate(['/encounters'])      
         }, err => {
     console.log(err)});

}
}
}



