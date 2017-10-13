import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentTestPage } from './segment-test';

@NgModule({
  declarations: [
    SegmentTestPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentTestPage),
  ],
})
export class SegmentTestPageModule {}
