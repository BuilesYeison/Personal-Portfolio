import { Component, OnInit, OnChanges,Input } from '@angular/core';
import {DarkmodeService} from '../../services/darkmode.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  textColor:string;
  backgroundColor:string;
  @Input()isDarkMode:boolean;
  constructor(private darkmode:DarkmodeService) { }
  openCrr(){
    window.open("../assets/CriclmYB.pdf")
  }
  ngOnInit(): void {
  }
  ngOnChanges():void{
    const styles = this.darkmode.getMode(this.isDarkMode);
    this.textColor = styles.textColor;
    this.backgroundColor = styles.backgroundColor;
  }
}
