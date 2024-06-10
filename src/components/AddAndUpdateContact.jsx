import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          addContact(values)
        }}
      >
        <Form className="flex flex-col ">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border p-1 " />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="emial">Email</label>
            <Field type="email" name="email" className="h-10 border p-1 " />
          </div>
          <button className="self-end h-30 w-[8rem] rounded-md font-mono bg-yellow mt-1 p-1 hover:bg-dark-yellow ">
           {isUpdate ? 'Update': 'Add'} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
