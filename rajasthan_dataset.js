/**
 * Find My Home - Rajasthan & Greater Jaipur Geospatial Property Dataset
 * Complete real coordinates (WGS84), landmarks, verification audit trails,
 * and property categories across Jaipur and nearby corridors.
 */

const RAJASTHAN_LOCALITIES = [
  { name: 'Jagatpura', lat: 26.8242, lng: 75.8644, type: 'Education & Residential Hub', popular: true, landmarks: ['SKIT College', 'JECRC University', 'Bombay Hospital', 'Poornima University'] },
  { name: 'Malviya Nagar', lat: 26.8539, lng: 75.8052, type: 'Commercial & Student Center', popular: true, landmarks: ['MNIT Jaipur', 'World Trade Park (WTP)', 'Gaurav Tower (GT)', 'Apex Hospital'] },
  { name: 'Mansarovar', lat: 26.8627, lng: 75.7618, type: 'Metro Corridor & Residential', popular: true, landmarks: ['Mansarovar Metro Station', 'VT Road Market', 'IIS University', 'St. Wilfreds College'] },
  { name: 'Vaishali Nagar', lat: 26.9069, lng: 75.7423, type: 'Upmarket Commercial & Residential', popular: true, landmarks: ['Amrapali Circle', 'Queens Road', 'Chitrakoot Stadium', 'National Handloom'] },
  { name: 'Tonk Road', lat: 26.8370, lng: 75.7950, type: 'Arterial Corridor & Tech Transit', popular: true, landmarks: ['Gopalpura Bypass Flyover', 'Chokhi Dhani', 'Mahatma Gandhi Hospital', 'Sitapura Link'] },
  { name: 'Sitapura Industrial Area', lat: 26.7725, lng: 75.8572, type: 'IT Corridor & Technical Colleges', popular: true, landmarks: ['JECC Convention Centre', 'Genpact / Infosys SEZ', 'MGUMST Medical College', 'JECRC Campus'] },
  { name: 'Pratap Nagar', lat: 26.8015, lng: 75.8165, type: 'Coaching Hub & Medical University', popular: true, landmarks: ['RUHS Medical College', 'Rajasthan Coaching Hub', 'Haldi Ghati Marg', 'Jaipur Airport Gate 2'] },
  { name: 'Gopalpura Bypass', lat: 26.8682, lng: 75.7845, type: 'Premier Coaching Corridor', popular: true, landmarks: ['Allen Coaching Campus', 'Motion Academy', 'Triveni Nagar Chauraha', 'Riddhi Siddhi Circle'] },
  { name: 'Ajmer Road (Mahindra SEZ & Manipal)', lat: 26.8488, lng: 75.5684, type: 'University & IT SEZ Hub', popular: true, landmarks: ['Manipal University Jaipur', 'Mahindra World City SEZ', 'DPS School', 'Ring Road Junction'] },
  { name: 'Kukas & Delhi Road', lat: 27.0543, lng: 75.9085, type: 'College & University Strip', popular: true, landmarks: ['Arya College of Engineering', 'Amity University Jaipur', 'NIMS Medical University', 'Hotel Leela Palace'] },
  { name: 'Raja Park', lat: 26.8978, lng: 75.8286, type: 'Central Food & Retail Pocket', popular: false, landmarks: ['LBS College', 'Panchwati Circle', 'Pink City Central Proximity'] },
  { name: 'C-Scheme & Civil Lines', lat: 26.9090, lng: 75.7980, type: 'Corporate & Government Hub', popular: false, landmarks: ['Statue Circle', 'MI Road', 'Central Park', 'Secretariat'] },
  { name: 'Jhotwara & Kalwar Road', lat: 26.9520, lng: 75.7430, type: 'North-West Residential Pocket', popular: false, landmarks: ['Panchyawala Circle', 'Kanta Chauraha', 'Army Cantt Area'] },
  { name: 'Vidhyadhar Nagar & Sikar Road', lat: 26.9680, lng: 75.7780, type: 'VKI Industrial & Commercial', popular: false, landmarks: ['VKI Area', 'National Handloom VDN', 'Alka Cinema'] }
];

