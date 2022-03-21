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
import { StartComponent } from './start/start.component';
import { filter } from 'rxjs';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Canvas1Component } from './canvas1/canvas1.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 0]);
    router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        //a good solve but it still does not scroll to anchor element after second click on the same anchor
        //one fix should be to set routing config option onSameUrlNavigation: 'reload',
        if (e.anchor) {
          // anchor navigation
          /* setTimeout is the core line to solve the solution */
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor);
          });
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
