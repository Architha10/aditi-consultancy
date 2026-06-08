import { Building2, ClipboardCheck, Compass, DraftingCompass, Factory, HardHat, Ruler, ShieldCheck, Sparkles } from "lucide-react";

export const site = {
  name: "Aditi Consultants",
  tagline1: "Building Trust",
  tagline2: "Designing Strength",
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
  {
    y: "2001",
    t: "Founded in Hyderabad",
    d: "Aditi Consultants was established with two projects and a belief that every successful building begins with a strong structural foundation."
  },
  {
    y: "2003",
    t: "Bhavani Island Resort",
    d: "Provided structural design and engineering consultancy for the resort development at Bhavani Island, Vijayawada."
  },
  {
    y: "2006",
    t: "Residential Apartment Projects",
    d: "Delivered structural design consultancy for major residential apartment developments at Red Hills and Kalyan Nagar, covering approximately 3,000 square yards."
  },
  {
    y: "2008",
    t: "First Long-Span RCC Structure",
    d: "Engineered a 63-foot pillar-to-pillar RCC structure in the Moula Ali Industrial Area, marking a significant technical milestone for the practice."
  },
  {
    y: "2014",
    t: "Campus Engineering",
    d: "Designed and engineered 18 buildings for JNTU College of Engineering, Kalikiri, including boys' and girls' hostels, professors' and assistant professors' quarters, a guest house, library, and other campus facilities."
  },
  {
    y: "2016",
    t: "Temple Engineering",
    d: "Provided architectural planning and structural design for the Shri Krishna Bhagavan Temple, Mathura, blending traditional architecture with modern engineering."
  },
  {
    y: "2018",
    t: "Religious Infrastructure",
    d: "Delivered structural design consultancy for the Vijaya Ganapathi Temple at Kukatpally, Hyderabad."
  },
  {
    y: "2019",
    t: "Healthcare & Hospitality",
    d: "Provided structural design services for the Brewdog Hotel in Jubilee Hills and Delta Hospital in Rajahmundry."
  },
  {
    y: "2021",
    t: "Record Long-Span RCC Structure",
    d: "Engineered a landmark 90-foot pillar-to-pillar RCC church structure at Chandrakal, demonstrating advanced long-span structural capability."
  },
  {
    y: "Today",
    t: "26+ Years of Practice",
    d: "Continuing to deliver structural and project consultancy services across residential, commercial, educational, industrial, religious, healthcare, and hospitality sectors."
  }
];

export const architects = [
  "Anil Hasan", "David", "Rachitha", "N. Srinivas Chary",
  "Mahidhar", "Uday Shankar", "Balaji", "D. Satyanarayana", "M. Srinivas Chary", "Madhu",
  , "P. Ram Mohan", "Satish Bandari", "Shekhar",
];

export const builders = [
  "Jain Builders", "VR Associates",
  "Hari Villu Constructions",
];

export const clients = [
  "Nalanda Schools", "Delhi World School",
  "Arundoya Printers", "Rajeev Reddy", "TGSPDCL"
];

