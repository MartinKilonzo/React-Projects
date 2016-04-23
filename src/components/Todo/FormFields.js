const dateField = {
  field: 'date',
  controlId: 'formInlineDateCreated',
  fieldTitle: 'Date',
  placeholder: new Date().toDateString()
};
// export {dateField};

const dueField = {
  field:'due',
  controlId: 'formInlineDateDue',
  fieldTitle: 'Due',
  placeholder: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toDateString()
};
// export {dueField};

const taskField = {
  field: 'task',
  controlId: 'formInlineTask',
  fieldTitle: 'Task',
  placeholder: 'Build a Robot'
};
// export {taskField};

const projectField = {
  field: 'project',
  controlId: 'formInlineProject',
  fieldTitle: 'Project',
  placeholder: 'Robots \'R\' Us'
};
// export {projectField};

const TextFields = [
  dateField,
  dueField,
  taskField,
  projectField
];
export {
  TextFields
};

const complexity = {
  field: 'complexity',
  controlId: 'formInlineComplexity',
  dropdownId: 'complexityDropdown',
  fieldTitle: 'Complexity',
  options: [0, 1, 2, 3, 4],
  value: 0
};

const importance = {
  field: 'importance',
  controlId: 'formInlineImportance',
  dropdownId: 'importanceyDropdown',
  fieldTitle: 'Importance',
  options: [0, 1, 2, 3],
  value: 0
};

const DropdownFields = [complexity, importance];
export {
  DropdownFields
};
