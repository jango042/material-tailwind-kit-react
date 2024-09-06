import {  Avatar, Typography, Button, Card, CardBody} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './customCarousel.css'; // Import the custom CSS file

export function About() {

  const customArrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    outline: 'none',
  };

  const customArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...customArrowStyles, left: 15 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-black"
        >
          <path
            fillRule="evenodd"
            d="M10.707 3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1 0 1.414l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 0-.001z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );

  const customArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...customArrowStyles, right: 15 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-black"
        >
          <path
            fillRule="evenodd"
            d="M9.293 16.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 0-1.414l-4-4a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1 0 .001z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );


  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/10178394.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-gray-100 py-8 px-[20%]">
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <div className="w-full lg:w-3/5 p-6 mx-auto pr-8">
            <Typography variant="h2" className="mb-3 font-bold text-blue-gray-500" >
              About Us
            </Typography>
            <Typography className="font-normal mt-4 text-blue-gray-500">
              At SafeHands, we are driven by a profound commitment to safeguarding the lives and well-being of children in Nigeria. In a country where the safety of our youngest and most vulnerable is threatened by the rising tide of insecurity, kidnapping, and criminality, we have taken it upon ourselves to be a beacon of hope and protection.
            </Typography>
            <Typography className="font-normal mt-4 text-blue-gray-500">
              Our journey began with a deep concern for the increasing dangers faced by children across the nation. Every parent’s worst nightmare is the fear of not knowing if their child is safe, especially in an environment where security is uncertain. This pressing need for reassurance and security inspired us to create SafeHands—a company dedicated to using advanced technology to provide a reliable, trustworthy solution for child safety.
            </Typography>
            <Typography className="font-normal mt-4 text-blue-gray-500">
              Through innovative tools like biometric fingerprint devices and Android tablets, SafeHands offers schools and religious centers a seamless, secure, and efficient system to monitor and manage the daily arrival and departure of children. Our technology ensures that each child is accounted for, every movement is tracked, and parents are kept informed in real-time, providing peace of mind in an increasingly unpredictable world.
            </Typography>
            <Typography className="font-normal mt-4 text-blue-gray-500">
              We understand the trials and tribulations faced by families and institutions striving to protect their children. That’s why SafeHands goes beyond providing technology; we offer a promise—a commitment to stand with you in ensuring that the safety of your children is never compromised. Our systems are designed not just to meet, but to exceed the highest standards of security and reliability, reflecting our unwavering dedication to the cause.
              In a world where threats to child safety are ever-present, SafeHands stands as a trusted guardian, relentlessly focused on protecting what matters most—our children.
            </Typography>
            
          </div>
          <div className="w-full lg:w-2/5 p-4">
            <img
              alt="Card Image"
              src="/img/Learning-pana.png"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative py-8 px-[20%]">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/5 p-4">
            <img
              alt="Card Image"
              src="/img/Two-factor-authentication-bro.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-3/5 p-4 pl-12">
            <Typography variant="h2" className="mb-3 font-bold text-blue-gray-500">Our Mission</Typography>
            <Typography className="font-normal mt-4 text-blue-gray-500">
              At SafeHands, our mission is to provide cutting-edge technology solutions that ensure the safety and accountability of children in educational and religious environments.
            </Typography>
            <Typography className="font-normal mt-4 text-blue-gray-500">
              are committed to enhancing security measures through reliable systems and fostering trust between families, schools, and communities.
            </Typography>
            {/* <Typography className="font-normal mt-4 text-blue-gray-500">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Typography> */}
          </div>
        </div>
      </section>

      <section className="relative bg-[url('/img/bg-d-1.jpeg')] bg-cover bg-center py-8 px-[20%]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex flex-wrap lg:flex-nowrap text-white">
          <div className="w-full lg:w-3/5 p-4 pr-12">
            <Typography variant="h2" >Our Vision</Typography>
            <Typography className="font-normal mt-4">
              Our vision is to revolutionize the industry with our innovative solutions and commitment to excellence. We aim to be the leaders in our field, setting standards for quality and service. Our goal is to empower our clients and partners to achieve greater heights through collaboration and innovation.
            </Typography>
            <Typography className="font-normal mt-4">
              We envision a future where our contributions lead to a more efficient and sustainable industry, where technological advancements are leveraged for the greater good. Our vision drives us to continuously improve and adapt in an ever-changing world.
            </Typography>
            <Typography className="font-normal mt-4">
              As we move forward, we remain committed to our core values of integrity, innovation, and customer satisfaction. We believe that by staying true to these principles, we can achieve our vision and make a lasting impact.
            </Typography>
          </div>
          <div className="w-full lg:w-2/5 p-4">
            <img
              alt="Vision Image"
              src="/img/Two factor authentication-pana.png"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white py-8 px-[20%]">
        <Typography variant="h1" className="text-center mb-8 text-blue-gray-500">Our Values</Typography>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Card>
              <CardBody className="text-center">
                <AcademicCapIcon className="h-16 w-16 text-blue-gray-500 mx-auto mb-4" />
                <Typography variant="h5">Service</Typography>
                <Typography className="font-normal mt-2 text-blue-gray-500">
                  We are dedicated to providing top-notch service to our clients, ensuring their needs are met with professionalism and care.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Card>
              <CardBody className="text-center">
                <ChartBarIcon className="h-16 w-16 text-blue-gray-500 mx-auto mb-4" />
                <Typography variant="h5" className="text-blue-gray-500">Success</Typography>
                <Typography className="font-normal mt-2 text-blue-gray-500">
                  Our commitment to excellence drives us to achieve success in all our endeavors, helping our clients reach their goals.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <Card>
              <CardBody className="text-center">
                <ShieldCheckIcon className="h-16 w-16 text-blue-gray-500 mx-auto mb-4" />
                <Typography variant="h5" className="text-blue-gray-500">Security</Typography>
                <Typography className="font-normal mt-2 text-blue-gray-500">
                  Security is at the core of our operations, ensuring that our clients' data and operations are always protected.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-8 px-[20%]">
        <Typography variant="h1" className="text-center mb-8 text-blue-gray-500">Data And Privacy</Typography>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
          emulateTouch={true}
          swipeable={true}
          dynamicHeight={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            customArrowPrev(onClickHandler, hasPrev, label)
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            customArrowNext(onClickHandler, hasNext, label)
          }
        >
          <div className="flex flex-wrap">
            <Card className="w-full p-4">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 p-4">
                  <img src="/img/Taking-care-of the-Earth-rafiki.png" alt="Carousel Image 1" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <CardBody>
                    <Typography variant="h2">Sharing</Typography>
                    <Typography className="font-normal mt-4">
                      SafeHands does not share, sell, or disclose any personal data to third parties, except as required by law or with explicit consent from the parents or guardians. Our systems are regularly updated and monitored to safeguard against unauthorized access and ensure the continuous protection of your child's information.
