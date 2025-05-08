import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllservicesService } from '../allservices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unimar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unimar.component.html',
  styleUrl: './unimar.component.css'
})
export class UnimarComponent implements OnInit {
  universidad: any;
  universidadId: string = 'umariana'; // ID de la universidad a cargar

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
