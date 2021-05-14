import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {DarkmodeService} from '../darkmode.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  textColor:string;
  backgroundColor:string;
  @Input()isDarkMode:boolean;
  projects:any = [
    {
      img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      description:"Some designs and web pages created following the DailyUI challenge. Projects in Angular and others technologies.",
      github:"https://github.com/BuilesYeison",
      deploy:""
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      description:"Some designs and web pages created following the DailyUI challenge. Projects in Angular and others technologies.",
      github:"https://github.com/BuilesYeison",
      deploy:""
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      description:"Some designs and web pages created following the DailyUI challenge. Projects in Angular and others technologies.",
      github:"https://github.com/BuilesYeison",
      deploy:""
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      description:"Some designs and web pages created following the DailyUI challenge. Projects in Angular and others technologies.",
      github:"https://github.com/BuilesYeison",
      deploy:""
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      description:"Some designs and web pages created following the DailyUI challenge. Projects in Angular and others technologies.",
      github:"https://github.com/BuilesYeison",
      deploy:""
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      description:"Some designs and web pages created following the DailyUI challenge. Projects in Angular and others technologies.",
      github:"https://github.com/BuilesYeison",
      deploy:""
    },
  ]
  constructor(private darkmode:DarkmodeService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    const styles = this.darkmode.getMode(this.isDarkMode);
    this.textColor = styles.textColor;
    this.backgroundColor = styles.backgroundColor;
  }

}
