import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_components/alert.component';
import { HomeComponent } from './_pages/home';
import { LoginComponent } from './_pages/login';
import { RegisterComponent } from './_pages/register';
import { CreateUserComponent } from './_pages/create-user/create-user.component';
import { UserAssignmentComponent } from './_pages/user-assignment/user-assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CreateTemplateComponent } from './_pages/create-template/create-template.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreateUserComponent,
    UserAssignmentComponent,
    AlertComponent,
    CreateTemplateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    BrowserAnimationsModule,
    DateTimePickerModule,
    AngularEditorModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
