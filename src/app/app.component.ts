import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './constants/constants';
import { AuthenticationService } from './_services';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { Menu } from './_models/menu';
import { CommonService } from './_services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  langs = [Constants.EN, Constants.KO, Constants.VI];
  title = 'LoginProject';
  currentUser: User = new User;
  currentMenu1:any ="";
  currentMenu2:any ="";
  menus: Array<Menu> = [];
  menuLeves1: Array<Menu> = [];
  menuLeves2: Array<Menu> = [];
  menuLevel1Name:any ;
  menuLevel2Name:any;
  currentLanguage:any = "English";
  constructor
    (
      private translateService: TranslateService,
      private router: Router,
      private commonService: CommonService,
      private authenticationService: AuthenticationService
    ) {
    translateService.addLangs(this.langs);
    translateService.setDefaultLang('en');
    translateService.use('en');
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(): void {
    setTimeout(()=>{ this.getMenuLeft();},100);
  }
  
  //function change language
  useLanguage(language: string): void {
    this.translateService.use(language);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  changeLanguage(language: string): void {
    if(language=='vi'){
      this.currentLanguage = "Tiếng Việt"
    } else  if(language=='ko'){
      this.currentLanguage = "Korean"
    }
    else{
      this.currentLanguage = "English"
    }
    
    this.translateService.use(language);
  }

  getMenuLeft(): void {
    const menuList = this.commonService.getMenuList();
    let menuLeves1 = menuList.filter((value, index, array) => { return value.level === '1'; });
    let menuLeves2 = menuList.filter((value, index, array) => { return value.level === '2' });
    this.menuLeves1 = menuLeves1;
    this.menuLeves2 = menuLeves2;

    for (const menu of menuLeves1) {
      menu.childsMenu = menuLeves2.filter((value, index, array) => { return value.parentMenu === menu.menuId });
    }
    console.log(menuLeves1);
    this.menus = menuLeves1;
  }
  clickMenu(menu:Menu) {
    this.menuLevel1Name = menu.menuName;
    this.menuLevel2Name = "";
  }
  clickChildMenu(menu:Menu, childMenu:Menu){
    this.menuLevel1Name = menu.menuName;
    this.menuLevel2Name = childMenu.menuName;

  }
}