By using our services, you acknowledge and agree to the collection and use of data as outlined in our privacy policy. Your trust is paramount to us, and we are dedicated to maintaining the highest standards of security and privacy for all the families we serve.
                    </Typography>
                  </CardBody>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap">
            <Card className="w-full p-4">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 p-4">
                  <img src="/img/Taking-care-of-the-Earth-amico.png" alt="Carousel Image 2" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <CardBody>
                    <Typography variant="h2">Data Protection</Typography>
                    <Typography className="font-normal mt-4">
                      At SafeHands, the protection of your child's data and privacy is our utmost priority. We utilize advanced technology, including biometric fingerprint devices and Android tablets, to provide a secure and efficient child management system. All data collected, including personal and biometric information, is encrypted and stored in compliance with the highest international standards of data protection.
                    </Typography>
                  </CardBody>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap">
            <Card className="w-full p-4">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 p-4">
                  <img src="/img/Taking-care-of-the-Earth-pana.png" alt="Carousel Image 3" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <CardBody>
                    <Typography variant="h2">Confidentiality</Typography>
                    <Typography className="font-normal mt-4">
                      We are committed to ensuring that your child's information is handled with the greatest care and confidentiality. Access to this data is strictly limited to authorized personnel within the institution, and only for the purpose of ensuring the safety and well-being of the children under our care.
                    </Typography>
                  </CardBody>
                </div>
              </div>
            </Card>
          </div>
        </Carousel>
      </section>
      <section className="relative py-8 px-[10%]">
        <Typography variant="h1" className="text-center mb-8 text-blue-gray-500">SafeHands Partners</Typography>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 p-8">
            <img 
              src="/img/okaytech_logo.jpeg" 
              alt="Partner Logo 1" 
              className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain" 
            />
          </div>
          {/* You can add more images here following the same structure */}
        </div>
      </section>


      
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default About;
