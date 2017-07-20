import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DevLibsRoutingModule } from './app-routing.module';
import { SentenceService } from './sentence.service';
import { SentenceComponent } from './sentence/sentence.component';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';
import { SentenceDisplayComponent } from './sentence-display/sentence-display.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceComponent,
    SentenceFormComponent,
    SentenceDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DevLibsRoutingModule,
    FormsModule
  ],
  providers: [SentenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
