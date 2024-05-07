import { Component } from '@angular/core';
import { ItemPost } from '../../../types';
import { ItemsService } from '../items.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './createItem.component.html',
  styleUrl:  './createItem.component.css',
})
export class CreateItemComponent {
  f2 = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
  });
  get name() {
    return this.f2.get('name');
  }
  get description() {
    return this.f2.get('description');
  }

  constructor(private itemService: ItemsService) {}

  onSubmit() {
    this.itemService
      .store({
        name: this.f2.value.name ?? '',
        description: this.f2.value.description ?? '',
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
