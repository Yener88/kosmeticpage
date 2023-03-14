import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-leistungen',
  templateUrl: './b-leistungen.component.html',
  styleUrls: ['./b-leistungen.component.scss']
})
export class BLeistungenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLeistungenBlock1() {
    const leistungenBlock1 = document.getElementById('leistungenInnerBlock1');
    if (leistungenBlock1) {
      leistungenBlock1.classList.add('leistungenAnimation');
      leistungenBlock1.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }
  closeLeistungenBlock1() {
    const leistungenBlock1 = document.getElementById('leistungenInnerBlock1');
    if (leistungenBlock1) {
      leistungenBlock1.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }

  openLeistungenBlock2() {
    const leistungenBlock2 = document.getElementById('leistungenInnerBlock2');
    if (leistungenBlock2) {
      leistungenBlock2.classList.add('leistungenAnimation');
      leistungenBlock2.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }
  closeLeistungenBlock2() {
    const leistungenBlock2 = document.getElementById('leistungenInnerBlock2');
    if (leistungenBlock2) {
      leistungenBlock2.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }

  openLeistungenBlock3() {
    const leistungenBlock3 = document.getElementById('leistungenInnerBlock3');
    if (leistungenBlock3) {
      leistungenBlock3.classList.add('leistungenAnimation');
      leistungenBlock3.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }
  closeLeistungenBlock3() {
    const leistungenBlock3 = document.getElementById('leistungenInnerBlock3');
    if (leistungenBlock3) {
      leistungenBlock3.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }

  openLeistungenBlock4() {
    const leistungenBlock4 = document.getElementById('leistungenInnerBlock4');
    if (leistungenBlock4) {
      leistungenBlock4.classList.add('leistungenAnimation');
      leistungenBlock4.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }
  closeLeistungenBlock4() {
    const leistungenBlock4 = document.getElementById('leistungenInnerBlock4');
    if (leistungenBlock4) {
      leistungenBlock4.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }

  openLeistungenBlock5() {
    const leistungenBlock5 = document.getElementById('leistungenInnerBlock5');
    if (leistungenBlock5) {
      leistungenBlock5.classList.add('leistungenAnimation');
      leistungenBlock5.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }
  closeLeistungenBlock5() {
    const leistungenBlock5 = document.getElementById('leistungenInnerBlock5');
    if (leistungenBlock5) {
      leistungenBlock5.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }
}
