import { TestBed } from '@angular/core/testing';

import { EventActionsService } from './event-actions.service';

describe('EventActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventActionsService = TestBed.get(EventActionsService);
    expect(service).toBeTruthy();
  });
});
