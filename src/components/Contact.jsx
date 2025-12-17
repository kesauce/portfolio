import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
	const [state, handleSubmit] = useForm("xgvggvpl");

	return (
		<section className='main-content contact'>
			<h1>Get In Touch</h1>
			<h6>Open to internships and roles!</h6>
			<form className='contact-form' onSubmit={handleSubmit}>
				<h3><FontAwesomeIcon icon={faEnvelope} />Email Me</h3>
				<input
					id="name"
					type="text"
					name="name"
					placeholder='Name'
				/>
				<ValidationError
					prefix="Name"
					field="name"
					errors={state.errors}
				/>
				<input
					id="email"
					type="email"
					name="email"
					placeholder='Email'
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
				<textarea
					id="message"
					name="message"
					placeholder='Message'
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<button className='submit-button' type="submit" disabled={state.submitting}>Submit</button>
			</form>
			{
				state.succeeded ? <h3>Thanks! I'll get back to you as soon as I can.</h3> : undefined
			}
			<div className='links'>
				<a className='social-link' href='https://github.com/kesauce' target="_blank" rel="noopener noreferrer"><h3><FontAwesomeIcon icon={faGithub} /> Github</h3></a>
				<a className='social-link' href='https://www.linkedin.com/in/alexis-ma%C3%B1osca-7b015a354/' target="_blank" rel="noopener noreferrer"><h3><FontAwesomeIcon icon={faLinkedin} />LinkedIn</h3></a>
			</div>
		</section>
	)
}