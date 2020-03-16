import { Injectable, Inject } from '@angular/core';
import {Store} from '@ngrx/store';
import { WINDOW_EVENTS_TOKEN } from './constants';
import windowTriggers from './triggers/window.triggers';

@Injectable({
  providedIn: 'root'
})
export class EventActionsService {

  constructor(store: Store<any>, @Inject(WINDOW_EVENTS_TOKEN) windowEventsToken: string[]) {
    windowTriggers(window, store, windowEventsToken);
  }
}
