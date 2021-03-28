import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `<p class="alert alert-danger">
    This is the <strong>⚙ ADMIN</strong> component.
    It will not redirect you to the login server.
  </p>`,
})
export class Admin1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
