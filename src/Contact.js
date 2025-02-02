import React, {Component} from 'react';
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap';
import * as emailjs from 'emailjs-com'


class Contact extends Component {
    state = {
        name: '',
        email: '',
        contactReason: '',
        message: '',
        backgroundImage: this.getBackgroundImage(null),
        placeholder: 'Enter message here'
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, contactReason, message } = this.state
        let templateParams = {
        from_name: name,
        reply_to: email,
        to_name: 'ohull1@binghamton.edu',
        contact_reason: contactReason,
        message: message,
        }
        emailjs.send(
        'service_tbpoeii',
        'template_ukewuic',
        templateParams,
        'user_HahYBNSEmepo8ZNhn74Vf'
        )
        this.resetForm()

    }
    resetForm() {
        this.setState({
        name: '',
        email: '',
        contactReason: '',
        message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    setBackground = (param, e) => {
        this.handleChange(param, e);
        this.setState({backgroundImage : this.getBackgroundImage(e.target.value),
                        placeholder: this.getPlaceholder(e.target.value)})
    }

    getBackgroundImage(value){
        switch(value){
            case 'Paint Ur Pup':
                return 'https://u.cubeupload.com/kaleighllama/pypbg.jpg';
            case 'Animal Care Inquiry':
                return 'https://u.cubeupload.com/kaleighllama/animalcarebg.jpg';
            case 'Request Painting':
                return 'https://u.cubeupload.com/kaleighllama/requestpaintingbg.jpg';
            default: 
                return 'https://u.cubeupload.com/kaleighllama/llama.jpg';
        } 
    }
    getPlaceholder(value){
        switch(value){
            case 'Animal Care Inquiry':
                return 'Please include type/number of animals, your location, and dates you need care';
            case 'Paint Ur Pup':
            case 'Request Painting':
                return 'Include a link to the image you want painted if possible';
            default: 
                return 'Enter message here';
        } 
    }

    render() {
        return(

        <Form  onSubmit={this.handleSubmit.bind(this)}>

            <div className="first-container bg-img-full contact-container" style={{backgroundImage : `url(${this.state.backgroundImage})`}}>

                        <Col className="primary-color rounded my-auto offset-md-2 offset-lg-3 p-3 p-md-5 opacity-4 contact-card" sm={12} md={8} lg={6}>
                        <h1 className="mb-4">Contact</h1>

                            <FormGroup>
                                <Row>
                                    <Col sm={6} className="mt-2">
                                    <Form.Control   
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange.bind(this, 'name')}
                                        placeholder="Name"
                                    />
                                    </Col>
                                    <Col sm={6} className="mt-2">
                                    <Form.Control 
                                        type="email" 
                                        name="email"
                                        placeholder="Email" 
                                        value={this.state.email}
                                        onChange={this.handleChange.bind(this, 'email')}/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Form.Control 
                                    as="select"
                                    name="contactReason"
                                    className="text-primary"
                                    value={this.state.contactReason}
                                    onChange={this.setBackground.bind(this, 'contactReason')}
                                >
                                    <option>Reason For Contacting</option>
                                    <option>Request Painting</option>
                                    <option>Animal Care Inquiry</option>
                                    <option>Paint Ur Pup</option>
                                </Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Control 
                                    rows={6} 
                                    as="textarea" 
                                    placeholder={this.state.placeholder} 
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange.bind(this, 'message')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button variant="primary" type="submit" id="send-email-button"> 
                                    Submit
                                </Button>
                            </FormGroup>
                        </Col>

            </div>
            </Form>

        );
    };
};
  
export default Contact;