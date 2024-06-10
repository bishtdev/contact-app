import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success('Contact Added Sucessfully')
      onClose()
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success('Contact Updated Sucessfully')
      onClose()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          isUpdate 
          ? updateContact(values, contact.id) 
          : addContact(values);
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
          <button type="submit" className="self-end h-30 w-[8rem] rounded-md font-mono bg-yellow mt-1 p-1 hover:bg-dark-yellow ">
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
