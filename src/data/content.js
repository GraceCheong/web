export const profile = {
  name: 'DaEun Cheong',
  wordmarkTag: '3D VISION · RESEARCH',
  eyebrow: '3D Vision · Deep Learning',
  intro: [
    'I am a 3D vision researcher focused on how learned representations can help models infer geometry and structure from images.',
    'My work spans monocular camera calibration, human reconstruction, and real-time 3D systems.',
  ],
  email: 'wjdekdms001@gmail.com',
  phone: '+82 10-3205-9418',
  scholarUrl: 'https://scholar.google.com/citations?user=zyTJIzsAAAAJ&hl=en',
  githubUrl: 'https://github.com/GraceCheong',
  linkedinUrl: 'https://www.linkedin.com/in/%EB%8B%A4%EC%9D%80-%EC%A0%95-32636325a/',
}

export const researchItems = [
  {
    id: 'cameravq',
    period: '2025 — 2026',
    status: 'Published · First author · M.S. thesis',
    category: 'Camera Geometry',
    tags: ['Monocular calibration', 'Vector quantization', 'DINOv3'],
    title: 'CameraVQ',
    subtitle: 'Vector-Quantized Representations for Monocular Camera Calibration',
    summary:
      'A representation-learning approach to monocular camera calibration that models camera intrinsics with a learned discrete codebook and predicts them from a single image.',
    context: 'First-author research · M.S. thesis · Korea University Media Lab',
    question:
      'Can a discrete representation of camera intrinsics provide a useful target space for monocular calibration from visual observations?',
    method:
      'A VQ-based model learns codes for normalized camera intrinsics, while frozen visual features are used to predict the corresponding camera representation from one image.',
    contribution:
      'Introduces a discrete representation for camera intrinsics and connects representation learning directly with monocular camera geometry, enabling calibration to be framed as prediction in a learned code space.',
    diagram: [
      { label: 'OBSERVATION', value: 'Single image' },
      { label: 'VISUAL FEATURE', value: 'Frozen image encoder' },
      { label: 'REPRESENTATION', value: 'Camera code', accent: true },
      { label: 'GEOMETRY', value: 'Camera intrinsics' },
    ],
    diagramCaption: 'Conceptual overview · image evidence is mapped to a learned camera representation.',
    video: '',
    links: [{ label: 'Publication', href: '#publication-cameravq' }],
  },
  {
    id: 'xr-interaction',
    period: '2023 — 2025',
    status: 'Published · Collaborative research',
    category: 'Humans & Interaction',
    tags: ['Human mesh recovery', 'Mixed reality', 'Real-time interaction'],
    title: 'Human reconstruction for XR interaction',
    subtitle: 'Monocular human estimation in interactive environments',
    summary:
      'A real-time pipeline that uses monocular human pose and shape estimation as full-body geometry for interaction with virtual objects in mixed reality.',
    context: 'Collaborative research · Korea University Media Lab',
    question: 'How can estimated 3D human geometry support natural full-body interaction with virtual objects?',
    method:
      'Integrated monocular human pose and shape estimation with an XR interaction pipeline and compared alternative body representations in an interactive user study.',
    contribution:
      'Connected monocular human reconstruction to a practical mixed-reality interaction system and evaluated how different body representations affect the interaction experience.',
    interactionMap: [
      { step: '01', title: 'Observe', detail: 'Monocular visual input' },
      { step: '02', title: 'Reconstruct', detail: '3D human pose and shape' },
      { step: '03', title: 'Interact', detail: 'Full-body interaction in XR' },
    ],
    video: '',
    links: [{ label: 'Related publications', href: '#publication-xr' }],
  },
]

export const researchDirection = {
  lead: 'I am interested in 3D perception models that learn geometry-aware representations and use them to reconstruct and reason about 3D structure from visual observations. I also care about bringing those models into practical, real-time systems.',
  pillars: [
    {
      title: 'Geometry-aware representations',
      description: 'Learning features and latent spaces that preserve cues useful for camera geometry, depth, shape, and spatial structure.',
    },
    {
      title: '3D reconstruction & perception',
      description: 'Inferring cameras, humans, and other 3D structure from limited or monocular visual observations.',
    },
    {
      title: 'Real-time 3D systems',
      description: 'Turning 3D perception methods into usable interactive pipelines under practical runtime constraints.',
    },
  ],
}