const RAJASTHAN_PROPERTIES = [
  {
    id: 'FMH-JPR-101',
    title: 'Aura Elite Luxury Coliving & PG',
    propertyType: 'pg',
    categoryLabel: 'Managed Co-Living / PG',
    occupancyRules: 'boys',
    targetAudience: 'student',
    monthlyRent: 8500,
    depositAmount: 8500,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: true,
    coordinates: { lat: 26.8265, lng: 75.8612 },
    address: {
      line1: 'Plot 42, Near SKIT College Back Gate, Ramnagaria',
      locality: 'Jagatpura',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302017'
    },
    nearbyLandmarks: [
      { name: 'SKIT Engineering College', type: 'college', distanceKm: 0.4 },
      { name: 'JECRC University Campus', type: 'college', distanceKm: 1.8 },
      { name: 'Bombay Hospital', type: 'hospital', distanceKm: 1.2 }
    ],
    amenities: ['3 Homestyle Meals', 'High-Speed 200 Mbps WiFi', 'Power Backup 24x7', 'RO Water', 'Biometric Entry', 'Daily Housekeeping', 'AC Rooms'],
    rating: 4.88,
    reviewsCount: 46,
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-03-28T10:30:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Rohit Verma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: '2026-04-15',
      lastConfirmedDate: '2026-04-10T08:00:00Z',
      isStale: false
    },
    owner: {
      name: 'Rameshwar Choudhary',
      contactMasked: '+91 98290 XX710',
      responseRate: '15 mins'
    }
  },
  {
    id: 'FMH-JPR-102',
    title: 'MNIT Scholars Comfort Boys & Girls Residency',
    propertyType: 'pg',
    categoryLabel: 'Premium Student PG',
    occupancyRules: 'unisex',
    targetAudience: 'student',
    monthlyRent: 11000,
    depositAmount: 11000,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: true,
    coordinates: { lat: 26.8562, lng: 75.8080 },
    address: {
      line1: 'B-14, Sector 4, Behind Gaurav Tower (GT)',
      locality: 'Malviya Nagar',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302017'
    },
    nearbyLandmarks: [
      { name: 'MNIT Jaipur Gate 1', type: 'college', distanceKm: 0.6 },
      { name: 'World Trade Park (WTP)', type: 'workplace', distanceKm: 0.8 },
      { name: 'Gaurav Tower (GT)', type: 'shopping', distanceKm: 0.4 }
    ],
    amenities: ['North & South Indian Meals', 'Library / Study Pods', 'Hi-Speed WiFi', '24x7 Hot Water', 'Lift Access', 'CCTV Security'],
    rating: 4.92,
    reviewsCount: 82,
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-04-02T14:15:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Pooja Sharma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: 'Immediate',
      lastConfirmedDate: '2026-04-11T09:30:00Z',
      isStale: false
    },
    owner: {
      name: 'Dr. K. L. Sharma',
      contactMasked: '+91 94140 XX890',
      responseRate: '10 mins'
    }
  },
  {
    id: 'FMH-JPR-103',
    title: 'Metro View Executive 2 BHK Flat',
    propertyType: 'flat',
    categoryLabel: 'Independent 2 BHK Flat',
    occupancyRules: 'family',
    targetAudience: 'professional',
    monthlyRent: 17500,
    depositAmount: 17500,
    depositMonths: 1,
    furnishing: 'semi_furnished',
    foodIncluded: false,
    coordinates: { lat: 26.8640, lng: 75.7635 },
    address: {
      line1: 'Flat 302, Royal Residency, Sector 7, VT Road',
      locality: 'Mansarovar',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302020'
    },
    nearbyLandmarks: [
      { name: 'Mansarovar Metro Station', type: 'transit', distanceKm: 0.5 },
      { name: 'IIS University', type: 'college', distanceKm: 1.1 },
      { name: 'RIICO Industrial Area', type: 'workplace', distanceKm: 1.5 }
    ],
    amenities: ['Modular Kitchen', 'Dedicated Car Parking', 'Balcony with Metro View', 'Gated Society Security', 'Geyser', 'Wardrobes'],
    rating: 4.79,
    reviewsCount: 31,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-03-25T11:00:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Rohit Verma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: '2026-05-01',
      lastConfirmedDate: '2026-04-09T11:00:00Z',
      isStale: false
    },
    owner: {
      name: 'Sunil Meena',
      contactMasked: '+91 97850 XX340',
      responseRate: '30 mins'
    }
  },
  {
    id: 'FMH-JPR-104',
    title: 'The Queens Retreat Private Studio & 1 RK',
    propertyType: 'private_room',
    categoryLabel: 'Private Studio / 1 RK',
    occupancyRules: 'unisex',
    targetAudience: 'professional',
    monthlyRent: 13000,
    depositAmount: 13000,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: false,
    coordinates: { lat: 26.9085, lng: 75.7445 },
    address: {
      line1: 'C-28, Amrapali Marg, Near Inox Mall',
      locality: 'Vaishali Nagar',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302021'
    },
    nearbyLandmarks: [
      { name: 'Amrapali Circle', type: 'workplace', distanceKm: 0.3 },
      { name: 'Queens Road Market', type: 'shopping', distanceKm: 0.9 },
      { name: 'Chitrakoot Stadium', type: 'recreation', distanceKm: 1.2 }
    ],
    amenities: ['Private Pantry', 'Smart LED TV', 'Inverter Backup', 'Automated Smart Lock', 'Attached Terrace', 'Car Parking'],
    rating: 4.95,
    reviewsCount: 54,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-04-05T16:00:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Pooja Sharma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: 'Immediate',
      lastConfirmedDate: '2026-04-11T12:00:00Z',
      isStale: false
    },
    owner: {
      name: 'Virendra Singh Rathore',
      contactMasked: '+91 96020 XX120',
      responseRate: '5 mins'
    }
  },
  {
    id: 'FMH-JPR-105',
    title: 'Sitapura Tech Park Professional Suites',
    propertyType: 'shared_room',
    categoryLabel: 'Twin Shared Room / PG',
    occupancyRules: 'boys',
    targetAudience: 'professional',
    monthlyRent: 6500,
    depositAmount: 6500,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: true,
    coordinates: { lat: 26.7750, lng: 75.8540 },
    address: {
      line1: 'RIICO IT Zone, Near Genpact & JECC Gate 3',
      locality: 'Sitapura Industrial Area',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302022'
    },
    nearbyLandmarks: [
      { name: 'Genpact / Infosys Campus', type: 'workplace', distanceKm: 0.5 },
      { name: 'JECC Convention Centre', type: 'workplace', distanceKm: 0.7 },
      { name: 'Mahatma Gandhi Hospital', type: 'hospital', distanceKm: 1.4 }
    ],
    amenities: ['Night Shift Tiffin Support', 'Gym & Table Tennis', 'High Speed Fibre Net', 'Zero Curfew', 'Laundry Facility'],
    rating: 4.71,
    reviewsCount: 39,
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-03-20T12:00:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Rohit Verma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: 'Immediate',
      lastConfirmedDate: '2026-04-08T15:20:00Z',
      isStale: false
    },
    owner: {
      name: 'Harish Gehlot',
      contactMasked: '+91 98870 XX990',
      responseRate: '25 mins'
    }
  },
  {
    id: 'FMH-JPR-106',
    title: 'Coaching Hub Scholar Stay & Girls PG',
    propertyType: 'pg',
    categoryLabel: 'Girls Only Coaching PG',
    occupancyRules: 'girls',
    targetAudience: 'student',
    monthlyRent: 9500,
    depositAmount: 9500,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: true,
    coordinates: { lat: 26.8040, lng: 75.8190 },
    address: {
      line1: 'Sector 11, Haldi Ghati Marg, Opposite Coaching Hub',
      locality: 'Pratap Nagar',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302033'
    },
    nearbyLandmarks: [
      { name: 'Rajasthan Coaching Hub Complex', type: 'college', distanceKm: 0.3 },
      { name: 'RUHS Medical University', type: 'college', distanceKm: 0.9 },
      { name: 'Jaipur International Airport', type: 'transit', distanceKm: 2.5 }
    ],
    amenities: ['Pure Veg Rajasthani & Punjabi Meals', 'Female Warden 24x7', 'CCTV Secured Floor', 'Study Table & Bookshelves', 'RO Water'],
    rating: 4.89,
    reviewsCount: 63,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-04-04T10:00:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Pooja Sharma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: 'Immediate',
      lastConfirmedDate: '2026-04-11T11:00:00Z',
      isStale: false
    },
    owner: {
      name: 'Mrs. Shanti Shekhawat',
      contactMasked: '+91 94140 XX450',
      responseRate: '10 mins'
    }
  },
  {
    id: 'FMH-JPR-107',
    title: 'Manipal Tech Horizon Villas & 3 BHK',
    propertyType: 'independent_house',
    categoryLabel: 'Independent Villa / 3 BHK',
    occupancyRules: 'family',
    targetAudience: 'professional',
    monthlyRent: 24000,
    depositAmount: 24000,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: false,
    coordinates: { lat: 26.8450, lng: 75.5640 },
    address: {
      line1: 'Villa 18, Gulmohar Enclave, Dehmi Kalan, Ajmer Road',
      locality: 'Ajmer Road (Mahindra SEZ & Manipal)',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '303007'
    },
    nearbyLandmarks: [
      { name: 'Manipal University Jaipur Gate', type: 'college', distanceKm: 1.1 },
      { name: 'Mahindra World City SEZ', type: 'workplace', distanceKm: 3.2 },
      { name: 'Jaipur-Ajmer Expressway', type: 'transit', distanceKm: 0.8 }
    ],
    amenities: ['Private Garden', 'Modular Island Kitchen', 'Clubhouse & Swimming Pool', 'Covered Car Parking', '24x7 Security'],
    rating: 4.96,
    reviewsCount: 28,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-03-15T15:30:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Rohit Verma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: '2026-05-10',
      lastConfirmedDate: '2026-04-07T10:45:00Z',
      isStale: false
    },
    owner: {
      name: 'Digvijay Singh',
      contactMasked: '+91 99280 XX780',
      responseRate: '20 mins'
    }
  },
  {
    id: 'FMH-JPR-108',
    title: 'Arya & Amity Campus Coliving Haven',
    propertyType: 'shared_room',
    categoryLabel: 'Triple / Twin Sharing PG',
    occupancyRules: 'boys',
    targetAudience: 'student',
    monthlyRent: 6000,
    depositAmount: 6000,
    depositMonths: 1,
    furnishing: 'fully_furnished',
    foodIncluded: true,
    coordinates: { lat: 27.0510, lng: 75.9120 },
    address: {
      line1: 'SP-40, RIICO Industrial Area, Kukas, Delhi Road',
      locality: 'Kukas & Delhi Road',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302028'
    },
    nearbyLandmarks: [
      { name: 'Arya College of Engineering', type: 'college', distanceKm: 0.5 },
      { name: 'Amity University Jaipur', type: 'college', distanceKm: 2.8 },
      { name: 'NIMS Medical University', type: 'college', distanceKm: 4.5 }
    ],
    amenities: ['3 Full Meals + Evening Tea', 'College Shuttle Service', 'Sports Ground Access', 'Laundromat', 'High-Speed WiFi'],
    rating: 4.67,
    reviewsCount: 51,
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=800&q=80',
    verification: {
      isVerified: true,
      physicalInspectionDate: '2026-03-10T11:00:00Z',
      verifiedBy: 'Jaipur Field Auditor Team (Rohit Verma)',
      aadhaarOwnerVerified: true,
      meterTariffFixed: true
    },
    availability: {
      isAvailable: true,
      availableFrom: 'Immediate',
      lastConfirmedDate: '2026-03-22T09:00:00Z',
      isStale: true // Stale demo flag (> 14 days without confirmation)
    },
    owner: {
      name: 'Bhupendra Yadav',
      contactMasked: '+91 97830 XX210',
      responseRate: '45 mins'
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RAJASTHAN_LOCALITIES, RAJASTHAN_PROPERTIES };
}
