import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Input() collapsed=false
@Input() screenWidht=0;

  toggleSidebarForMe: any;


      @Output() togglesidebarForMe:EventEmitter<any>=new EventEmitter();

      constructor(){}

  getHeadClass(): string{
    let styleClass='';
    if(this.collapsed && this.screenWidht >460){
      styleClass= 'head-trimmed';
    }
    else{
      styleClass='head-md-screen';
    }
    return styleClass
  }



  toggleSidebar() {
    this.togglesidebarForMe.emit();
  }
}
