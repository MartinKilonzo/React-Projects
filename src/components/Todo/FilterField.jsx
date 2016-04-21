import React from 'react';
import {InputGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';

class FilterField extends React.Component {
  render() {
    return (
      <div>
        <InputGroup>
          <FormControl type="text" placeholder="Search Todos"></FormControl>
          <InputGroup.Button>
            <Button bsStyle="success" type="submit">
              <Glyphicon glyph="plus"></Glyphicon>
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

export default FilterField;
