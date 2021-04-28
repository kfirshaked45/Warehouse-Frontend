import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [FormName, SetFormName] = useState("");
  const [FormQuantity, SetFormQuantity] = useState("");
  const [FormLocation, SetFormLocation] = useState("");
  const [FormDate, SetFormDate] = useState("");

  const handleChange = (event) => {
    SetFormName(event.target.value);
  };
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleSubmit = () => {
    const data = {
      name: FormName,
      quantity: FormQuantity,
      location: FormLocation,
      date: FormDate,
    };
    fetch("http://localhost:5000/newdata", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Item Information Form:</DialogTitle>
      <List>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Quantity:
          <input
            type="text"
            name="name"
            onChange={(e) => SetFormQuantity(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Location:
          <input
            type="text"
            name="name"
            onChange={(e) => SetFormLocation(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Date:
          <input
            type="text"
            name="name"
            onChange={(e) => SetFormDate(e.target.value)}
          />
        </label>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </List>
    </Dialog>
  );
}

function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Click To Add
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default SimpleDialogDemo;
