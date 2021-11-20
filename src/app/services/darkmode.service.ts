import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  
  constructor() { }
  getMode(flag:boolean){ //get the styles depending in the mode selected
    switch(flag){
      case true: //darkmdode
        return {
            backgroundColor: "#121314",
            textColor: "#f5f5f5"
          }
          break;
        case false:
          return {
              backgroundColor: "#f5f5f5",
              textColor: "#121314"
            }
            break;
        default:
          return {
            backgroundColor: "#f5f5f5",
            textColor: "#121314"
          }
          break;
    }
  }
}
