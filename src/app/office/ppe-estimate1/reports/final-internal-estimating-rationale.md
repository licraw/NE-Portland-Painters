# Internal Estimating Rationale

**Project:** Exterior Painting  
**Property:** 2201 NE 58th Ave, Portland, OR 97213  
**Prepared:** 2026-06-22  
**Purpose:** Internal estimating record. Not customer facing.

## Measurements Used

| Measurement | Working Value | Confidence | Notes |
|---|---:|---|---|
| Front width | 27 ft | High | Reconciled field/satellite value |
| Rear width | 33 ft | High | Includes rear bump-out/projection width |
| Right side depth | 25 ft | High | Field-measured building depth |
| Left side depth | 25 ft + approx. 3 ft bump-out | Medium | 25 ft field-measured depth plus estimated 3 ft kickout |
| Rear bump-out | Approx. 6 ft x 6 ft | Medium | Used as return/projection allowance |
| Eave height | 9 ft | Medium | Estimated; not field-measured |
| Ridge height | Approx. 21 ft | Medium | Estimated; public height 21.7 ft supports this |
| Side gable height above eave | 8 to 12 ft range | Medium | Key difference between SER and MCR |
| Porch ceiling | Approx. 18 ft x 6 ft = 108 SF | Low-Medium | Could be up to 162 SF if full width |
| Chimney | Approx. 4 ft x 14 ft = 56 SF deducted | Medium | Brick, excluded from painting |

## Paintable Area Analysis

Three independent estimates were available:

| Method | Result | Comment |
|---|---:|---|
| Public record/perimeter method | 1,285 SF | Useful high-side cross-check, but OSM perimeter likely includes roof/overhang geometry |
| Segmented wall method | Approx. 1,200 SF | Strongest dimensional model; photo and satellite based |
| Elevation-by-elevation method | 1,107 SF | Conservative floor; uses lower side-gable height |

The three methods converge within a tight estimating band. The final working body siding area selected for pricing is **1,150 SF net paintable siding**.

Reasoning: 1,150 SF sits inside the recommended 1,100-1,200 SF range, above the 1,107 SF manual floor, and below the 1,200-1,285 SF higher models. This is appropriate because the house is compact, the brick chimney is excluded, and opening deductions are meaningful, but the side gables and rear bump-out prevent using the lowest value without contingency.

## Area Calculations

### Manual Elevation Cross-Check

Front:

```text
Main wall: 27 ft x 9 ft = 243 SF
Front gable: (27 ft x 6.5 ft) / 2 = 88 SF
Openings: 2 windows + front door = 69 SF
Net front = 243 + 88 - 69 = 262 SF
```

Right:

```text
Main wall: 25 ft x 9 ft = 225 SF
Right gable: (25 ft x 8 ft) / 2 = 100 SF
Openings/vent: 32 SF
Brick chimney deduction: 56 SF
Net right = 225 + 100 - 32 - 56 = 237 SF
```

Rear:

```text
Main rear wall: 33 ft x 9 ft = 297 SF
Rear gable/projection: (12 ft x 6.5 ft) / 2 = 39 SF
Bump-out/return allowance: 6 ft x 9 ft = 54 SF
Openings: rear doors + windows = 66 SF
Net rear = 297 + 39 + 54 - 66 = 324 SF
```

Left:

```text
Main wall with bump-out: 28 ft x 9 ft = 252 SF
Left gable: (25 ft x 8 ft) / 2 = 100 SF
Openings/door/vent: 68 SF
Net left = 252 + 100 - 68 = 284 SF
```

Manual total:

```text
262 + 237 + 324 + 284 = 1,107 SF
```

### Higher Segmented Model Cross-Check

The segmented wall model uses an estimated 21 ft ridge and estimated 9 ft eave, giving a 12 ft side-gable height:

```text
Left side gable adjustment: (25 ft x (12 - 8) ft) / 2 = +50 SF
Right side gable adjustment: (25 ft x (12 - 8) ft) / 2 = +50 SF
Manual model adjusted for 12 ft side gables = 1,107 + 100 = 1,207 SF
```

