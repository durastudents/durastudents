// Ported from dura-amar/duraplaces.map (places.json).
// DRAFT: coordinates and descriptions are not yet verified by the community,
// and the original Unsplash stock photos were dropped because they are not
// photos of these places. Replace `status` as each entry is checked.

import type { Verification } from "./types";

export type Place = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: "Nepal" | "Abroad";
  description: string;
  status: Verification;
};

export const places: Place[] = [
  {
    id: 1,
    name: "Lamjung Dura Danda",
    lat: 28.1833,
    lng: 84.4167,
    type: "Nepal",
    description: "The ancestral homeland of the Dura people, in Lamjung district.",
    status: "Unknown",
  },
  {
    id: 2,
    name: "Kathmandu Residence",
    lat: 27.7172,
    lng: 85.324,
    type: "Nepal",
    description: "Many Dura families have settled in the capital for education and employment.",
    status: "Unknown",
  },
  {
    id: 3,
    name: "Pokhara Community",
    lat: 28.2096,
    lng: 83.9856,
    type: "Nepal",
    description: "A community of Dura people living in Pokhara.",
    status: "Unknown",
  },
  {
    id: 4,
    name: "Chitwan Settlement",
    lat: 27.5291,
    lng: 84.3542,
    type: "Nepal",
    description: "Dura settlements in Chitwan district.",
    status: "Unknown",
  },
  {
    id: 5,
    name: "UK Diaspora",
    lat: 51.5074,
    lng: -0.1278,
    type: "Abroad",
    description: "Dura people living and working in the United Kingdom.",
    status: "Unknown",
  },
  {
    id: 6,
    name: "USA Community",
    lat: 40.7128,
    lng: -74.006,
    type: "Abroad",
    description: "Dura families living in the United States.",
    status: "Unknown",
  },
];
