import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlined from "@material-ui/icons/LabelImportantOutlined";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

export default function EmailRow({ title, subject, description, time, id }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
      dispatch(selectMail({
        id, title, subject, description, time
      }))  
      navigate('/mail')
    }
    
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>

      <div className="emailRow__time">
          <p>{time}</p>
      </div>
    </div>
  );
}