This explains why the segmented wall method lands near 1,200 SF.

### Final Working Area

```text
Low defensible case: approx. 1,100 SF
Central/reconciled case: approx. 1,150 SF
High measured/estimated-dimension case: approx. 1,200 to 1,250 SF
Public record high cross-check: 1,285 SF
Final pricing input: 1,150 SF net paintable body siding
```

## Variables

| Variable | Current Assumption | Low Case | High Case | Estimated Impact |
|---|---|---|---|---:|
| Eave height | 9 ft | 8 ft | 9.5 ft | About -122 SF to +61 SF body area |
| Net siding area | 1,150 SF | 1,100 SF | 1,250 SF | About -$200 to +$450 labor/material |
| Side gable height | Blended/reconciled | 8 ft | 12 ft | Up to 100 SF swing |
| Front gable treatment | Included conservatively | Partial gable | Full-width gable | Up to 40 SF swing |
| Porch ceiling | 108 SF severe prep | 108 SF | 162 SF | +$350 to +$700 if full-width/severe |
| Window sill repairs | 12 labor-hour allowance | 6 hours | 24 hours | -$450 to +$900 |
| Caulking | Typical exterior gaps | 6 hours | 14 hours | -$150 to +$450 |
| Trim condition | Moderate | Standard prep | Heavy peeling | +$500 to +$1,200 |
| Rear trellis/deck elements | Excluded | Excluded | Added to scope | +$300 to +$1,000+ |

## Materials Analysis

Finish paint cost assumption: **$120/gallon** for body/siding paint and trim paint. Primer remains **$70/gallon**.

### Body Paint

Coverage assumption for existing painted aluminum siding:

```text
Coverage: 325 to 350 SF/gallon/coat after waste and lap profile
Working area: 1,150 SF
Coats: 2
Paint needed: 1,150 x 2 / 350 = 6.57 gallons
Rounded allowance: 7 gallons
Material cost: 7 x $120 = $840
```

### Trim Paint

Trim equivalent area from worksheet: approx. 336 SF, including fascia/rake, soffits, porch ceiling, porch posts, window trim, door trim, and corner boards.

```text
Coverage: approx. 300 SF/gallon/coat due to brush/roller work and profile
Trim area: 336 SF
Coats: 2
Paint needed: 336 x 2 / 300 = 2.24 gallons
Rounded allowance: 4 gallons
Material cost: 4 x $120 = $480
```

The 4-gallon trim allowance is intentionally above the raw math because porch ceiling boards, fascia edges, columns, and spot color changes reduce real coverage.

### Primer

```text
Bonding/spot primer: 2 gallons x $70 = $140
Porch ceiling stain-block/spot primer: 1 gallon x $70 = $70
```

Primer quantity assumes spot priming, not full-body priming. If field conditions require full bonding primer on all aluminum siding, add approximately:

```text
1,150 SF / 300 SF per gallon = 3.8 gallons, round to 4 gallons
Incremental material only: about $280
Incremental labor: about 8 to 12 hours
```

### Caulk, Repair Materials, Consumables

```text
Caulk: 10 to 14 tubes
Repair material: localized bondo/wood filler
Consumables: masking film, paper, tape, abrasives, scraper blades, roller covers, brushes
Allowance: $325
```

Material total used in estimate:

```text
Body/siding paint: $840
Trim paint: $480
Primer: $210
Caulk/repairs/consumables: $325
Total materials: $1,855
```

## Labor Analysis

Crew assumption: **3-person residential paint crew**. Keep the existing production assumption of **108 total labor hours**, or approximately **4 working days** for a three-person crew. This labor allowance includes prep, masking, repairs, painting, trim work, and cleanup.

Labor is recalculated at **$25/hour per crew member as actual labor cost**, not as a loaded billing rate. The prior estimate used an effective billing rate of approximately **$75/hour** and produced a labor subtotal of roughly **$8,100**. This revision does not reduce labor hours, production assumptions, or crew size assumptions.

