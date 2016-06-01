import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AuthtestAppComponent } from '../app/authtest.component';

beforeEachProviders(() => [AuthtestAppComponent]);

describe('App: Authtest', () => {
  it('should create the app',
      inject([AuthtestAppComponent], (app: AuthtestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'authtest works!\'',
      inject([AuthtestAppComponent], (app: AuthtestAppComponent) => {
    expect(app.title).toEqual('authtest works!');
  }));
});
