import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-intro',
  templateUrl: './a-intro.component.html',
  styleUrls: ['./a-intro.component.scss']
})
export class AIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.imageSlider();
  }

  imageSlider() {
    const images = [
      "assets/img/slider1.jpg",
      "assets/img/slider2.jpg",
      "assets/img/slider3.jpg",
      "assets/img/slider4.jpg"
    ];

    let currentImageIndex = 0;
    const sliderImage = document.getElementById('sliderImage') as HTMLImageElement;
    const sliderImage2 = document.getElementById('sliderImage2') as HTMLImageElement;
    if (sliderImage && sliderImage2) {
      sliderImage.style.opacity = '1'; // sichtbar machen
      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = images[currentImageIndex];
        if (sliderImage.style.opacity === '1') {
          sliderImage2.src = nextImage;
          sliderImage2.style.opacity = '1';
          sliderImage.style.opacity = '0';
        } else {
          sliderImage.src = nextImage;
          sliderImage.style.opacity = '1';
          sliderImage2.style.opacity = '0';
        }
      }, 4000);
    }
  }



}
