import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { StartComponent } from './start/start.component';
import { Router} from '@angular/router';
import { Canvas1Component } from './canvas1/canvas1.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { NgParticlesModule } from "ng-particles";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HotToastModule } from '@ngneat/hot-toast';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    MyskillsComponent,
    MyWorksComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    LegalNoticeComponent,
    StartComponent,
    Canvas1Component,
    IntroComponent,
  ],


  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnimateOnScrollModule,
    AnimateOnScrollModule.forRoot(),
    NgParticlesModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {

  }

}
