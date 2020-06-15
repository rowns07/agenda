import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Schedules } from 'src/app/model/schedules';
import { ScheduleService } from 'src/app/services/schedule.service';
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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configForm();
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


  cleanForm() {
    this.form.reset();
    this.scheduleService.display = false;
  }

}
