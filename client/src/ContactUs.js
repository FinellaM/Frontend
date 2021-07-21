const ContactUs = () => {
    return (
        <div className="container text-center">
            <h1>Contact Us</h1><br></br> {/* Page title */}
                <p>We always like to hear from customers or potential stockists, so if you'd like to get in contact with us, fill out the form below or use one of the alternate contact methods listed! </p>
                <form className="form">
                    <label className="form-field">Full Name<span className="form-required">*</span></label><br></br> {/* Label for Name form field with styled asterix to visually show required fields */}
                        <input name="full_name" type="text" className="form-input" required></input><br></br> {/* Text input field for Name, set to required */}
                    <label className="form-field">Business Name (Optional)</label><br></br> {/* Label for Business name field, which is optional */}
                        <input name="business_name" type="text" className="form-input"></input><br></br> {/* Text input for business name, not required */}
                    <label className="form-field">Email<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                        <input name="email" type="email" className="form-input" required></input><br></br> {/* email input for email, set to required */}
                    <label className="form-field">Phone (Optional)</label><br></br>{/* Label for phone form field, optional */}
                        <input name="phone" type="text" className="form-input"></input><br></br> {/* Text input for phone number (using text instead of number to allow for symbols for country/state codes etc, better UX) */}
                    <label className="form-field">Message<span className="form-required">*</span></label><br></br> {/* Label for message form field, with styled asterix to visually show required fields */}
                        <textarea name="message" className="message-textarea" maxlength="1000" required></textarea><br></br> {/* Textare for message input, 1000 character limit, set to required */}
                    <input type="file" name="filename" className="form-input file-upload"></input><br></br> {/* File upload button, not required. */}
                    <input type="submit" name="submit" value="Submit" className="form-submit"></input> {/* Submit button. Form not functioning yet. */}
                </form>

                <div className="other-contact"> {/* Other contact information */}
                    <h2>Other ways to contact us</h2>
                        <p>Email: contact@feelgooddrinks.com</p>
                        <p>Phone: 987 654 321</p>
                        <p>Fax: 987 654 312</p>
                        <p>Address: Feel Good Drinks, Lyme Regis, Dorset DT7 3LS</p>
                </div>
        </div>
    );
}
 
export default ContactUs;