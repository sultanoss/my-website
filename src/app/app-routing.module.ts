import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';


const routes: Routes = [
  { path: '', component:BannerComponent},
  { path: '', component:MyskillsComponent},
  { path: '', component:MyWorksComponent},
  { path: '', component:ContactComponent},
  { path: '', component:FooterComponent},
  { path: 'imprint', component:ImprintComponent},
  { path: 'legalnotice', component:LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
