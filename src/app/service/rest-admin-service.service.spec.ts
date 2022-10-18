import { TestBed } from '@angular/core/testing';

import { RestAdminServiceService } from './rest-admin-service.service';

describe('RestAdminServiceService', () => {
  let service: RestAdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestAdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
