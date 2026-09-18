// ---------------------------------------------------------------------------
// All editable site content lives in this one file.
//
// To add a video to a research or project item, set `video` to a YouTube or
// Vimeo URL (any normal share/watch URL works, e.g.
// "https://www.youtube.com/watch?v=XXXXXXXXXXX" or
// "https://vimeo.com/XXXXXXXX"). Leave it unset / empty and no video block
// is rendered.
//
// Lines marked DRAFT below are Claude's best guess at wording from what
// Grace described — read and adjust before publishing, they are not
// placeholders in the "fill this in" sense, just unverified copy.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'DaEun Cheong',
  wordmarkTag: 'RESEARCH PORTFOLIO',
  eyebrow: '3D Vision · Representation Learning · Human Reconstruction · Real-time 3D',
  headingLead: 'Learning to perceive',
  headingRest: 'the ',
  headingEmphasis: '3D world.',
  intro: [
    "I'm DaEun Cheong. I study how learned representations can improve the inference of 3D structure from visual observations.",
  ],
  note: ['M.S. Computer Science & Engineering', 'Korea University · 2026'],
  email: 'wjdekdms001@gmail.com',
  scholarUrl: 'https://scholar.google.com/citations?user=zyTJIzsAAAAJ&hl=en',
  githubUrl: 'https://github.com/GraceCheong',
  // TODO(Grace): paste your LinkedIn profile URL here — until then this
  // button points nowhere (href="#") and is easy to spot in review.
  linkedinUrl: '',
}

// ---------------------------------------------------------------------------
// Selected Research — the primary section. Plotted on a timeline, newest
// first. Each item expands inline (accordion) for the full research
// write-up. Deliberately a different shape from Side Projects below:
// Research Question / Method / Contribution / Architecture / Context /
// Publication — never Problem/Stack/Demo/GitHub.
// ---------------------------------------------------------------------------
export const researchItems = [
  {
    id: 'cameravq',
    period: '2024 — 2026',
    status: 'In progress · M.S. thesis',
    category: 'Camera Geometry',
    tags: ['Monocular calibration', 'Vector quantization'],
    title: 'CameraVQ',
    subtitle: 'Vector-Quantized Representations for Monocular Camera Calibration',
    summary:
      'A discrete, learned representation of camera intrinsics for calibration from a single image — the basis of my master’s thesis.',
    context: 'First-author research · M.S. thesis · Advisor: Jung Hyun Han',
    question:
      'How can vector-quantized representations support the estimation of camera intrinsics from visual observations?',
    method:
      'Investigating vector-quantized representations for monocular calibration, connecting representation design with camera geometry.',
    contribution:
      // DRAFT — confirm this reads accurately against the thesis framing.
      'A discrete camera-code representation that makes monocular calibration more interpretable and learnable, tying representation design directly to camera geometry rather than regressing intrinsics directly.',
    diagram: [
      { label: 'OBSERVATION', value: 'Single image' },
      { label: 'REPRESENTATION', value: 'Camera code', accent: true },
      { label: 'GEOMETRY', value: 'Camera intrinsics' },
    ],
    diagramCaption: 'Conceptual overview · intrinsics are represented through a learned codebook.',
    video: '', // TODO(Grace): add a YouTube/Vimeo link when the demo video is ready
    links: [{ label: 'Publication', href: '#publication-cameravq' }],
  },
  {
    id: 'xr-interaction',
    period: '2023 — 2025',
    status: 'Collaborative research',
    category: 'Humans & Interaction',
    tags: ['Human pose & shape', 'Mixed reality'],
    title: 'Human reconstruction for XR interaction',
    subtitle: 'Monocular human estimation in interactive environments',
    summary:
      'Using human pose and shape estimation to support interaction with virtual objects, including work toward real-time interactive systems.',
    context: 'Collaborative research · Media Lab, Korea University',
    question: 'How can estimated human geometry be used to support interaction with virtual objects?',
    method:
      'Connecting 3D human estimation with XR applications and the practical requirements of interactive environments, at Korea University’s Media Lab.',
    contribution:
      // DRAFT — confirm this reads accurately against the published work.
      'Contributed to a pipeline that turns monocular human pose and shape estimates into full-body interaction with virtual objects, published as a journal article and demonstrated as an IEEE VR poster.',
    interactionMap: [
      { step: '01', title: 'Observe', detail: 'Visual input of a person' },
      { step: '02', title: 'Estimate', detail: '3D human pose and shape' },
      { step: '03', title: 'Interact', detail: 'Human–object interaction in XR' },
    ],
    video: '', // TODO(Grace): add a YouTube/Vimeo link when the demo video is ready
    links: [{ label: 'Related publications', href: '#publication-xr' }],
  },
]

