import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { colRef } from "./Firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

export default function SendMail() {
    const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    addDoc(colRef, {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
    })

    dispatch(closeSendMessage())
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", {
            required: true,
          })}
          name="to"
          type="email"
          placeholder="To"
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", {
            required: true,
          })}
        />
        {errors.to && <p className="sendMail__error">Subject is Required</p>}
        <input
          name="message"
          type="text"
          placeholder="Message Body"
          className="sendMail__message"
          {...register("message", {
            required: true,
          })}
        />
        {errors.to && <p className="sendMail__error">Message is Required</p>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
