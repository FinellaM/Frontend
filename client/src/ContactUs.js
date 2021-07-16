const ContactUs = () => {
    return (
        <div className="container text-center">
            <h1>Contact Us</h1>
                <form class="form">
                    <label>Full Name<span class="form-required">*</span></label><br></br>
                        <input name="full_name" type="text" required></input><br></br>
                    <label>Business Name (Optional)</label><br></br>
                        <input name="business_name" type="text"></input><br></br>
                    <label>Email<span class="form-required">*</span></label><br></br>
                        <input name="email" type="email" required></input><br></br>
                    <label>Phone (Optional)</label><br></br>
                        <input name="phone" type="text"></input><br></br>
                    <label>Message<span class="form-required">*</span></label><br></br>
                        <textarea name="message" class="message-textarea" maxlength="1000" required></textarea><br></br>
                    <input type="submit" name="submit" value="Submit" class="contact-submit"></input>
                </form>
        </div>
    );
}
 
export default ContactUs;