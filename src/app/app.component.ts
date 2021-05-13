import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {DarkmodeService} from './darkmode.service'
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isDarkMode :boolean = false
  textColor:string;
  backgroundColor:string;
  modeSelected:string = "Dark mode" //will show in toggle html element text
  constructor(private darkMode:DarkmodeService){}
  
  getToggle(evt:MatSlideToggleChange){ //get the toggle boolean value. Change the modeSelected text
    this.isDarkMode = evt.checked;
    const styles = this.darkMode.getMode(this.isDarkMode);
    this.textColor = styles.textColor;
    this.backgroundColor = styles.backgroundColor
    this.modeSelected = this.isDarkMode === true ? "Ligth mode":"Dark mode"
  }

  ngOnInit(): void {
    Aos.init();
  }
}
