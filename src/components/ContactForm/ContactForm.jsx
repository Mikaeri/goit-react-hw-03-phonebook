import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    const { addContact } = this.props;
    const { name, number } = values;

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="number">Number:</label>
            <Field type="tel" id="number" name="number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
