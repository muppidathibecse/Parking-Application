import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Chat } from './components/chat/chat';
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, Chat],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showPopup = false;
  View() {
    this.showPopup = !this.showPopup;
  }
  showChatPopup = false;

  ChatPopup() {
    this.showChatPopup = !this.showChatPopup;
  }

  protected readonly title = signal('parking');
}
