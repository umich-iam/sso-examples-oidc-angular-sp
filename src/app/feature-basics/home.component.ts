import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<p class="alert alert-primary">
    This is the <strong>🏠 HOME</strong> component.
  </p>`,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
