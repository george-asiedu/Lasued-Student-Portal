import {Component,OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUserProfile} from '../../admin/store/admin.selector';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public today: Date = new Date();
  public name: string = '';
  public dob: Date | null = null;
  public address: string | null = 'N/A';
  public phone: string | null = 'N/A';
  public programme: string | null = 'N/A';
  public email: string = '';

  constructor(private store: Store) {}

  public ngOnInit() {
    const currentUser = this.store.selectSignal(selectUserProfile);
    const user = currentUser();
    if (user) {
      this.name = user.name;
      this.email = user.email;
      this.address = user.address;
      this.phone = user.phone;
      this.programme = user.programme;
      this.dob = user.dob;
    }
  }
}
