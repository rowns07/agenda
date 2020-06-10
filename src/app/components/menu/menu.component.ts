import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
  }

  openScheduleForm() {
    this.scheduleService.display = true;
  }

  teste(): boolean {
    if (this.scheduleService.display) {
      return this.scheduleService.display = false;
    }else{
      return this.scheduleService.display = true;
    };
  }

}
