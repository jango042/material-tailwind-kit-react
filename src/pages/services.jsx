import React, { useState }  from 'react';
import { Typography, Card,CardFooter,Button, CardBodyCard,
  CardHeader,Accordion, AccordionHeader, AccordionBody,
  CardBody } from "@material-tailwind/react";
import { 
  DocumentChartBarIcon,
  FingerPrintIcon,
  ChartBarIcon,
  AcademicCapIcon,
  CogIcon,
  ExclamationCircleIcon,
  BellIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  HandRaisedIcon,
  RectangleGroupIcon

   } from "@heroicons/react/24/solid";
   
import { Footer } from "@/widgets/layout";


function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}




export function Services() {

 const [open, setOpen] = useState(0);
const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [showMore, setShowMore] = useState(0);

  const toggleShowMore = (index) => {
    setShowMore(index);
  };

    return (
        <>
        {/* <section className="relative block h-[50vh]">
          <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
          <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section> */}
        
        <section className="relative block h-[50vh] bg-gray-200">
        {/* <div className="bg-profile-background absolute top-0 h-full w-full bg-cover bg-center" /> */}
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/intern-safe.jpg')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="relative flex justify-center items-center h-full">
          <Typography variant="h1" className="text-white">Our Services</Typography>
        </div>
      </section>
      
      <section className="relative bg-white py-8 px-[10%]">
        <div className="text-center mb-10">
          <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Attendance Services</Typography>
          <Typography className="font-normal text-blue-gray-500">
            SafeHands offers comprehensive attendance services to ensure the safety and convenience of children, parents, and institutions.
          </Typography>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="relative bg-white py-8 px-[20%]">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <img
              alt="Credibility Image"
              src="/img/Two-factor-authentication-amico.png"
              className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <Typography variant="h1" className="mb-4 font-bold" color="blue-gray">Credibility of Our Services</Typography>
            <Typography className="font-normal text-blue-gray-500">
              At SafeHands, we are committed to safeguarding the lives and well-being of children in Nigeria through trust, innovation, and uncompromising security standards. Utilizing advanced technology like biometric fingerprint devices and Android tablets, our systems ensure seamless, reliable, and secure child management. Our rigorous data protection measures and real-time accuracy provide parents with peace of mind, while continuous updates keep our services at the forefront of security. Trusted by leading schools and religious centers, Safe Hands is your partner in protecting the most precious members of society.
            </Typography>
            {/* <Typography className="font-normal text-blue-gray-500 mt-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Typography> */}
          </div>
        </div>
      </section>

      

      
      {/* Terms of Engagement Section */}
      <section className="relative bg-gray-100 py-8 px-[20%]">
        <Typography variant="h1" className="text-center mb-8 font-bold" color="blue-gray">Terms of Engagement</Typography>
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <div className=" mb-10">
            <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Usage Guidelines</Typography>
            <Typography className="font-normal text-blue-gray-500 mb-4">
             <p>
              SafeHands provides a range of technology-driven tools designed to enhance child safety and streamline operations within schools and religious centers. These tools include biometric attendance systems, secure check-in/check-out processes, and parent communication platforms.
             </p>
             <p>
              <b>Authorized Access:</b> Only authorized personnel and registered users are permitted to access and operate SafeHands systems. Each user must undergo a thorough onboarding process, which includes training on proper usage, security protocols, and best practices.
             </p>
             <p>
              <b>System Integrity:</b> Users are required to maintain the integrity of the system by following prescribed operational procedures. This includes correctly using biometric devices, ensuring that Android tablets are secure, and regularly updating passwords and access credentials.
             </p>
             <p>
              <b>Adherence to Protocols:</b> Users must adhere to all security and operational protocols established by SafeHands to prevent unauthorized access and ensure the safety of children.
             </p>
            </Typography>
            <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Data Duplication</Typography>
            <Typography className="font-normal text-blue-gray-500 mb-4">
              SafeHands is deeply committed to maintaining the accuracy, integrity, and security of all data managed through our systems. Our data duplication policies are designed to prevent errors, ensure consistency, and protect sensitive information.
              <p>
                <b>Centralized Data Management:</b> All data, including attendance records, biometric information, and parent-child details, are centrally managed within a secure, encrypted database. This centralized approach prevents the risk of data duplication and ensures that any updates or changes are reflected across all systems in real-time.
              </p>
              <p>
                <b>Automated Synchronization:</b> SafeHands employs automated synchronization processes to ensure that data entered in one system is automatically updated across all connected devices and platforms. This eliminates the need for manual data entry and reduces the risk of discrepancies.
              </p>
              <p>
                <b>Regular Audits:</b> To ensure data integrity, SafeHands conducts regular audits and checks to identify and resolve any instances of data duplication or inconsistency. These audits help maintain the accuracy and reliability of the information stored in our systems.
              </p>
            </Typography>
            <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">User Responsibilities</Typography>
            <Typography className="font-normal text-blue-gray-500 mb-4">
              The effective operation and security of SafeHands' systems depend on the active participation and responsibility of all users. The following responsibilities are expected of each user to ensure the safety and security of the system and the children it protects.
              <p>
                <b>Confidentiality:</b> Users are responsible for maintaining the confidentiality of their access credentials, including usernames, passwords, and biometric data. Sharing access credentials with unauthorized individuals is strictly prohibited and may result in immediate termination of access.
              </p>
              <p>
                <b>System Updates:</b> Users must regularly update their software and devices as recommended by SafeHands to ensure that they are operating with the latest security features and system enhancements. Failure to do so may compromise the security and functionality of the system.
              </p>
              <p>
                <b>Incident Reporting:</b> Users are required to promptly report any suspected security breaches, unauthorized access attempts, or system malfunctions to SafeHands’ support team. Immediate reporting allows us to take swift action to mitigate any potential risks.
              </p>
            </Typography>
            <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Prohibited Activities</Typography>
            <Typography className="font-normal text-blue-gray-500 mb-4">
              To protect the integrity of our services and ensure the safety of all children under our care, SafeHands strictly prohibits the following activities:
              <p>
                <b>Unauthorized Access:</b> Any attempt to gain unauthorized access to SafeHands systems, whether through hacking, password theft, or other illicit means, is strictly prohibited. Such actions will result in immediate suspension of services and legal action where appropriate.
              </p>
              <p>
                <b>Tampering with Data:</b> Users are prohibited from tampering with, altering, or deleting any data stored within the SafeHands system without proper authorization. This includes attendance records, biometric data, and personal information.
              </p>
              <p>
                <b>Sharing of Sensitive Information:</b> Users must not share or disclose sensitive information, including biometric data, personal details of children or parents, or system access credentials, with unauthorized individuals or third parties.
              </p>
              <p>
                <b>Misuse of Systems:</b> Any use of SafeHands technology for purposes other than those intended, such as unauthorized monitoring or surveillance, is strictly forbidden. The system must only be used in accordance with the guidelines and purposes outlined by SafeHands.
              </p>
            </Typography>
            <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Service Discontinuation</Typography>
            <Typography className="font-normal text-blue-gray-500 mb-4">
              SafeHands reserves the right to discontinue services under specific circumstances, ensuring a secure and orderly transition when necessary.
              <p>
                <b>Voluntary Termination:</b> Institutions may choose to discontinue services by providing written notice to SafeHands. Upon receipt of such notice, we will coordinate a secure and seamless termination process, including the transfer or deletion of data as requested.
              </p>
              <p>
                <b>Involuntary Termination:</b> SafeHands reserves the right to terminate services immediately if there is a breach of the terms of engagement, including unauthorized access, misuse of systems, or failure to adhere to security protocols. In such cases, access to all systems will be revoked, and appropriate legal actions may be pursued.
              </p>
              <p>
                <b>Data Handling Post-Termination:</b> Upon termination of services, SafeHands will securely transfer any requested data to the institution in a format agreed upon. All data remaining within the SafeHands system will be securely deleted in accordance with data protection regulations, ensuring no residual data remains accessible.
              </p>
            </Typography>
            <Typography variant="h2" className="mb-4 font-bold" color="blue-gray">Updates and Changes</Typography>
            <Typography className="font-normal text-blue-gray-500 mb-4">
              SafeHands is dedicated to continuously enhancing our systems and services to meet the evolving needs of our clients and to maintain the highest standards of security and functionality.
              <p>
                <b>Regular System Updates:</b> SafeHands regularly updates its software and hardware to introduce new features, improve performance, and enhance security. These updates are automatically applied to ensure that all users benefit from the latest advancements.
              </p>
              <p>
                <b>Change Notifications:</b> Users will be notified in advance of any significant changes to the system, including updates that may affect user experience, data management processes, or security protocols. Detailed instructions and support will be provided to facilitate a smooth transition.
              </p>
              <p>
                <b>User Feedback:</b> SafeHands values user feedback and incorporates it into our ongoing development process. Users are encouraged to share their experiences and suggestions, which help shape future updates and improvements to our services.
              </p>
            </Typography>
          </div>
          {/* <div className="w-full lg:w-1/2 lg:-mr-[10%]">
            <div className="flex flex-wrap gap-6 justify-end">
              <div className="w-full lg:w-1/2">
                <img
                  alt="Engagement Image 1"
                  src="/img/Connecting-teams-amico.png"
                  className="h-auto w-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  alt="Engagement Image 2"
                  src="/img/Connecting-teams-pana.png"
                  className="h-auto w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            
            </div>
          </div> */}
        </div>
      </section>

      {/* Terms of Usage and Service Discontinuation Section */}
      <section className="relative  py-8 px-[10%]">
        <Typography variant="h2" className="text-center mb-8 font-bold" color="blue-gray">Terms of Usage and Service Discontinuation</Typography>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="w-full lg:w-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <ExclamationCircleIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                <Typography variant="h3" className="font-bold" color="blue-gray">Usage Guidelines</Typography>
              </div>
              <Typography className="font-normal text-blue-gray-500">
                Follow our usage guidelines to ensure proper and ethical use of our services.
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <BellIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                <Typography variant="h3" className="font-bold" color="blue-gray">Prohibited Activities</Typography>
              </div>
              <Typography className="font-normal text-blue-gray-500">
                Certain activities are prohibited to maintain the integrity and security of our services.
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <DocumentDuplicateIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                <Typography variant="h3" className="font-bold" color="blue-gray">Data Duplication</Typography>
              </div>
              <Typography className="font-normal text-blue-gray-500">
                Avoid unnecessary duplication of data to prevent inconsistencies and errors.
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <DocumentIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                <Typography variant="h3" className="font-bold" color="blue-gray">Service Discontinuation</Typography>
              </div>
              <Typography className="font-normal text-blue-gray-500">
                Understand the terms and conditions related to service discontinuation.
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <HandRaisedIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                <Typography variant="h3" className="font-bold" color="blue-gray">User Responsibilities</Typography>
              </div>
              <Typography className="font-normal text-blue-gray-500">
                Users are responsible for adhering to the terms of service and maintaining the confidentiality of their accounts.
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <RectangleGroupIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
                <Typography variant="h3" className="font-bold" color="blue-gray">Updates and Changes</Typography>
              </div>
              <Typography className="font-normal text-blue-gray-500">
                Stay informed about updates and changes to our terms of service and usage policies.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Services Offered Section */}
     <section className="relative bg-white py-8 px-[10%]">
      <Typography variant="h2" className="text-center mb-8 font-bold" color="blue-gray">Services Offered</Typography>
      <div className="flex flex-wrap justify-center gap-6">

        <Accordion open={open === 1} className="w-full lg:w-1/3">
          <AccordionHeader onClick={() => handleOpen(1)}>
            <FingerPrintIcon className="h-6 w-6 text-blue-gray-800 mr-2" />
            Biometric Attendance Systems
          </AccordionHeader>
          <AccordionBody>
            <Typography>
              Implementing state-of-the-art fingerprint devices for secure and accurate attendance tracking of children and staff members.
            </Typography>
            <ul className="mt-4">
              <li>
                <b>Security and Precision:</b> SafeHands utilizes cutting-edge biometric technology to authenticate the identity of each, parent, child and staff member using unique fingerprint recognition. This system eliminates the possibility of impersonation or human error, ensuring that only registered individuals can check in and out.
              </li>
              <li><b>Streamlined Operations:</b> Our biometric systems reduce the administrative burden of manual attendance, making it easier for schools and religious centers to maintain accurate records. Attendance data is automatically logged into a central system, allowing for easy retrieval and analysis.</li>
              <li><b>Enhanced Accountability:</b> The system provides a verifiable record of attendance, which is critical for auditing purposes and for resolving any disputes regarding presence or absences.</li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} className="w-full lg:w-1/3">
          <AccordionHeader onClick={() => handleOpen(2)}>
            <DocumentChartBarIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
            Secure Check-In/Check-Out Processes
          </AccordionHeader>
          <AccordionBody>
            <Typography>
              Utilizing Android tablets and secure access protocols to streamline and enhance the safety of drop-off and pick-up procedures.
            </Typography>
            <ul className="mt-4">
              <li>
                <b>Efficient Process:</b> SafeHands’ check-in/check-out system is designed to handle high volumes of children during peak times. The Android tablets provide a user-friendly interface for parents, staff, and guardians, allowing for quick and seamless transactions.
              </li>
              <li><b>Multiple Layers of Security:</b> Each check-in/check-out is secured by multiple authentication methods, including biometrics and passcodes, ensuring that children can only be picked up by authorized individuals. The system immediately flags any discrepancies or unauthorized attempts, triggering an alert to the appropriate authorities.
              </li>
              <li><b>Real-Time Monitoring:</b> Administrators have real-time visibility into who has entered and exited the premises, with time-stamped records that can be reviewed at any time.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} className="w-full lg:w-1/3">
          <AccordionHeader onClick={() => handleOpen(3)}>
            <ChartBarIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
            Comprehensive Data Management
          </AccordionHeader>
          <AccordionBody>
            <Typography>
              Secure storage and management of sensitive information, ensuring compliance with data protection regulations.
            </Typography>
            <ul className="mt-4">
              <li>
                <b>Initial Training:</b> SafeHands provides in-depth training sessions for all users, including administrators, teachers, and parents. These sessions cover the operation of the system, security protocols, and best practices.
              </li>
              <li><b>Ongoing Support:</b> Our dedicated support team is available to assist with any technical issues or questions that may arise after the initial implementation. We offer phone, email, and online support to ensure that all users can quickly resolve any problems.
              </li>
              <li><b>User Guides and Documentation:</b> Comprehensive user guides, video tutorials, and FAQs are available to help users get the most out of the system.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} className="w-full lg:w-1/3">
          <AccordionHeader onClick={() => handleOpen(4)}>
            <ChartBarIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
            Reporting and Analytics
          </AccordionHeader>
          <AccordionBody>
            <Typography>
              Detailed insights and analytics on attendance patterns, security incidents, and operational efficiency for informed decision-making.
            </Typography>
            <ul className="mt-4">
              <li>
                <b>Customizable Reports:</b> SafeHands generates detailed reports on various aspects of child management, including attendance patterns, punctuality, and security incidents. These reports can be customized to meet the specific needs of the institution.
              </li>
              <li><b>Data-Driven Decisions: </b> The analytics tools provide insights that help administrators make informed decisions about resource allocation, security enhancements, and operational improvements.
              </li>
              <li><b>Historical Data Access: </b> Institutions can access historical data for trend analysis, helping them identify areas for improvement and track progress over time.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} className="w-full lg:w-1/3">
          <AccordionHeader onClick={() => handleOpen(5)}>
            <AcademicCapIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
            Training and Support Services
          </AccordionHeader>
          <AccordionBody>
            <Typography>
              Comprehensive training programs and ongoing support to ensure effective implementation and usage of SafeHands systems.
            </Typography>
            <ul className="mt-4">
              <li>
                <b>Authorized Access:</b> Only authorized personnel and registered users are permitted to access and operate SafeHands systems. Each user must undergo a thorough onboarding process, which includes training on proper usage, security protocols, and best practices.
              </li>
              <li><b>System Integrity: </b> Users are required to maintain the integrity of the system by following prescribed operational procedures. This includes correctly using biometric devices, ensuring that Android tablets are secure, and regularly updating passwords and access credentials.
              </li>
              <li><b>Adherence to Protocols: </b> Users must adhere to all security and operational protocols established by SafeHands to prevent unauthorized access and ensure the safety of children.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} className="w-full lg:w-1/3">
          <AccordionHeader onClick={() => handleOpen(6)}>
            <CogIcon className="h-6 w-6 text-blue-gray-500 mr-2" />
            Customizable Access Control
          </AccordionHeader>
          <AccordionBody>
            <Typography>
              Tailored solutions for schools and religious centers to manage authorized access and permissions effectively.
            </Typography>
            <ul className="mt-4">
              <li>
                <b>Granular Access Management:</b> SafeHands provides a flexible access control system that allows institutions to define who has access to specific areas or functions. Permissions can be tailored based on roles, times of day, or specific events, ensuring that security protocols are both effective and adaptable.
              </li>
              <li><b>Multi-Factor Authentication: </b> The access control system supports multi-factor authentication, combining biometrics, RFID cards, and PINs to create a highly secure environment.
              </li>
              <li><b>Adherence to Protocols: </b> Users must adhere to all security and operational protocols established by SafeHands to prevent unauthorized access and ensure the safety of children.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

      </div>
    </section>


      {/* Subscription Section */}
      <section className="relative bg-gray-100 py-8 px-[10%]">
        <div className="container mx-auto px-6 lg:px-[7%]">
          <Typography variant="h2" className="text-center mb-8 font-bold" color="blue-gray">Subscription Plans</Typography>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Basic Plan */}
            <div className="w-full lg:w-[30%]">

            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Basic
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">N</span>20K{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Fingerprint Identification:</b> Utilizes fingerprint devices to securely identify children during drop-off and pick-up times.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Android Tablet Integration:</b> Provides an Android tablet for real-time tracking and monitoring.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Basic Information Management:</b> Stores and manages essential information of parents and children.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Attendance Tracking:</b> Keeps a record of attendance for better management and safety.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              <b>24/7 Customer Support:</b> Access to customer support for troubleshooting and assistance.
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>



              {/* <Card>
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">Basic Plan</Typography>
                  <ul className="list-disc list-inside text-left text-blue-gray-500">
                    <li><b>Fingerprint Identification:</b> Utilizes fingerprint devices to securely identify children during drop-off and pick-up times.</li>
                    <li><b>Android Tablet Integration:</b> Provides an Android tablet for real-time tracking and monitoring.</li>
                    <li><b>Basic Information Management:</b> Stores and manages essential information of parents and children.</li>
                    <li><b>Attendance Tracking:</b> Keeps a record of attendance for better management and safety.</li>
                    <li><b>24/7 Customer Support:</b> Access to customer support for troubleshooting and assistance.</li>
                  </ul>

                  <Typography variant="h6" className="mb-4" color="blue-gray">Benefits</Typography>
                   <ul className="list-disc list-inside text-left text-blue-gray-500">
                    <li>Ensures accurate identification of children.</li>
                    <li>Reduces the risk of unauthorized pick-ups.</li>
                    <li>Easy-to-use interface for staff and parents.</li>
                    <li>Affordable solution for smaller institutions.</li>
                    
                  </ul>
                </CardBody>
              </Card> */}
            </div>

            {/* Standard Plan */}
            <div className="w-full lg:w-[30%]">

              <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Standard
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">N</span>40K{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>All Basic Plan Features:</b> Includes all features from the Basic Plan.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Enhanced Data Management:</b> More comprehensive data management options for parents and children.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Multiple Device Support:</b> Supports additional fingerprint devices and tablets.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Real-time Notifications:</b> Sends real-time notifications to parents upon drop-off and pick-up.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              <b>Staff Training:</b> Provides training sessions for staff on using the system effectively.
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>


              {/* <Card>
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">Standard Plan</Typography>
                  <ul className="list-disc list-inside text-left text-blue-gray-500">
                    <li><b>All Basic Plan Features:</b> Includes all features from the Basic Plan.</li>
                    <li><b>Enhanced Data Management:</b> More comprehensive data management options for parents and children.</li>
                    <li><b>Multiple Device Support:</b> Supports additional fingerprint devices and tablets.</li>
                    <li><b>Real-time Notifications:</b> Sends real-time notifications to parents upon drop-off and pick-up.</li>
                    <li><b>Staff Training:</b> Provides training sessions for staff on using the system effectively.</li>
                  </ul>

                  <Typography variant="h6" className="mb-4" color="blue-gray">Benefits</Typography>
                   <ul className="list-disc list-inside text-left text-blue-gray-500">
                    <li>Enhanced data security and management.</li>
                    <li>Greater scalability for medium-sized institutions.</li>
                    <li>Improved communication with parents through real-time notifications.</li>
                    <li>Better-trained staff for efficient system usage.</li>
                    
                  </ul>
                </CardBody>
              </Card> */}
            </div>

            {/* Premium Plan */}
            <div className="w-full lg:w-[30%]">

              <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Premuim
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">N</span>60K{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>All Standard Plan Features:</b> Includes all features from the Standard Plan.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Advanced Analytics and Reporting:</b> Detailed analytics and reporting features for attendance and safety management.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Customizable Interface:</b> Customizable user interface to match the institution’s branding and specific needs.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal"><b>Parental Access Portal:</b> Dedicated portal for parents to view their child's attendance and safety records.</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              <b>Priority Support:</b> Priority access to customer support and dedicated account managers.
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>


              {/* <Card>
                <CardBody>
                  <Typography variant="h3" className="mb-4 font-bold" color="blue-gray">Premuim Plan</Typography>
                  <ul className="list-disc list-inside text-left text-blue-gray-500">
                    <li><b>All Standard Plan Features:</b> Includes all features from the Standard Plan.</li>
                    <li><b>Advanced Analytics and Reporting:</b> Detailed analytics and reporting features for attendance and safety management.</li>
                    <li><b>Customizable Interface:</b> Customizable user interface to match the institution’s branding and specific needs.</li>
                    <li><b>Parental Access Portal:</b> Dedicated portal for parents to view their child's attendance and safety records.</li>
                    <li><b>Priority Support:</b> Priority access to customer support and dedicated account managers.</li>
                  </ul>

                  <Typography variant="h6" className="mb-4" color="blue-gray">Benefits</Typography>
                   <ul className="list-disc list-inside text-left text-blue-gray-500">
                    <li>Comprehensive and detailed insights into attendance and safety data.</li>
                    <li>Tailored solutions to fit the unique needs of larger institutions.</li>
                    <li>Enhanced parental engagement and transparency.</li>
                    <li>Faster resolution of issues with priority support.</li>
                    
                  </ul>
                </CardBody>
              </Card> */}
            </div>
          </div>
        </div>
      </section>
        

      <div className="bg-white">
        <Footer />
      </div>
        </>
    );
}