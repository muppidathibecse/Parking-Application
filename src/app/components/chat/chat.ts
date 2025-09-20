import { CommonModule } from '@angular/common';
import { Component, OnInit, StreamingResourceOptions } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  constructor() {}
  messageList: string[] = [];
  responses!: Map<string, string>;
  input_msg: string = '';
  output_msg: string = '';
  ngOnInit(): void {
    this.messageList = [];
    this.responses = new Map<string, string>([
      ['How Are You', 'I am Fine'],
      ['Hello', 'Hi there!'],
      ['Bye', 'Goodbye!'],
    ]);
  }
  Send() {
    console.log(this.input_msg);
    this.messageList.push(this.input_msg);
    setTimeout(() => {
      const response = this.responses.get(this.input_msg);
      this.output_msg = response ? response : "Sorry, I don't understand!";
      this.messageList.push(this.output_msg);
      this.output_msg = '';
      this.input_msg = '';
    }, 2000);
  }
}
