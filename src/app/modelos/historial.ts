export interface Seccion {
  id?: number;
  nombreSeccion: string;

}
export interface Alumno {
  rut: string;
  nombreAlumno: string;
  ApellidoAlumno: string;
  edad: number;
  seccion: Seccion;
}
export interface RegistroHistorial {
  fechaHora: Date
  alumno: Alumno;
}
