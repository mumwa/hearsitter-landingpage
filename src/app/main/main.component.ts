import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  goDownload(): void {
    window.open(
      'https://drive.google.com/file/d/1ibGN9mNB-Y1cREDqv4Jab1on9llKtyH_/view?usp=sharing'
    );
  }
}
