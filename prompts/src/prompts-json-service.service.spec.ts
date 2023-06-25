import { TestBed } from '@angular/core/testing';

import { PromptsJsonServiceService } from './prompts-json-service.service';

describe('PromptsJsonServiceService', () => {
  let service: PromptsJsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptsJsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
