import { Building2, ClipboardCheck, Compass, Factory, HardHat, Ruler, Sparkles } from "lucide-react";

export const site = {
  name: "Aditi Consultants",
  tagline1: "Building Trust",
  tagline2:"Designing Strength",
  foundedYear: 2001,
  contact: {
    email: "aditiconsultants3@gmail.com",
    phones: ["9182455059", "9246270133"],
    address:
      "8-2-1/6-c, Opposite AXIS Bank, Srinagar Colony Road, Hyderabad – 500082",
  },
  intro:
    "Aditi Consultants is a pioneer in structural designs — designing villas, multi-storied apartments, industries, theatres, and more — and project consultancy, where we coordinate with the builder, architect, and landlord to run the project without obstacles.",
  expertiseSummary:
    "We work across RCC, steel, PEB, pre-stressed concrete, and bridge engineering structures. We are experts in RCC structures and have designed a maximum span of 63 feet pillar-to-pillar at Moula Ali Industrial Area, along with RCC foundations for PEB and steel structures. We also assist with GHMC, HMDA, and DTCP permissions.",
  referApproach:
    "We come into the picture when planning for a particular area or plot has begun — in contact with the builder, developer, or individual plot owner. In other words, before construction begins. Just as there is no human body without a skeleton, there is never a building without a structural engineer.",
  conclusion:
    "Aditi Consultants is an engineering consultancy firm that makes honest efforts to provide clients a professional service of uniform high quality, with an imaginative and responsible approach to engineering problems. We believe we are responsible for providing appropriate solutions to problems encountered in the design and construction of every project.",
  journey:
    "Our journey started as a consultancy firm with two partners and two projects in the year 2001.",
  summary: "Experienced in engineering large-span structures, ensuring adequate pillar spacing and robust structural performance to create open, flexible, and durable interior spaces. "
} as const;

export const permissions = ["GHMC", "HMDA", "DTCP"] as const;

export const packages = [
  {
    id: "silver",
    name: "Basic Silver",
    pricePerSqFt: 15,
    specs: ["Floor plan & Elevation"],
  },
  {
    id: "gold",
    name: "Basic Gold",
    pricePerSqFt: 30,
    specs: [
      "Floor plan & Elevation",
      "Structural Designs",
      "Working Drawings",
    ],
  },
  {
    id: "star-gold",
    name: "Star Gold",
    pricePerSqFt: 50,
    specs: [
      "Floor plan & Elevation",
      "Structural Designs",
      "Working Drawings",
      "Electrical Drawing",
      "Plumbing Drawing",
    ],
  },
  {
    id: "platinum",
    name: "Star Platinum",
    pricePerSqFt: 75,
    specs: [
      "Floor plan & Elevation",
      "Structural Designs",
      "Working Drawings",
      "Electrical Drawings",
      "Plumbing Drawings",
      "BOQ (Bill of Quantities)",
    ],
  },
] as const;

export const timeline = [
  { y: "2001", t: "Founded in Hyderabad", d: "Two partners, two projects. A practice built on the conviction that no building stands without its skeleton." },
  { y: "2008", t: "First Long-Span RCC", d: "Engineered a 63-foot pillar-to-pillar RCC structure at Moulali Industrial Area — the firm's defining technical milestone." },
  { y: "2014", t: "Sacred & Civic Structures", d: "Structural design of Vijaya Ganapathi Temple, Kukatpally — tradition meeting precision engineering." },
  { y: "2018", t: "Campus Engineering", d: "JNTU College of Engineering Campus at Kalikiri — Boys Hostel, Guest House and Library Building, all three structures." },
  { y: "2022", t: "Hospitality & High-Rise", d: "Brewdog Hotel, Jubilee Hills and a Commercial cum Residential tower (Cellar+Stilt 1+Stilt 2+9 Floors) at Kacheguda." },
  { y: "Today", t: "26+ Years On", d: "Structural and project consultancy spanning residential, commercial, educational, religious and hospitality sectors across Hyderabad." },
];

export const architects = [
  "Hafeez Contractor","Parushram Reddy","P. Sudheer Reddy","Vinod Bachala",
  "Debasish Roy","Anwar Aziz","Genesis","Anchuri & Anchuri","Aslam Architects",
  "Nirup Reddy","Anil Hasan","D. Satyanarayana","M. Srinivas Chary","Madhu",
  "Mahidhar","Ram Mohan","Ravinder","Satish Bandari","Balaji",
];

