export const puioioCaseStudy = {
  title: "Pūioio",
  subtitle: "Honours Project | Mobile cross-platform",
  paperHref: "https://arxiv.org/abs/2308.02420",
  paperLabel: "VIEW PAPER",
  overview:
    "A novel mobile application capable of automatically detecting and counting workout exercise repetitions using only a mobile smartphone and its camera. Engineered with an on-device pipeline, it empowers users to track physical performance without reliance on external wearables.",
  facts: {
    timeline: "Mar - Oct 2022",
    role: "Co-creator & Mobile/ML Engineer",
    stack: ["Flutter", "OpenCV", "Google BlazePose", "TensorFlow Lite"],
  },
  challenge:
    "Automated exercise repetition counting (AERC) systems traditionally rely on physical wearables or computationally heavy cloud-based Computer Vision (CV) models that suffer from network latency. The engineering challenge was to build an AERC system capable of running entirely offline and in real-time on a computationally limited smartphone. This required processing live video from a front-facing camera to accurately track complex human movements across various body types, angles, and lighting conditions without draining device resources.",
  architectureIntro:
    "To process video input on a frame-by-frame basis without remote servers, we engineered a custom 5-component architecture:",
  architectureSteps: [
    {
      n: 1,
      title: "Pose Detection",
      body: "Utilises Google's lightweight BlazePose Convolutional Neural Network (CNN) to extract a 33-point 2D skeleton from the video feed in real-time.",
    },
    {
      n: 2,
      title: "Thresholding",
      body: "Applies the mathematical cosine rule to the coordinate data to calculate internal joint angles, categorising the user's real-time movement phase against predefined exercise thresholds.",
    },
    {
      n: 3,
      title: "Optical Flow",
      body: "Acts as a fallback mechanism utilising Lucas-Kanade Sparse Optical Flow. If the pose model loses confidence, it tracks pixel movement direction to maintain system state.",
    },
    {
      n: 4,
      title: "State Machine",
      body: "Evaluates the movement phase to determine the exact exercise moment.",
    },
    {
      n: 5,
      title: "Counter",
      body: "Increments the user's repetition count only upon the successful completion of a full state cycle.",
    },
  ],
  appIntro:
    'As a mobile engineer, deploying a Python-based ML prototype into a consumer-ready application required solving several platform-specific challenges. The application, named Pūioio, was built using Flutter to ensure cross-platform availability on both the Google Play Store and Apple App Store from a single codebase.',
  appBento: [
    {
      title: "Offline first",
      body: "The app is self-contained: BlazePose and the rest of the pipeline run on the phone, with no cloud round-trip. That removes network latency, so the counter can stay in time with the movement, in the gym or anywhere without a signal.",
      tone: "lime" as const,
      layout: "wide" as const,
      column: "left" as const,
      image: {
        src: "/img/projects/puioio/quick-start.png",
        alt: "Pūioio Quick Start screen for choosing an exercise and rep count",
        rotate: -7,
      },
    },
    {
      title: "The name",
      body: "Inspired by a te reo Māori word.",
      tone: "oatmeal" as const,
      layout: "span5short" as const,
      column: "right" as const,
      specimens: [{ sample: "Pūioio", label: "(verb) to be strong, tough, hard, muscular." }],
    },
    {
      title: "Live overlays",
      body: "A custom camera view paints a 2D skeleton on the live feed without blocking the UI thread. A phase tracker on the right shows depth: top, moving, or bottom.",
      tone: "tangerine" as const,
      layout: "wide" as const,
      column: "left" as const,
      grow: true,
      image: {
        src: "/img/projects/puioio/overlay.jpg",
        alt: "Pūioio camera view overlaying a 2D skeleton and phase tracker during squats",
        rotate: 0,
      },
    },
    {
      title: "Edge cases",
      body: "Onboarding covers the exercise carousel, rep target, and a 10-second setup countdown. If pose confidence drops, the workout pauses with a 'We've lost you!' warning and resumes when the user is back in frame.",
      tone: "blueberry" as const,
      layout: "wide" as const,
      column: "right" as const,
      grow: true,
      image: {
        src: "/img/projects/puioio/app-screenshot.jpg",
        alt: "Pūioio workout screen showing a We've lost you warning during squats",
        rotate: 6,
      },
    },
  ],
  pipeline: [
    {
      title: "Enforcing Strict Exercise Form",
      body: 'A common flaw in workout tracking is counting "half-reps" or bad form. We designed a strict, unidirectional state machine that prevents backward transitions. If a user fails to reach the required joint angle threshold (e.g., squatting to ≤130° internal knee angle), the state machine halts. The user is mathematically required to complete the full sequence to earn the repetition, ensuring data integrity.',
    },
    {
      title: "Overcoming Hardware Constraints & Latency",
      body: "To achieve real-time CV performance on a mobile device, we strictly avoided multi-modal heavy architectures. We utilised a lightweight CNN and implemented a battery-saving pause feature: if the in-frame pose confidence falls below a 0.75 threshold for more than 1.5 seconds, the system dynamically halts inference and state transitions until the user is confidently relocated.",
    },
    {
      title: "Filtering Sensor Noise in CV Data",
      body: "Raw pose estimation data is inherently jittery, leading to false positives. To stabilise the input, we implemented a sliding window algorithm to average movement phases across multiple frames. By tuning the sliding window size to 1 for thresholding and 3 for optical flow, we successfully filtered out anomalous sensor noise without introducing UI lag.",
    },
  ],
  outcomes: [
    { value: "98.89%", caption: "Real-world accuracy" },
    { value: "1st Place", caption: "AI & Machine Learning\ncategory at UoA (2022)" },
    { value: "100%", caption: "Off-by-one accuracy\nfor squats and push-ups" },
  ],
  next: {
    label: "NEXT PROJECT: Pīkau",
    href: "/projects/pikau",
  },
};
