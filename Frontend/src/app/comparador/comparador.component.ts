import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../allservices.service';

interface DetalleCosto {
  universidad: string;
  matricula: number;
  otros_costos: number;
}

interface DetalleItem {
  carrera_model: {
    nombre: string;
    universidad_model: {
      nombre: string;
    }
  };
  matricula: string;
  otros_costos: string;
}

@Component({
  selector: 'app-comparador',
  standalone: false,
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent implements OnInit {
  carrerasData: { [nombreCarrera: string]: DetalleCosto[] } = {};
  carrerasNombres: string[] = [];
  carreraSeleccionada: string | null = null;

  constructor(private costosService: AllservicesService) {}

  ngOnInit(): void {
    this.costosService.getDetalle().subscribe({
      next: (data: any) => {
        // Verificar si data es un array
        const items = Array.isArray(data) ? data : [data];
        const agrupado: { [nombreCarrera: string]: DetalleCosto[] } = {};

        items.forEach((item: DetalleItem) => {
          const nombreCarrera = item.carrera_model.nombre;
          const universidad = item.carrera_model.universidad_model.nombre;
          const matricula = parseFloat(item.matricula);
          const otros_costos = parseFloat(item.otros_costos);

          if (!agrupado[nombreCarrera]) {
            agrupado[nombreCarrera] = [];
          }

          agrupado[nombreCarrera].push({ universidad, matricula, otros_costos });
        });

        this.carrerasData = agrupado;
        this.carrerasNombres = Object.keys(agrupado);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    });
  }
}