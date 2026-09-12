import {
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Landmark,
  SearchCheck
} from "lucide-react";

export const services = [
  {
    icon: Landmark,
    title: "Government Job Application Assistance",
    slug: "government-job-application-assistance",
    description: "Guidance to understand eligibility, dates, documents, fees, and online recruitment form steps."
  },
  {
    icon: FileCheck2,
    title: "Online Form Filling",
    slug: "online-form-filling",
    description: "Support for carefully entering applicant details into online forms and reviewing common mistakes."
  },
  {
    icon: BookOpenCheck,
    title: "Exam Application Assistance",
    slug: "exam-application-assistance",
    description: "Help with competitive examination forms, deadlines, payment steps, and official link navigation."
  },
  {
    icon: BriefcaseBusiness,
    title: "Recruitment Form Assistance",
    slug: "recruitment-form-assistance",
    description: "Clear process help for public and private recruitment applications where online steps feel confusing."
  },
  {
    icon: BadgeCheck,
    title: "Scholarship Applications",
    slug: "scholarship-applications",
    description: "Assistance with scholarship form requirements, eligibility checks, and document readiness."
  },
  {
    icon: GraduationCap,
    title: "Admission Forms",
    slug: "admission-forms",
    description: "Support for college, institute, entrance, and admission-related online applications."
  },
  {
    icon: ClipboardCheck,
    title: "Document Preparation Guidance",
    slug: "document-preparation-guidance",
    description: "General checklists for documents commonly needed for different forms and online submissions."
  },
  {
    icon: SearchCheck,
    title: "Application Status Assistance",
    slug: "application-status-assistance",
    description: "Help users understand status pages, pending requirements, and next steps after form submission."
  }
];

export const jobs = [
  {
    title: "SSC Combined Graduate Level Examination",
    slug: "ssc-combined-graduate-level-examination",
    organization: "Staff Selection Commission",
    department: "Central Recruitment",
    category: "SSC",
    location: "All India",
    vacancies: "To be notified",
    qualification: "Graduate",
    ageLimit: "18-32 years as per post",
    applicationFee: "As per official notification",
    startDate: "2026-08-01",
    lastDate: "2026-09-28",
    status: "OPEN",
    salary: "As per pay level",
    selectionProcess: "Tiered computer based examinations and document verification",
    requiredDocuments: ["Photo", "Signature", "ID proof", "Educational certificates"],
    officialNotificationUrl: "https://ssc.gov.in",
    officialApplicationUrl: "https://ssc.gov.in",
    description: "Central government recruitment examination for graduate-level posts."
  },
  {
    title: "Railway Technician Recruitment",
    slug: "railway-technician-recruitment",
    organization: "Railway Recruitment Board",
    department: "Indian Railways",
    category: "Railway",
    location: "Zone wise",
    vacancies: "9,000+ expected",
    qualification: "ITI / Diploma",
    ageLimit: "18-33 years",
    applicationFee: "As per official notification",
    startDate: "2026-07-20",
    lastDate: "2026-09-20",
    status: "CLOSING SOON",
    salary: "Level 2 / Level 5 as applicable",
    selectionProcess: "CBT, document verification and medical examination",
    requiredDocuments: ["Photo", "Signature", "ITI/Diploma certificate", "Category certificate if applicable"],
    officialNotificationUrl: "https://www.rrbcdg.gov.in",
    officialApplicationUrl: "https://www.rrbcdg.gov.in",
    description: "Railway technical post recruitment assistance information."
  },
  {
    title: "State Police Constable Application",
    slug: "state-police-constable-application",
    organization: "State Police Recruitment Board",
    department: "Police",
    category: "Police",
    location: "State wise",
    vacancies: "Multiple",
    qualification: "12th Pass",
    ageLimit: "18-25 years with relaxations",
    applicationFee: "Varies by category",
    startDate: "2026-09-10",
    lastDate: "2026-10-15",
    status: "NEW",
    salary: "As per state rules",
    selectionProcess: "Written exam, physical test, medical test and document verification",
    requiredDocuments: ["Photo", "Signature", "Domicile", "Educational certificates"],
    officialNotificationUrl: "https://www.india.gov.in",
    officialApplicationUrl: "https://www.india.gov.in",
    description: "State-level police recruitment application information and assistance."
  }
];

export const categories = [
  "Government Jobs",
  "SSC",
  "UPSC",
  "Banking",
  "Railway",
  "Defence",
  "Police",
  "State Government Jobs",
  "Teaching Jobs",
  "Entrance Exams",
  "Scholarships",
  "Admissions",
  "Other Government/Competitive Exams"
];

export const faqs = [
  {
    question: "Is iDS Expert an official government website?",
    answer:
      "No. iDS Expert is an independent private application assistance service. Users should verify final details on the official government website."
  },
  {
    question: "Do you guarantee selection in government jobs?",
    answer:
      "No. Application assistance does not guarantee selection, employment, examination qualification, approval, or any government outcome."
  },
  {
    question: "Which forms can you help with?",
    answer:
      "We assist with government job forms, competitive exams, recruitment forms, admissions, scholarships, and other online applications."
  },
  {
    question: "What documents are usually required?",
    answer:
      "Common documents include photo, signature, identity proof, educational certificates, category certificates, domicile, and payment details where applicable."
  },
  {
    question: "Can I apply directly through the official website?",
    answer:
      "Yes. We encourage users to use official links whenever they are comfortable applying independently."
  },
  {
    question: "How can I track my request?",
    answer:
      "After submitting an assistance request, you receive a reference number that can be used when contacting support."
  }
];
