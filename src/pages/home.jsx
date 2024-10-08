import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import axios from "axios";
import { useState } from "react";

export function Home() {

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
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/10178405.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Safeguarding the Journey of Every Child.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Experience peace of mind with our state-of-the-art security and attendance systems, where technology meets trust to ensure seamless, secure and efficient child management. At SafeHands, we protect what matters most.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Rationale' For SafeHands?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              In Nigeria, rising insecurity and alarming kidnapping cases have heightened concerns 
              among parents and institutions, jeopardizing the safety of children in schools and religious centers. 
              Safe Hands addresses these critical issues with advanced technology solutions.
                <br />
                <br />
                Our integrated fingerprint devices and Android tablets provide secure and efficient 
                monitoring of child drop-offs and pick-ups, ensuring real-time tracking and accountability. 
                By safeguarding children and enhancing transparency, Safe Hands empowers communities to protect 
                their most vulnerable members with confidence and peace of mind.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/Fingerprint-pana-black.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  {/* <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography> */}
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Services Offered by Safe Hands
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Biometric Attendance Systems
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Secure Check-In/Check-Out Processes
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Comprehensive Data Management
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Reporting and Analytics
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Training and Support Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Customizable Access Control
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="" heading="COMPANY ETHOS">
          At Safe Hands, we merge cutting-edge technology with unwavering dedication to child safety. 
          Our sophisticated fingerprint authentication and Android tablet solutions ensure secure, 
          seamless drop-off and pick-up processes. We uphold the highest standards of data integrity, 
          safeguarding the trust placed in us by parents and institutions. Your child's safety is our paramount priority, 
          ensuring peace of mind every day.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description, description1, description2 }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500 tracking-[-1.3px] leading-[30px] text-justify" >
                  {description}
                </Typography>
                <Typography className="font-normal text-blue-gray-500 text-justify tracking-[-1.3px] leading-[30px]">
                  {description1 && description1}
                </Typography>
                <Typography className="font-normal text-blue-gray-500 text-justify tracking-[-1.3px] leading-[30px]">
                  {description2 && description2}
                </Typography>
              </Card>

    //           text-align: justify;
    // letter-spacing: -1.3px;
    // line-height: 30px
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-7/12">
            <div className="mb-8 flex gap-8 flex-wrap">
              <Input variant="outlined" size="lg" name="fullName" value={fullName} label="Full Name" onChange={handleInput} />
              <Input variant="outlined" size="lg" name="email" value={email} label="Email Address" onChange={handleInput} />
              <Input variant="outlined" size="lg" name="phoneNumber" value={phoneNumber} label="Phone Number" onChange={handleInput} />
            </div>
            <Textarea variant="outlined" name="message" value={message}   size="lg" label="Message" rows={8} cols={12} className="w-full" onChange={handleInput} />
            <Checkbox
            onClick={() => setChecked(!checked)}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" disabled={!checked || isLoading} onClick={handleSubmit} fullWidth>
              {isLoading ? "Loading..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
