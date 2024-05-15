import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  alertService = inject(AlertService)

}
