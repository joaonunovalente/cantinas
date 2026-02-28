# cantinas
<div align="center">
  <br>
  <img src="src/assets/images/logo/logo-color-purple.svg" alt="Cantinas.pt logo" width="1000" />
  <br>
</div>

# Cantinas.pt

**Cantinas.pt** is a free-access web platform that aggregates and displays menus from the University of Aveiro canteens. The experience is optimized for students who need quick, reliable access to daily and weekly meal information.

## Project Summary

Designed for speed and reliability, **Cantinas.pt** uses a Cloudflare Worker as an intermediary layer for API requests. This architecture helps reduce latency and keeps response times stable, even during higher traffic periods.

When the app loads, the frontend requests the current day menu through the Worker endpoint. Returned data (organized by canteen and meal period) is parsed and rendered dynamically, allowing users to quickly see available dishes by location and schedule.

## Technical Overview

- **Frontend**
  - React + Vite application
  - UI based on the [DevDesk theme](https://github.com/xriley/DevDesk-Theme)
  - Responsive layout with canteen tabs, meal-period grouping, FAQ, and support pages

- **Middleware**
  - Cloudflare Worker used as API proxy layer
  - Request handling designed to improve consistency and reduce perceived latency

- **Data Source**
  - University of Aveiro official canteens API

- **Hosting**
  - Delivered via Cloudflare

## Contact

For feedback or questions:

- **contacto@cantinas.pt**
