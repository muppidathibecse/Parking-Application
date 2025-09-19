import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HISTORY_LIST, HistoryTable } from '../../historytable';

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History implements OnInit {
  constructor() {}
  historylist: HistoryTable[] = [];
  ShowHistory: boolean = false;
  intervalId: any;
  statusmsg: string = '';
  ngOnInit(): void {
    this.historylist = HISTORY_LIST;
    this.statusmsg = 'Loading....';
    this.intervalId = setInterval(() => {
      this.ShowHistory = true;
      this.statusmsg = '';
    }, 2000);
  }
}
