import React from 'react';
import PropTypes from 'prop-types';

class FormField extends React.Component { 
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          onChange={this.props.onChange}
          value={this.props.value}
          type={this.props.type}
          name={this.props.name}
          required={this.props.required}
          pattern={this.props.pattern}
        />
      </div>  
  );
  }
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.string,
  pattern: PropTypes.string
}

FormField.defaultProps = {
  type: 'text',
  required: ''
}

export default FormField;