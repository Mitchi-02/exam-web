import { Component } from '@angular/core';
import { Item } from '../../../types';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-tem',
  standalone: true,
  imports: [],
  templateUrl: './oneItem.component.html',
  styleUrl: './oneItem.component.css',
})
export class OneItemComponent {
  data: Item | null = null;

  constructor(
    private itemService: ItemsService,
    private route: ActivatedRoute
  ) {
    this.itemService
      .show(route.snapshot.paramMap.get('id') ?? '')
      .subscribe((response) => {
        this.data = response.data;
      });
  }
}
