import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAboutAuthorComponent } from './information-about-author.component';

describe('InformationAboutAuthorComponent', () => {
  let component: InformationAboutAuthorComponent;
  let fixture: ComponentFixture<InformationAboutAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAboutAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAboutAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
