import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'ps-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

   originalUserSettings : UserSettings = {
     name : null ,
     emailOffers : null,
     interfaceStyle : null,
     notes : null,
     subscriptionStyle : null
  }

  userSettings : UserSettings = {... this.originalUserSettings}

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.originalUserSettings)
    console.log('copied data', this.userSettings)
  }

  onSubmit(form : NgForm){
    console.log("in onSubmit:", form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log("success: ", result),
      error => console.log("error: ", error)
    )
  }

}
