# Property Summary

Property analyzed:

**2201 NE 58th Ave**  
Portland, OR 97213

Sources found: public OpenStreetMap/Nominatim record and Overpass geometry for the address. PortlandMaps provides public GIS/property data, but its assessor API returned a generic error for this address during lookup.

Key public geometry:

* Building type: detached residential building
* Mapped levels: 1
* Mapped building height: 6.6 m, about 21.7 ft
* Footprint: about 1,027 sq ft
* Exterior footprint perimeter: about 145 ft
* Bounding footprint: about 40 ft x 32 ft
* Neighborhood/address context: Rose City Park / Portland / Multnomah County

Sources:

* https://www.openstreetmap.org/way/368497543
* https://nominatim.openstreetmap.org/search?q=2201%20NE%2058th%20Ave%2C%20Portland%2C%20OR%2097213&format=json&polygon_geojson=1&addressdetails=1
* https://www.portlandmaps.com/

# Geometry Assessment

The mapped footprint is a compact, irregular one-story detached house. The 6.6 m height tag suggests total roof/ridge height, not vertical wall height. For a one-story Portland house, estimated paintable wall height is 8.5-9.5 ft to eave/top plate.

The footprint has several jogs/projections already captured in the 145 ft perimeter. No confirmed dormers were found in public geometry tags. Siding material was not available from the accessible public records; for estimating, assume painted lap/wood/composite siding unless field inspection proves masonry, vinyl, or stucco.

# Paintable Surface Formula

Likely formula:

**Perimeter x Wall Height**

`145 ft x 9.0 ft = 1,305 sq ft`

**+ Gable Area**

Assume two modest gable ends:

`2 x (0.5 x 30 ft x 6 ft) = 180 sq ft`

**+ Dormer / Projection Area**

`0 sq ft confirmed`

**- Window / Door Deductions**

Assume 13-15% openings:

`-200 sq ft`

**= Estimated Paintable Area**

`1,305 + 180 - 200 = 1,285 sq ft`

# Paintable Surface Estimate

* Low estimate: **1,150 sq ft**
* Likely estimate: **1,300 sq ft**
* High estimate: **1,550 sq ft**

# Assumptions

* Exterior perimeter derived from public OSM polygon: about 145 ft.
* Paintable height uses 8.5-9.5 ft wall height, not full mapped building height.
* Mapped height of 21.7 ft is treated as approximate ridge/max height.
* Gable area estimated because roof form is not fully described in public tags.
* No dormer area included unless field/street imagery confirms dormers.
* Window/door deduction assumed at 160-220 sq ft.
* Estimate is for main wall/siding paintable area, excluding soffits, fascia, railings, detached structures, and heavy trim unless added separately.

# Confidence Assessment

**Medium.** Footprint, perimeter, one-story status, and height are supported by public GIS data. Confidence is reduced because assessor improvement details, exact siding material, window count, roof/gable orientation, and street-level facade details were not fully available from accessible public sources.
