import { Typography, Card, CardBody, Input, Textarea, Button } from "@material-tailwind/react";
import {
  MapIcon, PhoneIcon, EnvelopeIcon
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import axios from "axios";
import { useState } from "react";

export function ContactUs() {
const [post, setPost] = useState({
      fullName: '',
      phoneNumber: '',
      email: '',
      message: ''
  })
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)


  const {fullName, phoneNumber, email, message} = post

  //handle controlled input fields
  const handleInput = (event) => {
      event.preventDefault();
      setPost({...post, [event.target.name]: event.target.value})
  }

  //handle form submit
  const handleSubmit = async(event)  => {
    event.preventDefault()
    setIsLoading(true)
    // const errors = validate(post);
    try {
      console.log("are we hearing...")
      const response = axios.post('https://safe-hands-8aabe3ab7b5b.herokuapp.com/api/contact-us', {...post}, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setIsLoading(false);
       setPost({
      fullName: '',
      phoneNumber: '',
      email: '',
      message: ''
  })
      
      if(response.status !== 200) {
        throw new Error("Network error was not ok")
      }
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setIsLoading(false)
    }
   
  }

  return (
    <>
      <section className="relative block h-[50vh] bg-gray-200">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/lady-boy-contact.jpg')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="relative flex justify-center items-center h-full">
          <Typography variant="h1" className="text-white">Contact Us</Typography>
        </div>
      </section>

      <section className="relative bg-white py-8 px-[20%]">
        <div className="text-center mb-10">
          <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Get in Touch</Typography>
          <Typography className="font-normal text-blue-gray-500">
            We would love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </Typography>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <Card className="h-full">
              <CardBody>
                <div className="flex items-center mb-4">
                  <MapIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                  <Typography variant="h3" className="font-bold" color="blue-gray">Our Address</Typography>
                </div>
                <Typography className="font-normal text-blue-gray-500 mb-2">
                  No 5 Akperan-Otshi Crescent,
                  <br />
                  Works & Housing Estate,
                  <br />
                  Abuja, FCT
                </Typography>
                <div className="flex items-center mb-4">
                  <PhoneIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                  <Typography className="font-normal text-blue-gray-500">+234 7080972110</Typography>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                  <Typography className="font-normal text-blue-gray-500">info@safehands.com</Typography>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="w-full lg:w-3/5">
            <Card className="h-full">
              <CardBody>
                <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">Contact Form</Typography>
                <form>
                  <div className="mb-4">
                    <Input type="text" name="fullName" size="lg" label="Full Name" value={fullName} onChange={handleInput} />
                  </div>
                  <div className="mb-4">
                    <Input type="email" name="email" value={email} size="lg" onChange={handleInput} label="Email Address" />
                  </div>
                  <div className="mb-4">
                    <Input type="text" size="lg" name="phoneNumber" value={phoneNumber} label="Phone Number" onChange={handleInput} />
                  </div>
                  <div className="mb-4">
                    <Textarea size="lg" name="message" onChange={handleInput} value={message} label="Message" />
                  </div>
                  <Button variant="gradient" size="lg" className="mt-8"  onClick={handleSubmit} fullWidth>
                    {isLoading ? "Loading..." : "Send Message"}
                  </Button>                
              </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-8 px-[20%]">
        <Typography variant="h2" className="text-center mb-8 font-bold" color="blue-gray">
          Frequently Asked Questions
        </Typography>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">
                    What services do you offer?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    We offer biometric attendance systems, secure check-in/check-out processes, comprehensive data management, and more.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">
                    How can I subscribe to your services?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    You can subscribe to our services by choosing one of our subscription tiers: Basic, Standard, or Premium. Each tier offers different features to suit your needs.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">
                    What is your refund policy?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Our refund policy allows for refunds within 30 days of purchase if you are not satisfied with our services.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">
                    Do you offer customer support?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Yes, we offer 24/7 customer support to assist you with any issues or questions you may have.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">
                    Can I customize my subscription?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Yes, our services are customizable to meet your specific needs. Contact us to discuss your requirements.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="mb-6">
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">
                    How secure is my data?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    We ensure the highest level of security for your data, complying with industry standards and best practices.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-white py-8 px-[20%]">
        <Typography variant="h2" className="text-center mb-8 font-bold" color="blue-gray">Our Location</Typography>
        <div className="flex justify-center">
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3939.6000627661438!2d7.396355075764896!3d9.100148287869656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDYnMDAuNSJOIDfCsDIzJzU2LjIiRQ!5e0!3m2!1sen!2sng!4v1724250346811!5m2!1sen!2sng"            
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;