export const builders = [
  "Vamshiram Builders","Aparna Constructions","Ashoka Builders","Maheswari Builders",
  "Bhavya Constructions","Radha Realty Infra Projects Pvt. Ltd","Modi Builders",
  "My Home Construction","Reliance Builders","ARK Builders",
];

export const services = [
  {
    icon: Ruler,
    num: "01",
    t: "Structural Design",
    tagline: "From concept to construction drawings.",
    d: "Complete structural design for all building typologies — from the first layout sketch to fully coordinated GFC drawings with calculations, detailing and BOQ-ready specifications.",
    points: ["Concept to GFC drawings", "Earthquake & wind load analysis", "BOQ-ready steel & concrete detailing", "Coordination with architectural intent"],
    sectors: ["Residential", "Commercial", "Industrial"],
  },
  {
    icon: Building2,
    num: "02",
    t: "RCC Structures",
    tagline: "Reinforced concrete expertise, every typology.",
    d: "Deep expertise in RCC design for villas, multi-storied apartments, commercial complexes, theatres, temples and industrial buildings. Includes long-span design — our record is a 63-foot pillar-to-pillar structure at Moulali Industrial Area.",
    points: ["Long-span design up to 63 ft", "High-rise stability analysis", "Foundation & pile design", "Pre-stressed concrete elements"],
    sectors: ["Apartments", "Commercial", "Religious", "Hospitality"],
  },
  {
    icon: HardHat,
    num: "03",
    t: "Steel Structures",
    tagline: "Hot-rolled frames built for economy & strength.",
    d: "Steel-frame buildings, mezzanines and industrial structures designed for structural performance, construction economy and long service life.",
    points: ["Hot-rolled structural steel", "Connection & joint design", "Erection sequence planning", "Composite beam systems"],
    sectors: ["Industrial", "Commercial", "Institutional"],
  },
  {
    icon: Factory,
    num: "04",
    t: "PEB Structures",
    tagline: "Pre-engineered buildings & their RCC foundations.",
    d: "Pre-Engineered Building structural design and RCC foundation engineering for large industrial halls, warehouses and logistics sheds — including crane gantry and long-span roof systems.",
    points: ["PEB foundation design", "Crane gantry systems", "Long-span industrial sheds", "RCC anchor bolt design"],
    sectors: ["Industrial", "Warehousing", "Logistics"],
  },
  {
    icon: ClipboardCheck,
    num: "05",
    t: "Project Consultancy",
    tagline: "One thread connecting builder, architect & owner.",
    d: "We coordinate between all project stakeholders — builder, architect and landlord — to keep the project moving smoothly without obstacles, delays or miscommunication.",
    points: ["Stakeholder coordination", "Schedule & milestone management", "Technical risk advisory", "Builder–architect liaison"],
    sectors: ["All typologies"],
  },
  // {
  //   icon: ShieldCheck,
  //   num: "06",
  //   t: "Building Permissions",
  //   tagline: "GHMC, HMDA & DTCP approvals, end to end.",
  //   d: "We handle building permission applications with the full suite of Hyderabad's regulatory bodies — from drawing preparation to document submission and approval follow-through.",
  //   points: ["GHMC / HMDA / DTCP approvals", "Permission drawing preparation", "Document compilation", "Approval follow-up"],
  //   sectors: ["Residential", "Commercial", "Institutional"],
  // },
  {
    icon: Compass,
    num: "06",
    t: "Site Supervision",
    tagline: "Engineering oversight through construction.",
    d: "Periodic and continuous on-site supervision to ensure that structural execution matches design intent — catching deviations early so they don't become costly corrections.",
    points: ["Periodic site visits", "Structural quality checks", "Deviation identification", "Contractor guidance"],
    sectors: ["All typologies"],
  },
  {
    icon: Sparkles,
    num: "07",
    t: "Vedic Vastu Consultancy",
    tagline: "Traditional spatial alignment, responsibly applied.",
    d: "Vedic Vastu consultancy services by our Managing Partner, P. Vandana Rao — aligning plot orientation, room placement and spatial flow with traditional Vaasthu Shastra principles.",
    points: ["Plot & site evaluation", "Architectural plan alignment", "Direction & zone analysis", "Remedies & practical advice"],
    sectors: ["Residential", "Commercial", "Religious"],
  },
];

