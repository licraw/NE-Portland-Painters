import type { StaticImageData } from "next/image";

import exteriorFrontLeft from "../ppe-estimate1/exterior-front-left.png";
import exteriorFrontRight from "../ppe-estimate1/exterior-front-right.JPEG";
import exteriorFront from "../ppe-estimate1/exterior-front.png";
import exteriorLeftBack from "../ppe-estimate1/exterior-left-back.JPEG";
import exteriorLeftFrontMain from "../ppe-estimate1/exterior-left-front-main.JPEG";
import exteriorLeftFront from "../ppe-estimate1/exterior-left-front.JPEG";
import exteriorLeft from "../ppe-estimate1/exterior-left.JPEG";
import exteriorRearLeft from "../ppe-estimate1/exterior-rear-left.JPEG";
import exteriorRearRight from "../ppe-estimate1/exterior-rear-right.JPEG";
import exteriorRearRight2 from "../ppe-estimate1/exterior-rear-right2.jpeg";
import exteriorRearTrellace from "../ppe-estimate1/exterior-rear-trellace.jpeg";
import exteriorRear from "../ppe-estimate1/exterior-rear.png";
import exteriorRightBack from "../ppe-estimate1/exterior-right-back.JPEG";
import exteriorRightFront from "../ppe-estimate1/exterior-right-front.JPEG";
import exteriorRight from "../ppe-estimate1/exterior-right.JPEG";
import frontDoor from "../ppe-estimate1/front-door.JPEG";
import frontPorchCeiling from "../ppe-estimate1/front-porch-ceiling.JPEG";
import frontPorchFascia from "../ppe-estimate1/front-porch-fascia.JPEG";
import leftSideDoor from "../ppe-estimate1/left-side-door.JPEG";
import satelliteOverviewWithMeasurements from "../ppe-estimate1/satellite-overview-with-reference-measurements.png";
import satelliteOverview from "../ppe-estimate1/satellite-overview.png";
import soffit from "../ppe-estimate1/soffit.jpeg";
import ppe2ExtFront from "../ppe-estimate2/ext-front.JPEG";
import ppe2ExtLeft from "../ppe-estimate2/ext-left.JPEG";
import ppe2ExtLeft2 from "../ppe-estimate2/ext-left2.JPEG";
import ppe2ExtRear from "../ppe-estimate2/ext-rear.JPEG";
import ppe2ExtRight from "../ppe-estimate2/ext-right.JPEG";
import ppe2FrontDoor from "../ppe-estimate2/front-door (1).JPEG";
import ppe2FrontDoor2 from "../ppe-estimate2/front-door2.JPEG";
import ppe2FrontSoffit from "../ppe-estimate2/front-soffit.JPEG";
import ppe2LeftSoffit from "../ppe-estimate2/left-soffit.JPEG";
import ppe2LockManual from "../ppe-estimate2/lock-manual.JPEG";
import ppe2RearSoffit from "../ppe-estimate2/rear-soffit.JPEG";
import ppe2RightSoffit from "../ppe-estimate2/right-soffit.JPEG";
import ppe3AiVision from "../ppe-estimate3/AI-render-customer-vision.jpeg";
import ppe3Bathroom1 from "../ppe-estimate3/bathroom1.jpeg";
import ppe3Bathroom2 from "../ppe-estimate3/bathroom2.jpeg";
import ppe3Bathroom3 from "../ppe-estimate3/bathroom3.jpeg";
import ppe3Bathroom4 from "../ppe-estimate3/bathroom4.jpeg";
import ppe3Bathroom5 from "../ppe-estimate3/bathroom5.jpeg";
import ppe3ColorSummary from "../ppe-estimate3/color-summary.jpeg";
import ppe4PorchFront from "../ppe-estimate4/porch-front.jpeg";
import ppe4PorchRight from "../ppe-estimate4/porch-right.jpeg";
import ppe4PorchRoof from "../ppe-estimate4/porch-roof.jpeg";
import ppe4PorchStairs from "../ppe-estimate4/porch-stairs.jpeg";
import ppe5PorchFloor1 from "../ppe-estimate5/porch-floor1.jpeg";
import ppe5PorchFloor2 from "../ppe-estimate5/porch-floor2.jpeg";
import ppe5PorchFloor3 from "../ppe-estimate5/porch-floor3.jpeg";
import ppe5PorchRailingRight from "../ppe-estimate5/porch-railing-right.jpeg";
import ppe5PorchStairsFull2 from "../ppe-estimate5/porch-stairs-full2.jpeg";
import ppe5PorchStairsFullView1 from "../ppe-estimate5/porch-stairs-full-view1.jpeg";
import ppe5PorchStairsLower from "../ppe-estimate5/porch-stairs-lower.jpeg";
import ppe5PorchStairsMidDetail from "../ppe-estimate5/porch-stairs-mid-detail.jpeg";
import ppe5PorchWithFrontHouseView from "../ppe-estimate5/porch-with-front-house-view.png";
import ppe5UpperPorchRailing from "../ppe-estimate5/upper-porch-railing.jpeg";