export const services = [
  {
    icon: DraftingCompass,
    num: "01",
    t: "Architectural Planning",
    tagline: "Thoughtful spaces designed for function and aesthetics.",
    d: "Comprehensive architectural planning services that transform ideas into practical, efficient and visually appealing spaces. We develop layouts, floor plans and design concepts that balance functionality, aesthetics and project requirements.",
    points: [
      "Conceptual design & space planning",
      "Floor plans & layout development",
      "Architectural components(BOQ)",
      "Functional & aesthetic optimization",
    ],
    sectors: ["Residential", "Commercial", "Institutional"],
  },
  {
    icon: Ruler,
    num: "02",
    t: "Structural Design",
    tagline: "From concept to construction drawings.",
    d: "Complete structural design for all building typologies — from the first layout sketch to fully coordinated GFC drawings with calculations, detailing and BOQ-ready specifications.",
    points: ["Concept to GFC drawings", "Earthquake & wind load analysis", "BOQ-ready steel & concrete detailing", "Coordination with client"],
    sectors: ["Residential", "Commercial", "Industrial"],
  },
  {
    icon: Building2,
    num: "03",
    t: "RCC Structures",
    tagline: "Reinforced concrete expertise, every typology.",
    d: "Deep expertise in RCC design for villas, multi-storied apartments, commercial complexes, theatres, temples and industrial buildings. Includes long-span design — our record is a 90-foot pillar-to-pillar structure for church at Chandrakal.",
    points: ["Long-span design up to 90 ft", "High-rise structural stability analysis", "Design the footings depending upon soil report", "Pre-stressed concrete elements"],
    sectors: ["Apartments", "Commercial", "Religious", "Hospitality"],
  },
  {
    icon: HardHat,
    num: "04",
    t: "Steel Structures",
    tagline: "Hot-rolled frames built for economy & strength.",
    d: "Steel-frame buildings, mezzanines and industrial structures designed for structural performance, construction economy and long service life.",
    points: ["Hot-rolled structural steel", "Connection & joint design", "Erection sequence planning", "Composite beam systems"],
    sectors: ["Industrial", "Commercial", "Institutional"],
  },
  {
    icon: Factory,
    num: "05",
    t: "PEB Structures",
    tagline: "Pre-engineered buildings & their RCC foundations.",
    d: "Pre-Engineered Building structural design and RCC foundation engineering for large industrial halls, warehouses and logistics sheds — including crane gantry girder and long-span roof systems.",
    points: ["PEB foundation design", "Crane gantry systems", "Long-span industrial sheds", "RCC anchor bolt design"],
    sectors: ["Industrial", "Warehousing", "Logistics"],
  },
  {
    icon: ClipboardCheck,
    num: "06",
    t: "Project Consultancy",
    tagline: "One thread connecting builder, architect & owner.",
    d: "We coordinate between all project stakeholders — builder, architect and landlord — to keep the project moving smoothly without obstacles, delays or miscommunication.",
    points: ["Stakeholder coordination", "Schedule & milestone management", "Technical risk advisory", "Builder–architect coordination"],
    sectors: ["All typologies"],
  },
  {
    icon: ShieldCheck,
    num: "07",
    t: "Building Permissions",
    tagline: "GHMC, HMDA & DTCP approvals, end to end.",
    d: "We handle building permission applications with the full suite of Telangana and Andhra Pradesh's regulatory bodies — from drawing preparation to document submission and approval follow-through.",
    points: ["GHMC / HMDA / DTCP approvals", "Permission drawing preparation", "Document compilation", "Approval follow-up"],
    sectors: ["Residential", "Commercial", "Institutional"],
  },
  {
    icon: Sparkles,
    num: "08",
    t: "Vedic Vastu Consultancy",
    tagline: "Traditional spatial alignment, responsibly applied.",
    d: "Vedic Vastu consultancy services by our Managing Partner, P. Vandana Rao — aligning plot orientation, room placement and spatial flow with traditional Vaasthu Shastra principles.",
    points: ["Plot & site evaluation", "Architectural plan alignment", "Direction & zone analysis", "Remedies & practical advice"],
    sectors: ["Residential", "Commercial", "Religious"],
  },
];