| Task | Hours | Production Assumption | Labor Cost @ $25/hr |
|---|---:|---|---:|
| Washing | 6 | Small exterior, aluminum-compatible wash, rinse | $150 |
| Masking/protection | 10 | Windows, masonry, roof edges, porch/deck/landscaping | $250 |
| Scraping/localized prep | 14 | Moderate body prep plus severe porch ceiling peeling | $350 |
| Spot priming | 7 | Bare/failed areas, window bases, porch ceiling spots | $175 |
| Minor repairs | 12 | Window sill/base repairs and localized bondo | $300 |
| Caulking | 8 | Trim joints, transitions, corner boards, selected gaps | $200 |
| Body painting | 24 | 1,150 SF x 2 coats = 2,300 applied SF; setup, spray/roll/brush detail | $600 |
| Trim painting | 22 | Fascia, soffits, porch, posts, windows, doors, detail work | $550 |
| Cleanup/final walkthrough | 5 | Debris, touch-ups, demasking, site reset | $125 |
| **Total** | **108** |  | **$2,700** |

```text
108 labor hours x $25/hr = $2,700 labor cost
```

### Labor Risk Factors

- Porch ceiling has severe peeling and may take more prep than the area suggests.
- Aluminum siding may be chalky/oxidized and require more washing or bonding primer.
- Window sill deterioration is known but not fully quantified.
- Rear deck, steps, vegetation, and utility penetrations may slow access.
- Multiple gables and mixed siding profiles increase detail time.

## Pricing Summary

Target gross margin: **35%**

```text
Labor hours: 108
Labor cost @ $25/hr: $2,700
Material cost: $1,855
Total direct job cost: $4,555
Gross margin: 35%
Final selling price: $4,555 / (1 - 0.35) = $7,008
Rounded final selling price: $7,025
```

The material allowance already includes caulk, repair materials, masking, plastic, tape, abrasives, sundries, and normal small consumables. No lift rental is included.

### Labor-Hour Sensitivity

Material cost is held constant at **$1,855**. Gross margin is held constant at **35%**.

| Labor Hours | Labor Cost @ $25/hr | Material Cost | Total Direct Job Cost | Gross Margin % | Final Selling Price |
|---:|---:|---:|---:|---:|---:|
| 96 | $2,400 | $1,855 | $4,255 | 35% | $6,546 |
| 108 | $2,700 | $1,855 | $4,555 | 35% | $7,008 |
| 120 | $3,000 | $1,855 | $4,855 | 35% | $7,469 |

## Confidence Assessment

### High Confidence

- Property type: single 1.5-story bungalow/cape-cod form.
- Front width: 27 ft.
- Rear width: 33 ft.
- Building depth: 25 ft.
- Brick chimney excluded from paint scope.
- Existing painted trim, fascia, soffits, window trim, door trim, and porch posts are in scope.
- Porch ceiling has severe paint failure.

### Medium Confidence

- Net body siding area of 1,150 SF.
- Eave height: approximately 9 ft.
- Ridge height: approximately 21 ft.
- Left-side 3 ft bump-out allowance.
- Rear bump-out/return modeling.
- Window and door opening deductions.
- Trim equivalent area of approximately 336 SF.
- Minor repair allowance of 12 labor hours.

### Remaining Unknowns Requiring Field Verification

- Confirm all siding surfaces are aluminum, including board-and-batten/gable areas.
- Verify the estimated 3 ft bump-out/kickout depth.
- Verify eave and ridge heights if higher precision is needed.
- Confirm front gable shape and paintable upper-front area.
- Count and grade window sill failures before production.
- Measure porch ceiling actual width and determine if moisture source is active.
- Confirm whether rear trellis/pergola, deck rails, deck boards, or side deck elements are excluded.
- Confirm final color schedule and whether door color changes require additional primer/coats.
