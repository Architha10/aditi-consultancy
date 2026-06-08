
import type { Project } from "@/types/project";

import pBegumpet from "@/assets/projects/commercial-begumpet.jpg";
import pLBNagar from "@/assets/projects/residential-lbnagar.jpg";
import pKalyan from "@/assets/projects/apartment-kalyannagar.jpg";
import pHostel from "@/assets/projects/jntu-hostel.jpg";
import pGuest from "@/assets/projects/jntu-guesthouse.jpg";
import pLibrary from "@/assets/projects/jntu-library.jpg";
import pChurch from "@/assets/projects/methodist-church.jpg";
import pJubilee from "@/assets/projects/jubilee-commercial.jpg";
import pSaroor from "@/assets/projects/saroornagar-apartment.jpg";
import pBrewdog from "@/assets/projects/brewdog-hotel.jpg";
import pTemple from "@/assets/projects/vijaya-ganapathi-temple.jpg";
import pChampapet from "@/assets/projects/champapet-apartment.jpg";
import pKacheguda from "@/assets/projects/kacheguda-mixed.jpg";
import pTolichowki from "@/assets/projects/tolichowki-residential.jpg";
import pGadwal from "@/assets/projects/gadwal-apartment.jpg";
import pDilshuk from "@/assets/projects/dilshuk-nagar-residential.jpg";
import pAlwal from "@/assets/projects/alwal-apartment.jpg";

// ─── Sri Chalapathi Residency gallery ────────────────────────────────────────

import srImg35 from "@/assets/projects/sri-chalapathi-residency/img35.jpg";
import srImg41 from "@/assets/projects/sri-chalapathi-residency/img41.jpg";
import srImg44 from "@/assets/projects/sri-chalapathi-residency/img44.jpg";
import srImg47 from "@/assets/projects/sri-chalapathi-residency/img47.jpg";
import srImg54 from "@/assets/projects/sri-chalapathi-residency/img54.jpg";
import srImg57 from "@/assets/projects/sri-chalapathi-residency/img57.jpg";
import srImg62 from "@/assets/projects/sri-chalapathi-residency/img62.jpg";
import srImg65 from "@/assets/projects/sri-chalapathi-residency/img65.jpg";
//
// ─── Feba Homes gallery ───────────────────────────────────────────────────────
import avImg2 from "@/assets/projects/anvaya-villas/img2.jpg";
import avImg3 from "@/assets/projects/anvaya-villas/img3.jpg";
import avImg4 from "@/assets/projects/anvaya-villas/img4.jpg";
import avImg5 from "@/assets/projects/anvaya-villas/img5.jpg";
import avImg6 from "@/assets/projects/anvaya-villas/img6.jpg";
import avImg7 from "@/assets/projects/anvaya-villas/img7.jpg";
import avImg8 from "@/assets/projects/anvaya-villas/img8.jpg";
import avImg9 from "@/assets/projects/anvaya-villas/img9.jpg";
import avImg10 from "@/assets/projects/anvaya-villas/img10.jpg";
import avImg11 from "@/assets/projects/anvaya-villas/img11.jpg";

// ── FEBA HOMES GALLERY ──────────────────────────────────────────────────────
import fhImg1 from "@/assets/projects/feba-homes/img1.jpg";
import fhImg2 from "@/assets/projects/feba-homes/img2.jpg";
import fhImg3 from "@/assets/projects/feba-homes/img3.jpg";
import fhImg4 from "@/assets/projects/feba-homes/img4.jpg";
import fhImg5 from "@/assets/projects/feba-homes/img5.jpg";
import fhImg6 from "@/assets/projects/feba-homes/img6.jpg";
import fhImg7 from "@/assets/projects/feba-homes/img7.jpg";
import fhImg8 from "@/assets/projects/feba-homes/img8.jpg";
import fhImg9 from "@/assets/projects/feba-homes/img9.jpg"

import pApcpdclOffice from "@/assets/projects/APCPDCL/coporate_office_hyd.jpeg";
import pApcpdclClub from "@/assets/projects/APCPDCL/recreation_club_hyd.jpeg";

