import {
  ShieldCheckIcon,   // Represents "Trusted" and security/safety
  LockClosedIcon,    // Represents "Secure Data" and encryption
  FingerPrintIcon,   // Represents "Biometric Attendance" and innovation
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "gray",
    title: "Trusted Child Safety Solutions",
    icon: ShieldCheckIcon, // Represents security and trust
    description:
      "Safe Hands offers unparalleled child safety with our robust security framework, ensuring that every drop-off and pick-up is safeguarded by state-of-the-art biometric authentication and vigilant monitoring.",
  },
  {
    color: "gray",
    title: "Secure and Efficient Data Management System",
    icon: LockClosedIcon, // Represents secure data management
    description:
      "Our platform guarantees the utmost protection of sensitive information through advanced encryption and seamless cloud-based data management, facilitating both security and operational efficiency for institutions.",
  },
  {
    color: "gray",
    title: "Innovative Attendance System",
    icon: FingerPrintIcon, // Represents biometrics and innovation
    description:
      "Embrace the future of attendance tracking with Safe Hands' cutting-edge technology, providing real-time, accurate monitoring that enhances oversight and peace of mind for schools and religious centers.",
  },
];

export default featuresData;