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
    | "Condition / prep details";
  description: string;
  image: StaticImageData;
};

export type OfficeProject = {
  slug: string;
  title: string;
  status: string;
  address: string;
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
];

export function getOfficeProject(slug: string) {
  return officeProjects.find((project) => project.slug === slug) ?? null;
}
