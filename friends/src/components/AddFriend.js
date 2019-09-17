import React, {useState, useEffect} from 'react';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = ({ status }) => {
  const [friend, setFriend] = useState([])
  console.log(friend);

  useEffect(() =>{
    if (status) {
      setFriend(friend => status)
    }
  },[status])

  return (
    <div>
      <h2>Add Friend!</h2>
      <Form>
          <Field
           type="text"
           name="name" 
           placeholder="Name" />
          <Field 
            type="number" 
            name="age" 
            placeholder="Age" />
          <Field
            type="text" 
            name="email" 
            placeholder="Email" />
          <button type="submit">Add</button>
      </Form>
    </div>
  )
}

const FormikAddFriend = withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || '',
      age: age || '',
      email: email || ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required(),
    age: Yup.number()
      .required(),
    email: Yup.string()
      .email()
      .required()
  }),

  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post('/friends', values)
      .then(res => {
        console.log(res);
        setStatus(res.data)
      })
  }
})(AddFriend)

export default FormikAddFriend;