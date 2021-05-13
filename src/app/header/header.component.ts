import { Component, OnInit,Input, OnChanges} from '@angular/core';
import {DarkmodeService} from '../darkmode.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  textColor:string;
  backgroundColor:string;
  @Input()isDarkMode:boolean;
  constructor(private darkmode:DarkmodeService) { }

  ngOnInit():void{}
  ngOnChanges():void{
    const styles = this.darkmode.getMode(this.isDarkMode); //get the styles depending in the mode selected
    this.textColor = styles.textColor;
    this.backgroundColor = styles.backgroundColor;
  }
}
