import React from "react";
import { TextArea } from "react-form";

export default class FormField extends React.Component {
    constructor(props){
        super(props)
    }

    validate = value => ({});

    render() {
        return (
          <TextArea
            field={this.props.fieldLabel.trim(" ")}
            id={this.props.id}
            className={this.props.className}
            placeholder={this.props.fieldLabel}
            required="true"
          />
        )
    }
}