import pHowardSchool     from "@/assets/projects/howard_lake_view_school_gachibowli.jpeg";
import pNalagandla       from "@/assets/projects/nalagandla_elevation.jpeg";
import pPvSatishGodavari from "@/assets/projects/pv_satish_kumar_east_godavari.jpeg";
import pRamanthpur       from "@/assets/projects/ramanthpur_elevation.jpeg";
import pResidentialDsnr  from "@/assets/projects/residential_apartment_dsnr.jpeg";
import pResidentialHyd   from "@/assets/projects/residential_apartment_hyd.jpeg";
import pBuildingAttapur  from "@/assets/projects/residential_building_attapur_hyd.jpeg";
import pBuildingBhel     from "@/assets/projects/residential_building_bhel_hyd.jpeg";
import pBuildingGach     from "@/assets/projects/residential_building_gachibowli_hyd.jpeg";
import pBuildingRam      from "@/assets/projects/residential_building_ramanthpur.jpeg";
import pBuildingSainik   from "@/assets/projects/residential_building_sainikpuri_secunderabad.jpeg";
import pBuildingSecunder from "@/assets/projects/residential_building_secunderabad.jpeg";

export const projectsData: Project[] = [

  // ── COMPLETED ──────────────────────────────────────────────────────────────

  {
    title: "Vijaya Ganapathi Temple",
    loc: "Kukatpally, Hyderabad",
    cat: "Religious",
    status: "Completed",
    year: "2014",
    description:
      "A devotional landmark designed with traditional Dravidian proportions, this temple brings together ornamental stone-work and robust structural engineering. The gopuram (tower) rises 38 ft, fully load-bearing over a reinforced concrete core concealed within the traditional masonry shell.",
    highlights: [
      "38 ft load-bearing Gopuram with RC core",
      "Traditional Panchaloha idol platform with isolated footing",
      "Rainwater harvesting integrated into the courtyard drainage",
      "Natural ventilation strategy across the mandapam",
    ],
    gallery: [
      { src: pTemple, caption: "Front elevation — Gopuram" },
    ],
  },

  {
    title: "Commercial Complex",
    loc: "Begumpet, Hyderabad",
    cat: "Commercial",
    status: "Completed",
    description:
      "A high-footfall retail and office complex in the commercial heart of Begumpet. The structure uses a flat-slab framing system to maximise floor-to-ceiling heights for the ground-floor retail while maintaining efficient column grids above.",
    highlights: [
      "Flat-slab framing — column-free retail floor plate",
      "Basement parking with 2-level ramp access",
      "Façade designed for solar shading — reduces AC load by ~18 %",
    ],
    gallery: [
      { src: pBegumpet, caption: "Street-facing façade" },
    ],
  },

  {
    title: "Residential Building",
    loc: "L.B. Nagar, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A mid-rise residential building conceived for a dense urban plot. Careful site planning ensured maximum light to all dwelling units while complying with GHMC setback norms.",
    highlights: [
      "Cross-ventilation in all units via opposed openings",
      "Earthquake-resistant ductile detailing (Zone II)",
      "Stilt parking + 6 residential floors",
    ],
    gallery: [
      { src: pLBNagar, caption: "Façade view" },
    ],
  },
  {
    title: "APCPDCL Corporate Office",
    loc: "Mint Compound, Hyderabad",
    cat: "Commercial",
    status: "Completed",
    description:
      "A modern administrative corporate headquarters designed for the power distribution sector. The facility integrates heavy-duty electrical infrastructure, an energy-efficient structural envelope, and specialized command operations layouts.",
    highlights: [
      "Custom engineering layouts for power monitoring command centers",
      "High-performance curtain wall system for optimized natural daylighting",
      "Advanced HVAC zoning integrated with corporate administrative footprints",
    ],
    gallery: [
      { src: pApcpdclOffice, caption: "Corporate office — front elevation rendering" },
    ],
  },

  {
    title: "APCPDCL Recreation Club",
    loc: "Hyderabad, Telangana",
    cat: "Commercial",
    status: "Completed",
    description:
      "A community and wellness facility dedicated to personnel. Featuring a structural layout optimized for broad spans, incorporating indoor athletic facilities, community spaces, and recreational decks.",
    highlights: [
      "Long-span spatial layout for multi-purpose indoor sports zones",
      "Integrated structural drainage and plumbing for community facilities",
      "Extensive external amenity deck and pavilion layouts",
    ],
    gallery: [
      { src: pApcpdclClub, caption: "Recreation club — conceptual perspective" },
    ],
  },
  {
    title: "Anvaya Villas",
    loc: "Gachibowli, Hyderabad",
    cat: "Residential",
    status: "Ongoing",
    description:
      "An exclusive enclave of premium ultra-luxury gated community villas. Engineered with expansive double-height living zones, sustainable local stone accents, and high-performance glass curtains that prioritize thermal comfort and spatial fluidity.",
    highlights: [
      "Premium independent triplex structural layout",
      "Double-height entry foyer with custom structural glass facades",
      "Integrated rooftop solar grid systems and green structural decks",
      "Comprehensive structural plumbing with private sub-sump loops",
    ],
    gallery: [
      { src: avImg2, caption: "Villa Type A — Conceptual Perspective" },
      { src: avImg3, caption: "Main Boulevard View & Architectural Spine" },
      { src: avImg4, caption: "North-East Elevation Layout" },
      { src: avImg5, caption: "Double-Height Lounge Structural Detailing" },
      { src: avImg6, caption: "Premium Suite Corner Balcony Projections" },
      { src: avImg7, caption: "Landscape Integration & Amenity Deck" },
      { src: avImg8, caption: "Villa Type B — West-Facing Elevation" },
      { src: avImg9, caption: "Private Courtyard Structural Cross-Section" },
      { src: avImg10, caption: "Night Illumination & Facade Study" },
      { src: avImg11, caption: "Site Plan and Structural Gating Layout" },
    ],
  },

  {
    title: "Feba Homes",
    loc: "Komatikunta, Hyderabad",
    cat: "Residential",
    status: "Ongoing",
    description:
      "A thoughtfully planned community of multi-family residences optimized for contemporary urban environments. Features structural frame advancements designed to streamline construction timelines while maintaining high seismic resilience and thermal envelope optimization.",
    highlights: [
      "Optimized load-bearing configuration using premium structural frames",
      "Deep-set corner window alcoves for passive structural solar shading",
      "Dedicated stilt parking deck configured for electric vehicle utility integration",
      "Advanced water conservation matrix utilizing gray-water processing infrastructure",
    ],
    gallery: [
      { src: fhImg1, caption: "Block Alpha — External Street Frontage" },
      { src: fhImg2, caption: "Typical Unit Floorplan Structural Allocation" },
      { src: fhImg3, caption: "South-West Exterior Elevation Plan" },
      { src: fhImg4, caption: "Interior Layout Maximization Blueprint" },
      { src: fhImg5, caption: "Central Courtyard Connectivity Elevation" },
      { src: fhImg6, caption: "Stilt Utility Parking Matrix & Foundations" },
      { src: fhImg7, caption: "Penthouse Level Framework & Pergola Detail" },
      { src: fhImg8, caption: "Completed Structural Envelope Rendering" },
      { src: fhImg9, caption: "Completed Structural Envelope Rendering" },
    ],
  },
  {
    title: "Howard Lake View School",
    loc: "Gachibowli, Hyderabad",
    cat: "Educational",
    status: "Completed",
    description:
      "A modern educational campus layout designed with expansive spatial corridors, optimized natural cross-ventilation, and dedicated outdoor recreational infrastructure overlooking local water bodies.",
    highlights: [
      "Optimized structural design for educational utility zoning",
      "Wide-span assembly and indoor learning environments",
      "Sustainable campus water-flow detailing and courtyard setups",
    ],
    gallery: [
      { src: pHowardSchool, caption: "Campus main wing — lake-facing elevation" },
    ],
  },

  {
    title: "Residential Development",
    loc: "Nalagandla, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A multi-story residential enclave utilizing a high-resilience frame structure. Features deep corner projections for optimized wind capture and premium textured facade alignments.",
    highlights: [
      "Engineered structural frame for heavy-load wind management",
      "Deep-set private balcony alignments maximizing spatial utility",
      "Dedicated stilt utility zones for multi-vehicle parking matrices",
    ],
    gallery: [
      { src: pNalagandla, caption: "Main block — architectural elevation rendering" },
    ],
  },

  {
    title: "P.V. Satish Kumar Residency",
    loc: "East Godavari, Andhra Pradesh",
    cat: "Residential",
    status: "Completed",
    description:
      "An expansive independent premium villa setup configured for coastal soil conditions. Features custom isolated foundation variants and deep-set perimeter shade balconies.",
    highlights: [
      "Custom foundation adjustments tailored for premium soil load-bearing consistency",
      "Wide-perimeter verandah configurations for passive structural cooling",
      "Traditional layout motifs combined with contemporary structural concrete design",
    ],
    gallery: [
      { src: pPvSatishGodavari, caption: "Front entrance and landscape perspective study" },
    ],
  },

  {
    title: "Ramanthpur Elevation Study",
    loc: "Ramanthpur, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A contemporary multi-family mid-rise setup focusing on premium architectural elevation framing and integrated ventilation conduits along tight urban plots.",
    highlights: [
      "Specialized front elevation layout with modern material paneling",
      "Optimized structural vertical column arrays to save floor space",
      "Integrated utilities track along the secondary perimeter axis",
    ],
    gallery: [
      { src: pRamanthpur, caption: "Modern paneling — conceptual elevation layout" },
    ],
  },

  {
    title: "Residential Apartment",
    loc: "Dilshuk Nagar, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A premium multi-family residential complex engineered to provide optimized floor-plate utilization inside highly consolidated metropolitan spaces.",
    highlights: [
      "Rigid moment-resisting RC framing array for seismic resilience",
      "High-efficiency vertical ducting paths for independent plumbing plumbing",
      "Underground deep rainwater collection systems",
    ],
    gallery: [
      { src: pResidentialDsnr, caption: "Main street-facing block perspective" },
    ],
  },

  {
    title: "Residential Apartment",
    loc: "Hyderabad, Telangana",
    cat: "Residential",
    status: "Completed",
    description:
      "A contemporary residential mid-rise development optimizing standard unit configurations. Employs advanced thermal load mitigation strategies through custom deep-set alcoves.",
    highlights: [
      "Optimized masonry layouts reducing radiant heating profiles",
      "Shared structural core for lifts, fire exits, and service conduits",
      "GHMC-compliant layout configuration with maximum stilt clearances",
    ],
    gallery: [
      { src: pResidentialHyd, caption: "Completed structural envelope facade overview" },
    ],
  },

  {
    title: "Residential Building",
    loc: "Attapur, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A boutique residential development featuring a reinforced frame structure designed to optimize floor plates on a mid-sized suburban block.",
    highlights: [
      "Isolated deep footing layout for maximum soil shifting protection",
      "Cantilevered external perimeter decks expanding unit footprints",
      "Integrated rooftop utility zoning and solar rack configurations",
    ],
    gallery: [
      { src: pBuildingAttapur, caption: "External perspective rendering" },
    ],
  },

  {
    title: "Residential Complex",
    loc: "BHEL, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A large-scale multi-family block catering to the industrial corridor housing demands. Engineered using standard component layouts to accelerate deployment timelines.",
    highlights: [
      "Standardized column matrix setup to optimize structural deployment velocity",
      "High-capacity domestic underground distribution tank systems",
      "Excellent natural perimeter daylight metrics on all dwelling faces",
    ],
    gallery: [
      { src: pBuildingBhel, caption: "Front elevation layout study" },
    ],
  },

  {
    title: "Gachibowli Residential Building",
    loc: "Gachibowli, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "An upscale urban residential tower optimized for professionals in the tech corridor. Integrates premium materials with space-maximizing cantilever structural extensions.",
    highlights: [
      "Heavy load-bearing floor slabs designed for flexible room partitioning",
      "Advanced acoustic dampening along primary high-traffic corridors",
      "Dedicated infrastructure lines mapped out for EV charging grids",
    ],
    gallery: [
      { src: pBuildingGach, caption: "Modern facade configuration study" },
    ],
  },

  {
    title: "Ramanthpur Residential Tower",
    loc: "Ramanthpur, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A mid-rise block optimizing multi-family domestic utility designs. Incorporates shared community terraces paired with localized water handling units.",
    highlights: [
      "Dual vertical distribution shafts for seamless maintenance accessibility",
      "Reinforced concrete framework engineered for regional soil dynamics",
      "High-clearance stilt configurations for commercial delivery vehicles",
    ],
    gallery: [
      { src: pBuildingRam, caption: "North-facing structural elevation view" },
    ],
  },

  {
    title: "Sainikpuri Residential Building",
    loc: "Secunderabad, Telangana",
    cat: "Residential",
    status: "Completed",
    description:
      "A low-density residential layout engineered to blend with the mature green landscapes of Sainikpuri, emphasizing natural limestone accents and deep sunshades.",
    highlights: [
      "Extended perimeter sunshade loops to prevent intense thermal gains",
      "Low-impact foundation footprints safeguarding adjacent old growth trees",
      "Integrated greywater collection channels mapped for landscape reuse",
    ],
    gallery: [
      { src: pBuildingSainik, caption: "Suburban architectural elevation study" },
    ],
  },

  {
    title: "Secunderabad Residential Complex",
    loc: "Secunderabad, Telangana",
    cat: "Residential",
    status: "Completed",
    description:
      "A grand multi-family development utilizing a dual-wing structural frame strategy to separate daytime living spaces from sleeping zones cleanly.",
    highlights: [
      "Dual-wing column orientation providing extensive cross-ventilation lines",
      "Centralized service elevator shaft core boosting structural rigidness",
      "Robust compound retaining system protecting against heavy monsoonal runoff",
    ],
    gallery: [
      { src: pBuildingSecunder, caption: "Main street presentation view" },
    ],
  },
  {
    title: "Residential Apartment",
    loc: "Kalyan Nagar, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A boutique apartment block with premium finishes and thoughtfully engineered services. The structural scheme uses a moment-resisting frame designed for long-term settlement control on the Kalyan Nagar sub-soil.",
    highlights: [
      "Moment-resisting RC frame on raft foundation",
      "Rainwater harvesting — 10,000 L underground sump",
      "Concealed plumbing + PVC-coated conduit electrical",
    ],
    gallery: [
      { src: pKalyan, caption: "Apartment block — elevation" },
    ],
  },

  {
    title: "JNTU Boys Hostel",
    loc: "JNTU Kalikiri Campus, Andhra Pradesh",
    cat: "Educational",
    status: "Completed",
    year: "2018",
    description:
      "Part of the JNTU Kalikiri campus expansion, this 200-bed hostel block accommodates undergraduate students with room types from single to four-bed occupancy. The building is oriented east–west to reduce solar heat gain on the longer façades.",
    highlights: [
      "200-bed capacity across G+3 floors",
      "East–west orientation for passive solar control",
      "Common rooms, study halls & mess block integrated",
      "Seismic zone III detailing throughout",
    ],
    gallery: [
      { src: pHostel, caption: "Main block — north elevation" },
    ],
  },

  {
    title: "JNTU Guest House",
    loc: "JNTU Kalikiri Campus, Andhra Pradesh",
    cat: "Educational",
    status: "Completed",
    year: "2018",
    description:
      "An executive guest-house facility designed for faculty, visiting dignitaries and conference guests on the JNTU Kalikiri campus. Landscaped courtyards and verandahs provide a calm contrast to the academic buildings nearby.",
    highlights: [
      "12 en-suite guest rooms + conference hall",
      "Courtyard garden with drip-irrigation landscaping",
      "Separate entrance and security from hostel zone",
    ],
    gallery: [
      { src: pGuest, caption: "Guest house — entrance block" },
    ],
  },

  {
    title: "JNTU Library Building",
    loc: "JNTU Kalikiri Campus, Andhra Pradesh",
    cat: "Educational",
    status: "Completed",
    year: "2018",
    description:
      "The central library anchors the JNTU Kalikiri campus. Large column-free reading halls were achieved with long-span prestressed beams, and roof monitors provide diffuse daylight deep into the stacks.",
    highlights: [
      "Column-free reading hall — 18 m clear span",
      "Roof monitors for diffuse daylighting",
      "Seismic zone III compliance",
      "Capacity: 500 readers simultaneously",
    ],
    gallery: [
      { src: pLibrary, caption: "Library building — main façade" },
    ],
  },

  {
    title: "Methodist Church",
    loc: "Mehdipatnam, Hyderabad",
    cat: "Religious",
    status: "Completed",
    description:
      "A contemporary expression of ecclesiastical architecture, this church seats 350 worshippers beneath a clear-span barrel-vaulted nave. The structural solution uses tied arches to eliminate thrust on the perimeter walls.",
    highlights: [
      "Tied arch nave — 14 m clear span",
      "Natural cross-ventilation strategy",
      "Stained glass liturgical lighting on east gable",
      "Seating capacity: 350",
    ],
    gallery: [
      { src: pChurch, caption: "Nave and altar — interior" },
    ],
  },

  {
    title: "Commercial Complex",
    loc: "Jubilee Hills, Hyderabad",
    cat: "Commercial",
    status: "Completed",
    description:
      "An upscale commercial development in Jubilee Hills catering to premium retail and professional office tenants. The podium-and-tower typology separates retail at grade from the office floors above.",
    highlights: [
      "Podium retail (G+1) + 4 office floors above",
      "2-level basement parking — 60 car capacity",
      "High-speed lift lobby with double-height entrance",
    ],
    gallery: [
      { src: pJubilee, caption: "Commercial complex — street view" },
    ],
  },

  {
    title: "Residential Apartment",
    loc: "Saroor Nagar, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A value-residential apartment project delivering quality construction at an accessible price point in the growing Saroor Nagar corridor. Efficient structural layout kept material costs low without compromising on safety.",
    highlights: [
      "Efficient column grid — minimal beam drops",
      "G+4 floors with stilt parking",
      "GHMC-approved layout with legal OC",
    ],
    gallery: [
      { src: pSaroor, caption: "Front elevation" },
    ],
  },

  // ── ONGOING ────────────────────────────────────────────────────────────────

  {
    title: "Sri Chalapathi Residency",
    loc: "Bhanoor Village, Telangana",
    cat: "Residential",
    status: "Completed",
    description:
      "A modern standalone villa design engineered with a striking cantilevered structure and premium multi-textured elevations. The architectural plan balances a private residential footprint with open terrace architecture, offering alternative exterior configurations featuring deep charcoal framing and warm terracotta wood-cladding options.",
    highlights: [
      "Cantilevered corner balconies maximizing panoramic views",
      "Rooftop wooden pergola system integrated with green landscaping",
      "Multi-elevation architectural rendering (East, North, and South views)",
      "Engineered compound wall detailing with integrated low-profile entry gate",
    ],
    gallery: [
      { src: srImg35, caption: "Option 1: Modern Charcoal — East Elevation" },
      { src: srImg41, caption: "Option 1: Modern Charcoal — North Elevation" },
      { src: srImg44, caption: "Option 1: Modern Charcoal — South Elevation" },
      { src: srImg47, caption: "Option 1: Modern Charcoal — Perspective View" },
      { src: srImg54, caption: "Option 2: Warm Terracotta — East Elevation" },
      { src: srImg57, caption: "Option 2: Warm Terracotta — North Elevation" },
      { src: srImg62, caption: "Option 2: Warm Terracotta — South Elevation" },
      { src: srImg65, caption: "Option 2: Warm Terracotta — Perspective View" },
    ],
  },

  {
    title: "Brewdog Hotel",
    loc: "Jubilee Hills, Hyderabad",
    cat: "Hospitality",
    status: "Completed",
    description:
      "A boutique hospitality project bringing the Brewdog brand to Hyderabad. The structural package includes a dramatic double-height lobby, rooftop bar slab, and a cantilevered mezzanine over the main bar floor.",
    highlights: [
      "Double-height lobby with 8 m clear ceiling",
      "Cantilevered mezzanine — 4.5 m projection",
      "Rooftop bar + service slab with live-load for crowd occupancy",
      "Acoustic isolation between guest rooms and bar floors",
    ],
    gallery: [
      { src: pBrewdog, caption: "Concept elevation — Jubilee Hills" },
    ],
  },

  {
    title: "Residential Apartment",
    loc: "Champapet, Hyderabad",
    cat: "Residential",
    status: "Completed",
    gallery: [
      { src: pChampapet, caption: "Under-construction view" },
    ],
  },

  {
    title: "Commercial cum Residential",
    loc: "Kacheguda, Hyderabad",
    cat: "Commercial",
    status: "Completed",
    note: "Cellar + Stilt 1 + Stilt 2 + 9 Floors",
    description:
      "A large mixed-use tower in the dense Kacheguda locality. The lower three levels are commercial (retail/office), with 9 residential floors above on a shared structural core. Deep basement on a constrained site required sheet-pile retention.",
    highlights: [
      "Sheet-pile retention for cellar excavation",
      "Transfer slab at Stilt 2 — commercial to residential transition",
      "Core-wall + flat-slab system for residential floors",
      "Total 11 storeys above ground",
    ],
    gallery: [
      { src: pKacheguda, caption: "Mixed-use block — street elevation" },
    ],
  },

  {
    title: "Residential Building",
    loc: "Tolichowki, Hyderabad",
    cat: "Residential",
    status: "Completed",
    gallery: [
      { src: pTolichowki, caption: "Under construction" },
    ],
  },

  {
    title: "Residential Apartment",
    loc: "Gadwal, Telangana",
    cat: "Residential",
    status: "Completed",
    description:
      "An affordable residential project in the Gadwal district designed for local-market demand. Black cotton soil conditions on-site required under-reamed pile foundations for consistent long-term settlement.",
    highlights: [
      "Under-reamed pile foundation — black cotton soil",
      "G+3 floors, 12 units",
      "Locally sourced materials to reduce project cost",
    ],
    gallery: [
      { src: pGadwal, caption: "Apartment block — elevation" },
    ],
  },

  // ── UPCOMING ───────────────────────────────────────────────────────────────

  {
    title: "Residential Building",
    loc: "Dilshuk Nagar, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "A new residential development in the established Dilshuk Nagar neighbourhood. Structural design work is currently underway; foundation type to be confirmed after soil investigation report.",
    gallery: [
      { src: pDilshuk, caption: "Concept — façade study" },
    ],
  },

  {
    title: "Residential Apartment",
    loc: "Alwal, Hyderabad",
    cat: "Residential",
    status: "Completed",
    description:
      "An upcoming mid-rise apartment in the Alwal growth corridor north of Hyderabad. Preliminary structural scheme and load calculations are in progress.",
    gallery: [
      { src: pAlwal, caption: "Concept elevation" },
    ],
  },
];

