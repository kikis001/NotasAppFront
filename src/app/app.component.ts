import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MaterialModule } from './material/material/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NotasAppFront';

  constructor(private http: HttpClient) {}

  getNotes() {
    this.http.get('http://localhost:3000/notas').subscribe((data) => {
      console.log(data);
    });
  }
}
