import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {DarkmodeService} from '../../services/darkmode.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input()isDarkMode:boolean;
  textColor:string;
  backgroundColor:string;
  constructor(private darkmode:DarkmodeService) { }
  openWindow(option:string){//open a new web page depending in the selection
    switch(option){
      case 'github':
        window.open("https://github.com/BuilesYeison");
        break;
      case 'youtube':
        window.open("https://www.youtube.com/channel/UC0-0QRFUH9g221kSvRs9plA");
        break;
      case 'twitter':
        window.open("https://twitter.com/BuilesYeison");
        break;
      case 'linkedin':
        window.open("https://www.linkedin.com/in/builesyeison/");
        break;
      default:
        window.open("https://github.com/BuilesYeison");
        break;
    }
  }
  ngOnInit(): void {
  }
  ngOnChanges():void{
    const styles = this.darkmode.getMode(this.isDarkMode);
    this.textColor = styles.textColor;
    this.backgroundColor=styles.backgroundColor;
  }

}
