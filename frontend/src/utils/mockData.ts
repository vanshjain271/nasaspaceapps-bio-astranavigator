export interface Publication {
  id: string;
  title: string;
  abstract: string;
  year: number;
  topic: string;
  organism: string;
  mission: string;
  aiSummary: string;
}

export const mockPublications: Publication[] = [
  {
    id: "1",
    title: "Microgravity Effects on Plant Gene Expression in Space",
    abstract: "This study examines the differential gene expression patterns in Arabidopsis thaliana grown aboard the International Space Station...",
    year: 2023,
    topic: "Plant Biology",
    organism: "Arabidopsis thaliana",
    mission: "ISS Expedition 68",
    aiSummary: "Research reveals significant upregulation of stress-response genes in space-grown plants, with potential applications for long-duration space missions."
  },
  {
    id: "2",
    title: "Radiation Adaptation in Microbial Communities",
    abstract: "Investigation of extremophile bacteria survival mechanisms under elevated radiation conditions similar to Mars surface...",
    year: 2023,
    topic: "Microbiology",
    organism: "Deinococcus radiodurans",
    mission: "Mars Analog Research",
    aiSummary: "Extremophiles demonstrate remarkable DNA repair mechanisms that could inform bioregenerative life support systems for Mars habitats."
  },
  {
    id: "3",
    title: "Bone Density Loss Prevention Through Exercise Protocols",
    abstract: "Longitudinal study of astronaut bone mineral density changes during 6-month ISS missions with varying exercise regimens...",
    year: 2022,
    topic: "Human Physiology",
    organism: "Homo sapiens",
    mission: "ISS Long Duration",
    aiSummary: "High-intensity resistance training combined with bisphosphonate treatment showed 40% reduction in bone density loss compared to control groups."
  },
  {
    id: "4",
    title: "Circadian Rhythm Disruption in Lunar Gravity Simulation",
    abstract: "Analysis of sleep-wake cycles and melatonin production in subjects under 1/6th Earth gravity simulation...",
    year: 2023,
    topic: "Chronobiology",
    organism: "Homo sapiens",
    mission: "Artemis Preparation",
    aiSummary: "Lunar gravity conditions alter circadian clock gene expression, suggesting need for tailored lighting protocols for Moon missions."
  },
  {
    id: "5",
    title: "Cyanobacteria as Oxygen Generators in Closed Habitats",
    abstract: "Evaluation of photosynthetic efficiency and oxygen production rates of genetically modified cyanobacteria strains...",
    year: 2022,
    topic: "Astrobiology",
    organism: "Synechococcus elongatus",
    mission: "Life Support Research",
    aiSummary: "Engineered strains achieve 35% higher O2 output, making them viable candidates for bioregenerative life support systems."
  },
  {
    id: "6",
    title: "Immune System Suppression During Extended Spaceflight",
    abstract: "Comprehensive immunological profiling of astronauts before, during, and after 1-year ISS missions...",
    year: 2021,
    topic: "Immunology",
    organism: "Homo sapiens",
    mission: "ISS Year-Long Mission",
    aiSummary: "T-cell function decreases significantly after 6 months, with partial recovery post-landing. Countermeasures under development."
  }
];

export const mockStats = {
  totalPublications: 608,
  aiSummariesGenerated: 608,
  topicsDetected: 47,
  researchYearsSpan: "1998-2024"
};

export const mockTopics = [
  { name: "Plant Biology", value: 89 },
  { name: "Microbiology", value: 112 },
  { name: "Human Physiology", value: 156 },
  { name: "Astrobiology", value: 73 },
  { name: "Immunology", value: 64 },
  { name: "Chronobiology", value: 42 },
  { name: "Genomics", value: 72 }
];

export const mockYearlyData = [
  { year: 2018, publications: 34 },
  { year: 2019, publications: 42 },
  { year: 2020, publications: 51 },
  { year: 2021, publications: 67 },
  { year: 2022, publications: 89 },
  { year: 2023, publications: 103 },
  { year: 2024, publications: 67 }
];

export const mockGraphData = {
  nodes: [
    { id: "microgravity", label: "Microgravity", type: "condition" },
    { id: "plant-growth", label: "Plant Growth", type: "organism" },
    { id: "gene-expression", label: "Gene Expression", type: "result" },
    { id: "radiation", label: "Radiation", type: "condition" },
    { id: "dna-repair", label: "DNA Repair", type: "result" },
    { id: "bone-loss", label: "Bone Loss", type: "result" },
    { id: "exercise", label: "Exercise", type: "countermeasure" }
  ],
  edges: [
    { source: "microgravity", target: "plant-growth" },
    { source: "plant-growth", target: "gene-expression" },
    { source: "radiation", target: "dna-repair" },
    { source: "microgravity", target: "bone-loss" },
    { source: "exercise", target: "bone-loss" }
  ]
};
