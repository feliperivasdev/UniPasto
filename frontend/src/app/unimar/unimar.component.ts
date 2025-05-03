import { Component } from '@angular/core';

@Component({
  selector: 'app-unimar',
  standalone: false,
  templateUrl: './unimar.component.html',
  styleUrl: './unimar.component.css'
})
export class UnimarComponent {
  universidad: any; // No interface for now, using 'any'
  universidadId: string = ''; // Store the universidad ID

  constructor() { }

  ngOnInit(): void {
    // Get the ID from the route
    this.universidadId = 'unimar'; // Assuming your route parameter is named 'id'
    this.loadUniversidad();
  }

  loadUniversidad(): void {
    if (this.universidadId) {
      // Simulate fetching data
      this.universidad = {
        id: this.universidadId,
        name: 'Universidad del Mar',
        description: 'Description of Universidad del Mar'
      };
    }
  }
}
