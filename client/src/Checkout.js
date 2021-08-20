import { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CardSection from "./components/CardSection";

const Checkout = () => {

    useEffect(() => {

        document.getElementById("myCart").style.width = "0";
        document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";

    }, []);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            // Show error to your customer.
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            stripeTokenHandler(result.token);
            // console.log(result);
        }
    };

    function stripeTokenHandler(token) {
        const paymentData = { 
            stripeToken: token.id,
            userName: fullName,
            userEmail: email,
            userNumber: phone,
            address: address
        };
        console.log(paymentData);

        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData),
        });
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <label className="form-field">Full Name<span className="form-required">*</span></label><br></br> {/* Label for Name form field with styled asterix to visually show required fields */}
                        <input name="full_name" type="text" className="form-input col-9 col-lg-7" required value={fullName} onChange={(e) => setFullName(e.target.value)}></input><br></br> {/* Text input field for Name, set to required */}
                        <label className="form-field">Email<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                        <input name="email" type="email" className="form-input col-9 col-lg-7" required value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br> {/* email input for email, set to required */}
                        <label className="form-field">Address<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                        <input name="address" type="text" className="form-input col-9 col-lg-7" required value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br> {/* Text input for business name, not required */}
                        <label className="form-field">Phone<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                        <input name="phone" type="text" className="form-input col-9 col-lg-7" required value={phone} onChange={(e) => setPhone(e.target.value)}></input><br></br> {/* Text input for phone number (using text instead of number to allow for symbols for country/state codes etc, better UX) */}
                        <CardSection />
                    </div>
                    <div className="col-12">
                        <button disabled={!stripe}>Confirm order</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Checkout;