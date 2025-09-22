import { Component, OnInit } from '@angular/core';
import { Available, AVAILABLE_LIST } from '../../available';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HISTORY_LIST, HistoryTable } from '../../historytable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings implements OnInit {
  constructor(private router: Router) {}
  availablelist: Available[] = [];
  historylist: HistoryTable[] = [];
  availablestatus: string = '';
  showAvailable = false;
  confirmstatus = false;
  loadingstatus = false;
  confirm_msg: string = '';
  bookinglist: any[] = [];
  ngOnInit(): void {
    this.availablelist = AVAILABLE_LIST;
    this.historylist = HISTORY_LIST;
    console.log(this.historylist);
  }
  booking: {
    city: string;
    slots: number | null;
    days: number | null;
  } = {
    city: '',
    slots: null,
    days: null,
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
        this.availablestatus = 'Not Available';
        console.log('City not available or no slots left.');
      }
    }, 2000);
  }
  clear() {
    this.showAvailable = false;
    this.booking = {
      city: '',
      slots: null,
      days: null,
    };
    this.availablestatus = '';
    this.bookinglist = [];
  }

  showPopup = false;
  selectedSlot: any = null;

  openPopup(slot: any) {
    this.selectedSlot = slot;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedSlot = null;
  }

  changestatus() {
    this.confirmstatus = true;
  }
  Confirm() {
    this.confirm_msg = 'Loading...';

    setTimeout(() => {
      this.confirm_msg = 'Successfully Booked';
    }, 2000);

    console.log(
      'Booking Details',
      this.booking.city,
      this.booking.slots,
      this.booking.days,
      this.bookinglist[0].imagepath
    );
    console.log(
      'Rs:',
      this.bookinglist[0].rs * Number(this.booking.slots) * Number(this.booking.days)
    );
    const newentry: HistoryTable = {
      city: this.booking.city,
      numberofslots: Number(this.booking.slots),
      totalrs: this.bookinglist[0].rs * Number(this.booking.slots) * Number(this.booking.days),
      active: true,
      imagepath: this.bookinglist[0].imagepath,
    };
    this.historylist.push(newentry);
    console.log('History List:', this.historylist);
    const availableEntry = this.availablelist.find(
      (a) => a.city.toLowerCase() === this.booking.city.toLowerCase()
    );

    if (availableEntry) {
      availableEntry.numberofslots -= Number(this.booking.slots);
      if (availableEntry.numberofslots < 0) {
        availableEntry.numberofslots = 0;
      }
    }
    this.booking.city = '';
    this.booking.slots = null;
    this.booking.days = null;
    this.clear()
  }
  ClearAll() {
    this.confirmstatus = false;
    this.confirm_msg = '';
    this.loadingstatus = false;
  }
  MoveLocation(): void {
    this.router.navigate(['/locations']);
  }
}

