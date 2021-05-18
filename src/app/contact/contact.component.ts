import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {DarkmodeService} from '../darkmode.service'

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
  openWindow(){
    window.open("https://www.github.com")
  }
  ngOnInit(): void {
  }
  ngOnChanges():void{
    const styles = this.darkmode.getMode(this.isDarkMode);
    this.textColor = styles.textColor;
    this.backgroundColor=styles.backgroundColor;
  }

}
