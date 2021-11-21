import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {DarkmodeService} from '../../services/darkmode.service'

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
      title:"Covid Web App",
      icon:"bx-first-aid",
      description:"An Angular project that shows the actual covid data about any country typed in the searchbox.",
      repository:"https://github.com/BuilesYeison/WebSite-Covid-Data",
      projectUrl:"https://adoring-kowalevski-bbc98f.netlify.app/"
    },
    {
      title:"Inksect Tattoo Studio",
      icon:"bx-palette",
      description:"Personal web landing page project, full responsive for any device. This web page is about a tattoo studio called ‘InkSect’.",
      repository:"https://github.com/BuilesYeison/Inksect-Web-Landing-Page",
      projectUrl:"https://adoring-booth-60e449.netlify.app"
    },
    {
      title:"Weather Web App",
      icon:"bx-cloud",
      description:"Angular project that can show weather data from any searched city, using openweathermap API for get JSON weather data.",
      repository:"https://github.com/BuilesYeison/WeatherApp",
      projectUrl:"https://affectionate-euler-ade62d.netlify.app"
    },
    {
      title:"DailyUi Challenge",
      icon:"bx-vector",
      description:"Web Pages created following the DailyUI challenge to practice web frontend and UI/UX skills.",
      repository:"https://github.com/BuilesYeison/DailyUI",
      projectUrl:"https://www.youtube.com/playlist?list=PL_soeKKkJIyNXGt9vs2UGbfqWdKGLEgnS"
    },
    {
      title:"Forms",
      icon:"bx-chart",
      description:"An Angular project created for MVM, where the users can add info related with them work experiences.",
      repository:"https://github.com/BuilesYeison/Formato_Curriculum",
      projectUrl:"https://www.youtube.com/watch?v=dJqfKnJzjQI"
    },
    {
      title:"Coffee Shop",
      icon:"bx-dish",
      description:"Personal web landing page project, full responsive for any device. This web page is about a spanish Coffee shop called ‘Oslo’.",
      repository:"https://github.com/BuilesYeison/Cafe-Oslo-Landing-Page",
      projectUrl:"https://kind-payne-d9a1df.netlify.app"
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
