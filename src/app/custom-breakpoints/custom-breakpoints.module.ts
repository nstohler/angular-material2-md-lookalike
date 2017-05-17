import { NgModule } from '@angular/core';
import { BREAKPOINTS } from '@angular/flex-layout';
import { CUSTOM_BREAKPOINT_FACTORY } from './custom-breakpoints.factory';

@NgModule({
  providers: [
    {
      provide : BREAKPOINTS,
      useFactory : CUSTOM_BREAKPOINT_FACTORY
    }
  ]
})
export class CustomBreakPointsModule { }
