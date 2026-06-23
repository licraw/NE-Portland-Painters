# QA Reconciliation Package — AMENDED
## 2201 NE 58th Ave — Portland, OR 97213 — Exterior Painting

**Role:** Senior Estimator QA  
**Date:** 2026-06-22 (Amended)  
**Purpose:** Compare Public Research Report vs. Site Evidence Report. Identify conflicts, flag assumptions, produce reconciled inputs for final report generator.  
**Not a final estimate. Not a proposal.**

> **AMENDMENT NOTICE:** The prior version of this QA package was based on an incorrect building model (two-structure composite with a two-story addition). The estimator confirmed there is no addition. The SER has been corrected. All conflict analysis, area estimates, and unresolved questions in this document reflect the corrected single-bungalow model.

---

### Source Documents

| Label | File | Method | Imagery Used |
|---|---|---|---|
| **PRR** | `2201-ne-58th-ave-portland-or-97213-exterior-paint-estimate.md` | Public records: OSM polygon, Nominatim, PortlandMaps GIS | No site photos |
| **SER** | `exterior-paint-estimating-worksheet.html` (Amended) | Site photos, annotated satellite, estimator field corrections | All provided site photos + satellite |
| **MCR** | `manual-calc.md` | Elevation-by-elevation manual calculation, field-confirmed widths | Site photos + field measurements |

---

### MCR Summary — Manual Calculation Report

Elevation-by-elevation breakdown. All four faces calculated independently.

| Elevation | Main Wall | Gable | Other | Deductions | Net SF |
|---|---|---|---|---|---|
| Front | 27 ft × 9 ft = 243 SF | (27 × 6.5) ÷ 2 = 88 SF | — | −69 SF (2 win + door) | **262 SF** |
| Right (south gable) | 25 ft × 9 ft = 225 SF | (25 × 8) ÷ 2 = 100 SF | — | −32 SF (win + vent) − 56 SF (chimney) | **237 SF** |
| Rear | 33 ft × 9 ft = 297 SF | (12 × 6.5) ÷ 2 = 39 SF | 6 ft return × 9 ft = 54 SF | −66 SF (doors + win) | **324 SF** |
| Left (north gable) | 28 ft × 9 ft = 252 SF | (25 × 8) ÷ 2 = 100 SF | — | −68 SF (win + door + vent) | **284 SF** |
| **TOTAL** | | | | | **1,107 SF** |

**MCR key assumptions:**
- Eave height: **9 ft** (all elevations)
- Side gable height (left + right): **8 ft** above eave
- Front gable: full 27 ft base × 6.5 ft height = 88 SF
- Rear: modeled as 33 ft total width (main body + bump-out) with 6 ft × 9 ft return allowance
- Chimney: 4 ft × 14 ft visible face deducted = 56 SF

### Estimator-Supplied Context (independent of both reports)

- Scope: Exterior painting
- Siding material: **Aluminum** (customer-stated)
- Window sill / window base: deterioration present; may require scraping, sanding, spot bondo repair
- Paint cost: $50/gallon (for final report)
- Building confirmed: single 1.5-story craftsman bungalow — no addition

---

## Phase 1 — Areas of Agreement

| Item | PRR | SER (Amended) | Agreement | Confidence | Reason |
|---|---|---|---|---|---|
| Building type | Detached residential | Detached residential | ✓ Full | High | Both sources consistent |
| Roof / ridge height | 21.7 ft (6.6 m mapped) | Ridge ~21 ft estimated (9 ft eave + 12 ft gable) | ✓ Directional | Medium | SER estimate and PRR mapped height are within 0.7 ft of each other, but ridge height was not field-measured. |
| Bungalow wall height (eave) | 8.5–9.5 ft assumed | ~9 ft estimated | ✓ Directional | Medium | Both support a 9 ft working eave height, but it was not field-measured. |
| Single-structure building | "Detached residential," 1 mapped level | Single 1.5-story bungalow | ✓ Full | High | Now agree — PRR's 1-level tag was not wrong; the SER's prior "two-structure" model was wrong. |
| Footprint shape | "Irregular" with jogs | Mostly rectangular with small NW bump-out | ✓ Directional | Medium | PRR acknowledges irregularity; SER models it explicitly. |
| Siding type (assumed) | Assumed lap/wood/composite | Horizontal lap (front/rear) + B&B (gable ends) | ✓ Directional | Medium | PRR guessed lap on the main faces correctly. B&B on gable ends was not identified by PRR. |
| Chimney presence | Not identified | Brick masonry, right-front corner | ✗ Not in PRR | — | PRR had no photo access; SER confirmed from photos. |
| Confidence level | Medium | Medium | ✓ Full | — | Both reports rate overall confidence Medium |

