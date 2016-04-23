import React from 'react';
import {
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  DropdownButton,
  MenuItem,
  Button,
  Glyphicon
} from 'react-bootstrap';

// import {dateField, dueField, taskField, projectField} from './FormFields.js';
import {textFields, dropdownFields} from './FormFields.js';

class TextFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.updateForm(event.target.value, this.props.field);
  }
  render() {
    return (
      <FormGroup controlId={this.props.controlId}>
        <InputGroup>
          <InputGroup.Addon>{this.props.fieldTitle}</InputGroup.Addon>
          <FormControl type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} required/>
        </InputGroup>
      </FormGroup>
    );
  }
}

class DropDownFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value.toString()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.toString()});
    this.props.updateForm(event, this.props.field);
  }
  render() {
    return (
      <FormGroup controlId={this.props.controlId}>
        <InputGroup>
          <InputGroup.Addon>{this.props.fieldTitle}</InputGroup.Addon>
          <DropdownButton id={this.props.dropdownId} title={this.state.value} onSelect={this.handleChange}>
            {this.props.options.map(function(option, key) {
              return <MenuItem key={key} eventKey={key}>{option}</MenuItem>
            })}
          </DropdownButton>
        </InputGroup>
      </FormGroup>
    );
  }
}

class NewTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  updateForm(value, field) {
    this.state.value[field] = value;
  }
  submitForm(event) {
    event.preventDefault();
    console.log(this.state.value);
  }
  render() {
    return (
      <Form inline onSubmit={this.submitForm}>
        {textFields.map(function(field, key) {
          return <TextFieldComponent key={key} controlId={field.controlId} field={field.field} fieldTitle={field.fieldTitle} placeholder={field.placeholder} value={this.state.value[field.field]} updateForm={this.updateForm}/>
        }.bind(this))}
        {dropdownFields.map(function(field, key) {
          return <DropDownFieldComponent key={key} controlId={field.controlId} dropdownId={field.dropdownId} field={field.field} fieldTitle={field.fieldTitle} options={field.options} value={this.state.value[field.field]} updateForm={this.updateForm}/>
        }.bind(this))}
        <Button bsStyle="success" type="submit">Create</Button>
      </Form>
    );
  }
}

let values = {};
textFields.forEach(function(property) {
  values[property.field] = property.value;
});
dropdownFields.forEach(function(property) {
  values[property.field] = property.value;
});

NewTodoComponent.defaultProps = {
  value: values
};

export default NewTodoComponent;
