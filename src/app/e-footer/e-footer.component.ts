import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-footer',
  templateUrl: './e-footer.component.html',
  styleUrls: ['./e-footer.component.scss']
})
export class EFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPolicy() {
    const policyClick = document.getElementById('policyClick');
    if (policyClick) {
      policyClick.classList.add('slide-up');
      policyClick.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }

  closePolicy() {
    const policyClick = document.getElementById('policyClick');
    if (policyClick) {
      policyClick.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }

}