export const structures = [
  "Gated Community Villas", "Multi-storied Apartments", "Commercial Complexes", "Industrial Buildings",
  "Multiplex Theatres", "Temples & Religious Structures", "Hotels & Hospitality",
  "Educational Institutions", "Hostels & Guest Houses", "Farm Houses", "Resorts"
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
  {
    icon: DraftingCompass,
    t: "Architectural Planning",
    d: "Creative and functional architectural planning with efficient space utilization and aesthetic design.",
    tag: "Design",
  },
  { icon: Ruler, t: "Structural Design", d: "RCC, Steel & composite design from concept to detail drawings.", tag: "Core" },
  {
    icon: ShieldCheck,
    t: "Building Permissions",
    d: "End-to-end assistance for GHMC, HMDA and DTCP approvals, submissions and clearances.",
    tag: "Compliance",
  },
  { icon: Building2, t: "RCC Structures", d: "Multi-storied apartments, commercial complexes, hotels, conventional halls etc.", tag: "Speciality" },
  {
    icon: HardHat,
    t: "Steel Structures",
    d: "Steel-frame buildings, mezzanines and industrial structures designed for strength and economy.",
    tag: "Industrial",
  },
  {
    icon: Factory,
    t: "PEB Structures",
    d: "Pre-engineered buildings, warehouses and industrial sheds with RCC foundation design.",
    tag: "Industrial",
  },
  { icon: ClipboardCheck, t: "Project Consultancy", d: "We coordinate between all project stakeholders — builder, architect and landlord — to keep the project moving smoothly without delays and miscommunication.", tag: "Advisory" },
  { icon: Sparkles, t: "Vedic Vastu Consultancy", d: "Plans aligned with traditional Vastu principles by our certified consultant.", tag: "Advisory" },
];

export const partners = [
  "Jain Builders", "VR Associates",
  "Hari Villu Constructions",
  "Anil Hasan", "David", "Rachitha", "N. Srinivas Chary",
  "Mahidhar", "Uday Shankar", "Balaji", "D. Satyanarayana", "M. Srinivas Chary", "Madhu"
  , "P. Ram Mohan", "Satish Bandari", "Shekhar", "Nalanda Schools", "Delhi World School",
  "Arundoya Printers", "Rajeev Reddy", "TGSPDCL"
];

export const serviceHighlights = [
  "RCC Buildings",
  "Steel Structures",
  "PEB Structures",
  "Industrial Buildings",
] as const;

export const testimonials = [
  {
    q: "In the complex world of building construction, finding a consultant with genuine structural expertise is vital. Aditi Consultants has been an invaluable partner in our recent projects. Their ability to translate complicated engineering requirements into elegant, functional designs is unmatched. A special mention to Mr. P. Venkateshwara Rao, whose deep knowledge and meticulous attention to detail ensured that every phase of construction was both safe and aesthetically sound. If you are looking for a consultant who brings technical brilliance and a proactive approach to the table, I cannot recommend them highly enough.",
    a: "Rahul Sancheti • Capital, Plastoform Solutions",
  },
  {
    q: "Following a major fire incident at the Thomas Cook office in Saifabad, we sought structural assessment support. Mr. P. V. Rao promptly inspected the site, coordinated with the insurance team, and delivered a professional report that greatly assisted the insurance claim process. I strongly recommend Aditi Consultants for structural investigations and technical reports.",
    a: "Anup Agarwal • Shree Basai Enterprises / Choice Decors",
  },
  {
    q: "Mr. P. V. Rao facilitated an important industry connection with NFDB officials, leading to valuable discussions and ultimately our empanelment as an approved vendor. His professional network, commitment, and support created significant growth opportunities for our organization. We remain grateful for his contribution and guidance.",
    a: "Sirisha Adepu • ABROGATE Technologies Pvt. Ltd.",
  },
]

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

export const usps = [
  {
    glyph: "✦",
    label: "Vastu-Compliant by Design",
    desc: "Every architectural and structural plan is developed with Vastu Shastra principles integrated from the first drawing — not retrofitted afterward. Spatial orientation, room placements and structural axes are all Vastu-aligned, guided by our Managing Partner P. Vandana Rao.",
    tag: "Vedic Vastu",
  },
  {
    glyph: "⬡",
    label: "Large-Span Structural Expertise",
    desc: "Experienced in engineering large-span structures, ensuring adequate pillar spacing and robust structural performance to create open, flexible, and durable internal spaces.",
    tag: "90 ft Record Span",
  },
  {
    glyph: "◈",
    label: "Parking-Optimized Column Layouts",
    desc: "Columns are strategically positioned to maximize parking efficiency and vehicle maneuverability, reducing obstructions while maintaining structural strength and safety.",
    tag: "Space Optimization",
  },
] as const;