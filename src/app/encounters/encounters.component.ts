import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import EncountersService from '../services/encounters.service'
import AliensService from '../services/aliens.service';
import {Alien} from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn,AbstractControl} from '@angular/forms';
import {cantBe} from '../shared/validators';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers:[EncountersService]
})

export class EncountersComponent implements OnInit {

  marsEncounters: Encounter[];


  constructor(encounterService: EncountersService) {
    
    encounterService.getEncounters().subscribe((encounters) => {
      this.marsEncounters = encounters;
     
    }, err => {
      console.log(err);
    });
   }

  ngOnInit() {
  }



}