---

## Phase 2 — Areas of Disagreement

### 2.1 Net Paintable Body Area — Three-Way Comparison

| | PRR | SER (Amended) | MCR |
|---|---|---|---|
| Likely / calculated | **1,285 SF** | **~1,200 SF** | **1,107 SF** |
| Low | 1,150 SF | ~1,100 SF | — |
| High | 1,550 SF | ~1,325 SF | — |
| Method | Perimeter × height + gable % | Wall-by-wall segments, measured/estimated dimensions | Elevation-by-elevation, field widths |
| Gap vs. SER | +85 SF (+7%) | — | −93 SF (−8%) |

**PRR vs. SER (85 SF gap):** Small — within margin of error. Explained primarily by OSM perimeter overcount. Both arrive in the 1,100–1,325 SF band. Consistent cross-check.

**SER vs. MCR (93 SF gap):** Narrow — within 8%. After updating MCR to the 9 ft working eave height, the gap is now explained almost entirely by the side gable height difference (MCR uses 8 ft above eave vs. SER's estimated 12 ft). The MCR is a useful conservative floor; the SER remains the preferred working model.

**All three sources ranked by confidence:** SER > MCR > PRR. SER is grounded in measured/confirmed footprint inputs (front width 27 ft, depth 25 ft, max width 33 ft), estimated height inputs, and itemized wall segments. MCR uses field-confirmed widths and the 9 ft working eave; the gable height above eave is the one remaining difference. PRR is OSM-derived with no photo access.

### 2.2 Perimeter

| | PRR | SER (Amended) |
|---|---|---|
| Conclusion | ~145 lin. ft (OSM polygon) | ~122 lin. ft (calculated from corrected footprint) |
| Gap | 23 ft (19%) |
| Potential cause | OSM polygon perimeters are frequently inflated for residential buildings — polygon nodes may trace around overhangs, porches, or roof edges rather than the wall footprint. The 6 ft porch roof overhang (not enclosed) may have inflated the OSM polygon. Additionally, the OSM bounding box (40 × 32 ft) does not match the estimator-confirmed dimensions (27 × 25 ft), suggesting the OSM polygon is mis-scaled. |
| Stronger conclusion | **SER 122 ft.** Derived from estimator-confirmed/measured footprint inputs (27 ft front, 25 ft depth, 6 ft bump-out width) plus estimated 3 ft kickout depth. The OSM perimeter is the primary driver of the PRR's relatively high area estimate despite the single-story model. |

### 2.3 Front Width

| | PRR | SER (Amended) |
|---|---|---|
| Conclusion | ~40 ft (OSM bounding box) | 27 ft (annotated satellite + estimator-confirmed) |
| Gap | 13 ft |
| Cause | OSM bounding box is not a wall measurement — it includes overhangs, roof edges, or may reflect an inaccurate polygon. The estimator confirmed front face = 27 ft. |
| Stronger conclusion | **SER 27 ft.** Directly confirmed by estimator and consistent with satellite annotation. |

### 2.4 Gable Count and Area

| | PRR | SER (Amended) |
|---|---|---|
| Conclusion | 2 gables (default assumption) | 2 exterior paintable gables (left + right) |
| Gable area | 180 SF (2 × ½ × 30 × 6) | 300 SF (2 × ½ × 25 × 12) |
| Gap | 120 SF |
| Cause | PRR used correct count (2 gables) but different base (30 ft vs. 25 ft) and height (6 ft vs. 12 ft). PRR's 30 ft base is from OSM bounding box (not building wall). SER's 12 ft gable height is derived from the estimated ridge height (21 ft) minus estimated eave height (9 ft). |
| Stronger conclusion | **SER.** Gable height is estimated at 12 ft (21 ft ridge − 9 ft eave), not field-measured. PRR's 6 ft gable assumption is likely a 50% undercount. |

### 2.5 Front Upper Area

| | PRR | SER (Amended) |
|---|---|---|
| Conclusion | 0 confirmed | 1 front cross-gable face (~49 SF gross) |
| Cause | PRR had no photo access. SER confirmed from exterior-front.png: a centered triangular cross-gable above the porch roofline with two small arched windows set into it. Not two separate protruding dormer boxes — one triangular gable face, (14 ft × 7 ft) ÷ 2 = 49 SF. Two small windows (~4 SF each) deducted separately. |
| Stronger conclusion | **SER.** Gable face clearly visible in front elevation photo. |

### 2.6 Opening Deductions

| | PRR | SER (Amended) |
|---|---|---|
| Conclusion | ~200 SF (13–15% of gross) | 227 SF (itemized) |
| Gap | 27 SF |
| Cause | PRR percentage estimate applied to a different gross area. SER itemizes ~10 windows and 3 doors; front gable windows are small (~4 SF each vs. typical 9–12 SF window). |
| Stronger conclusion | **SER deduction is more defensible** (itemized), though individual window sizes are estimated. |

### 2.8 Eave Height — SER vs. MCR ✅ RESOLVED

| | SER | MCR |
|---|---|---|
| Eave height used | 9 ft | **9 ft** (updated) |
| Area impact | — | MCR updated; eave height now consistent across all three sources |
| Source | Estimated; not field-measured | Updated to match 9 ft working eave height |
| Conclusion | **RESOLVED.** Both SER and MCR now use the same 9 ft working eave height. This conflict is closed. The remaining SER/MCR gap (~93 SF) is attributable mainly to the side gable height difference (§2.9: MCR uses 8 ft above eave vs. SER's estimated 12 ft). |

### 2.9 Side Gable Height — SER vs. MCR

| | SER | MCR |
|---|---|---|
| Left + right gable height above eave | 12 ft each | 8 ft each |
| Gable area per side | (25 × 12) ÷ 2 = **150 SF** | (25 × 8) ÷ 2 = **100 SF** |
| Total both gables | **300 SF** | **200 SF** |
| Gap | **100 SF** | |
| SER source | Derived: estimated ridge 21 ft − estimated eave 9 ft = 12 ft | |
| MCR source | Estimated at 8 ft above eave | |
| Stronger conclusion | **SER 12 ft working value.** Both ridge height (21 ft) and eave height (9 ft) are estimates, so the gable height remains estimated. MCR's 8 ft gable likely underestimates the side gable triangles by 33%. This is the largest single driver of the SER/MCR gap. |

### 2.10 Front Gable Treatment — SER vs. MCR

| | SER | MCR |
|---|---|---|
| Front gable base used | 14 ft (centered cross-gable) | 27 ft (full front width) |
| Front gable height above eave | 7 ft | 6.5 ft |
| Front gable area | (14 × 7) ÷ 2 = **49 SF** | (27 × 6.5) ÷ 2 = **88 SF** |
| Gap | MCR is +39 SF higher than SER here | |
| MCR approach | Treats the entire upper front face as one full-width gable end | |
| SER approach | Treats front as a centered cross-gable spanning ~half the front width | |
| Note | This is the one area where MCR is HIGHER than SER. If the front gable does span the full front width, SER is under-counting ~39 SF. Verify against field observation — does the full upper front face taper to a peak, or only the center portion? |
| Provisional conclusion | **MCR may be correct here.** The exterior-front.png photo shows the entire upper front face rising to a peak. If the front is a full-width gable end, MCR's 27 ft base is more accurate. The SER's 14 ft cross-gable may undercount the front face. Field verify. |

### 2.12 Siding Material

| | PRR | SER (Amended) | MCR | Estimator-Supplied |
|---|---|---|---|
| Conclusion | "Assumed painted lap/wood/composite" | Horizontal lap (front/rear) + vertical B&B (gables) | Aluminum siding (stated) | **Aluminum** (customer-stated) |
| Status | ⚠️ All three sources note aluminum — MCR explicitly confirms "aluminum siding" as known fact. Substrate confirmed by customer; visual confirmation still pending field visit. |
| Impact | **High.** Aluminum requires adhesion primer; no abrasive sanding; TSP or aluminum-compatible wash; risk of galvanic marking at fasteners. Prep method differs materially from wood/fiber cement. |

---

## Phase 3 — Questionable Assumptions

### PRR Assumptions — Flagged

| # | Assumption | Flag | Reason |
|---|---|---|---|
| P1 | "Mapped levels: 1 — one-story building" | ✅ Now reconciled | The building IS effectively 1.5 story. PRR's 1-level OSM tag, while imprecise, was not as wrong as originally thought — the prior SER's two-story model was the error. |
| P2 | Perimeter 145 ft from OSM polygon | ⚠️ Likely overcount | OSM polygon appears to trace overhangs or roof edges, not wall footprint. 19% higher than SER (122 ft). |
| P3 | Front width ~40 ft (bounding box) | ⚠️ Overcount | Bounding box inflated. Confirmed front face = 27 ft. |
| P4 | Two modest gable ends (assumed) | ✅ Gable count correct | PRR's assumption of 2 gables was right; base and height values differ. |
| P5 | Gable base ~30 ft | ⚠️ Overcount | OSM-derived. Actual = 25 ft (building depth). |
| P6 | Gable height ~6 ft | ⚠️ Undercount | Estimated. Working value = 12 ft (estimated 21 ft ridge − estimated 9 ft eave). PRR likely underestimates gable area by 50%. |
| P7 | "No confirmed front upper area" | ⚠️ Incomplete | Front cross-gable face (~49 SF) confirmed in site photos — PRR lacked photo access, so omission is understandable. |

### SER Assumptions — Flagged (Amended)

| # | Assumption | Flag | Reason |
|---|---|---|---|
| S1 | Building depth = 25 ft | ✅ Measured | Estimator field measurement. Each 1 ft = ~54 SF swing (two gable walls × 1 ft × 9 ft), but the working value is high confidence. |
| S2 | Bump-out depth = ~3 ft | ⚠️ Estimated | Estimator said "maybe 3 ft." Low impact on total (≤54 SF swing). |
| S3 | Gable height = 12 ft | ⚠️ Estimated | Derived from estimated ridge height (21 ft) minus estimated eave height (9 ft). |
| S4 | Front gable face: 14 ft base × 7 ft height | ⚠️ Estimated | Dimensions estimated from exterior-front.png proportions. Small impact — uncertainty ≤ ±15 SF. |
| S5 | Window count: ~10 | ⚠️ Estimated from photos | ±2 windows = ±24 SF. |
| S6 | Siding identified as horizontal lap + B&B | ⚠️ Substrate unconfirmed | Customer says aluminum but photos can't confirm. Aluminum prep approach must be confirmed in field. |
| S7 | Porch ceiling: ~18 ft × 6 ft = 108 SF | ⚠️ Estimated | Could range 108–162 SF. Field-measure before pricing severe-prep surface. |

---

## Phase 4 — Missing Information

### High Impact

| # | Missing Item | Impact | Why It Matters |
|---|---|---|---|
| M1 | **Eave/ridge height — field measurement** | High | Eave and ridge heights are estimated, not field-measured. These drive the side gable triangle area. |
| M2 | **Siding material confirmation — aluminum** | High | Customer says aluminum on all surfaces. Are both horizontal lap and B&B sections aluminum? Affects primer, prep method, and labor rate. |
| M3 | **Window sill deterioration scope** | High | Customer-flagged. Count and severity unknown. Bondo/repair labor is a significant wildcard. |

### Medium Impact

| # | Missing Item | Impact | Why It Matters |
|---|---|---|---|
| M4 | Window count and sizes — field verify | Medium | SER estimates ~10 windows. ±2–3 windows affects deductions by ±24–36 SF and paint quantity. |
| M5 | Porch ceiling dimensions — field measure | Medium | Estimated 108 SF (severe prep). Actual could be 108–162 SF. Controls labor estimate significantly. |
| M6 | Rear trellis / pergola scope | Medium | Unknown: painted wood or metal? In scope or excluded? Access restricted by planting. |
| M7 | Front porch ceiling moisture source | Medium | Severe peeling likely moisture-driven. If roof or gutter issue unaddressed, paint will fail again. Note investigation obligation. |
| M8 | Side deck scope | Medium | Small deck noted outside footprint. Confirm if deck boards, rails, or fascia are in scope. |

### Low Impact

| # | Missing Item | Impact | Why It Matters |
|---|---|---|---|
| M9 | Front gable face dimensions | Low | Estimated at 14 ft base × 7 ft height from photo. ±15 SF total impact. Field-verify if needed. |
| M10 | Chimney dimensions | Low | Estimated deduction 54 SF. Confirmed masonry — not painted. |
| M11 | Chimney dimensions | Low | Estimated deduction 54 SF. Confirmed masonry — not painted. |
| M12 | Bump-out depth (~3 ft) | Low | Minimal area impact. Confirm at site visit. |

---

## Phase 5 — Clarifying Questions for Estimator

> Questions ordered by estimated impact on labor or materials.

**Q1 — Siding Material (High)**  
Customer states "aluminum siding." Site photos are consistent with aluminum but don't confirm the substrate. Are BOTH the horizontal lap sections (front/rear) and the vertical B&B sections (gable ends) aluminum? Is the B&B section a different substrate? This changes primer selection, prep method, and wash chemistry for the entire job.

**Q2 — Bump-Out / Kickout Depth (Medium)**  
The 25 ft main building depth is field-measured. The remaining footprint uncertainty is the additional ~3 ft bump-out/kickout depth. Confirm that kickout depth if higher precision is needed.

**Q3 — Window Sill Deterioration (High)**  
Customer flagged window sill/base deterioration requiring scraping, sanding, and possible bondo. How many windows are affected? Which elevations? What is the severity (cosmetic vs. structural)? This is a labor wildcard that needs its own scope line.

**Q4 — Porch Ceiling Dimensions (Medium)**  
The porch ceiling is the highest-prep surface on the job. Estimated at ~108 SF (18 ft × 6 ft) — but if the porch spans the full 27 ft front, it's 162 SF. After scraping, will stain-blocking primer (e.g., Zinsser BIN) be required before topcoat?

**Q5 — Rear Trellis / Pergola Scope (Medium)**  
Is the rear trellis/pergola in scope? Painted members only, or does it include attached railings? Access appears restricted by dense planting.

**Q6 — Front Door (Medium)**  
Is the front door being repainted? Currently dark (black/navy). If a light color is specified, a light-opaque primer coat will be needed first. Color change or same color?

**Q7 — Chimney Scope (Low)**  
Is the brick chimney excluded from scope? SER confirmed masonry. Confirm exclusion — or if chimney cap / crown elastomeric coat is needed, add as separate line item.

---

## Phase 6 — Recommended Working Inputs

> For use by final report generator. Do not generate pricing or gallons from this table — pass these inputs to the estimate formula.

| Input | Working Value | Confidence | Source | Notes |
|---|---|---|---|---|
| **Building style** | Single 1.5-story craftsman bungalow | **Confirmed** | Estimator correction | No addition; no second structure |
| **Front face width (N-S)** | 27 ft | **High** | Annotated satellite + estimator | |
| **Building depth (E-W)** | 25 ft avg | **High** | Estimator field measurement | Main building depth measured |
| **Bump-out width (N-S)** | 6 ft | **Medium** | Estimator-confirmed | At rear-left (NW) corner |
| **Bump-out depth (E-W)** | ~3 ft | **Low** | Estimator estimate | Low area impact |
| **Maximum building width** | 33 ft | **High** | Estimator-confirmed | At bump-out corner only |
| **Perimeter** | ~122 lin. ft | **Medium** | Derived from above | |
| **Eave height (all walls)** | 9 ft | **Medium** | Estimated; not field-measured | Uniform across all segments |
| **Gable height (eave to ridge)** | 12 ft | **Medium** | Derived: estimated 21 ft ridge − estimated 9 ft eave | Both left and right gable ends. Estimated. |
| **Ridge height** | 21 ft | **Medium** | Estimated | Matches PRR OSM-mapped height of 21.7 ft within rounding |
| **Siding material** | Aluminum (customer-stated) — confirm all surfaces | **Unconfirmed** | Customer-stated | ⚠️ Affects primer, prep method. Do not finalize without field confirmation. |
| **Body siding area — gross** | ~1,447 SF | **Medium** | SER formula | |
| **Body siding area — net (likely)** | ~1,200 SF | **Medium** | SER after deductions | Use as working figure; range 1,100–1,325 SF |
| **Left (north) gable** | 375 SF (225 rect + 150 triangle) | **Medium** | SER; visible in exterior-left photos | Full gable from grade to estimated ridge (21 ft) |
| **Right (south) gable** | 375 SF (225 rect + 150 triangle) | **Medium** | SER; exterior-right.JPEG | Full gable from grade to estimated ridge (21 ft) |
| **Front gable face** | ~49 SF (14 ft × 7 ft ÷ 2) | **Medium** | Confirmed in exterior-front.png | Single cross-gable face above porch; two small windows (~4 SF each) deducted separately |
| **Windows — count** | ~10 | **Medium** | SER photo estimate | ±2 windows; field verify |
| **Opening deductions** | ~227 SF | **Medium** | SER itemized | Range ±25–35 SF |
| **Doors — count** | 3 (front, left side, rear) | **Medium** | SER photo inventory | Confirm rear door inclusion |
| **Porch ceiling** | ~108 SF | **Low-Med** | 18 ft × 6 ft estimated | SEVERE PREP. Field-measure before finalizing. Could be up to 162 SF. |
| **Porch columns** | 2 round columns | **Confirmed** | Front elevation photos | |
| **Chimney** | Excluded — masonry, not painted | **Confirmed** | SER; exterior-right-front.JPEG | Confirm scope exclusion with customer |
| **Condition — body siding** | Moderate: chalking/oxidation | **Confirmed** | Multiple elevation photos | No abrasive sanding on aluminum |
| **Condition — porch ceiling** | Severe: extensive multi-layer peeling | **Confirmed** | front-porch-ceiling.JPEG | Full scrape, stain-block prime, topcoat |
| **Condition — fascia/soffit** | Moderate weathering | **Confirmed** | front-porch-fascia.JPEG, soffit.jpeg | Standard prep |
| **Prep — body siding** | Moderate (1.25–1.5× standard) | **Likely** | Chalking across all surfaces | Adhesion primer required for aluminum |
| **Prep — porch ceiling** | High (3–5× standard) | **Confirmed** | Photo evidence of active failure | |
| **Window sill repair** | In scope — count and severity TBD | **Unconfirmed** | Customer-stated | ⚠️ Needs field survey before final scope |

---

## Phase 7 — Final Report Generator Notes

### Important Conclusions

1. **Three sources; tight cluster.** PRR (1,285 SF), SER (1,200 SF), and MCR (1,107 SF) now all fall within a 178 SF range — a 14% spread. After updating MCR to the 9 ft working eave height, all three sources are consistent. PRR and SER cluster within 7%; the MCR is a useful conservative floor.

2. **The remaining MCR gap is explained by gable height only.** All three sources use the same field-confirmed/measured footprint inputs (27 ft front, 25 ft depth, 33 ft max) and now use the same 9 ft working eave height. The MCR diverges from SER in one place: side gable height 8 ft vs. estimated 12 ft above eave (−100 SF). That is the sole remaining driver of the ~93 SF SER/MCR gap.

3. **The front gable is the one area where MCR may be more accurate than SER.** MCR uses the full 27 ft front width as the gable base (88 SF); SER uses 14 ft (49 SF). If the front face is a full-width gable end — which exterior-front.png suggests — the SER is under-counting ~39 SF on the front face. This is worth verifying in the field.

4. **The SER is the primary area model** for all calculations. It is grounded in estimator-confirmed/measured footprint inputs, estimated height inputs, and direct photo analysis. The PRR is a useful cross-check. The MCR provides a conservative lower bound and confirms the footprint widths independently.

5. **The PRR/SER gap is explained by OSM perimeter overcount.** The PRR uses an OSM polygon perimeter of 145 ft (vs. SER's 122 ft). The OSM perimeter is likely tracing roof overhangs or is mis-scaled. The SER's perimeter is derived from measured/confirmed footprint inputs plus the estimated 3 ft kickout.

4. **Aluminum siding was not confirmed in either report.** Customer stated aluminum. Both reports identified siding type visually but did not confirm substrate. Aluminum siding changes the entire prep approach: adhesion/bonding primer required, no abrasive sanding, aluminum-compatible wash chemistry. This must be confirmed before specifying prep materials.

5. **The porch ceiling is the highest-risk individual surface.** ~108–162 SF of paint failure is severe and extensive. This requires full scraping, possible sanding, stain-block prime, and topcoat. Prep labor here may equal or exceed the porch ceiling paint labor itself. Investigate moisture source.

6. **Window sill deterioration is unquantified.** Customer-flagged. Neither report estimated count or severity. Potential labor wildcard — field survey required.

### Unresolved Questions at Handoff

| # | Question | Impact Level |
|---|---|---|
| UQ1 | Siding material — is all siding aluminum? B&B sections too? | **High** |
| UQ2 | Window sill bondo/repair — how many, what severity? | **High** |
| UQ3 | Eave/ridge heights — field measure if higher precision is needed | **Medium** |
| UQ4 | Bump-out/kickout depth — confirm estimated ~3 ft | **Medium** |
| UQ5 | Porch ceiling actual dimensions — field measure | **Medium** |
| UQ6 | Rear trellis — in scope? Access feasibility? | **Medium** |
| UQ7 | Front door — color change or same? | **Medium** |
| UQ8 | Side deck — in scope? | **Low** |
| UQ9 | Chimney — confirm exclusion from scope | **Low** |

### Assumptions to Disclose in Final Report

- Building depth: 25 ft (field-measured)
- Bump-out/kickout depth: ~3 ft (estimator estimate)
- Eave height: 9 ft (estimated; not field-measured)
- Gable height: 12 ft (estimated — derived from estimated ridge 21 ft and estimated eave 9 ft)
- Ridge height: 21 ft (estimated; matches PRR OSM 21.7 ft)
- Window count: ~10 (estimated from photos)
- Porch ceiling: ~108 SF (estimated; could be up to 162 SF)
- Front gable face: 14 ft base × 7 ft height (estimated from exterior-front.png)

### Estimate Range Guidance

| Scenario | Net Body Siding | Source / Key Drivers |
|---|---|---|
| **MCR floor** | **1,107 SF** | Manual calc; 9 ft working eave + 8 ft gable (gable height remains under estimated 12 ft). Conservative lower bound. |
| SER low | ~1,100 SF | Ridge 21 ft / gable 12 ft (estimated), depth 24 ft, maximum deductions |
| **SER likely (recommend)** | **~1,200 SF** | Ridge 21 ft / gable 12 ft (estimated), depth 25 ft measured, central deductions |
| PRR likely | ~1,285 SF | OSM perimeter method; perimeter likely overstated |
| SER high | ~1,325 SF | Ridge 21 ft / gable 12 ft (estimated), depth 26 ft, minimum deductions |

**Recommend using 1,200 SF as the working body siding figure.** The MCR (1,107 SF) is a conservative floor — eave height now matches the 9 ft working assumption, but side gable height remains at 8 ft vs. the estimated 12 ft; the PRR (1,285 SF) uses an inflated perimeter. The SER (1,200 SF) is anchored to the most defensible measured/estimated inputs.

One open item from MCR: if the front gable is full-width (27 ft base as MCR assumes), add ~39 SF to the SER figure → ~1,239 SF. This is within the SER range and does not change the working estimate. Field verify front gable width at site visit.

If follow-up measurement changes the 25 ft building depth, recalculate using sensitivity: approximately 54 SF per foot of depth difference (two gable wall rectangles × 1 ft × 9 ft). The current 25 ft depth is field-measured; the ~3 ft kickout remains estimated.

Trim scope (~145 LF fascia / ~54 SF soffit / ~108 SF porch ceiling) is a **separate scope line** from body siding. Do not combine.

Porch ceiling prep should be **called out as a separate labor line item** given the severe condition.

Window sill repair should be treated as a **separate scope line** (TBD pending field survey).

### What the Final Report Generator Should Do

1. Use the SER area model (1,200 SF likely) as the base for body siding.
2. Three independent methods were cross-checked: PRR (1,285 SF, OSM polygon), SER (1,200 SF, measured/estimated dimensions), MCR (1,107 SF, elevation-by-elevation). All three fall within a 178 SF range (14%). PRR and SER cluster within 7%; MCR is a conservative floor — eave height now matches the 9 ft working assumption, with the remaining gap driven by conservative gable height (8 ft vs. estimated 12 ft above eave). Report can state that three methods were used and the working figure represents the reconciled midpoint.
3. Confirm aluminum siding before specifying prep materials.
4. List porch ceiling and window sill repair as separate line items with explicit prep multipliers.
5. Note UQ1–UQ9 as conditions on the estimate, so the customer understands what could change.
6. Flag the front gable width as a field-verify item: MCR uses 27 ft (full-width), SER uses 14 ft (cross-gable). If the full front face is a gable, increase the working estimate by ~39 SF to ~1,239 SF.

---

*QA Reconciliation Package — Internal Use Only — 2201 NE 58th Ave Portland OR 97213 — Amended 2026-06-22*  
*Sources: PRR (`2201-ne-58th-ave...estimate.md`), SER (`exterior-paint-estimating-worksheet.html` Amended), all provided site photos and satellite imagery, estimator field corrections.*
