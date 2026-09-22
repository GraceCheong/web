const given = (languages) => ({ given: languages })

const translated = (languages) => ({ translated: languages })

const rawContent = {
  ui: {
    meta: {
      title: {
        given: { en: 'DaEun Cheong — 3D Vision Research' },
        translated: { ko: '정다은 — 3D 비전 연구' },
      },
      description: {
        given: {
          en: 'DaEun Cheong is a 3D vision researcher working on geometric representation learning, monocular camera calibration, human reconstruction, and real-time 3D systems.',
        },
        translated: {
          ko: '정다은은 기하 구조를 반영하는 표현 학습, 단안 카메라 보정, 인간 재구성, 실시간 3D 시스템을 연구하는 3D 비전 연구자입니다.',
        },
      },
    },
    navigationLabel: translated({ en: 'Main navigation', ko: '주요 탐색' }),
    languageToggleLabel: translated({ en: 'Language selector', ko: '언어 선택' }),
    languages: {
      en: translated({ en: 'EN', ko: '영문' }),
      ko: given({ en: '한글', ko: '한글' }),
    },
    profileLinks: {
      scholar: given({ en: 'Scholar' }),
      github: given({ en: 'GitHub' }),
      linkedin: given({ en: 'LinkedIn' }),
      email: translated({ en: 'Email', ko: '이메일' }),
      backToTop: translated({ en: 'Back to top ↑', ko: '맨 위로 ↑' }),
      repository: translated({ en: 'Repository', ko: '저장소' }),
      googleScholar: given({ en: 'Google Scholar' }),
    },
    sections: {
      about: { number: '01', heading: translated({ en: 'Education & experience', ko: '학력 및 경험' }) },
      direction: { number: '02', heading: translated({ en: 'Research direction', ko: '연구 방향' }) },
      publications: { number: '03', heading: translated({ en: 'Publications', ko: '논문' }) },
      projects: { number: '04', heading: translated({ en: 'Projects', ko: '프로젝트' }) },
      sideProjects: { number: '05', heading: translated({ en: 'Side projects', ko: '사이드 프로젝트' }) },
    },
    navLinks: [
      { id: 'about', label: translated({ en: 'Education', ko: '학력' }) },
      { id: 'direction', label: translated({ en: 'Research', ko: '연구' }) },
      { id: 'publications', label: translated({ en: 'Publications', ko: '논문' }) },
      { id: 'projects', label: translated({ en: 'Projects', ko: '프로젝트' }) },
      { id: 'side-projects', label: translated({ en: 'Side Projects', ko: '사이드 프로젝트' }) },
    ],
    publications: {
      toggleClosed: translated({ en: 'Abstract & media', ko: '초록 및 자료' }),
      toggleOpen: translated({ en: 'Close', ko: '닫기' }),
      thumbnailLabel: translated({ en: 'Open details for', ko: '다음 항목의 상세 내용 열기:' }),
      abstractLabel: translated({ en: 'Abstract', ko: '초록' }),
      figureLabel: translated({ en: 'Main figure from', ko: '다음 논문의 대표 그림:' }),
      videoLabel: translated({ en: 'video', ko: '영상' }),
      doiLink: translated({ en: 'DOI / publication ↗', ko: 'DOI / 논문 보기 ↗' }),
    },
    projects: {
      toggleClosed: translated({ en: 'Details & results', ko: '상세 내용 및 결과' }),
      toggleOpen: translated({ en: 'Close', ko: '닫기' }),
      thumbnailLabel: translated({ en: 'Open details for', ko: '다음 항목의 상세 내용 열기:' }),
      roleLabel: translated({ en: 'What I worked on', ko: '담당한 작업' }),
      imageLabel: translated({ en: 'result', ko: '결과 이미지' }),
      demoLabel: translated({ en: 'demo', ko: '데모' }),
      relatedPublication: translated({ en: 'Related publication ↓', ko: '관련 논문 ↓' }),
    },
    footer: {
      tag: translated({ en: '3D vision & deep learning', ko: '3D 비전 · 딥러닝' }),
    },
  },
  profile: {
    name: 'DaEun Cheong',
    wordmarkTag: '3D VISION · RESEARCH',
    eyebrow: {
      given: { en: '3D Vision · Deep Learning' },
      translated: { ko: '3D 비전 · 딥러닝' },
    },
    intro: [
      {
        given: {
          en: 'I am a 3D vision researcher focused on how learned representations can help models infer geometry and structure from images.',
        },
        translated: {
          ko: '저는 학습된 표현이 이미지로부터 기하와 구조를 추론하는 데 어떻게 도움을 줄 수 있는지에 집중하는 3D 비전 연구자입니다.',
        },
      },
      {
        given: {
          en: 'My work spans monocular camera calibration, human reconstruction, and real-time 3D systems.',
        },
        translated: {
          ko: '제 연구는 단안 카메라 보정, 인간 재구성, 실시간 3D 시스템 전반을 아우릅니다.',
        },
      },
    ],
    email: 'wjdekdms001@gmail.com',
    phone: '+82 10-3205-9418',
    scholarUrl: 'https://scholar.google.com/citations?user=zyTJIzsAAAAJ&hl=en',
    githubUrl: 'https://github.com/GraceCheong',
    linkedinUrl: 'https://www.linkedin.com/in/%EB%8B%A4%EC%9D%80-%EC%A0%95-32636325a/',
  },
  researchDirection: {
    lead: {
      given: {
        en: 'I am interested in 3D perception models that learn geometry-aware representations and use them to reconstruct and reason about 3D structure from visual observations. I also care about bringing those models into practical, real-time systems.',
      },
      translated: {
        ko: '저는 기하를 반영하는 표현을 학습하고, 이를 통해 시각 관측으로부터 3D 구조를 재구성하고 추론하는 3D 인지 모델에 관심이 있습니다. 또한 이러한 모델을 실제로 활용 가능한 실시간 시스템으로 구현하는 일에도 관심이 있습니다.',
      },
    },
    pillars: [
      {
        title: {
          given: { en: 'Geometry-aware representations' },
          translated: { ko: '기하 인식 표현' },
        },
        description: {
          given: {
            en: 'Learning features and latent spaces that preserve cues useful for camera geometry, depth, shape, and spatial structure.',
          },
          translated: {
            ko: '카메라 기하, 깊이, 형상, 공간 구조를 이해하는 데 유용한 단서를 보존하는 특징과 잠재 공간을 학습합니다.',
          },
        },
      },
      {
        title: {
          given: { en: '3D reconstruction & perception' },
          translated: { ko: '3D 재구성 및 인지' },
        },
        description: {
          given: {
            en: 'Inferring cameras, humans, and other 3D structure from limited or monocular visual observations.',
          },
          translated: {
            ko: '제한적이거나 단안인 시각 관측으로부터 카메라, 사람, 기타 3D 구조를 추론합니다.',
          },
        },
      },
      {
        title: {
          given: { en: 'Real-time 3D systems' },
          translated: { ko: '실시간 3D 시스템' },
        },
        description: {
          given: {
            en: 'Turning 3D perception methods into usable interactive pipelines under practical runtime constraints.',
          },
          translated: {
            ko: '실용적인 실행 시간 제약 안에서 3D 인지 기법을 실제로 사용할 수 있는 인터랙티브 파이프라인으로 발전시킵니다.',
          },
        },
      },
    ],
  },
  publications: [
    {
      id: 'publication-cameravq',
      year: {
        given: { en: 'MAY 2026' },
        translated: { ko: '2026년 5월' },
      },
      status: {
        given: { en: 'PUBLISHED' },
        translated: { ko: '게재' },
      },
      type: {
        given: { en: 'JOURNAL · FIRST AUTHOR' },
        translated: { ko: '저널 · 제1저자' },
      },
      title: {
        given: { en: 'CameraVQ: Vector-Quantized Representations for Monocular Camera Calibration' },
        translated: { ko: 'CameraVQ: 단안 카메라 보정을 위한 벡터 양자화 표현' },
      },
      authors: [
        { name: 'DaEun Cheong', me: true },
        { name: 'Jung Hyun Han' },
      ],
      institutions: [
        {
          given: { en: 'Media Lab, Korea University' },
          translated: { ko: '고려대학교 미디어랩' },
        },
      ],
      venue: {
        given: { en: 'Computer Animation and Virtual Worlds · 37(3), e70144' },
      },
      doiUrl: 'https://doi.org/10.1002/cav.70144',
      abstract: {
        given: {
          en: 'CameraVQ reformulates monocular camera calibration as classification over vector-quantized camera intrinsics. A learned discrete codebook constrains predictions to plausible camera configurations and improves robustness and generalization across diverse calibration benchmarks.',
        },
        translated: {
          ko: 'CameraVQ는 단안 카메라 보정을 벡터 양자화된 카메라 내부 파라미터에 대한 분류 문제로 재정의합니다. 학습된 이산 코드북은 예측을 타당한 카메라 구성으로 제한해 다양한 보정 벤치마크에서 강건성과 일반화 성능을 높입니다.',
        },
      },
      mainFigure: '',
      video: '',
    },
    {
      id: 'publication-xr',
      year: {
        given: { en: 'JUN 2025' },
        translated: { ko: '2025년 6월' },
      },
      status: {
        given: { en: 'PUBLISHED' },
        translated: { ko: '게재' },
      },
      type: {
        given: { en: 'JOURNAL' },
        translated: { ko: '저널' },
      },
      title: {
        given: { en: 'Interaction With Virtual Objects Using Human Pose and Shape Estimation' },
        translated: { ko: '인간 자세 및 형상 추정을 활용한 가상 객체 상호작용' },
      },
      authors: [
        { name: 'Hong Son Nguyen' },
        { name: 'DaEun Cheong', me: true },
        { name: 'Andrew Chalmers' },
        { name: 'Myoung Gon Kim' },
        { name: 'Taehyun Rhee' },
        { name: 'Jung Hyun Han' },
      ],
      institutions: [
        { given: { en: 'Korea University' }, translated: { ko: '고려대학교' } },
        {
          given: { en: 'Victoria University of Wellington' },
          translated: { ko: '빅토리아대학교 웰링턴' },
        },
        {
          given: { en: 'The University of Melbourne' },
          translated: { ko: '멜버른대학교' },
        },
      ],
      venue: {
        given: { en: 'Computer Animation and Virtual Worlds · 36(3), e70046' },
      },
      doiUrl: 'https://doi.org/10.1002/cav.70046',
      abstract: {
        given: {
          en: 'This work presents an AR interaction system built from human pose and shape estimation, camera-space calibration, and physics simulation. A single RGB video stream is used to reconstruct the user and support physically meaningful interaction with virtual objects.',
        },
        translated: {
          ko: '이 연구는 인간 자세 및 형상 추정, 카메라 공간 보정, 물리 시뮬레이션을 결합한 AR 상호작용 시스템을 제안합니다. 단일 RGB 비디오 스트림만으로 사용자를 재구성하고 가상 객체와의 물리적으로 의미 있는 상호작용을 지원합니다.',
        },
      },
      mainFigure: '',
      video: '',
    },
    {
      id: 'publication-ieeevr',
      year: {
        given: { en: 'MAR 2025' },
        translated: { ko: '2025년 3월' },
      },
      status: {
        given: { en: 'PUBLISHED' },
        translated: { ko: '게재' },
      },
      type: {
        given: { en: 'CONFERENCE POSTER' },
        translated: { ko: '학회 포스터' },
      },
      title: {
        given: { en: 'Full-Body Interaction in Mixed Reality using 3D Pose and Shape Estimation' },
        translated: { ko: '3D 자세 및 형상 추정을 활용한 혼합현실 전신 상호작용' },
      },
      authors: [
        { name: 'Hong Son Nguyen' },
        { name: 'Andrew Chalmers' },
        { name: 'DaEun Cheong', me: true },
        { name: 'Myoung Gon Kim' },
        { name: 'Taehyun Rhee' },
        { name: 'Jung Hyun Han' },
      ],
      institutions: [
        { given: { en: 'Korea University' }, translated: { ko: '고려대학교' } },
        {
          given: { en: 'Victoria University of Wellington' },
          translated: { ko: '빅토리아대학교 웰링턴' },
        },
        {
          given: { en: 'The University of Melbourne' },
          translated: { ko: '멜버른대학교' },
        },
      ],
      venue: {
        given: { en: '2025 IEEE VR Abstracts and Workshops · pp. 1306–1307' },
      },
      doiUrl: 'https://doi.org/10.1109/VRW66409.2025.00299',
      abstract: {
        given: {
          en: 'This poster presents a pipeline that estimates a user’s 3D pose and shape for full-body interaction with virtual objects in mixed reality, with usability and effectiveness evaluated through a user study.',
        },
        translated: {
          ko: '이 포스터는 혼합현실에서 가상 객체와 전신 상호작용을 하기 위해 사용자의 3D 자세와 형상을 추정하는 파이프라인을 제시하며, 사용자 연구를 통해 사용성과 효과를 평가합니다.',
        },
      },
      mainFigure: '',
      video: '',
    },
  ],
  projects: [
    {
      id: 'digital-wardrobe',
      title: {
        given: { en: 'Digital Wardrobe' },
        translated: { ko: '디지털 옷장' },
      },
      period: {
        given: { en: '2026 —' },
        translated: { ko: '2026 —' },
      },
      status: {
        given: { en: 'In development' },
        translated: { ko: '개발 중' },
      },
      tags: ['Unreal Engine', 'Chaos Cloth', 'CLO', '3D Human Avatar', 'Real-time Graphics'],
      description: {
        given: {
          en: 'A personal virtual wardrobe prototype for organizing owned garments and previewing them on a 3D avatar with real-time garment simulation.',
        },
        translated: {
          ko: '보유한 의상을 정리하고 실시간 의상 시뮬레이션을 통해 3D 아바타에 착용 모습을 미리 볼 수 있는 개인용 가상 옷장 프로토타입입니다.',
        },
      },
      role: {
        given: {
          en: 'Building the Unreal Engine pipeline for avatar-based garment preview, including garments prepared in CLO and simulated with Chaos Cloth.',
        },
        translated: {
          ko: 'CLO에서 준비한 의상을 Chaos Cloth로 시뮬레이션하며, 아바타 기반 의상 미리보기를 위한 Unreal Engine 파이프라인을 구축하고 있습니다.',
        },
      },
      images: [],
      video: '',
      githubUrl: '',
    },
    {
      id: 'xr-interaction-project',
      title: {
        given: { en: 'Human Reconstruction for XR Interaction' },
        translated: { ko: 'XR 상호작용을 위한 인간 재구성' },
      },
      period: {
        given: { en: '2023 — 2025' },
        translated: { ko: '2023 — 2025' },
      },
      status: {
        given: { en: 'Completed' },
        translated: { ko: '완료' },
      },
      tags: ['Human mesh recovery', 'Mixed reality', 'Unity', 'Real-time 3D'],
      description: {
        given: {
          en: 'Integrated monocular human pose and shape estimation into a real-time XR pipeline so reconstructed human geometry could drive collision, occlusion, and full-body interaction with virtual objects.',
        },
        translated: {
          ko: '단안 기반 인간 자세 및 형상 추정을 실시간 XR 파이프라인에 통합해, 재구성된 인간 기하가 충돌·가림·전신 상호작용을 가상 객체와 함께 구동하도록 만들었습니다.',
        },
      },
      role: {
        given: {
          en: 'Worked on the real-time human reconstruction pipeline and integration of monocular mesh estimation with the interactive XR system.',
        },
        translated: {
          ko: '실시간 인간 재구성 파이프라인과 단안 메시 추정을 인터랙티브 XR 시스템에 통합하는 작업을 담당했습니다.',
        },
      },
      images: [],
      video: '',
      relatedPublication: '#publication-xr',
    },
  ],
  sideProjects: [
    {
      id: 'po-rr',
      period: {
        given: { en: 'JUN 2026 —' },
        translated: { ko: '2026년 6월 —' },
      },
      title: {
        given: { en: 'PO,RR Worship PPT' },
      },
      description: {
        given: {
          en: 'A presentation-generation system with a desktop client, FastAPI server, template synchronization, and multi-backend PowerPoint generation.',
        },
        translated: {
          ko: '데스크톱 클라이언트, FastAPI 서버, 템플릿 동기화, 다중 백엔드 PowerPoint 생성을 포함한 발표 자료 생성 시스템입니다.',
        },
      },
      stack: ['Python', 'FastAPI', 'React', 'PowerPoint automation'],
      githubUrl: 'https://github.com/GraceCheong/ppt-gen',
    },
    {
      id: 'dlmon-teacher-studio',
      period: {
        given: { en: 'MAY 2026' },
        translated: { ko: '2026년 5월' },
      },
      title: {
        given: { en: 'DLMon Teacher Studio' },
      },
      description: {
        given: {
          en: 'A full-stack Chinese teaching workspace with local-LLM curriculum generation, assignment feedback, and text analysis.',
        },
        translated: {
          ko: '로컬 LLM 기반 커리큘럼 생성, 과제 피드백, 텍스트 분석을 지원하는 중국어 교육용 풀스택 워크스페이스입니다.',
        },
      },
      stack: ['Next.js', 'Prisma', 'Local LLM', 'AI SDK'],
      githubUrl: 'https://github.com/GraceCheong/dlmon',
    },
  ],
  educationTimeline: [
    {
      date: {
        given: { en: 'JUN 2023 — FEB 2026' },
        translated: { ko: '2023년 6월 — 2026년 2월' },
      },
      title: {
        given: { en: 'Korea University' },
        translated: { ko: '고려대학교' },
      },
      org: {
        given: { en: 'M.S. in Computer Science and Engineering · Research Student, Media Lab' },
        translated: { ko: '컴퓨터학과 석사 · 미디어랩 연구원' },
      },
      extra: {
        given: { en: 'GPA 4.3 / 4.5 · Thesis: CameraVQ · 3D vision · human reconstruction · camera geometry' },
        translated: { ko: '평점 4.3 / 4.5 · 학위논문: CameraVQ · 3D 비전 · 인간 재구성 · 카메라 기하' },
      },
    },
    {
      date: {
        given: { en: 'MAR 2015 — AUG 2021' },
        translated: { ko: '2015년 3월 — 2021년 8월' },
      },
      title: {
        given: { en: 'Kyung Hee University' },
        translated: { ko: '경희대학교' },
      },
      org: {
        given: { en: 'B.S. in Computer Engineering' },
        translated: { ko: '컴퓨터공학과 학사' },
      },
      extra: '',
    },
  ],
  skillGroups: [
    {
      title: {
        given: { en: 'Programming & ML' },
        translated: { ko: '프로그래밍 및 머신러닝' },
      },
      chips: ['Python', 'C++', 'PyTorch', 'Transformers'],
    },
    {
      title: {
        given: { en: '3D Vision & Graphics' },
        translated: { ko: '3D 비전 및 그래픽스' },
      },
      chips: ['Camera Geometry', 'Human Mesh Recovery', 'SMPL-X', 'OpenGL', 'Unity', 'Unreal Engine'],
    },
    {
      title: {
        given: { en: 'Representation Learning' },
        translated: { ko: '표현 학습' },
      },
      chips: ['Vector Quantization', 'Vision Transformers', 'CNN-based Vision Models', 'Diffusion Models'],
    },
    {
      title: {
        given: { en: 'Engineering' },
        translated: { ko: '엔지니어링' },
      },
      chips: ['Git', 'Linux', 'FastAPI', 'React', 'Conda'],
    },
  ],
}

function isLocalizedText(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value) && ('given' in value || 'translated' in value)
}

function getLanguageText(source, lang) {
  if (!source || typeof source !== 'object') return undefined
  return source[lang] ?? source.en ?? Object.values(source).find(Boolean)
}

function resolveLocalizedText(value, lang) {
  if (!isLocalizedText(value)) return value
  return (
    getLanguageText(value.given, lang) ??
    getLanguageText(value.translated, lang) ??
    ''
  )
}

function localizeContent(value, lang) {
  if (Array.isArray(value)) {
    return value.map((item) => localizeContent(item, lang))
  }

  if (isLocalizedText(value)) {
    return resolveLocalizedText(value, lang)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, localizeContent(entry, lang)]),
    )
  }

  return value
}

export function getContent(lang = 'en') {
  return localizeContent(rawContent, lang)
}

export function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search)
  const queryLanguage = params.get('lang')
  if (queryLanguage === 'ko' || queryLanguage === 'en') return queryLanguage

  const storedLanguage = window.localStorage.getItem('portfolio-language')
  if (storedLanguage === 'ko' || storedLanguage === 'en') return storedLanguage

  return window.navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}