export type OfficeProjectDocument = {
  id: string;
  title: string;
  type: "Markdown" | "HTML" | "PDF";
  audience: "Customer-facing" | "Internal" | "Research";
  filename: string;
  description: string;
};

export type OfficeProjectImage = {
  title: string;
  filename: string;
  category:
    | "Satellite / measurements"
    | "Front"
    | "Right side"
    | "Rear"
    | "Left side"
    | "Interior"
    | "Inspiration / color reference"
    | "Condition / prep details";
  description: string;
  image: StaticImageData;
};

export type OfficeProject = {
  slug: string;
  title: string;
  status: string;
  address: string;
  customer?: string;
  reportsFolder: string;
  type: string;
  siding: string;
  workingPaintableBodyArea: string;
  paintCostAssumption: string;
  laborAssumption: string;
  crewPlan: string;
  summary: string;
  documents: OfficeProjectDocument[];
  images: OfficeProjectImage[];
  notes: string[];
};

export const officeProjects: OfficeProject[] = [
  {
    slug: "2201-ne-58th",
    title: "2201 NE 58th Ave Exterior Estimate",
    status: "Estimate Draft",
    address: "2201 NE 58th Ave, Portland, OR 97213",
    reportsFolder: "ppe-estimate1",
    type: "Exterior painting estimate",
    siding: "Aluminum",
    workingPaintableBodyArea: "~1,150 sq ft",
    paintCostAssumption: "$70/gallon",
    laborAssumption: "108 hrs at $25/hr/person equivalent",
    crewPlan: "3-person crew, ~4 days",
    summary:
      "Internal project record for the 2201 NE 58th Ave exterior painting estimate.",
    documents: [
      {
        id: "public-research-report",
        title: "Public Research Report",
        type: "Markdown",
        audience: "Research",
        filename: "2201-ne-58th-ave-portland-or-97213-exterior-paint-estimate.md",
        description:
          "Public-record and geometry research for the property and building envelope.",
      },
      {
        id: "site-evidence-report",
        title: "Site Evidence Report",
        type: "HTML",
        audience: "Research",
        filename: "exterior-paint-estimating-worksheet.html",
        description:
          "Estimator worksheet based on site photos, satellite reference, and field corrections.",
      },
      {
        id: "manual-calculation-report",
        title: "Manual Calculation Report",
        type: "Markdown",
        audience: "Research",
        filename: "manual-calc.md",
        description:
          "Elevation-by-elevation manual area calculation worksheet.",
      },
      {
        id: "manual-geometry-worksheet",
        title: "Manual Geometry Worksheet",
        type: "PDF",
        audience: "Research",
        filename: "Exterior Paint Estimate Geometry Worksheet.pdf",
        description:
          "PDF geometry worksheet supporting the manual calculation report.",
      },
      {
        id: "qa-reconciliation-report",
        title: "QA Reconciliation Report",
        type: "Markdown",
        audience: "Internal",
        filename: "qa-reconciliation-package.md",
        description:
          "Senior estimator QA comparison and reconciliation of project inputs.",
      },
      {
        id: "customer-facing-estimate",
        title: "Customer-Facing Estimate",
        type: "Markdown",
        audience: "Customer-facing",
        filename: "final-customer-facing-estimate.md",
        description:
          "Customer-ready exterior painting scope and estimate document.",
      },
      {
        id: "internal-estimating-rationale",
        title: "Internal Estimating Rationale",
        type: "Markdown",
        audience: "Internal",
        filename: "final-internal-estimating-rationale.md",
        description:
          "Internal estimating record, assumptions, measurements, and rationale.",
      },
    ],
    images: [
      {
        title: "Satellite overview",
        filename: "satellite-overview.png",
        category: "Satellite / measurements",
        description: "Satellite reference image for site orientation.",
        image: satelliteOverview,
      },
      {
        title: "Satellite overview with reference measurements",
        filename: "satellite-overview-with-reference-measurements.png",
        category: "Satellite / measurements",
        description: "Satellite reference image annotated with measurements.",
        image: satelliteOverviewWithMeasurements,
      },
      {
        title: "Front elevation",
        filename: "exterior-front.png",
        category: "Front",
        description: "Front elevation reference.",
        image: exteriorFront,
      },
      {
        title: "Front left elevation",
        filename: "exterior-front-left.png",
        category: "Front",
        description: "Front-left angle reference.",
        image: exteriorFrontLeft,
      },
      {
        title: "Front right elevation",
        filename: "exterior-front-right.JPEG",
        category: "Front",
        description: "Front-right angle reference.",
        image: exteriorFrontRight,
      },
      {
        title: "Front door",
        filename: "front-door.JPEG",
        category: "Condition / prep details",
        description: "Front door and adjacent trim condition.",
        image: frontDoor,
      },
      {
        title: "Front porch ceiling",
        filename: "front-porch-ceiling.JPEG",
        category: "Condition / prep details",
        description: "Front porch ceiling prep condition.",
        image: frontPorchCeiling,
      },
      {
        title: "Front porch fascia",
        filename: "front-porch-fascia.JPEG",
        category: "Condition / prep details",
        description: "Front porch fascia prep condition.",
        image: frontPorchFascia,
      },
      {
        title: "Right side",
        filename: "exterior-right.JPEG",
        category: "Right side",
        description: "Right side elevation reference.",
        image: exteriorRight,
      },
      {
        title: "Right side front",
        filename: "exterior-right-front.JPEG",
        category: "Right side",
        description: "Right-front angle reference.",
        image: exteriorRightFront,
      },
      {
        title: "Right side rear",
        filename: "exterior-right-back.JPEG",
        category: "Right side",
        description: "Right-rear angle reference.",
        image: exteriorRightBack,
      },
      {
        title: "Rear elevation",
        filename: "exterior-rear.png",
        category: "Rear",
        description: "Rear elevation reference.",
        image: exteriorRear,
      },
      {
        title: "Rear left",
        filename: "exterior-rear-left.JPEG",
        category: "Rear",
        description: "Rear-left angle reference.",
        image: exteriorRearLeft,
      },
      {
        title: "Rear right",
        filename: "exterior-rear-right.JPEG",
        category: "Rear",
        description: "Rear-right angle reference.",
        image: exteriorRearRight,
      },
      {
        title: "Rear right alternate",
        filename: "exterior-rear-right2.jpeg",
        category: "Rear",
        description: "Additional rear-right angle reference.",
        image: exteriorRearRight2,
      },
      {
        title: "Rear trellis",
        filename: "exterior-rear-trellace.jpeg",
        category: "Rear",
        description: "Rear trellis and adjacent surfaces.",
        image: exteriorRearTrellace,
      },
      {
        title: "Left side",
        filename: "exterior-left.JPEG",
        category: "Left side",
        description: "Left side elevation reference.",
        image: exteriorLeft,
      },
      {
        title: "Left side front",
        filename: "exterior-left-front.JPEG",
        category: "Left side",
        description: "Left-front angle reference.",
        image: exteriorLeftFront,
      },
      {
        title: "Left side front main",
        filename: "exterior-left-front-main.JPEG",
        category: "Left side",
        description: "Main left-front elevation reference.",
        image: exteriorLeftFrontMain,
      },
      {
        title: "Left side rear",
        filename: "exterior-left-back.JPEG",
        category: "Left side",
        description: "Left-rear angle reference.",
        image: exteriorLeftBack,
      },
      {
        title: "Left side door",
        filename: "left-side-door.JPEG",
        category: "Condition / prep details",
        description: "Left side door and adjacent trim condition.",
        image: leftSideDoor,
      },
      {
        title: "Soffit",
        filename: "soffit.jpeg",
        category: "Condition / prep details",
        description: "Soffit condition reference.",
        image: soffit,
      },
    ],
    notes: [
      "Working paintable body area is held at approximately 1,150 sq ft for the draft estimate.",
      "Paint cost assumption is $70 per gallon.",
      "Labor assumption is 108 hours at a $25/hr/person equivalent.",
      "Crew plan assumes a 3-person crew for approximately 4 working days.",
      "Brick chimney is excluded from painted scope per the customer-facing estimate document.",
    ],
  },
  {
    slug: "7610-se-harrison",
    title: "7610 SE Harrison St Shed/ADU Exterior Paint",
    status: "Estimate Draft",
    address: "7610 SE Harrison St, Portland, OR 97215",
    reportsFolder: "ppe-estimate2",
    type: "Shed/ADU exterior paint",
    siding: "Front lap siding; side/rear rough vertical panel siding",
    workingPaintableBodyArea: "~340 sq ft body; ~190 sq ft trim/eaves",
    paintCostAssumption: "$70/gallon",
    laborAssumption: "48 hrs total: 46 painting hrs + 2 electronic lock installation hrs at $25/hr/person equivalent",
    crewPlan: "2-person crew, 2-3 days",
    summary:
      "Internal project record for the Shed/ADU exterior paint estimate at 7610 SE Harrison St.",
    documents: [
      {
        id: "geometry-worksheet",
        title: "Geometry Worksheet",
        type: "Markdown",
        audience: "Internal",
        filename: "exterior-paint-estimate-geometry-worksheet.md",
        description:
          "Working exterior paint geometry worksheet for body siding, eaves, fascia, door, trim, prep assumptions, exclusions, and verification items.",
      },
      {
        id: "customer-facing-estimate",
        title: "Customer-Facing Estimate",
        type: "Markdown",
        audience: "Customer-facing",
        filename: "final-customer-facing-estimate.md",
        description:
          "Customer-ready shed/ADU exterior painting scope and estimate document.",
      },
      {
        id: "internal-estimating-rationale",
        title: "Internal Estimating Rationale",
        type: "Markdown",
        audience: "Internal",
        filename: "final-internal-estimating-rationale.md",
        description:
          "Internal estimating rationale, measurements, material assumptions, labor model, pricing math, and risk notes.",
      },
      {
        id: "completed-project-summary",
        title: "Completed Project Summary",
        type: "Markdown",
        audience: "Internal",
        filename: "final-project-summary.md",
        description:
          "Completed-job recap including labor pay, paint usage, material costs, estimate variance notes, and production lessons.",
      },
    ],
    images: [
      {
        title: "Front exterior",
        filename: "ext-front.JPEG",
        category: "Front",
        description: "Front elevation reference.",
        image: ppe2ExtFront,
      },
      {
        title: "Front door",
        filename: "front-door (1).JPEG",
        category: "Front",
        description: "Front door and adjacent trim reference.",
        image: ppe2FrontDoor,
      },
      {
        title: "Front door alternate",
        filename: "front-door2.JPEG",
        category: "Front",
        description: "Additional front door reference.",
        image: ppe2FrontDoor2,
      },
      {
        title: "Front soffit",
        filename: "front-soffit.JPEG",
        category: "Condition / prep details",
        description: "Front soffit condition reference.",
        image: ppe2FrontSoffit,
      },
      {
        title: "Right exterior",
        filename: "ext-right.JPEG",
        category: "Right side",
        description: "Right side elevation reference.",
        image: ppe2ExtRight,
      },
      {
        title: "Right soffit",
        filename: "right-soffit.JPEG",
        category: "Condition / prep details",
        description: "Right soffit condition reference.",
        image: ppe2RightSoffit,
      },
      {
        title: "Rear exterior",
        filename: "ext-rear.JPEG",
        category: "Rear",
        description: "Rear elevation reference.",
        image: ppe2ExtRear,
      },
      {
        title: "Rear soffit",
        filename: "rear-soffit.JPEG",
        category: "Condition / prep details",
        description: "Rear soffit condition reference.",
        image: ppe2RearSoffit,
      },
      {
        title: "Left exterior",
        filename: "ext-left.JPEG",
        category: "Left side",
        description: "Left side elevation reference.",
        image: ppe2ExtLeft,
      },
      {
        title: "Left exterior alternate",
        filename: "ext-left2.JPEG",
        category: "Left side",
        description: "Additional left side elevation reference.",
        image: ppe2ExtLeft2,
      },
      {
        title: "Left soffit",
        filename: "left-soffit.JPEG",
        category: "Condition / prep details",
        description: "Left soffit condition reference.",
        image: ppe2LeftSoffit,
      },
      {
        title: "Lock manual",
        filename: "lock-manual.JPEG",
        category: "Condition / prep details",
        description: "Lock manual reference photo.",
        image: ppe2LockManual,
      },
    ],
    notes: [
      "Working light-blue body area is held at approximately 340 sq ft.",
      "Dark-blue eaves/fascia/door/trim area is held at approximately 190 sq ft.",
      "Paint cost assumption is $70 per gallon.",
      "Labor assumption is 48 total hours at a $25/hr/person equivalent: 46 painting hours plus 2 electronic lock installation hours.",
      "Price is calculated from $1,200 labor, $500 materials/sundries, and 29.4% markup for a $2,199.80 calculated estimate rounded to $2,200.",
      "Crew plan assumes a 2-person crew for approximately 2-3 working days.",
      "Electronic lock hardware is assumed customer-supplied; estimate includes standard installation labor only.",
      "Metal roof panels, drip edge, gutters, downspouts, glass, screens, deck/pavers, adjacent structures, and interiors are excluded unless added by scope change.",
    ],
  },
  {
    slug: "1707-se-keanu",
    title: "1707 SE Keanu Ct - Half Bath Repaint",
    status: "Estimate Draft",
    address: "1707 SE Keanu Ct, Portland, OR 97267",
    reportsFolder: "ppe-estimate3",
    type: "Interior half bath repaint",
    siding: "Textured drywall and beadboard wainscoting",
    workingPaintableBodyArea:
      "~85 sq ft upper drywall; ~30 sq ft ceiling; ~64 sq ft wainscoting; ~63 LF trim; one six-panel door",
    paintCostAssumption:
      "$140 finish paint + $45 bonding primer; $190 total materials/sundries",
    laborAssumption:
      "8 labor hrs at $25/hr/person equivalent; one painter",
    crewPlan: "1 painter, approximately 1 working day",
    summary:
      "Internal project record for the main-floor half bath repaint estimate at 1707 SE Keanu Ct.",
    documents: [
      {
        id: "geometry-worksheet",
        title: "Interior Geometry Worksheet",
        type: "Markdown",
        audience: "Internal",
        filename: "interior-paint-estimate-geometry-worksheet.md",
        description:
          "Photo-based room geometry, wall and ceiling takeoff, wainscoting and trim quantities, door area, coating coverage, and verification items.",
      },
      {
        id: "property-photo-research",
        title: "Property and Photo Research",
        type: "Markdown",
        audience: "Research",
        filename: "property-and-photo-research.md",
        description:
          "Public property context and a complete image-by-image condition review supporting the estimate.",
      },
      {
        id: "customer-facing-estimate",
        title: "Customer-Facing Estimate",
        type: "Markdown",
        audience: "Customer-facing",
        filename: "final-customer-facing-estimate.md",
        description:
          "Customer-ready half bath preparation, painting scope, paint system, schedule, price, exclusions, and warranty.",
      },
      {
        id: "internal-estimating-rationale",
        title: "Internal Estimating Rationale",
        type: "Markdown",
        audience: "Internal",
        filename: "final-internal-estimating-rationale.md",
        description:
          "Detailed measurements, photo observations, labor model, material purchasing plan, pricing math, production notes, and change-order risks.",
      },
    ],
    images: [
      {
        title: "Bathroom overview - window and door",
        filename: "bathroom1.jpeg",
        category: "Interior",
        description:
          "Window, door, upper wall, beadboard, cap rail, baseboard, and floor condition.",
        image: ppe3Bathroom1,
      },
      {
        title: "Bathroom overview - principal wall",
        filename: "bathroom2.jpeg",
        category: "Condition / prep details",
        description:
          "Glossy blue upper wall with former fastener/accessory holes, door, casing, and wainscoting.",
        image: ppe3Bathroom2,
      },
      {
        title: "Window and beadboard detail",
        filename: "bathroom3.jpeg",
        category: "Condition / prep details",
        description:
          "Window casing, stool, apron, cap rail, beadboard grooves, fasteners, and privacy film.",
        image: ppe3Bathroom3,
      },
      {
        title: "Former vanity and sink wall",
        filename: "bathroom4.jpeg",
        category: "Condition / prep details",
        description:
          "Removed fixtures, plumbing and electrical openings, former mirror areas, holes, and test-color patches.",
        image: ppe3Bathroom4,
      },
      {
        title: "Ceiling, vent, and light detail",
        filename: "bathroom5.jpeg",
        category: "Condition / prep details",
        description:
          "Glossy blue ceiling, ventilation grille, light fixture, door opening, and wall repair points.",
        image: ppe3Bathroom5,
      },
      {
        title: "Customer vision rendering",
        filename: "AI-render-customer-vision.jpeg",
        category: "Inspiration / color reference",
        description:
          "Customer inspiration for warm cream upper surfaces and dark terracotta wainscoting, trim, and door.",
        image: ppe3AiVision,
      },
      {
        title: "Color reference summary",
        filename: "color-summary.jpeg",
        category: "Inspiration / color reference",
        description:
          "Inspiration references for Unity R129 and Sugar Dust 0011; final products and colors remain subject to matching and approval.",
        image: ppe3ColorSummary,
      },
    ],
    notes: [
      "Dimensions are photo-based estimates: approximately 5 ft x 6 ft with an 8 ft ceiling and 42-44 in beadboard wainscoting.",
      "Public listing context identifies a partial bathroom on the main level; public sources do not provide room dimensions.",
      "Room is assumed empty with vanity, sink, and toilet removed for the duration of work.",
      "Existing dark blue coating appears glossy/semi-gloss and requires cleaning, scuff sanding/deglossing, and bonding primer.",
      "Labor model is 8 active hours for one painter in one working day, subject to drying conditions.",
      "Actual production took 16 hours, completed solo by the least-experienced painter as a learning project; it was not an overall profitable business job.",
      "Price is calculated from $200 direct labor, $190 materials/sundries, and $210 business markup for a $600 customer estimate.",
      "Unity R129 and Sugar Dust 0011 are inspiration references only; final colors will be matched with Glidden or Miller Paint after physical sample approval.",
      "Major repairs, texture work, moisture remediation, carpentry, plumbing/electrical work, and fixture reinstallation are excluded.",
    ],
  },
  {
    slug: "5933-ne-31st",
    title: "5933 NE 31st Ave - Back Porch Painting + Front Porch Floor",
    status: "Estimate Draft",
    address: "5933 NE 31st Ave, Portland, OR",
    customer: "Camille Omey",
    reportsFolder: "ppe-estimate4",
    type: "Exterior back porch painting with front porch floor add-on",
    siding: "Installed primed cedar shake enclosure and new/existing wood framing",
    workingPaintableBodyArea:
      "Back porch: ~65 sq ft visible primed cedar shake enclosure, 90 sq ft total floor including stairs/landing, and 120 sq ft ceiling; front porch floor is a separate add-on",
    paintCostAssumption:
      "$600 back porch materials/sundries + $100 front porch primer, floor paint, and prep sundries; $700 total",
    laborAssumption:
      "48 labor hrs at $25/hr/person equivalent; two painters; includes 8 hours for front porch floor preparation and painting",
    crewPlan: "2 painters, approximately 2-3 working days",
    summary:
      "Internal project record for the main back porch painting project, plus a separate front porch floor painting add-on.",
    documents: [
      {
        id: "geometry-worksheet",
        title: "Exterior Porch Geometry Worksheet",
        type: "Markdown",
        audience: "Internal",
        filename: "exterior-porch-estimate-geometry-worksheet.md",
        description:
          "Photo-based porch geometry, coating quantities, purchase model, condition notes, and field-verification items.",
      },
      {
        id: "property-photo-research",
        title: "Property and Photo Research",
        type: "Markdown",
        audience: "Research",
        filename: "property-and-photo-research.md",
        description:
          "Complete review of the four supplied porch photos and the scope conclusions supported by them.",
      },
      {
        id: "customer-facing-estimate",
        title: "Customer-Facing Estimate",
        type: "Markdown",
        audience: "Customer-facing",
        filename: "final-customer-facing-estimate.md",
        description:
          "Customer-ready porch preparation, painting scope, assumptions, exclusions, and total price.",
      },
      {
        id: "internal-estimating-rationale",
        title: "Internal Estimating Rationale",
        type: "Markdown",
        audience: "Internal",
        filename: "final-internal-estimating-rationale.md",
        description:
          "Detailed labor, materials, overhead, margin, production assumptions, pricing math, and change-order risks.",
      },
    ],
    images: [
      {
        title: "Porch and enclosure overview",
        filename: "porch-front.jpeg",
        category: "Front",
        description:
          "Overall view of the installed primed cedar shake enclosure, new guard framing, posts, house junction, landscaping, and existing fascia.",
        image: ppe4PorchFront,
      },
      {
        title: "Right enclosure and access opening",
        filename: "porch-right.jpeg",
        category: "Right side",
        description:
          "Primed cedar shake right return, crawlspace access opening, new framing, existing house siding, and constrained landscaping access.",
        image: ppe4PorchRight,
      },
      {
        title: "Porch ceiling and fascia",
        filename: "porch-roof.jpeg",
        category: "Condition / prep details",
        description:
          "Ceiling, rafters, beam, posts, braces, and extensive peeling on the existing outer fascia.",
        image: ppe4PorchRoof,
      },
      {
        title: "Stairs, deck, and guard framing",
        filename: "porch-stairs.jpeg",
        category: "Condition / prep details",
        description:
          "Seven visible stairs, upper deck edge, enclosure return, and new guard framing.",
        image: ppe4PorchStairs,
      },
    ],
    notes: [
      "The complete back porch red floor scope is 15 ft x 6 ft (90 sq ft), including stairs and landing; the front porch floor is a separate add-on.",
      "The ceiling/roof underside is 15 ft x 8 ft (120 sq ft). The 8 ft dimension is surface width, not porch height.",
      "Labor model is 48 total hours at $25/hr/person equivalent: 40 hours for the back porch and 8 hours for front porch floor preparation and painting.",
      "Materials/sundries are carried at $700: $600 for the back porch plus $70 red floor paint, $10 spot primer, and $20 preparation sundries for the front porch.",
      "Price is itemized at $2,100 for the back porch and $400 for the front porch floor, for a $2,500 total estimate.",
      "Only visible exterior enclosure faces are included; crawlspace/interior walls are excluded.",
      "Front porch floor preparation is included; deteriorated fascia work and porch-board carpentry or replacement are excluded.",
      "Final customer-approved colors remain to be confirmed before materials are purchased.",
    ],
  },
  {
    slug: "10375-sw-dunlin",
    title: "10375 SW Dunlin Pl - Front Porch and Front Stairs Painting",
    status: "Estimate Draft",
    address: "10375 SW Dunlin Pl, Beaverton, OR 97007",
    reportsFolder: "ppe-estimate5",
    type: "Targeted exterior porch and stair maintenance repaint",
    siding:
      "Painted wood deck boards, dimensional rail stock, 2x2 balusters, and 4x4 newel posts; stringer/skirt faces, rim band, lattice, and house siding excluded",
    workingPaintableBodyArea:
      "256.73 sq ft included one-coat physical area: 75.97 sq ft gray and 180.76 sq ft white; 352.40 sq ft total liquid-coating demand including primer",
    paintCostAssumption:
      "$225 materials/sundries using contractor pricing: 1 gal tinted gray primer, 1 gal gray porch-and-floor finish, 1 gal white finish, and 1 qt white spot primer plus normal sundries",
    laborAssumption:
      "20 crew hours at $25/hr/person equivalent; two painters; fixed travel/setup plus localized preparation, gray primer, white spot primer, and one complete finish coat per color",
    crewPlan: "2 painters, approximately 2 working days",
    summary:
      "Internal project record for the $1,450 pre-listing porch and entry-stair maintenance repaint.",
    documents: [
      {
        id: "geometry-worksheet",
        title: "Porch and Stairs Geometry Worksheet",
        type: "Markdown",
        audience: "Internal",
        filename:
          "exterior-porch-and-stairs-estimate-geometry-worksheet.md",
        description:
          "Audited physical geometry, confirmed scope boundaries, separate primer/finish demand, purchase quantities, and field-verification items.",
      },
      {
        id: "estimating-worksheet-formatted",
        title: "Estimating Worksheet (Formatted)",
        type: "HTML",
        audience: "Internal",
        filename: "exterior-porch-and-stairs-estimating-worksheet.html",
        description:
          "Formatted estimator worksheet with confidence flags, girth model tables, and calculation blocks.",
      },
      {
        id: "geometry-worksheet-pdf",
        title: "Geometry Worksheet PDF",
        type: "PDF",
        audience: "Internal",
        filename:
          "Exterior Porch and Stairs Estimate Geometry Worksheet.pdf",
        description:
          "Print-ready PDF of the formatted estimating worksheet.",
      },
      {
        id: "property-photo-research",
        title: "Property and Photo Research",
        type: "Markdown",
        audience: "Research",
        filename: "property-and-photo-research.md",
        description:
          "Verified public property record, a record of the retrieval attempts that failed, and an image-by-image review of all ten supplied photos.",
      },
      {
        id: "customer-facing-estimate",
        title: "Customer-Facing Estimate",
        type: "Markdown",
        audience: "Customer-facing",
        filename: "final-customer-facing-estimate.md",
        description:
          "Customer-ready scope, preparation, painting process, materials, exclusions, customer responsibilities, schedule, price, payment terms, and warranty.",
      },
      {
        id: "customer-facing-estimate-pdf",
        title: "Customer Estimate PDF",
        type: "PDF",
        audience: "Customer-facing",
        filename: "Exterior Porch and Stairs Painting Estimate.pdf",
        description:
          "Print-ready proposal PDF for delivery to the customer.",
      },
      {
        id: "internal-estimating-rationale",
        title: "Internal Estimating Rationale",
        type: "Markdown",
        audience: "Internal",
        filename: "final-internal-estimating-rationale.md",
        description:
          "Corrected geometry basis, 20-hour labor model, $225 material allowance, transparent margin, $1,450 approved price, production sequence, and field risks.",
      },
    ],
    images: [
      {
        title: "Entry in context",
        filename: "porch-with-front-house-view.png",
        category: "Front",
        description:
          "Wide street-level view of the raised covered porch, the wood stair run, the concrete steps and pad at grade, and the lattice skirt. Used for overall proportion, porch length, and total rise only; coatings read fresher than current so it is not used for condition assessment.",
        image: ppe5PorchWithFrontHouseView,
      },
      {
        title: "Front stairs - full run",
        filename: "porch-stairs-full-view1.jpeg",
        category: "Front",
        description:
          "Primary geometry photograph. Full stair run head-on from the walkway showing every tread and riser, both guard rails, top and bottom newels, deck rim band, lattice skirt, and the crowding hedge, arborvitae, and Japanese maple.",
        image: ppe5PorchStairsFullView1,
      },
      {
        title: "Front stairs - oblique run",
        filename: "porch-stairs-full2.jpeg",
        category: "Condition / prep details",
        description:
          "Treads and risers edge-on. Corroborates the nine-tread count, isolates the single raw replacement riser, and confirms balusters on both stair rails.",
        image: ppe5PorchStairsFull2,
      },
      {
        title: "Stair treads - lower run detail",
        filename: "porch-stairs-lower.jpeg",
        category: "Condition / prep details",
        description:
          "Primary condition source. Two boards per tread with an open gap; tread tops are bare, gray, weathered, checked, and splintering with only remnant paint; nosing edges remain painted; risers painted and sound.",
        image: ppe5PorchStairsLower,
      },
      {
        title: "Stair tread and stringer junction",
        filename: "porch-stairs-mid-detail.jpeg",
        category: "Condition / prep details",
        description:
          "Raw replacement riser end grain confirming new unprimed stock, plus cracking, open joints, and coating separation where the treads meet the stringer.",
        image: ppe5PorchStairsMidDetail,
      },
      {
        title: "Right stair guard rail",
        filename: "porch-railing-right.jpeg",
        category: "Right side",
        description:
          "Rail assembly composition and the worst coating failure in the project: blistered, peeling paint with exposed bare wood at the lower rail termination.",
        image: ppe5PorchRailingRight,
      },
      {
        title: "Newel post and deck guard rail",
        filename: "upper-porch-railing.jpeg",
        category: "Condition / prep details",
        description:
          "4x4 newel with a two-piece cap whose top plate is split, lifted, and losing material. Confirms deck guard composition and that the deck sits well above grade.",
        image: ppe5UpperPorchRailing,
      },
      {
        title: "Porch deck - along the run",
        filename: "porch-floor1.jpeg",
        category: "Condition / prep details",
        description:
          "Primary source for deck depth. Deck boards run lengthwise parallel to the house; coating worn but adhered; guard rail is cap, sub-rail, square balusters, and bottom rail; chair and crate are customer-removal items.",
        image: ppe5PorchFloor1,
      },
      {
        title: "Porch deck - stair opening",
        filename: "porch-floor2.jpeg",
        category: "Condition / prep details",
        description:
          "Stair opening cut into the guard-rail line close to the front door, with guard posts and a rail return to the house. Deck board width and gap corroborated.",
        image: ppe5PorchFloor2,
      },
      {
        title: "Porch deck - door end",
        filename: "porch-floor3.jpeg",
        category: "Condition / prep details",
        description:
          "Deck terminates a short distance past the front door on that side. Door threshold, metal sill, and white casing are masking points rather than scope items.",
        image: ppe5PorchFloor3,
      },
    ],
    notes: [
      "Public records confirm the property only: built 1999, 2,192 sq ft, 3 bed / 2.5 bath, sold $524,900 on 2020-10-16, MLS 20317563. No public record supplied any porch or stair dimension.",
      "Photo-based working model is a 10 ft x 4.25 ft porch with no stair-head deduction, a 3.5 ft wide stair, 9 tread tops, 10 risers, 33 linear ft of combined railing, 56 balusters, and 6 posts.",
      "Included physical geometry is 256.73 sq ft: 75.97 sq ft gray and 180.76 sq ft white. Stringer faces, rim, lattice, ceiling, house, door, concrete, undersides, and framing are excluded.",
      "Coating demand is 75.97 sq ft of full gray primer, 75.97 sq ft of gray finish, approximately 19.7 sq ft of white spot primer, and 180.76 sq ft of white finish.",
      "Preparation is localized to actual failures, rough/splintered tread areas, the raw riser, rail ends, and minor paintable repairs; sound coatings are retained.",
      "Labor is 20 crew hours ($500 at $25/hour), materials/sundries are $225, direct cost is $725, and the approved customer price remains $1,450.",
      "The corrected geometry produces $725 contribution (50.0% margin); the price reflects fixed Beaverton travel/setup, multiple stages/products, detailed rails, return visits, repair uncertainty, overhead, and margin.",
      "Porch length, depth, guardrail sections, concealed balusters, and posts require field verification before scheduling.",
      "Built 1999, so EPA RRP lead-safe work practices are not triggered by the age of the structure.",
      "Carpentry is excluded throughout: tread replacement, handrail-end repair, post-cap replacement, and any board or rail component replacement.",
      "Lattice skirt panels, porch ceiling/soffit, house siding, front door and casing, and all concrete are excluded and quotable separately.",
      "The customer proposal is valid for 30 days; additional repairs or requested work are discussed and priced separately.",
    ],
  },
];

export function getOfficeProject(slug: string) {
  return officeProjects.find((project) => project.slug === slug) ?? null;
}
