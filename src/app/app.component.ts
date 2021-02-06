import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subject = new Subject();

  number1:number = 0;
  number2: number = 0;
  total1: number = 0;
  total2: number = 0;
  suscripcion1: any;
  suscripcion2: any;

  public constructor() {
    this.subscribe1();
    this.subscribe2();
  }

  subscribe1(): void {
    this.suscripcion1 = this.subject.subscribe(data => {
      this.total1 = this.number1 + this.number2;
    });
  }

  subscribe2(): void {
    this.suscripcion2 = this.subject.subscribe(data => {
      this.total2 = this.number1 * this.number2;
    });
  }

  change(): void{
    this.subject.next();

  }
}
