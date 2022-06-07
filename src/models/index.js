// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Timesheet, Travelers, Projects, Employees, ProjectsEmployees } = initSchema(schema);

export {
  Timesheet,
  Travelers,
  Projects,
  Employees,
  ProjectsEmployees
};