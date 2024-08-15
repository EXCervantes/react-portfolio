function ContactForm(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="contact"
            type="text"
            className="form-control"
            placeholder="Search For a Movie"
            id="contact"
          />
          <br />
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-primary"
            type="submit"
          >
            Contact
          </button>
        </div>
      </form>
    );
  }
  
  export default ContactForm;