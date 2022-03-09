import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'ps-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    notes: null,
    subscriptionStyle: null,
    id: null,
  };
  error = false;
  postErrorMessage = '';
  subscriptionTypes : Observable<string[]>;
  singleModel = 'On';

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.originalUserSettings);
    console.log('copied data', this.userSettings);
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onHttpError(error) {
    console.log('error: ', error);
    this.error = true;
    this.postErrorMessage = error.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit:', form.valid);
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => {
          console.log('success: ', result);
          this.error = false;
        },
        (error) => this.onHttpError(error)
      );
    } else {
      this.error = true;
      this.postErrorMessage = 'Fix the above error';
    }
  }
}
