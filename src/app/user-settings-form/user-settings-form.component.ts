import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'ps-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

   userSettings : UserSettings = {
     name : 'Milton',
     emailOffers : true,
     interfaceStyle : 'dark',
     notes : ' Here are notes',
     subscriptionStyle : 'Annual'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
