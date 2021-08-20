import { useState, useEffect } from "react";

const ContactUs = () => {

    useEffect(() => {

        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);

    const [nameFull, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [phoneNo, setPhone] = useState('');
    const [messageTxt, setMessage] = useState('');
    const [file, setFile] = useState('');
    const [isPending, setIsPending] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        const contactDetail = { 
            fullName: nameFull,
            businessName: business,
            email: emailAddress,
            phone: phoneNo,
            message: messageTxt,
            attachment: file,
        };

        setIsPending(true);
        
        fetch('/message', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactDetail)

        }).then(() => {
            console.log('contact form submitted!');
            setIsPending(false);
        })
    }

    return (
        <div className="container-fluid">
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left">
                    <h1 className="pageTitle">Contact Us</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} />
                </div>
            </div>
            <div className="row contact-container text-center">
                <div className="col-lg-8 col-md-9 col-sm-12">
                    <div className="card m-auto col-12 contact-card" style={{
                        boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                    }}>
                        <p className="col-10 col-lg-8 contact-desc">We always like to hear from customers or potential stockists, so if you'd like to get in contact with us, fill out the form below or use one of the alternate contact methods listed! </p>
                        <form className="form" onSubmit={formSubmit}>
                            <label className="form-field">Full Name<span className="form-required">*</span></label><br></br> {/* Label for Name form field with styled asterix to visually show required fields */}
                            <input name="full_name" type="text" className="form-input col-9 col-lg-7" required value={nameFull} onChange={(e) => setName(e.target.value)}/><br></br> {/* Text input field for Name, set to required */}
                            <label className="form-field">Business Name (Optional)</label><br></br> {/* Label for Business name field, which is optional */}
                            <input name="business_name" type="text" className="form-input col-9 col-lg-7" value={business} onChange={(e) => setBusiness(e.target.value)}/><br></br> {/* Text input for business name, not required */}
                            <label className="form-field">Email<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                            <input name="email" type="email" className="form-input col-9 col-lg-7" required value={emailAddress} onChange={(e) => setEmail(e.target.value)}/><br></br> {/* email input for email, set to required */}
                            <label className="form-field">Phone (Optional)</label><br></br>{/* Label for phone form field, optional */}
                            <input name="phone" type="text" className="form-input col-9 col-lg-7" value={phoneNo} onChange={(e) => setPhone(e.target.value)}/><br></br> {/* Text input for phone number (using text instead of number to allow for symbols for country/state codes etc, better UX) */}
                            <label className="form-field">Message<span className="form-required">*</span></label><br></br> {/* Label for message form field, with styled asterix to visually show required fields */}
                            <textarea name="message" className="message-textarea col-9 col-lg-7" maxlength="1000" required value={messageTxt} onChange={(e) => setMessage(e.target.value)}/><br></br> {/* Textare for message input, 1000 character limit, set to required */}
                            <input type="file" name="filename" className="form-input file-upload col-9 col-lg-7" value={file} onChange={(e) => setFile(e.target.value)}/><br></br> {/* File upload button, not required. */}
                            { !isPending && <input type="submit" name="submit" value="Submit" className="form-submit btn btn-light col-3"/>} {/* Submit button.*/}
                            { isPending && <input type="submit" name="submitting" value="Submitting..." className="form-submit btn btn-secondary col-3" aria-label="disabled"  tabIndex="-5" disabled> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /></input>} {/* Submit button when submission is in progress. */}
                            {/*Details that will be submitted */}
                        </form>

                        <div className="other-contact col-9"> {/* Other contact information */}
                            <h2>Other ways to contact us</h2><br></br>
                            <div className="text-left">
                                <p>Email: <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a></p>
                                <p>Phone: <a href="tel:987-654-4210">987 654 3210</a></p>
                                <p>Fax: 987 654 3121</p>
                                <p>Address: Feel Good Drinks, Lyme Regis, Dorset DT7 3LS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;