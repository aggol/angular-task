import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeetingTypeComponent } from './components/meeting-type/meeting-type.component';
import { MeetingNameComponent } from './components/meeting-name/meeting-name.component';
import { DateAndTimeComponent } from './components/date-and-time/date-and-time.component';
import { LocationComponent } from './components/location/location.component';
import { InviteesBoardComponent } from './components/invitees-board/invitees-board.component';
import { InviteesGuestsComponent } from './components/invitees-guests/invitees-guests.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MeetingTypeComponent,
    MeetingNameComponent,
    DateAndTimeComponent,
    LocationComponent,
    InviteesBoardComponent,
    InviteesGuestsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
