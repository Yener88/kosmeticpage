import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aa-about',
  templateUrl: './aa-about.component.html',
  styleUrls: ['./aa-about.component.scss']
})
export class AaAboutComponent implements OnInit {
  @ViewChild('imgModal') imgModal!: ElementRef;

  private isDragging = false;

  constructor() { }

  ngOnInit(): void {
    const imgGalerie = document.querySelector('.imgGalerie') as HTMLElement;
    imgGalerie.addEventListener('mousedown', this.handleMouseDown.bind(this));
    imgGalerie.addEventListener('mouseup', this.handleMouseUp.bind(this));
    imgGalerie.addEventListener('mousemove', this.handleMouseMove.bind(this));
    imgGalerie.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }

  private handleMouseDown(event: MouseEvent) {
    if (event.button === 0) { // only for left mouse button
      this.isDragging = true;
      event.preventDefault(); // prevent text selection
    }
  }

  private handleMouseUp(event: MouseEvent) {
    if (event.button === 0) { // only for left mouse button
      this.isDragging = false;
      event.preventDefault(); // prevent text selection
    }
  }

  private handleMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const imgGalerie = document.querySelector('.imgGalerie') as HTMLElement;
      imgGalerie.scrollLeft += event.movementX;
      event.preventDefault(); // prevent text selection
    }
  }

  private handleMouseLeave(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  openImg(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    const src = imgElement.src;
    const imgModal = this.imgModal.nativeElement as HTMLDivElement;
    const imgModalImg = imgModal.querySelector('img') as HTMLImageElement;
    imgModalImg.src = src;
    imgModal.style.display = 'flex';
    imgModal.classList.add('imgBoxAnimation');
    document.documentElement.style.setProperty('overflow-y', 'hidden');
    const aboutContent = document.querySelector('.aboutContent') as HTMLElement;
    aboutContent.style.zIndex = 'unset';
  }

  closeImg() {
    const imgModal = document.querySelector('.imgModal') as HTMLElement;
    imgModal.style.display = 'none';
    document.documentElement.style.setProperty('overflow-y', 'auto');
    const aboutContent = document.querySelector('.aboutContent') as HTMLElement;
    aboutContent.style.zIndex = '1';
  }

  previousImg() {
    const imgModal = this.imgModal.nativeElement as HTMLDivElement;
    const imgModalImg = imgModal.querySelector('img') as HTMLImageElement;
    const currentImgSrc = imgModalImg.src;
    const imgElements = document.querySelectorAll('.imgGalerie img') as NodeListOf<HTMLImageElement>;
    for (let i = 0; i < imgElements.length; i++) {
      if (imgElements[i].src === currentImgSrc) {
        const previousImgSrc = i === 0 ? imgElements[imgElements.length - 1].src : imgElements[i - 1].src;
        imgModalImg.src = previousImgSrc;
        break;
      }
    }
  }

  nextImg() {
    const imgModal = this.imgModal.nativeElement as HTMLDivElement;
    const imgModalImg = imgModal.querySelector('img') as HTMLImageElement;
    const currentImgSrc = imgModalImg.src;
    const imgElements = document.querySelectorAll('.imgGalerie img') as NodeListOf<HTMLImageElement>;
    for (let i = 0; i < imgElements.length; i++) {
      if (imgElements[i].src === currentImgSrc) {
        const nextImgSrc = i === imgElements.length - 1 ? imgElements[0].src : imgElements[i + 1].src;
        imgModalImg.src = nextImgSrc;
        break;
      }
    }
  }

  downloadImg() {
    const imgModalImg = this.imgModal.nativeElement.querySelector('img') as HTMLImageElement;
    const link = document.createElement('a');
    link.href = imgModalImg.src;
    link.download = 'image.jpg';
    link.click();
  }

  fullscreenImg() {
    const modal = this.imgModal.nativeElement;
    const img = modal.querySelector('img');
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
      img.msRequestFullscreen();
    }
  }

}
