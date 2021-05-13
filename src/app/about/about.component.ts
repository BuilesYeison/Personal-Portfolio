import { Component, OnInit, OnChanges } from '@angular/core';
import {DarkmodeService} from '../darkmode.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  textColor:string;
  backgroundColor:string;
  constructor(private darkmode:DarkmodeService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    
  }
}
