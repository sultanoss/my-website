import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'legalnotice', component: LegalNoticeComponent },
  { path: 'myWorks', component: MyWorksComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'myskills', component: MyskillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
