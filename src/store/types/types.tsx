export interface Employee {
    id: number;
    divisi: string;
    jabatan: string;
    email:String;
    nama_lengkap:String;
  }
  
  export interface EmployeeState {
    employee: Employee[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  