import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addManga, updateManga } from "../actions/contactsActions";

class ModalManga extends Component {
  state = {
    show: false,
    contactname: this.props.editMode ? this.props.MangaToUpdate.contactname : "",
    email: this.props.editMode ? this.props.MangaToUpdate.email : "",
    contactadress: this.props.editMode ? this.props.MangaToUpdate.contactadress : "",
  };
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    const newManga = {
      contactname: this.state.contactname,
      email: this.state.email,
      contactadress: this.state.contactadress,
    };
    this.props.addManga(newManga);
    this.setState({ show: false });
  };
  update = () => {
    const updatedManga = {
      contactname: this.state.contactname,
      email: this.state.email,
      contactadress: this.state.contactadress,
    };
    this.props.updateManga(this.props.MangaToUpdate._id, updatedManga);
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.editMode ? "Edit" : "Add new Contact"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Contact Name:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="contactname"
                  value={this.state.contactname}
                />
              </div>
              <div>
                <label>Contact Telephone:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="contactadress"
                  value={this.state.contactadress}
                />
              </div>
              <div>
                <label>Contact Email</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.props.editMode ? this.update : this.add}
            >
              {this.props.editMode ? "Edit" : "Add Contact"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addManga, updateManga })(ModalManga);