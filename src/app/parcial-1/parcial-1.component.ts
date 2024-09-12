import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcial-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parcial-1.component.html',
  styleUrl: './parcial-1.component.css'
})
export class Parcial1Component {
  color:string = "red";
  estilo:string = "width:300px;height:300px;background-color:"+this.color+";display:flex;justify-content:center;align-items:center;color:white";

  changeColor(event: Event){
    this.estilo = "width:300px;height:300px;background-color:"+this.color+";display:flex;justify-content:center;align-items:center;color:white";
  }
}
