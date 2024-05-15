import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {  useParams } from 'react-router-dom';

function Update() {

    const [datas, setDatas] = useState(null)
    let { id } = useParams();

    useEffect(() => {
    getById()

      
    }, [])
    

    async function getById() {
        const res = await fetch("http://localhost:3000/myapp/"+id)
        const data =await res.json()
        setDatas(data)
        console.log(datas);
    }
  return (
   <>
   {datas && <Formik
       initialValues={{ title: datas.title, price: datas.price}}
       validationSchema={Yup.object({
        title: Yup.string()
           .required('Required'),
           price: Yup.string()
           .required('Required')
       })}
       onSubmit={(values, { setSubmitting }) => {

        async function getAllProducts() {

            const res = await fetch("http://localhost:3000/myapp/"+id,{method:"put",
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify({
                title:values.title,
                price:values.price
              })
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
     </Formik>}
   </>
  )
}

export default Update