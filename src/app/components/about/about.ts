import { Component, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { Available, AVAILABLE_LIST } from '../../available';

@Component({
  selector: 'app-about',
  imports: [Footer, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  constructor() {}
  availablelist: Available[] = [];
  ngOnInit(): void {
    this.availablelist = AVAILABLE_LIST;
  }
}
