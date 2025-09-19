import { Component, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { Available, AVAILABLE_LIST } from '../../available';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Footer, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor() {}
  availablelist: Available[] = [];
  availablestatus: string = '';
  showAvailable = false;
  bookinglist: any[] = [];
  ngOnInit(): void {
    this.availablelist = AVAILABLE_LIST;
  }
  booking = {
    city: '',
    entryDate: '',
    exitDate: '',
  };
  checkAvailable() {
    this.showAvailable = true;
    this.bookinglist = [];
    this.availablestatus = 'Loading...';

    setTimeout(() => {
      console.log('Checking availability...');
      console.log('User Booking:', this.booking);

      const availableEntry = this.availablelist.find(
        (a) => a.city.toLowerCase() === this.booking.city.toLowerCase()
      );

      if (availableEntry) {
        this.availablestatus = '';
        this.bookinglist = [availableEntry];
      } else {
        this.availablestatus = 'Not Avialble';
        console.log('City not available or no slots left.');
      }
    }, 2000);
  }

  clear() {
    this.showAvailable = false;
    this.booking = {
      city: '',
      entryDate: '',
      exitDate: '',
    };
    this.availablestatus = '';
    this.bookinglist = [];
  }
}
