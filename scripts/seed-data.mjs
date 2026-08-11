import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://powxvrkjyfwadsjsalnv.supabase.co';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, serviceKey);

export const ALL_PROJECTS = [
  { id: 'tm-heights', name: 'TM Heights', location: 'USA', category: 'Light Gauge Steel', tag: 'Residential Apartment', area: '100,000 sq. ft.', storeys: '6 Floors', image: '/images/project_tm_heights.png', featured: true },
  { id: 'nelson-care', name: 'Nelson Senior Care Center', location: 'USA', category: 'Light Gauge Steel', tag: 'Senior Home Care Unit Center', area: '220,000 sq. ft.', storeys: '5 Floors', image: '/images/project_nelson_care.png', featured: true },
  { id: 'khan-house', name: 'Khan House', location: 'Canada', category: 'Light Gauge Steel', tag: 'Residential House', area: '5,000 sq. ft.', storeys: 'G+1 Floor', image: '/images/project_khan_house.png', featured: false },
  { id: 'chessnut', name: 'Chessnut Residence', location: 'USA', category: 'Light Gauge Steel', tag: 'Affordable Housing', area: '3,000 sq. ft.', storeys: '1 Floor', image: '/images/project_residential.png', featured: false },
  { id: 'fellowship-children', name: 'Fellowship / Children Building', location: 'USA', category: 'Light Gauge Steel', tag: 'Religious Structure', area: '11,760 sq. ft.', storeys: 'G+1', image: '/images/project_children_bldg.png', featured: false },
  { id: 'wheel-house', name: 'Wheel House', location: 'USA', category: 'Light Gauge Steel', tag: 'ADU Unit', area: '810 sq. ft.', storeys: '1 Floor', image: '/images/project_wheel_house.png', featured: false },
  { id: 'retail-crain-hwy', name: 'Retail Building 810 Crain Highway Gambrills', location: 'MD 21054, USA', category: 'Light Gauge Steel', tag: 'Retail Building', area: '11,760 sq. ft.', storeys: '1 Floor', image: '/images/project_commercial.png', featured: false },
  { id: 'new-addition-jcc', name: 'New Addition JCC', location: 'USA', category: 'Light Gauge Steel', tag: 'Religious Structure', area: '13,898 sq. ft.', storeys: '1 Floor', image: '/images/project_commercial.png', featured: false },

  { id: 'elm-st-unit', name: 'Elm St Unit', location: 'Manchester, New Hampshire, USA', category: 'Wood & Mass Timber', tag: 'Residential Complex', area: '22,492 sq. ft.', storeys: null, image: '/images/project_elm_st.png', featured: true },
  { id: 'theodore-cabin', name: 'Theodore Cabin', location: '1590 E Mirror Dr Duck Creek, UT 84762, USA', category: 'Wood & Mass Timber', tag: 'Residential Cabin', area: '3,689 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'widdison-family-cabin', name: 'Widdison Family Cabin', location: '1075 E Empty Saddle Rd Duck Creek Village, UT 84782, USA', category: 'Wood & Mass Timber', tag: 'Residential Cabin', area: null, storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'tipsy-moose', name: 'Tipsy Moose', location: 'Lot 24, 1075 N Valley Hills Blvd, Heber City, UT 84032, USA', category: 'Wood & Mass Timber', tag: 'Residential Villa', area: '2,322 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'cottage-unit-bahamas', name: 'Cottage Unit', location: 'Little Exuma, The Commonwealth of Bahamas', category: 'Wood & Mass Timber', tag: 'Residential Villa', area: '734.38 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'mm-residence-nc', name: 'M & M Residence', location: 'North Carolina, USA', category: 'Wood & Mass Timber', tag: 'Residential Villa', area: '10,000 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'sugar-villa-bahamas', name: 'Sugar Villa', location: 'Little Exuma, The Commonwealth of Bahamas', category: 'Wood & Mass Timber', tag: 'Residential Villa', area: '13,808.80 sq. ft.', storeys: null, image: '/images/project_sugar_villa.png', featured: false },
  { id: 'beach-bar-bahamas', name: 'Beach Bar', location: 'Little Exuma, The Commonwealth of Bahamas', category: 'Wood & Mass Timber', tag: 'Commercial', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },

  { id: 'emmons-bay-hotel', name: 'Emmons Bay Hotel 2902 Emmons Avenue', location: 'Brooklyn, NY, USA', category: 'Structural Steel', tag: 'Commercial Project', area: '11,235 sq. ft.', storeys: null, image: '/images/project_commercial.png', featured: true },
  { id: 'ascend-towers', name: 'Ascend Towers', location: 'New York, USA', category: 'Structural Steel', tag: 'Industrial Project', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'skid-project-1', name: 'Skid Project', location: 'USA', category: 'Structural Steel', tag: 'Industrial Project', area: null, storeys: null, image: '/images/project_industrial.png', featured: false },
  { id: 'skid-project-2', name: 'Skid Project', location: 'USA', category: 'Structural Steel', tag: 'Industrial Project', area: null, storeys: null, image: '/images/project_industrial.png', featured: false },
  { id: 'skid-project-3', name: 'Skid Project', location: 'USA', category: 'Structural Steel', tag: 'Industrial Project', area: null, storeys: null, image: '/images/project_industrial.png', featured: false },
  { id: 'charter-school-bronx', name: 'Charter School', location: '200 West Tremont, Bronx, NY, USA', category: 'Structural Steel', tag: 'Charter School For Law And Social Justice', area: '10,453 sq. ft.', storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'highbridge', name: 'Highbridge', location: '1387 University Avenue, Bronx, USA', category: 'Structural Steel', tag: 'Commercial Project', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'junction-boulevard', name: 'Junction Boulevard', location: 'Queens, 292 Madison Ave, New York, NY 10017, USA', category: 'Structural Steel', tag: 'Commercial Project', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'glenmark', name: 'Glenmark', location: 'USA', category: 'Structural Steel', tag: 'Industrial Project', area: null, storeys: null, image: '/images/project_industrial.png', featured: false },

  { id: 'fellowship-church-mep', name: 'Fellowship Church', location: '2714 Goat Creek Road, Kerrville, Texas, USA', category: 'MEP Engineering', tag: 'Cross Kingdom Church', area: '11,760 sq. ft.', storeys: null, image: '/images/project_children_bldg.png', featured: true },
  { id: 'children-building-mep', name: 'Children Building', location: '2714 Goat Creek Road, Kerrville, Texas, USA', category: 'MEP Engineering', tag: 'Cross Kingdom Church', area: '8,925 sq. ft.', storeys: null, image: '/images/project_children_bldg.png', featured: false },
  { id: 'camile-carpenter-res', name: 'Camile–Carpenter Residence', location: '204 Louisiana Dr, Mexico Beach, FL 32456, USA', category: 'MEP Engineering', tag: 'New Construction', area: null, storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'matthew-campbell-res', name: 'Matthew–Campbell Residence', location: '12 Bayshore Pines Court, Miramar Beach, FL 32550, USA', category: 'MEP Engineering', tag: 'Residential', area: '8,761.92 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'drescher-drescher-mep', name: 'Drescher–Drescher Residence', location: '42 Oceanside Drive, Palm Coast, FL 32137, USA', category: 'MEP Engineering', tag: 'Residential Villa', area: '7,671.75 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'nelson-care-mep', name: 'Nelson Care Unit', location: 'USA', category: 'MEP Engineering', tag: 'Senior Home Care Unit Center', area: '220,000 sq. ft.', storeys: '5 Floors', image: '/images/project_nelson_care.png', featured: false },

  { id: 'elm-st-bim', name: 'Elm St Unit', location: 'Manchester, New Hampshire, USA', category: 'BIM Integrated 3D', tag: 'Residential Complex', area: '22,492 sq. ft.', storeys: null, image: '/images/project_elm_st.png', featured: true },
  { id: 'little-home-nc', name: 'Little Home', location: 'North Carolina, USA', category: 'BIM Integrated 3D', tag: 'Residential Villa', area: '1,500 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'nelson-care-bim', name: 'Nelson Care Unit', location: 'USA', category: 'BIM Integrated 3D', tag: 'Senior Home Care Unit Center', area: '220,000 sq. ft.', storeys: '5 Floors', image: '/images/project_nelson_care.png', featured: false },
  { id: 'sugar-villa-bim', name: 'Sugar Villa', location: 'Little Exuma, The Commonwealth of Bahamas', category: 'BIM Integrated 3D', tag: 'Residential Villa', area: '13,808.82 sq. ft.', storeys: null, image: '/images/project_sugar_villa.png', featured: false },
  { id: 'cottage-unit-bim', name: 'Cottage Unit', location: 'Little Exuma, The Commonwealth of Bahamas', category: 'BIM Integrated 3D', tag: 'Residential Villa', area: '734.38 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'widdison-cabin-bim', name: 'Widdison Family Cabin', location: '1075 E Empty Saddle Rd Duck Creek Village, UT 84762, USA', category: 'BIM Integrated 3D', tag: 'Residential Cabin', area: null, storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'mm-residence-bim', name: 'M & M Residence', location: 'North Carolina, USA', category: 'BIM Integrated 3D', tag: 'Residential Villa', area: '10,000 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'ruiz-residence-bim', name: 'Ruiz Residence', location: 'USA', category: 'BIM Integrated 3D', tag: 'Residential Villa', area: '8,000 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },

  { id: 'joacim-miami', name: 'Joacim | 17820 SW 104 Ave', location: 'Miami, USA', category: 'Architectural BIM', tag: 'Multifamily Apartment', area: '17,884 sq. ft.', storeys: '11 Units', image: '/images/project_commercial.png', featured: true },
  { id: 'drescher-arch-bim', name: 'Drescher–Drescher Residence', location: '42 Oceanside Drive, Palm Coast, FL 32137, USA', category: 'Architectural BIM', tag: 'Residential Villa', area: '7,671.75 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'fellowship-church-arch', name: 'Fellowship Church', location: '2714 Goat Creek Road, Kerrville, Texas, USA', category: 'Architectural BIM', tag: 'Cross Kingdom Church', area: '11,760 sq. ft.', storeys: null, image: '/images/project_children_bldg.png', featured: false },
  { id: 'children-bldg-lvl1', name: 'Children Building Level 1', location: '2714 Goat Creek Road, Kerrville, Texas, USA', category: 'Architectural BIM', tag: 'Cross Kingdom Church', area: '8,925 sq. ft.', storeys: null, image: '/images/project_children_bldg.png', featured: false },
  { id: 'children-bldg-lvl2', name: 'Children Building Level 2', location: '2714 Goat Creek Road, Kerrville, Texas, USA', category: 'Architectural BIM', tag: 'Cross Kingdom Church', area: '8,925 sq. ft.', storeys: null, image: '/images/project_children_bldg.png', featured: false },
  { id: 'angel-ruiz-miami', name: 'Angel Ruiz', location: '5849 sq. ft. Avenue, Miami, Florida 33127, USA', category: 'Architectural BIM', tag: 'Residential', area: '5,849 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'campbell-walton', name: 'Campbell Residence', location: '12 Bayshore Pines Court, Miramar Beach, FL, USA', category: 'Architectural BIM', tag: 'Residential', area: '8,761.92 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },
  { id: 'carpenter-residence', name: 'Carpenter Residence', location: '200 Lillian Hwy, Pensacola, Florida 32516, USA', category: 'Architectural BIM', tag: 'Residential', area: '8,761.92 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: false },

  { id: 'ruiz-residence-concrete', name: 'Ruiz Residence', location: 'USA', category: 'Concrete Solutions', tag: 'Residential Villa', area: '8,000 sq. ft.', storeys: null, image: '/images/project_residential.png', featured: true },
  { id: '5th-ave-ny', name: '5th Avenue New York', location: 'New York, NY 10011, USA', category: 'Concrete Solutions', tag: 'Residential Villa', area: '8,000 sq. ft.', storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: '225th-st-ny', name: '225th Street', location: 'New York, NY 10463, USA', category: 'Concrete Solutions', tag: 'Mixed-use: Residential & Commercial', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'utphin-blvd-jamaica', name: 'Utphin Boulevard', location: 'Jamaica, NY 11435, USA', category: 'Concrete Solutions', tag: 'Mixed-use: Residential & Commercial', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'grand-concourse-bronx', name: 'Grand Concourse', location: 'Bronx, USA', category: 'Concrete Solutions', tag: 'Mixed-use: Residential & Commercial', area: null, storeys: null, image: '/images/project_commercial.png', featured: false },
  { id: 'junction-blvd-queens', name: 'Junction Blvd, Queens', location: 'Queens, New York, USA', category: 'Concrete Solutions', tag: 'Mixed-use: Residential & Commercial', area: null, storeys: null, image: '/images/project_commercial.png', featured: false }
];

async function seed() {
  console.log(`Seeding ${ALL_PROJECTS.length} projects into Supabase...`);
  const { data, error } = await supabase.from('projects').upsert(ALL_PROJECTS, { onConflict: 'id' });
  if (error) {
    console.error('Error seeding projects:', error);
  } else {
    console.log('Successfully seeded all 53 projects into Supabase DB!');
  }
}

seed();
