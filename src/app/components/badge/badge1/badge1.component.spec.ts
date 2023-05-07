import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatBadgeHarness} from '@angular/material/badge/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {MatBadgeModule} from '@angular/material/badge';
import { Badge1Component } from './badge1.component';

describe('Badge1Component', () => {
  let component: Badge1Component;
  let fixture: ComponentFixture<Badge1Component>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatBadgeModule],
      declarations: [Badge1Component],
    }).compileComponents();
    fixture = TestBed.createComponent(Badge1Component);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all badge harnesses', async () => {
    const badges = await loader.getAllHarnesses(MatBadgeHarness);
    expect(badges.length).toBe(3);
  });

  it('should be able to get the text of a badge', async () => {
    const badge = await loader.getHarness(MatBadgeHarness.with({selector: '#simple'}));

    expect(await badge.getText()).toBe('S');
    fixture.componentInstance.simpleContent = 'Changed';
    expect(await badge.getText()).toBe('Changed');
  });

  it('should get whether a badge is overlapping', async () => {
    const badge = await loader.getHarness(MatBadgeHarness.with({selector: '#overlapping'}));

    expect(await badge.isOverlapping()).toBe(true);
    fixture.componentInstance.overlap = false;
    expect(await badge.isOverlapping()).toBe(false);
  });

  it('should get whether a badge is disabled', async () => {
    const badge = await loader.getHarness(MatBadgeHarness.with({selector: '#disabled'}));

    expect(await badge.isDisabled()).toBe(true);
    fixture.componentInstance.disabled = false;
    expect(await badge.isDisabled()).toBe(false);
  });
});
