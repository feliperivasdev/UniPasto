import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  private apiUrl = environment.apiUrl; // Base URL from environment

  constructor(private http: HttpClient) { }

  // Carrera Services
  getCarreras() {
    return this.http.get(`${this.apiUrl}/carreras`);
  }

  getCarreraById(id: string) {
    return this.http.get(`${this.apiUrl}/carreras/${id}`);
  }

  createCarrera(data: any) {
    return this.http.post(`${this.apiUrl}/carreras`, data);
  }

  updateCarrera(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/carreras/${id}`, data);
  }

  deleteCarrera(id: string) {
    return this.http.delete(`${this.apiUrl}/carreras/${id}`);
  }

  // Universidad Services
  getUniversidades() {
    return this.http.get(`${this.apiUrl}/universidades`);
  }

  getUniversidadById(id: string) {
    return this.http.get(`${this.apiUrl}/universidad/${id}`);
  }

  // Requisitos de Admisión Services
  getRequisitosAdmision() {
    return this.http.get(`${this.apiUrl}/requisitos_admision`);
  }

  getRequisitoAdmisionById(id: string) {
    return this.http.get(`${this.apiUrl}/requisitos_admision/${id}`);
  }

  createRequisitoAdmision(data: any) {
    return this.http.post(`${this.apiUrl}/requisitos_admision`, data);
  }

  updateRequisitoAdmision(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/requisitos_admision/${id}`, data);
  }

  deleteRequisitoAdmision(id: string) {
    return this.http.delete(`${this.apiUrl}/requisitos_admision/${id}`);
  }

  // Planes de Estudio Services
  getPlanesDeEstudio() {
    return this.http.get(`${this.apiUrl}/planes_de_estudio`);
  }

  getPlanDeEstudioById(id: string) {
    return this.http.get(`${this.apiUrl}/planes_de_estudio/${id}`);
  }

  createPlanDeEstudio(data: any) {
    return this.http.post(`${this.apiUrl}/planes_de_estudio`, data);
  }

  updatePlanDeEstudio(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/planes_de_estudio/${id}`, data);
  }

  deletePlanDeEstudio(id: string) {
    return this.http.delete(`${this.apiUrl}/planes_de_estudio/${id}`);
  }

  // Materia Services
  getMaterias() {
    return this.http.get(`${this.apiUrl}/materias`);
  }

  getMateriaById(id: string) {
    return this.http.get(`${this.apiUrl}/materias/${id}`);
  }

  createMateria(data: any) {
    return this.http.post(`${this.apiUrl}/materias`, data);
  }

  updateMateria(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/materias/${id}`, data);
  }

  deleteMateria(id: string) {
    return this.http.delete(`${this.apiUrl}/materias/${id}`);
  }

  // Costos Services
  getCostos() {
    return this.http.get(`${this.apiUrl}/costos`);


  }

  getDetalle(){
    return this.http.get(`${this.apiUrl}/costos/detalle`);
  }

  getCostoById(id: string) {
    return this.http.get(`${this.apiUrl}/costos/${id}`);
  }

  createCosto(data: any) {
    return this.http.post(`${this.apiUrl}/costos`, data);
  }

  updateCosto(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/costos/${id}`, data);
  }

  deleteCosto(id: string) {
    return this.http.delete(`${this.apiUrl}/costos/${id}`);
  }
}
