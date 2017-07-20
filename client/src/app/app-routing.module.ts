import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceComponent } from './sentence/sentence.component';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';
import { SentenceDisplayComponent } from './sentence-display/sentence-display.component';

const routes: Routes = [
  { path: '', component: SentenceComponent },
  { path: ':_id', component: SentenceDisplayComponent },
  { path: ':_id/form', component: SentenceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DevLibsRoutingModule { }
