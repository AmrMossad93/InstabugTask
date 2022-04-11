export interface IEmployees {
  email: string;
  id: string;
  performance_index: number;
  position: number;
  start_date: Date;
  profile: IEmployeeProfile;
}

export interface IEmployeeProfile {
  about: string;
  address: string;
  avatar: string;
  name: string;
  location: IEmployeeProfileLocation;
}

export interface IEmployeeProfileLocation {
  lat: number;
  long: number;
}
