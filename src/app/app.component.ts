import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './constants/constants';
import { AuthenticationService } from './_services';
import { Router } from '@angular/router';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  langs = [Constants.EN, Constants.KO, Constants.VI];
  title = 'LoginProject';
  currentUser: User = new User;
  constructor
    (
      private translateService: TranslateService,
      private router: Router,
      private authenticationService: AuthenticationService
    ) {
    translateService.addLangs(this.langs);
    translateService.setDefaultLang('en');
    translateService.use('en');
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(): void {

  }
  
  //function change language
  useLanguage(language: string): void {
    this.translateService.use(language);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
