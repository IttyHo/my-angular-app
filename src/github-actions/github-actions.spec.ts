import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubActions } from './github-actions';

describe('GithubActions', () => {
  let component: GithubActions;
  let fixture: ComponentFixture<GithubActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
