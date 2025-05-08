import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../allservices.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ucesmag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ucesmag.component.html',
  styleUrl: './ucesmag.component.css'
})
export class UcesmagComponent implements OnInit {
  universidad: any;
  universidadId: string = 'unicesmag'; // ID de la universidad a cargar

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
