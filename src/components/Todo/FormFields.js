const dateField = {
  field: 'date',
  controlId: 'formInlineDateCreated',
  fieldTitle: 'Date',
  placeholder: new Date().toDateString()
};

const dueField = {
  field: 'due',
  controlId: 'formInlineDateDue',
  fieldTitle: 'Due',
  placeholder: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toDateString()
};

const taskField = {
  field: 'task',
  controlId: 'formInlineTask',
  fieldTitle: 'Task',
  placeholder: 'Build a Robot'
};

const projectField = {
  field: 'project',
  controlId: 'formInlineProject',
  fieldTitle: 'Project',
  placeholder: 'Robots \'R\' Us'
};

const weatherField = {
  field: 'weather',
  controlId: 'formInlineWeather',
  fieldTitle: 'Project',
  placeholder: 'Robots \'R\' Us'
};

const textFields = [
  dateField,
  dueField,
  taskField,
  projectField
];
export {
  textFields
};

const complexity = {
  field: 'complexity',
  controlId: 'formInlineComplexity',
  dropdownId: 'complexityDropdown',
  fieldTitle: 'Complexity',
  options: ['minimal', 'minor', 'moderate', 'complex', 'extreme'],
  value: 'complex'
};

const importance = {
  field: 'importance',
  controlId: 'formInlineImportance',
  dropdownId: 'importanceyDropdown',
  fieldTitle: 'Importance',
  options: ['minimal', 'minor', 'moderate', 'important', 'extreme'],
  value: 'important'
};

const dropdownFields = [complexity, importance];
export {
  dropdownFields
};
