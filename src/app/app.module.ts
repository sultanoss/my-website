import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
