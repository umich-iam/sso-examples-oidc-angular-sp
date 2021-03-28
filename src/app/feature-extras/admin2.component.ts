import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `<p class="alert alert-danger">
    This is the <strong>🔧 ADMIN 2</strong> component.
    It will redirect you to login if needed.
  </p>`,
})
export class Admin2Component implements OnInit {

  constructor() { }

  ngOnInit() {}
}