export const structures = [
  "Villas","Multi-storied Apartments","Commercial Complexes","Industries",
  "Theatres","Temples & Religious Structures","Hotels & Hospitality",
  "College Campuses","Hostels & Guest Houses","Bridges","Pre-Stressed Structures",
];

export const upcomingProjects = [
  {
    title: "Commercial Complex",
    location: "Banjara Hills, Road No. 10",
  },
  {
    title: "Commercial Complex",
    location: "Ghatkesar",
  },
  {
    title: "Commercial Complex",
    location: "Gachibowli",
  },
  {
    title: "Pharma Building",
    location: "Shamirpet",
  },
  {
    title: "Airport Project (TAAIL)",
    location: "Madurai, Tamil Nadu",
  },
  {
    title: "Residential Building",
    location: "Vanasthali Puram",
  },
  {
    title: "Residential Apartment",
    location: "Madhapur",
  },
  {
    title: "Commercial cum Residential",
    location: "Madhapur",
  },
  {
    title: "Service Apartment",
    location: "Madhapur",
  },
  {
    title: "VBIT Engineering College",
    location: "Avushapur",
  },
] as const;

 

export const smallServices = [
  { icon: Ruler, t: "Structural Design", d: "RCC, Steel & composite design from concept to detail drawings.", tag: "Core" },
  { icon: Building2, t: "RCC Structures", d: "Multi-storied apartments, commercial complexes, hostels and conventional halls.", tag: "Speciality" },
  { icon: HardHat, t: "Steel & PEB Structures", d: "Pre-engineered halls, industrial sheds and long-span steel structures up to 63ft span.", tag: "Industrial" },
  { icon: ClipboardCheck, t: "Project Consultancy", d: "We coordinate between all project stakeholders — builder, architect and landlord — to keep the project moving smoothly without obstacles, delays or miscommunication.", tag: "Advisory" },
  { icon: Compass, t: "Site Supervision", d: "On-site engineering oversight through the full construction lifecycle.", tag: "Oversight" },
  { icon: Sparkles, t: "Vedic Vastu Consultancy", d: "Plans aligned with traditional Vastu principles by our certified consultant.", tag: "Advisory" },
];

export const partners = [
  "Hafeez Contractor","Parushram Reddy","P. Sudheer Reddy","Vamshiram Builders",
  "Aparna Constructions","Ashoka Builders","Vinod Bachala","Debasish Roy",
  "Anwar Aziz","Genesis","Anchuri & Anchuri","Aslam Architects","Nirup Reddy",
  "Maheswari Builders","Bhavya Constructions","Radha Realty Infra","Modi Builders",
  "My Home Construction","Reliance Builders","ARK Builders",
];

export const testimonials = [
  { q: "Their structural detailing gave us confidence on a complex long-span hall — calm, precise, and on schedule.", a: "Architect, Hyderabad" },
  { q: "A practice that treats every drawing like it bears weight. Aditi has been our structural partner for years.", a: "Builder, Jubilee Hills" },
  { q: "From permissions to site supervision — one continuous, dependable thread.", a: "Developer, Kacheguda" },
];

 export const commonQuestions = [
    { q: "When do you come in?", a: "Before construction begins — ideally during plot planning, before architectural drawings are finalised and before permissions are applied for." },
    { q: "How long does a structural design take?", a: "For a standard residential project, typically 2–3 weeks from brief to GFC drawings. Complex commercial or PEB structures may require more time." },
    { q: "Do you handle building permissions?", a: "Yes — we manage end-to-end GHMC, HMDA and DTCP approvals, from drawing preparation to document submission and follow-up." },
    { q: "What is your coverage area?", a: "Primarily Hyderabad and Telangana, with select projects in Andhra Pradesh (Kalikiri Campus) and Tamil Nadu (Madurai Airport)." },
    { q: "Do you offer Vaasthu consultancy?", a: "Yes, Vaasthu consultancy is offered by our Managing Partner P. Vandana Rao — including plot evaluation, plan alignment and practical remedies." },
  ];

  export const projectTypes = [
  "Residential",
  "Villa",
  "Apartment",
  "Commercial",
  "Industrial",
  "Theatre",
  "Hotel",
  "Institutional",
  "Other",
] as const;