// ─── Upcoming pipeline (list-only, no card/modal) ─────────────────────────────
export const upcomingPipeline = [
  { t: "Commercial Complex", loc: "Banjara Hills, Road No. 10" },
  { t: "Commercial Complex", loc: "Ghatkesar" },
  { t: "Commercial Complex", loc: "Gachibowli" },
  { t: "Pharma Building", loc: "Shamirpet" },
  { t: "Airport Project (TAAIL)", loc: "Madurai, Tamil Nadu" },
  { t: "Residential Building", loc: "Vanasthali Puram" },
  { t: "Residential Apartment", loc: "Madhapur" },
  { t: "Commercial cum Residential", loc: "Madhapur" },
  { t: "Service Apartment", loc: "Madhapur" },
  { t: "VBIT Engineering College", loc: "Avushapur" },
];

export type Cat =
  | "All"
  | "Commercial"
  | "Residential"
  | "Educational"
  | "Religious"
  | "Hospitality"|"Farm Houses";
export type Status = "Completed" | "Ongoing" | "Upcoming";

export const cats: Cat[] = [
  "All",
  "Commercial",
  "Residential",
  "Educational",
  "Religious",
  "Hospitality",
  "Farm Houses",
];

export const statusStyle: Record<
  Status,
  { bg: string; color: string; dot: string }
> = {
  Completed: { bg: "rgba(21,77,87,0.10)", color: "#154D57", dot: "#154D57" },
  Ongoing: { bg: "rgba(183,160,139,0.20)", color: "#8a6f56", dot: "#B7A08B" },
  Upcoming: { bg: "rgba(21,77,87,0.06)", color: "#154D57", dot: "#B7A08B" },
};

