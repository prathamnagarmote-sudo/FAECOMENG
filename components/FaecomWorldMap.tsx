'use client';
import { useEffect, useRef } from 'react';
import styles from './FaecomWorldMap.module.css';

/* ── 100% Precise Coordinates for Global Hubs ───────────────────── */
const LOCATIONS = [
  {
    name: 'USA (HQ)',
    lat: 34.0,
    lng: -98.0,
    flag: '🇺🇸',
    isHQ: true,
    badgePos: 'badge-below',
  },
  {
    name: 'CANADA',
    lat: 58.5,
    lng: -106.0,
    flag: '🇨🇦',
    isHQ: false,
    badgePos: 'badge-above',
  },
  {
    name: 'UK',
    lat: 54.5074,
    lng: -3.1278,
    flag: '🇬🇧',
    isHQ: false,
    badgePos: 'badge-above',
  },
  {
    name: 'DUBAI',
    lat: 25.2048,
    lng: 55.2708,
    flag: '🇦🇪',
    isHQ: false,
    badgePos: 'badge-above',
  },
  {
    name: 'AUSTRALIA',
    lat: -25.2744,
    lng: 133.7751,
    flag: '🇦🇺',
    isHQ: false,
    badgePos: 'badge-above',
  },
];

/* Helper to compute curved Great Circle control points for flight arcs */
function getCurvedPath(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number,
  curveOffset: number = 15
): [number, number][] {
  const midLat = (startLat + endLat) / 2 + curveOffset;
  const midLng = (startLng + endLng) / 2;
  const points: [number, number][] = [];
  const steps = 30;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    /* Quadratic Bezier curve equation */
    const lat = Math.pow(1 - t, 2) * startLat + 2 * (1 - t) * t * midLat + Math.pow(t, 2) * endLat;
    const lng = Math.pow(1 - t, 2) * startLng + 2 * (1 - t) * t * midLng + Math.pow(t, 2) * endLng;
    points.push([lat, lng]);
  }
  return points;
}

export default function FaecomWorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    /* Dynamic import so Leaflet doesn't run on SSR */
    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // @ts-expect-error leaflet internals
      delete L.Icon.Default.prototype._getIconUrl;

      /* Strict Bounding Box: Prevents infinite world wrapping/looping when dragged */
      const southWest = L.latLng(-65, -180);
      const northEast = L.latLng(85, 180);
      const worldBounds = L.latLngBounds(southWest, northEast);

      const isMobile = window.innerWidth < 768;

      const map = L.map(mapRef.current, {
        center: [22, 10],
        zoom: isMobile ? 0.3 : 2.2, // Zoom out more for mobile
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: isMobile, // Allow dragging on mobile
        doubleClickZoom: false,
        touchZoom: isMobile, // Allow touch zoom on mobile
        zoomSnap: 0.1,
        minZoom: 0.1, // Lower min zoom
        maxZoom: 6,
        worldCopyJump: false,
        maxBounds: isMobile ? undefined : worldBounds, // Remove max bounds on mobile so it doesn't force a crop
        maxBoundsViscosity: 1.0,
      });

      mapInstanceRef.current = map;

      /* Beautiful blue oceans with clear landmasses */
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      /* Add Flight Arc Connection Lines from USA (HQ) to all global hubs */
      const hq = LOCATIONS[0]; // USA (HQ)
      LOCATIONS.slice(1).forEach((dest) => {
        const curveOffset = dest.name === 'DUBAI' || dest.name === 'AUSTRALIA' ? 25 : 12;
        const curvedPoints = getCurvedPath(hq.lat, hq.lng, dest.lat, dest.lng, curveOffset);
        
        L.polyline(curvedPoints, {
          color: '#FF6B2C',
          weight: 2,
          opacity: 0.65,
          dashArray: '6, 8',
          className: 'faecom-animated-flight-line',
        }).addTo(map);
      });

      /* Custom SVG Marker Factory with directional badge positioning */
      function createMarkerIcon(flag: string, label: string, isHQ: boolean, badgePos: string) {
        const html = `
          <div class="faecom-marker${isHQ ? ' faecom-marker--hq' : ''} faecom-marker--${badgePos}">
            <div class="faecom-marker__pulse"></div>
            <div class="faecom-marker__dot"></div>
            <div class="faecom-marker__badge">
              <span class="faecom-marker__flag">${flag}</span>
              <span class="faecom-marker__label">${label}</span>
              ${isHQ ? '<span class="faecom-marker__star">★</span>' : ''}
            </div>
          </div>`;

        return L.divIcon({
          html,
          className: 'faecom-div-icon',
          iconSize: [140, 60],
          iconAnchor: [70, 30],
          popupAnchor: [0, -22],
        });
      }

      /* Add markers with 100% precision placement */
      LOCATIONS.forEach((loc) => {
        const icon = createMarkerIcon(loc.flag, loc.name, loc.isHQ, loc.badgePos);
        const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);

        marker.bindPopup(
          `<div class="faecom-popup">
            <span class="faecom-popup__flag">${loc.flag}</span>
            <div class="faecom-popup__text">
              <strong class="faecom-popup__name">${loc.name}</strong>
              ${loc.isHQ ? '<span class="faecom-popup__tag faecom-popup__tag--hq">HEADQUARTERS</span>' : '<span class="faecom-popup__tag">REGIONAL HUB</span>'}
            </div>
          </div>`,
          { className: 'faecom-leaflet-popup', maxWidth: 240, closeButton: false }
        );
      });

      /* Custom zoom controls in bottom-right */
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      /* Custom attribution in bottom-left */
      L.control
        .attribution({ position: 'bottomleft', prefix: '' })
        .addAttribution('<span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:600">© FAECOM INC. Global Network</span>')
        .addTo(map);
    });

    return () => {
      if (mapInstanceRef.current) {
        // @ts-expect-error leaflet internals
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className={styles.mapContainer} />;
}
