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
      img:"../assets/osloWebPage.PNG",
      description:"Personal web landing page project, full responsive for any device. This web page is about a spanish Coffee shop called‘Oslo’.",
      github:"https://github.com/BuilesYeison/Cafe-Oslo-Landing-Page",
      deploy:"https://kind-payne-d9a1df.netlify.app"
    },
    {
      img:"../assets/inksectWebPage.PNG",
      description:"Personal web landing page project, full responsive for any device. This web page is about a tattoo studio called ‘InkSect’.",
      github:"https://github.com/BuilesYeison/Inksect-Web-Landing-Page",
      deploy:"https://adoring-booth-60e449.netlify.app"
    },
    {
      img:"../assets/weatherWebPage.PNG",
      description:"Angular project that can show weather data from any searched city, using openweathermap API for get JSON weather data.",
      github:"https://github.com/BuilesYeison/WeatherApp",
      deploy:"https://affectionate-euler-ade62d.netlify.app"
    },
    {
      img:"../assets/dailyuiWebPage.PNG",
      description:"Web Pages created following the DailyUI challenge to practice web frontend and UI/UX skills.",
      github:"https://github.com/BuilesYeison/DailyUI",
      deploy:"https://www.youtube.com/playlist?list=PL_soeKKkJIyNXGt9vs2UGbfqWdKGLEgnS"
    },
    {
      img:"../assets/curriculumWebPage.PNG",
      description:"An Angular project created for MVM, where the users can add info related with them work experiences.",
      github:"https://github.com/BuilesYeison/Formato_Curriculum",
      deploy:"https://www.youtube.com/watch?v=dJqfKnJzjQI"
    }
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
