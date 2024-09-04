import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GsapComponent } from '../navbars/gsap/gsap.component';

import { MountainComponet } from '../explore/mountain/mountain.component';

import { SlidesComponent } from '../image/slides/slides.component';

import { ExampleComponent } from '../nav1/example/example.component';

import { ContentComponent } from '../3d/content/content.component';

import { WordsComponent } from '../animated/words/words.component';

import { ParalelComponent } from '../paralexeffect/paralel/paralel.component';

import { InfinityComponent } from '../cards/infinity/infinity.component';

import { CorasalComponent } from '../corosal/corasal/corasal.component';


import { TimelineComponent } from '../time/timeline/timeline.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GsapComponent,MountainComponet,SlidesComponent, ExampleComponent,ContentComponent, WordsComponent,
     ParalelComponent, InfinityComponent, CorasalComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {  
      gsap.to(".gsaplogo", {
        x: "52vw",
        y: "15vh",
        scale: 2.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".gsaplogo",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        }
      });
      gsap.to(".sublogo", {
        x: "-52vw",
        y: "15vh",
        scale: 2.5,
        rotate: 360,
        scrollTrigger: {
          trigger: ".sublogo",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        }
      });
    }
  }
 
}
