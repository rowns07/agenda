import { Component, OnInit } from '@angular/core';
import { Schedules } from 'src/app/schedules';
import { ScheduleService } from 'src/app/services/schedule.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public listSchedules: Schedules[];
  public form: FormGroup;


  constructor(
    public scheduleService: ScheduleService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configForm();
    this.listContacts();
  }


  listContacts() {
    this.scheduleService.get().subscribe((contatos: Schedules[]) => {
      this.listSchedules = contatos
    });
  }

  configForm() {

    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl(''),
      endereco: new FormControl(''),

    })
  }

  saveForm() {
    this.scheduleService.save(this.form.value).subscribe(succes => {
      Swal.fire('', 'Adicionado com sucesso', 'success')
      this.cleanForm();
    });
  }

  deleteContact(id) {
    this.scheduleService.delete(id).subscribe(success => {
      Swal.fire('', 'Deletado com sucesso', 'success')

    });
  }

  cleanForm() {
    this.form.reset();
    this.scheduleService.display = false;
  }

}
