const ContactUs = () => {
    return (
        <div className="container text-center">
            <h1>Contact Us</h1><br></br>
                <p>We always like to hear from customers or potential stockists, so if you'd like to get in contact with us, fill out the form below or use one of the alternate contact methods listed! </p>
                <form className="form">
                    <label className="form-field">Full Name<span className="form-required">*</span></label><br></br>
                        <input name="full_name" type="text" className="form-input" required></input><br></br>
                    <label className="form-field">Business Name (Optional)</label><br></br>
                        <input name="business_name" type="text" className="form-input"></input><br></br>
                    <label className="form-field">Email<span className="form-required">*</span></label><br></br>
                        <input name="email" type="email" className="form-input" required></input><br></br>
                    <label className="form-field">Phone (Optional)</label><br></br>
                        <input name="phone" type="text" className="form-input"></input><br></br>
                    <label className="form-field">Message<span className="form-required">*</span></label><br></br>
                        <textarea name="message" className="message-textarea" maxlength="1000" required></textarea><br></br>
                    <input type="file" name="filename" className="form-input file-upload"></input><br></br>
                    <input type="submit" name="submit" value="Submit" className="form-submit"></input>
                </form>

                <div className="other-contact">
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