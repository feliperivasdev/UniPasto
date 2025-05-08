import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllservicesService } from '../allservices.service';

@Component({
  selector: 'app-sanmartin',
  standalone: false,
  templateUrl: './sanmartin.component.html',
  styleUrl: './sanmartin.component.css'
})
export class SanmartinComponent implements OnInit {
  universidad: any;
  universidadId: string = 'sanmar'; // ID de la universidad a cargar

  constructor(
    private route: ActivatedRoute,
    private allServices: AllservicesService
  ) {}

  ngOnInit(): void {
    // Obtener ID desde la URL
    
    this.loadUniversidad();
  }

  loadUniversidad(): void {
    if (this.universidadId) {
      this.allServices.getUniversidadById(this.universidadId).subscribe({
        next: (data) => {
          this.universidad = data;
        },
        error: (err) => {
          console.error('Error al cargar la universidad:', err);
        }
      });
    }
  }
}
