import { TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';

const listOfTags = ['fire', 'accident', 'water'];

describe('ReportService', () => {
  let service: ReportService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    window.sessionStorage.setItem('selectedTags', `${listOfTags}`);
  });

  it('should be created', () => {
    service = new ReportService();

    expect(service).toBeTruthy();
  });

  it('should have no incident comment to start', () => {
    service = new ReportService();
    service.incidentComment = '';

    expect(service.incidentComment.length).toBe(0);
  });

  it('should have an empty list of tags to start', () => {
    service = new ReportService();
    service.selectedTags = [];

    window.sessionStorage.removeItem('selectedTags');
    expect(service.selectedTags.length).toBe(0);
  });

  it('should set the incidentComment and selectedTags property values', () => {
    service = new ReportService();

    service.setInfo('this isa sample incident comment', ['fire']);

    expect(service.selectedTags.length).toBeGreaterThan(0);
    expect(service.incidentComment.length).toBeGreaterThan(0);
    expect(window.sessionStorage.getItem('incidentComment')).toBeTruthy();
    expect(window.sessionStorage.getItem('selectedTags')).toBeTruthy();
  });
});
