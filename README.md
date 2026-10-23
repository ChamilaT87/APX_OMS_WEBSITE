# APX-OMS — Public Website

**Operations, optimized.**

APX-OMS is a **modular apparel enterprise platform in development**, designed to connect commercial commitments, product definition, manufacturing execution, production planning, and wider enterprise operations through a governed operating model.

> **Current status — October 2026:** The Foundation's defined local browser tests have been completed. **Foundation M1 formal acceptance remains OPEN; G2 is NO-GO and G3 has not been granted.** This is not a general-availability production release.

## Product direction

Apparel businesses coordinate changes across commercial teams, technical development, procurement, production planning, factories, quality and logistics. APX-OMS is being developed around shared identity, clear authority, versioned product definitions and traceable operational decisions.

### Seven planned first-class domains

| Domain | Intended capability | Delivery status |
| --- | --- | --- |
| **ERP** | Commercial records, material control and connected enterprise operations | Planned product domain |
| **MES** | Manufacturing execution, work-in-progress events, quality and traceability | Planned product domain |
| **APS / PPC** | Demand allocation, capacity, loading and production planning | Planned product domain |
| **CRM** | Customer relationship management and commercial coordination | Planned product domain |
| **HRM** | Workforce identities, organizational structures and people processes | Planned product domain |
| **PLM** | Product Lifecycle Management: controlled product definition, technical revisions and product release | Planned product domain |
| **Finance** | Financial accounting and controlling (FI/CO), manufacturing costing, budgeting, reporting and financial controls | Planned product domain |

ERP, MES, APS/PPC, CRM, HRM, PLM and Finance are seven first-class domains in the approved APX-OMS architecture. FI/CO describes planned functionality within the Finance domain.

The public website retains six overview cards. That presentation does not reduce the seven-domain architecture or place PLM or Finance under ERP. These domains describe target product scope, not completed or deployed modules.

## Architecture principles

1. **Organization is the tenancy boundary.** Legal entities and operating sites are modeled separately.
2. **Authorization is capability-based.** User identity, organization membership, role and scope remain distinct.
3. **Products and technical definitions are version-controlled.** Manufacturing release is a separate controlled gate.
4. **Planning allocation and manufacturing execution have distinct ownership.** Demand, manufacturing orders and execution records are not interchangeable.
5. **Audit evidence matters.** Accepted actions must be attributable and verifiable.
6. **Domains are modular.** ERP, MES, APS/PPC, CRM, HRM, PLM and Finance are first-class domains intended to mature through governed releases, with explicit responsibilities and cross-domain handoffs.

## Current Foundation verification

The defined local Foundation test scope includes authentication, organization membership and selection, scoped resource access, protected routes and related audit behavior. The original automated browser UAT recorded **16/16 passing cases**. The later live Django / Microsoft Edge responsive login verification recorded **6/6 passing viewports**, including the agreed first-view no-scroll mobile requirement for those tested sizes.

These are **bounded local test observations**. They are not evidence of completed capabilities across ERP, MES, APS/PPC, CRM, HRM, PLM or Finance, external penetration-test certification, accessibility compliance across all devices, or production deployment readiness.

### Governance state

| Gate | State |
| --- | --- |
| Foundation M1 | **OPEN** — formal acceptance reconciliation pending |
| G2 | **NO-GO** |
| G3 | **NOT GRANTED** |

## Intended operational lifecycle

```text
Commercial commitment
    -> Controlled product and technical release
    -> Planning allocation
    -> Manufacturing order and release
    -> Shop-floor execution and quality
    -> Finished goods and logistics handoff
```

This is the **approved design direction**, not a claim that the entire workflow is currently live.

## Development roadmap

| Stage | Focus |
| --- | --- |
| Foundation | Governed identity, organization scope, security controls, local verification and acceptance |
| Domain development | Develop and verify workspaces across ERP, MES, APS/PPC, CRM, HRM, PLM and Finance through governed releases |
| Integration | Validate cross-domain boundaries, authority, exceptions and end-to-end scenarios |
| Product release | Commercialization, deployment and subscriptions only after applicable release approval |

Development proceeds module by module with owner approval of business logic prior to implementation.

## Public website

This repository contains **only the public APX-OMS product website**, served from [`docs/`](docs/). The desktop-first commercial application source, internal engineering records, configurations, and security evidence are **not included here**. This public site describes the product direction and bounded development status; it does not offer a live application or imply production release.

### GitHub Pages

When publication is approved, configure **Settings → Pages → Deploy from a branch → `main` → `/docs`**. The site entrypoint is `docs/index.html`. The site does not collect credentials or require a backend.

## Project owner

**Chamila T. Gamage** — APX-OMS project owner.  
LinkedIn: [Chamila T. Gamage](https://www.linkedin.com/in/chamila-t-gamage/)

## Licensing and security

The APX name, logo, and branding are not granted for third-party reuse. The website hero uses a generated illustration of a conceptual garment factory, not an image of an actual APX-OMS facility or any real people. No open-source or redistribution license is granted merely by the repository being public.

No `.env` files, credentials, application code, database snapshots, raw audit evidence, fixture secrets, or historical handoff archives belong in this repository.

---

*APX-OMS · Operations, optimized. Product in development.*
