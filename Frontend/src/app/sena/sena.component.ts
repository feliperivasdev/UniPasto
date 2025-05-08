import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../allservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sena',
  standalone: false,
  templateUrl: './sena.component.html',
  styleUrl: './sena.component.css'
})
export class SenaComponent implements OnInit {
  universidad: any;
  universidadId: string = 'sena'; // ID de la universidad a cargar

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
