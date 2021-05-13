import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {DarkmodeService} from '../darkmode.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  textColor:string; //the styles binded in the html elements
  backgroundColor:string;
  @Input() isDarkMode:boolean; //get the mode selected from app component
  constructor(private darkMode:DarkmodeService) {}

  ngOnInit(): void {}
  ngOnChanges():void{
    const styles = this.darkMode.getMode(this.isDarkMode); //get the styles when there is a change in the page
    this.textColor = styles.textColor;
    this.backgroundColor = styles.backgroundColor;
  }

}
