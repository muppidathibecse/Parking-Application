import { Component, OnInit } from '@angular/core';
import { Available, AVAILABLE_LIST } from '../../available';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Bookings } from '../bookings/bookings';

@Component({
  selector: 'app-locations',
  imports: [CommonModule, Footer, Bookings],
  templateUrl: './locations.html',
  styleUrl: './locations.css',
})
export class Locations implements OnInit {
  constructor() {}
  availablelist: Available[] = [];
  ngOnInit(): void {
    this.availablelist = AVAILABLE_LIST;
  }
  showBookingPopup = false;

  openBookingPopup() {
    this.showBookingPopup = true;
  }

  closeBookingPopup() {
    this.showBookingPopup = false;
  }
}
