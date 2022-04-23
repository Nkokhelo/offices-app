export interface Office {
  id: string;
  name: string;
  email : string;
  phone : string;
  staff: number;
  capacity : number;
  address : string;
  color : string;
  staffList : Array<Staff>;
}


export interface Staff {
  name : string;
  lastname : string;
  avatar : number;
}

