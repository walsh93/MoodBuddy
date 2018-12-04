import { TestBed } from '@angular/core/testing';
import { DataHandlerService } from './data-handler.service';

describe('DataHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
   it('should be created', () => {
    const service: DataHandlerService = TestBed.get(DataHandlerService);
    expect(service).toBeTruthy();
  });
});