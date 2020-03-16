import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventActionsComponent } from './event-actions.component';
import { WINDOW_EVENTS_TOKEN } from './constants';
import { EventActionsService } from './event-actions.service';


interface Config {
  window_events: string[];
}


@NgModule({
  declarations: [EventActionsComponent],
  imports: [
  ],
  exports: [EventActionsComponent],
  providers: [EventActionsService]
})
export class EventActionsModule {
  constructor(eventActionsService: EventActionsService) {}
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: EventActionsModule,
      providers: [{ provide: WINDOW_EVENTS_TOKEN, useValue: config.window_events }]
    };
  }
 }
