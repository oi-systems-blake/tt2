import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TimesheetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TravelersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectsEmployeesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Timesheet {
  readonly id: string;
  readonly Clock_in?: string | null;
  readonly Clock_out?: string | null;
  readonly Date?: string | null;
  readonly employeesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Timesheet, TimesheetMetaData>);
  static copyOf(source: Timesheet, mutator: (draft: MutableModel<Timesheet, TimesheetMetaData>) => MutableModel<Timesheet, TimesheetMetaData> | void): Timesheet;
}

export declare class Travelers {
  readonly id: string;
  readonly Display_Name?: string | null;
  readonly Status?: string | null;
  readonly Fab_Crew?: string | null;
  readonly Projects?: Projects | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly travelersProjectsId?: string | null;
  constructor(init: ModelInit<Travelers, TravelersMetaData>);
  static copyOf(source: Travelers, mutator: (draft: MutableModel<Travelers, TravelersMetaData>) => MutableModel<Travelers, TravelersMetaData> | void): Travelers;
}

export declare class Projects {
  readonly id: string;
  readonly Status?: string | null;
  readonly Display_name?: string | null;
  readonly Employees?: (ProjectsEmployees | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Projects, ProjectsMetaData>);
  static copyOf(source: Projects, mutator: (draft: MutableModel<Projects, ProjectsMetaData>) => MutableModel<Projects, ProjectsMetaData> | void): Projects;
}

export declare class Employees {
  readonly id: string;
  readonly First_Name?: string | null;
  readonly Last_Name?: string | null;
  readonly Employee_ID?: number | null;
  readonly projectss?: (ProjectsEmployees | null)[] | null;
  readonly Status?: string | null;
  readonly Fab_Crew?: string | null;
  readonly Normal_Start_Time?: string | null;
  readonly Timesheets?: (Timesheet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Employees, EmployeesMetaData>);
  static copyOf(source: Employees, mutator: (draft: MutableModel<Employees, EmployeesMetaData>) => MutableModel<Employees, EmployeesMetaData> | void): Employees;
}

export declare class ProjectsEmployees {
  readonly id: string;
  readonly projects: Projects;
  readonly employees: Employees;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectsEmployees, ProjectsEmployeesMetaData>);
  static copyOf(source: ProjectsEmployees, mutator: (draft: MutableModel<ProjectsEmployees, ProjectsEmployeesMetaData>) => MutableModel<ProjectsEmployees, ProjectsEmployeesMetaData> | void): ProjectsEmployees;
}