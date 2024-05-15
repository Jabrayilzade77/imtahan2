import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddEmployee() {
  return (
   <>
   <Formik
       initialValues={{ title: '', price: ''}}
       validationSchema={Yup.object({
        title: Yup.string()
           .required('Required'),
           price: Yup.string()
           .required('Required')
       })}
       onSubmit={(values, { setSubmitting }) => {

        async function getAllProducts() {

            const res = await fetch("http://localhost:3000/myapp/",{method:"post",
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(values)
        })
            const data =await res.json()
        }
        getAllProducts()
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default AddEmployee