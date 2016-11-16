import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import JobsService from '../services/jobs.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[JobsService]
})
export class RegisterComponent implements OnInit {

  colonist: NewColonist;
  marsJobs: Job[];
  
  NO_JOB_SELECTED = '(none)';

  constructor(jobService: JobsService) {
    this.colonist = new NewColonist(null, null, this.NO_JOB_SELECTED);
    
    jobService.getJobs().subscribe((jobs) => {
      this.marsJobs = jobs;
     
    }, err => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

  get jobSelected (){
    return this.colonist.job_id !== this.NO_JOB_SELECTED;
  }

}