export const publications = [
  {
    id: 'publication-cameravq',
    year: '2026',
    status: 'PUBLISHED',
    type: 'JOURNAL · FIRST AUTHOR',
    title: 'CameraVQ: Vector-Quantized Representations for Monocular Camera Calibration',
    authors: [{ name: 'DaEun Cheong', me: true }, { name: 'Jung Hyun Han' }],
    venue: 'Computer Animation and Virtual Worlds · 37(3), e70144',
    doiUrl: 'https://doi.org/10.1002/cav.70144',
  },
  {
    id: 'publication-xr',
    year: '2025',
    status: 'PUBLISHED',
    type: 'JOURNAL',
    title: 'Interaction With Virtual Objects Using Human Pose and Shape Estimation',
    authors: [
      { name: 'Hong Son Nguyen' },
      { name: 'DaEun Cheong', me: true },
      { name: 'Andrew Chalmers' },
      { name: 'Myoung Gon Kim' },
      { name: 'Taehyun Rhee' },
      { name: 'Jung Hyun Han' },
    ],
    venue: 'Computer Animation and Virtual Worlds · 36(3), e70046',
    doiUrl: 'https://doi.org/10.1002/cav.70046',
  },
  {
    id: 'publication-ieeevr',
    year: '2025',
    status: 'PUBLISHED',
    type: 'CONFERENCE POSTER',
    title: 'Full-Body Interaction in Mixed Reality using 3D Pose and Shape Estimation',
    authors: [
      { name: 'Hong Son Nguyen' },
      { name: 'Andrew Chalmers' },
      { name: 'DaEun Cheong', me: true },
      { name: 'Myoung Gon Kim' },
      { name: 'Taehyun Rhee' },
      { name: 'Jung Hyun Han' },
    ],
    venue: '2025 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW) · pp. 1306–1307',
    doiUrl: 'https://doi.org/10.1109/VRW66409.2025.00299',
  },
]

export const sideProjects = {
  featured: [
    {
      id: 'digital-wardrobe',
      title: 'Digital Wardrobe',
      status: 'In development',
      subtitle: 'Real-time Virtual Garment Try-On in Unreal Engine',
      stack: ['Unreal Engine', 'Chaos Cloth', 'CLO', '3D Human Avatar', 'Real-time Graphics'],
      problem:
        'Virtual try-on is often presented as an isolated garment demo. This project explores a reusable personal wardrobe workflow where owned garments can be organized and previewed on a 3D avatar.',
      whatBuilt:
        'Building an Unreal Engine prototype that imports garments prepared in CLO, simulates them with Chaos Cloth, and lets a user select clothing from a personal wardrobe for real-time avatar preview.',
      video: '',
      githubUrl: '',
    },
  ],
  other: [
    {
      id: 'dlmon-teacher-studio',
      title: 'DLMon Teacher Studio',
      description:
        'A full-stack Chinese teaching workspace with local-LLM curriculum generation, assignment feedback, and text analysis.',
      stack: ['Next.js', 'Prisma', 'Local LLM', 'AI SDK'],
      githubUrl: 'https://github.com/GraceCheong/dlmon',
    },
    {
      id: 'po-rr',
      title: 'PO,RR Worship PPT',
      description:
        'A presentation-generation system with a desktop client, FastAPI server, template synchronization, and multi-backend PowerPoint generation.',
      stack: ['Python', 'FastAPI', 'React', 'PowerPoint automation'],
      githubUrl: 'https://github.com/GraceCheong/ppt-gen',
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
    extra: '3D vision · human reconstruction · camera geometry',
  },
  {
    date: 'MAR 2015 — AUG 2021',
    title: 'Kyung Hee University',
    org: 'B.S. in Computer Engineering',
    extra: '',
  },
]

export const skillGroups = [
  { title: 'Programming & ML', chips: ['Python', 'C++', 'PyTorch', 'Transformers'] },
  {
    title: '3D Vision & Graphics',
    chips: ['Camera Geometry', 'Human Mesh Recovery', 'SMPL-X', 'OpenGL', 'Unity', 'Unreal Engine'],
  },
  {
    title: 'Representation Learning',
    chips: ['Vector Quantization', 'Vision Transformers', 'CNN-based Vision Models', 'Diffusion Models'],
  },
  { title: 'Engineering', chips: ['Git', 'Linux', 'FastAPI', 'React', 'Conda'] },
]
