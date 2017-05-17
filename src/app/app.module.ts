import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { CustomBreakPointsModule } from './custom-breakpoints/custom-breakpoints.module';
import { ResizeService } from './services/resize.service';
import { DemoContentComponent } from './demo-content/demo-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    CustomBreakPointsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
