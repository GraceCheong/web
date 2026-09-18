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
    authors: [
      { name: 'DaEun Cheong', me: true },
      { name: 'Jung Hyun Han' },
    ],
    institutions: ['Media Lab, Korea University'],
    venue: 'Computer Animation and Virtual Worlds · 37(3), e70144',
    doiUrl: 'https://doi.org/10.1002/cav.70144',
    abstract:
      'CameraVQ reformulates monocular camera calibration as classification over vector-quantized camera intrinsics. A learned discrete codebook constrains predictions to plausible camera configurations and improves robustness and generalization across diverse calibration benchmarks.',
    mainFigure: '',
    video: '',
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
    institutions: [
      'Korea University',
      'Victoria University of Wellington',
      'The University of Melbourne',
    ],
    venue: 'Computer Animation and Virtual Worlds · 36(3), e70046',
    doiUrl: 'https://doi.org/10.1002/cav.70046',
    abstract:
      'This work presents an AR interaction system built from human pose and shape estimation, camera-space calibration, and physics simulation. A single RGB video stream is used to reconstruct the user and support physically meaningful interaction with virtual objects.',
    mainFigure: '',
    video: '',
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
    institutions: [
      'Korea University',
      'Victoria University of Wellington',
      'The University of Melbourne',
    ],
    venue: '2025 IEEE VR Abstracts and Workshops · pp. 1306–1307',
    doiUrl: 'https://doi.org/10.1109/VRW66409.2025.00299',
    abstract:
      'This poster presents a pipeline that estimates a user’s 3D pose and shape for full-body interaction with virtual objects in mixed reality, with usability and effectiveness evaluated through a user study.',
    mainFigure: '',
    video: '',
  },
]

export const projects = [
  {
    id: 'xr-interaction-project',
    title: 'Human Reconstruction for XR Interaction',
    period: '2023 — 2025',
    status: 'Research system',
    tags: ['Human mesh recovery', 'Mixed reality', 'Unity', 'Real-time 3D'],
    description:
      'Integrated monocular human pose and shape estimation into a real-time XR pipeline so reconstructed human geometry could drive collision, occlusion, and full-body interaction with virtual objects.',
    role:
      'Worked on the real-time human reconstruction pipeline and integration of monocular mesh estimation with the interactive XR system.',
    images: [],
    video: '',
    relatedPublication: '#publication-xr',
  },
  {
    id: 'digital-wardrobe',
    title: 'Digital Wardrobe',
    period: '2026 —',
    status: 'In development',
    tags: ['Unreal Engine', 'Chaos Cloth', 'CLO', '3D Human Avatar', 'Real-time Graphics'],
    description:
      'A personal virtual wardrobe prototype for organizing owned garments and previewing them on a 3D avatar with real-time garment simulation.',
    role:
      'Building the Unreal Engine pipeline for avatar-based garment preview, including garments prepared in CLO and simulated with Chaos Cloth.',
    images: [],
    video: '',
    githubUrl: '',
  },
]

export const sideProjects = [
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
]

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