// ---------------------------------------------------------------------------
// Research Direction — the throughline connecting the two research items
// above to Interactive 3D Systems (and from there to the side projects).
// ---------------------------------------------------------------------------
export const researchDirection = {
  lead: 'My broader interest is in developing effective representations for 3D perception — and connecting that perception to real, interactive systems.',
  pillars: [
    {
      title: '3D Perception',
      description: 'Recovering geometry and structure from visual observations.',
    },
    {
      title: 'Representation Learning',
      description: 'Learning representations that encode useful geometric information.',
    },
    {
      title: 'Interactive 3D Systems',
      description: 'Connecting 3D perception with human-centered and real-time applications.',
    },
  ],
}

export const publications = [
  {
    id: 'publication-cameravq',
    year: '2026',
    type: 'JOURNAL · FIRST AUTHOR',
    title: 'CameraVQ: Vector-Quantized Representations for Monocular Camera Calibration',
    authors: [{ name: 'DaEun Cheong', me: true }, { name: 'Jung Hyun Han' }],
    venue: 'Computer Animation and Virtual Worlds',
  },
  {
    id: 'publication-xr',
    year: '2025',
    type: 'JOURNAL',
    title: 'Interaction with Virtual Objects Using Human Pose and Shape Estimation',
    authors: [
      { name: 'Hong Son Nguyen' },
      { name: 'DaEun Cheong', me: true },
      { name: 'Andrew Chalmers' },
      { name: 'Myoung Gon Kim' },
      { name: 'Taehyun Rhee' },
      { name: 'Jung Hyun Han' },
    ],
    venue: 'Computer Animation and Virtual Worlds · 36(3), e70046',
  },
  {
    id: 'publication-ieeevr',
    year: '2025',
    type: 'CONFERENCE POSTER',
    title: 'Full-Body Interaction in Mixed Reality Using 3D Pose and Shape Estimation',
    authors: [
      { name: 'Hong Son Nguyen' },
      { name: 'Andrew Chalmers' },
      { name: 'DaEun Cheong', me: true },
      { name: 'Myoung Gon Kim' },
      { name: 'Taehyun Rhee' },
      { name: 'Jung Hyun Han' },
    ],
    venue: 'IEEE VR Abstracts and Workshops',
  },
]

// ---------------------------------------------------------------------------
// Side Projects — supporting evidence, not equal billing with Research.
// Two tiers, deliberately different shapes from the research cards above:
//   featured (Level B) — Problem / What I Built / Stack / Demo / GitHub
//   other    (Level C) — one line each, no big card
// ---------------------------------------------------------------------------
export const sideProjects = {
  featured: [
    {
      id: 'digital-wardrobe',
      title: 'Digital Wardrobe',
      subtitle: 'Real-time Virtual Garment Try-On in Unreal Engine',
      stack: ['Unreal Engine', 'Chaos Cloth', 'CLO', '3D Human Avatar', 'Garment Simulation', 'Real-time Graphics'],
      // DRAFT — your message cut off right after "프로젝트 구조:", so the
      // Problem / What I Built copy below is my best guess from the title,
      // subtitle and stack alone. Please rewrite these two fields with the
      // actual project details.
      problem:
        'DRAFT — replace with the actual problem statement (e.g. why real-time, physically simulated garment try-on is hard, and for whom).',
      whatBuilt:
        'DRAFT — replace with what you actually built: the avatar + garment simulation pipeline, what runs in real time, and what a user sees.',
      video: '', // TODO(Grace): add a YouTube/Vimeo demo link
      githubUrl: '', // TODO(Grace): add a GitHub link if the repo is public
    },
  ],
  other: [
    {
      id: 'dlmon-teacher-studio',
      title: 'DLMon Teacher Studio',
      description: 'AI-assisted educational platform using LLMs and speech recognition.',
      githubUrl: '',
    },
    {
      id: 'po-rr',
      title: 'PO,RR',
      description: 'Automated presentation generation and deployment system.',
      githubUrl: '',
    },
  ],
}

export const educationTimeline = [
  {
    date: 'SEP 2023 — FEB 2026',
    title: 'Korea University',
    org: 'M.S. in Computer Science and Engineering',
    extra: 'GPA 4.3 / 4.5 · Thesis: CameraVQ',
  },
  {
    date: 'JUN 2023 — FEB 2026',
    title: 'Media Lab, Korea University',
    org: 'Research Student',
    extra: '',
  },
  {
    date: 'MAR 2015 — AUG 2021',
    title: 'Kyung Hee University',
    org: 'B.S. in Computer Engineering',
    extra: '',
  },
]

export const skillGroups = [
  { title: 'Programming & Frameworks', chips: ['Python', 'C++', 'PyTorch'] },
  {
    title: '3D Vision & Graphics',
    chips: ['OpenGL', 'Unity', 'Unreal Engine', 'SMPL-X', 'Human Mesh Recovery', 'Camera Geometry'],
  },
  {
    title: 'Deep Learning',
    chips: ['Transformers', 'Diffusion Models', 'Vector Quantization', 'CNN-based Vision Models'],
  },
  { title: 'Tools', chips: ['Git', 'Linux', 'Conda'] },
]
