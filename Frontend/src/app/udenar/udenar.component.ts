import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllservicesService } from '../allservices.service';

@Component({
  selector: 'app-udenar',
  standalone: false,
  templateUrl: './udenar.component.html',
  styleUrl: './udenar.component.css'
})
export class UdenarComponent {
  universidad: any; // No interface for now, using 'any'
  universidadId: string = ''; // Store the universidad ID

  constructor(
    private allServices: AllservicesService,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the ID from the route
    this.route.params.subscribe(params => {
      this.universidadId = params['id']; // Assuming your route parameter is named 'id'
      this.loadUniversidad();
    });
  }

  loadUniversidad(): void {
    if (this.universidadId) {
      this.allServices.getUniversidadById(this.universidadId).subscribe(
        data => {
          this.universidad = data;
        },
        error => {
          console.error('Error fetching universidad:', error);
        }
      );
    }
  }
}
