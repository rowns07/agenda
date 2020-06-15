import { Component, OnInit } from '@angular/core';
import { Schedules } from 'src/app/model/schedules';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {

  public listSchedules: Schedules[];


  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.listContacts()
  }

  listContacts() {
    this.scheduleService.get().subscribe((contatos: Schedules[]) => {
      this.listSchedules = contatos
    });
  }

  deleteContact(id) {
    this.scheduleService.delete(id).subscribe(success => {
      Swal.fire('', 'Deletado com sucesso', 'success')
      this.listContacts();
    });
  }
}
