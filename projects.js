// ============================================================
// PROJECTS DATA
// ------------------------------------------------------------
// Edit this file to add / change your projects. Each object
// below becomes one card on the homepage and one detail page.
//
// - id: short unique slug, used in the URL (project.html?id=...)
// - thumbnail / images: paths to your photos, e.g. "assets/my-robot-1.jpg"
//   Leave as "" (empty string) to show a placeholder grid instead.
// - specs: shows as a small technical spec sheet on the detail page.
//   Use whatever fields make sense (Role, Tools, Duration, Team size...).
// - links: optional. Delete a line (e.g. demo) if you don't have one.
// ============================================================

// ============================================================
// HERO SECTION
// ------------------------------------------------------------
// Controls the big photo banner at the top of index.html.
// - photo: path to your photo, e.g. "assets/hero.jpg". Leave ""
//   for a placeholder gradient until you add one.
// ============================================================

const HERO = {
  eyebrow: "Engineering Portfolio",
  name: "Mietta Levingston",
  subtitle: "Final-year Mechanical Engineering (Honours) and Arts (Economics) student at Monash University.",
  photo: "assets/site/hero-desert-team.jpg",
  primaryButton: { label: "View projects", href: "#work" },
  secondaryButton: { label: "About me", href: "about.html" },
};

const PROJECTS = [
  {
    id: "lunar-regolith-capstone",
    number: "001",
    category: "Engineering Capstone",
    title: "Engineering Capstone: Lunar Regolith Research",
    tagline:
      "A geotechnical study of how lunar regolith behaves mechanically under Moon conditions, and what that means for the machines we send there.",
    year: "2026",
    role: "Testing Apparatus & Direct Shear Experiments",
    stack: ["Capstone", "Lunar Regolith", "ISRU", "Research"],
    thumbnail: "assets/capstone/IMG_5323.jpeg",
    images: [
      "assets/capstone/IMG_5323.jpeg",
      "assets/capstone/IMG_5182.jpeg",
      "assets/capstone/IMG_5185.jpeg",
      "assets/capstone/IMG_5708.jpeg",
      "assets/capstone/Screenshot 2026-06-09 080751.png",
      "assets/capstone/Screenshot 2026-06-09 080804.png",
      "assets/capstone/unnamed (1).png",
      "assets/capstone/unnamed (2).png",
    ],
    overview:
      "My final-year engineering capstone is a geotechnical study of lunar regolith: how it behaves mechanically under the conditions found on the Moon, and what that means for the machines we send there. Future missions are increasingly aimed at the Moon's permanently shadowed regions, where water ice is believed to sit within the regolith. How that soil holds together, both dry and ice-bearing, under vacuum is still poorly understood, which limits how reliably we can design excavation tools, rovers, and surface infrastructure for it. This is a team capstone of four at Monash University; my focus has been the testing apparatus and the direct shear experiments described below.",
    problem:
      "Most existing geotechnical data on lunar soil was gathered using dry simulant tested in normal atmospheric conditions. Very little work looks at how a vacuum changes that behaviour, or at how the shape and bonding of ice within the regolith affects its strength. No icy lunar samples have ever been returned, so there is no in-situ benchmark to work from. The project investigates how three factors, pressure conditions, ice content, and ice morphology, change the key geotechnical properties of a lunar simulant: shear strength, friction angle, and cohesion.",
    approach:
      "The core of the project is a direct shear box designed and built from scratch, because off-the-shelf geotechnical rigs could not reach the normal stresses needed or integrate with a vacuum chamber for near-lunar pressure testing. It uses two stacked aluminium shear-box halves with a 60 x 60 mm interior, machined to the ASTM D3080 standard, with smoothed shearing faces to minimise box friction. It's mounted to V-slot rail and driven by a NEMA 23 stepper motor through a TMC5160 driver, with a leadscrew and linear rail shearing the sample at a controlled 1 mm/min. A 5 kN S-type load cell read by an ESP32 captures shear force, logged live through a custom GUI, and the whole rig is sized to drop into a small vacuum chamber so the same test can run at both atmospheric and vacuum pressure. Testing uses LHS-1, a Lunar Highlands Simulant from Exolith Lab matched to Apollo 16 sample 67461. Samples are oven-baked dry, loaded to a controlled bulk density, and sheared. Beyond dry soil, the project covers several ice-bearing preparations that mimic how lunar ice actually forms: low-saturation ice-cemented samples (pendular bonding between grains), frozen slurry (water mixed with regolith then frozen), and vapour-deposited ice. Shear strength is modelled with the Mohr-Coulomb failure criterion to extract friction angle and cohesion. Every test runs in triplicate, with raw data smoothed by a Savitzky-Golay filter and uncertainty reported as 95% confidence intervals. Blank runs with an empty box confirmed the apparatus's own friction was negligible.",
    approachGallery: {
      label: "CAD Gallery",
      images: [
        "assets/capstone/fyp-cad-1.png",
        "assets/capstone/fyp-cad-2.png",
      ],
    },
    results:
      "Preliminary testing of dry LHS-1 at a bulk density of 1.7 g/cm³, within the real lunar range, shows a clean linear Mohr-Coulomb response with low scatter between repeats, and the values line up well with published studies, validating both the rig and the method.",
    resultsGallery: {
      label: "Data",
      images: [],
    },
    resultsLabel: "Preliminary Results",
    futureWork: [
      "Testing in vacuum, to validate the ambient-condition data against near-lunar pressure.",
      "Completing full characterisation of the dry simulant across the full bulk density range in ambient conditions.",
      "Data collection for the ice-bearing samples: ice-cemented, frozen slurry, and vapour-deposited preparations.",
    ],
    conferences: [
      { event: "ASRC", full: "Australian Space Research Conference", location: "Adelaide, Australia", date: "Late Sept 2026" },
      { event: "ICUR", full: "International Conference of Undergraduate Research", location: "Hosted by Warwick, remote attendance", date: "Late Sept 2026" },
      { event: "AIAA", full: "AIAA Region VII Student Conference", location: "", date: "Oct 2026" },
    ],
    publication: "Targeting Acta Astronautica, in progress.",
    specs: [
      { k: "Status", v: "In Progress" },
      { k: "Project Type", v: "Capstone" },
      { k: "Team", v: "4 people" },
      { k: "My Role", v: "Testing apparatus, direct shear experiments" },
      { k: "Institution", v: "Monash University" },
      { k: "Simulant", v: "LHS-1 (Exolith Lab)" },
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "urc-spectrometer",
    number: "002",
    category: "University Rover Challenge",
    title: "Custom Visible-Light Spectrometer for Life Detection",
    tagline:
      "A bespoke visible-wavelength spectrometer built and validated over two years as part of Monash Nova Rover's URC life-detection science payload.",
    year: "2025-2026",
    role: "Spectrometer Development & Validation",
    stack: ["Spectroscopy", "Life Detection", "URC", "NOVA"],
    thumbnail: "assets/spectrometer/2025/team-utah.jpg",
    specs: [
      { k: "Team", v: "Monash Nova Rover Science Subteam" },
      { k: "Competition", v: "University Rover Challenge (URC)" },
      { k: "Mission Type", v: "Simulated human Mars mission" },
      { k: "Location", v: "Utah, USA" },
      { k: "2025 Placing", v: "7th overall, 7th in science mission (88/100)" },
      { k: "2026 Placing", v: "2nd overall, 1st in science mission (100/100)" },
    ],
    links: {
      github: "",
      demo: "",
    },
    yearTabs: [
      {
        year: "2025",
        label: "2025 - Technical Support",
        role: "Technical Support Member (attended competition in Utah)",
        badgeStats: [
          { k: "Science Task Score", v: "88/100" },
          { k: "Science Mission Placing", v: "7th" },
          { k: "Overall Placing", v: "7th" },
        ],
        images: [
          "assets/spectrometer/2025/team-utah.jpg",
          "assets/spectrometer/2025/auger-closeup.jpg",
          "assets/spectrometer/2025/drilling.jpg",
          "assets/spectrometer/2025/slope.jpg",
          "assets/spectrometer/2025/absorbance-sample7-life.jpg",
          "assets/spectrometer/2025/absorbance-sample5-nolife.jpg",
        ],
        overview:
          "Monash Nova Rover's onboard life detection suite, Sabertooth, includes a bespoke custom-built visible-wavelength spectrometer that I developed and validated as part of the team's University Rover Challenge (URC) entry, an international competition where student teams design and operate a rover to complete tasks simulating a human mission to Mars. While the wider Sabertooth payload covered sample extraction and handling, my focus specifically was the spectrometer subsystem: the optical design, the chemical assays it runs, and the experimental work proving it performs against a commercial instrument. I attended the 2025 competition in Utah as a technical support member.",
        problem:
          "A rover-deployable life-detection instrument needs to reliably identify biosignatures on site, with no lab to fall back on, using a spectrometer that is small and rugged enough to fly on the rover but still accurate enough to trust. The core question driving the 2025 work was whether a custom-built, in-house spectrometer could match the performance of commercial laboratory instrumentation on real biochemical assays.",
        approach:
          "The goal for 2025 was proving the concept. I ran initial testing using food dye to characterise the system's optical response, then moved to real biochemical assays, BCA Gold for protein detection and ninhydrin for amino acid detection, benchmarking the custom spectrometer's readings directly against a commercial Agilent spectrometer to verify it could match professional-grade performance. For lab and bench testing, we ran the spectrometer using Theremino spectrometer software, which was quick to set up and well suited to iterative testing during development. For the actual competition, the software team built custom software that replaced Theremino, integrated directly into the rover's operator GUI so the spectrometer could be run alongside the rest of the payload during a run. To simulate a positive life-detection result during testing, we used potato extract as a stand-in biological sample, giving us a reliable, repeatable way to check the system could correctly distinguish a true positive from a blank.",
        approachGallery: {
          label: "CAD Design",
          images: [
            "assets/spectrometer/2025/spec-cad-1.png",
            "assets/spectrometer/2025/spec-cad-2.png",
            "assets/spectrometer/2025/spec-cad-3.png",
          ],
        },
        results:
          "The 2025 validation showed the custom spectrometer's BCA Gold and ninhydrin readings tracking closely with the commercial Agilent instrument, confirming the in-house design could hold its own against lab-grade hardware. Testing with potato extract produced a clear, distinct absorbance peak compared to a no-life blank sample, confirming the system could reliably tell a true positive apart from an empty reading. That system flew at URC 2025, where the team placed 7th overall and 7th in the science mission, with a science task score of 88/100.",
      },
      {
        year: "2026",
        label: "2026 - Remote Development",
        role: "Spectrometer Development (did not attend competition)",
        badgeStats: [
          { k: "Science Task Score", v: "100/100" },
          { k: "Science Mission Placing", v: "1st" },
          { k: "Overall Placing", v: "2nd" },
        ],
        images: [
          "assets/spectrometer/2026/cuvette-wheel-top.jpg",
          "assets/spectrometer/2026/dual-ring-mechanism.jpg",
          "assets/spectrometer/2026/cuvette-assay-colors.jpg",
          "assets/spectrometer/2026/dashboard-nile-red.jpg",
          "assets/spectrometer/2026/dashboard-uv-fluorescence.jpg",
        ],
        overview:
          "For 2026 I continued developing the spectrometer remotely, expanding on the validated 2025 base without attending the competition in person that year.",
        problem:
          "Having proven the core concept in 2025, the question for 2026 was how far the spectrometer's capabilities could be pushed within the payload's size and power constraints, specifically, whether it could support a wider range of biochemical assays and add fluorescence detection alongside absorbance.",
        approach:
          "The spectrometer was upgraded to a dual-ring cuvette arrangement supporting both fluorescence and absorbance analysis, with a USB-integrated camera paired with a diffraction spectroscope capturing spectra across visible and near-UV wavelengths, read out through custom onboard software. The dual-ring architecture lets inner and outer cuvette sets run independently, so each sampling site can be analysed across four assay types in one pass: Molisch's reagent for carbohydrates, ninhydrin for amino acids, Nile Red for lipids, and NADH/NADPH fluorescence for metabolic coenzyme activity. The suite pre-loads 35 cuvettes before deployment, 8 per assay type, with each site analysed in triplicate against positive and negative controls prepared from known standards, alongside site blanks and a PBS buffer blank to keep every assay on a consistent baseline. Remaining slots are left empty to keep light transmission clean between the inner and outer rings during a run.",
        results:
          "The 2026 upgrade built directly on the validated 2025 base, extending the same proven optical approach into fluorescence detection and two additional assay classes. At competition, the team achieved a perfect science task score of 100/100, placing 1st in the science mission and 2nd overall, the team's strongest result yet.",
      },
    ],
  },
  {
    id: "water-extraction",
    number: "003",
    category: "Australian Rover Challenge",
    title: "Water Extraction",
    tagline:
      "Extracting pure water from icy regolith simulant across two competition cycles, from system lead in 2025 to task operator in 2026.",
    year: "2025-2026",
    role: "Project Lead (2025) then Science Member & Task Operator (2026)",
    stack: ["ISRU", "Water Extraction", "Australian Rover Challenge", "NOVA"],
    thumbnail: "assets/water-extraction/2026/arc2026-7.jpg",
    links: {
      github: "",
      demo: "",
    },
    specs: [
      { k: "Team", v: "Monash Nova Rover Science Subteam" },
      { k: "Competition", v: "Australian Rover Challenge (ARC / ARCh)" },
      { k: "Location", v: "Adelaide, Australia" },
      { k: "2025 Placing", v: "3rd overall, 4th in science task" },
      { k: "2026 Placing", v: "3rd overall, 3rd in science task" },
      { k: "2026 Water Recovery", v: "86%" },
    ],
    yearTabs: [
      {
        year: "2025",
        label: "2025 - Project Lead",
        role: "Project Lead, Mechanical Field Support",
        badgeStats: [
          { k: "Water Extraction Score", v: "31/50" },
          { k: "Science Task Placing", v: "4th" },
          { k: "Overall Placing", v: "3rd" },
        ],
        images: [
          "assets/water-extraction/2025/water-2025-compoverview.JPEG",
          "assets/water-extraction/2025/water-2025-action.jpg",
          "assets/water-extraction/2025/water-2025-group.jpg",
        ],
        overview:
          "In 2025 I led the design and build of the Monash Nova Rover Science Subteam's water extraction system: a kiln and condenser assembly designed to extract pure water from icy regolith simulant, competing at the Australian Rover Challenge in Adelaide. This sat within the team's wider Space Resources Payload, alongside a separate excavation auger and an ilmenite analysis system, but the water extraction hardware, its design, fabrication, and validation, was my responsibility from concept through to competition.",
        problem:
          "The system needed to reliably evaporate water out of icy regolith delivered by the excavation auger, then capture and channel that water into a collectible sample, all within a compact rover-mounted footprint, using passive mechanisms wherever possible to minimise the number of separate actuators and points of failure.",
        approach:
          "The system centres on a \"house\"-shaped condenser fabricated from welded sheet metal, paired with a 3D-printed, waterproofed ABS collection tray at its base. Between the tray and the condenser sits a mesh layer that lets any unevaporated water drip straight through to the tray, while water that does evaporate condenses on the underside of the sloped roof and runs down the interior walls into the same tray below. Evaporation itself is driven by heating cartridges mounted in extrusions inside the kiln. A 3D-printed chute feeds material excavated by the auger directly into the kiln, and insulation is placed at key points around the assembly to limit unwanted heat loss. The whole water extraction system is passively actuated: it operates in sync with the drill's own motion rather than needing a dedicated actuator of its own. One wall of the housing is clear plastic, acting as a window so the process could be visually monitored during testing and operation. Cooling on the condenser's exterior was handled with ice packs, a cryogenic cooling approach that was standard across the team's design and common among other teams that year. Ahead of competition, the system was tested and validated to confirm it could reliably extract and collect water under expected operating conditions.",
        approachGallery: {
          label: "CAD Design and Field Testing",
          images: [
            "assets/water-extraction/2025/water-2025-system-overview.png",
            "assets/water-extraction/2025/water-2025-kiln-detail.png",
            "assets/water-extraction/2025/water-2025-kiln-close.png",
            "assets/water-extraction/2025/water-2025-comp.JPEG",
            "assets/water-extraction/2025/water-2025-compclose.JPEG",
            "assets/water-extraction/2025/water-2025-beachtest.JPG",
          ],
        },
        results:
          "On competition day, an electrical fault meant the heating cartridges weren't receiving power. Since water collection was worth half of the available 100 competition points for the task, fixing it was mission critical, and the electrical team rewired the cartridges to run directly off the battery as a field fix. That repair used up roughly half of the available competition time, and I worked as mechanical field support throughout. Even with only half the intended operating window, the system still collected 31 of 50 possible points for water extraction, a strong result given the circumstances, and one that spoke to how robust the underlying design was. The team went on to complete every other competition task successfully, including ilmenite sample analysis, finishing 4th in the science (space resources) task and 3rd overall at the 2025 Australian Rover Challenge.",
        futureWork: [
          "Reliability of the heating system and overall thermal performance were flagged as the top priorities to improve.",
          "Efficiency became the highest priority heading into 2026, where new scoring rules were set to award points for efficiency indicators like power consumption, previously unscored entirely.",
          "Rule changes for 2026 were expected to prohibit cryogenic cooling, which our system (and many other teams') relied on in 2025, making an electrical cooling solution a design priority going forward.",
        ],
      },
      {
        year: "2026",
        label: "2026 - Task Operator",
        role: "Science Member & Task Operator",
        badgeStats: [
          { k: "Water Recovery", v: "86%" },
          { k: "Science Task Placing", v: "3rd" },
          { k: "Overall Placing", v: "3rd" },
        ],
        images: [
          "assets/water-extraction/2026/arc2026-5.jpg",
          "assets/water-extraction/2026/arc2026-7.jpg",
          "assets/water-extraction/2026/arc2026-1.jpg",
          "assets/water-extraction/2026/arc2026-2.jpg",
          "assets/water-extraction/2026/arc2026-3.jpg",
          "assets/water-extraction/2026/arc2026-4.jpg",
          "assets/water-extraction/2026/arc2026-8.jpg",
        ],
        overview:
          "For 2026, my role shifted from leading the system's design to operating it: I worked as a science team member on the payload and served as task operator on competition day. The system itself was substantially redesigned by the team to meet new competition rules and to push performance further.",
        problem:
          "New rules for the 2026 competition banned the cryogenic (ice-pack) cooling the 2025 system relied on, pushing the team toward an active electrical cooling solution. At the same time, the team wanted to improve on 2025's recovery rate and address the reliability issues identified the year before.",
        approach:
          "The kiln and condenser were rebuilt as a single metal 3D-printed assembly, produced in collaboration with Monash's additive manufacturing facility, replacing the 2025 welded sheet metal and 3D-printed ABS construction. Cooling moved from cryogenic ice packs to Peltier cooling to comply with the new rules, and the earlier mesh \"drip\" method was dropped in favour of evaporating the sample fully. The payload also gained two new analysis systems: a custom dual-LED near-infrared probe that measures the water content of frozen regolith non-invasively, validated to 2% precision across a 0-30% water content range, and a digital microscope with a light-isolation shroud whose trained model predicts ilmenite concentration within 2% of the true value from depth images, paired with a brush system to expose fresh sample layers for imaging. Both instruments sit on an analysis arm that swapped its original aluminium tube for carbon fibre to save weight and route cabling through its centre, with a tool-change mechanism to move quickly between instruments over a sample. On competition day I worked as drive operator, based in the team's control station and operating the rover entirely through its camera feeds. I worked closely with the payload operator, who ran the payload's actuation and heating/cooling systems, kept radio communications open with the mechanical and electrical field crew, and helped strategise how to complete both the water extraction and ilmenite analysis tasks within the available time. I was selected for this role based on my prior experience with the payload from 2025 and my understanding of how best to approach the task.",
        approachGallery: {
          label: "CAD Design and Field Testing",
          images: [
            "assets/water-extraction/2026/water-2026-1.png",
            "assets/water-extraction/2026/water-2026-2.png",
            "assets/water-extraction/2026/water-2026-3.png",
          ],
        },
        results:
          "In development and pre-competition testing, the redesigned system achieved 86% water recovery from a 100 g sample at 20% water content, more than double the previous year's recovery rate. On competition day in Adelaide, an electrical fault cut radio communications with the rover, and the team later lost connection to the payload mid-drill, leaving it stuck. Mechanical and electrical support, both in the control station and out in the field, worked together to troubleshoot the issue and remove parts of the payload so the rover could keep traversing. Despite that, the system still achieved a strong water recovery result, and the team placed 3rd in the science task and 3rd overall, matching 2025's overall result despite a harder task and a tougher day of technical setbacks. The team's extensive pre-competition field testing, including on-beach trials in conditions close to those at competition, was cited as a key reason the system still performed well under pressure.",
      },
    ],
  },
  {
    id: "building-this-site",
    number: "004",
    category: "Just For Fun",
    title: "How I Built This Website",
    tagline:
      "The genuinely meta story of a mechanical engineer, a chat window, and a portfolio site that actually shipped.",
    year: "2026",
    role: "Solo, with an AI coworker",
    stack: ["GitHub Pages", "Claude", "HTML/CSS/JS"],
    thumbnail: "assets/site/mars-desert-research-station.jpg",
    images: [],
    noGallery: true,
    overviewLabel: "Background",
    overview:
      "I've been very lucky to work on a range of projects at university and wanted to present them somehow, but I'm a mechanical engineer, not a web developer! My coding experience going into the creation of this webpage was numerical analysis and data processing for technical work, which was useful, but not exactly the same skill set. When it came to design, layout, or making anything actually look good online, I had no idea what I was doing but was keen to learn. So I decided to have a go at building the site myself, using Claude (Anthropic's AI) for coding help, and figure out the design and web parts as I went! I learnt a lot during this process, so much so that I thought it deserved a project page of its own.",
    problemLabel: "The Problem",
    problem:
      "A portfolio site sounds simple until you actually try to make one. I wanted something that looked professional, was easy for me to keep updating as I finish new projects or look to improve the presentation of the old ones, was free to host, and did not require me to become a web developer overnight. GitHub Pages solved the hosting part nicely, this is free, and it slots straight into a link for easy viewing. However, I still had no idea how a repository worked, what a .html file actually did, or how you get from an empty folder to a live website that other people can visit. I've summarised how I made this page below.",
    approachLabel: "Step By Step Guide",
    steps: [
      {
        title: "Get a GitHub account and figure out what a repository is",
        desc: "Turns out a repository is just a project folder that lives online, with a memory of every change you've made. GitHub is the cloud storage, GitHub Pages is the free part that turns that folder into an actual live website link that you send to others.",
      },
      {
        title: "Describe what you want to Claude and let it explain the file architecture",
        desc: "I explained I wanted a clickable overview page with a detail page for each project. Claude laid out the file structure, explained the function of each file and created basic templates to work from: index.html for the homepage, project.html as one reusable template for every project, projects.js as the single file where all my actual content lives, and style.css for the design.",
      },
      {
        title: "Learn enough to make small edits yourself",
        desc: "Every file on GitHub has a little pencil icon. Click it, edit the text, commit the change, and the live site updates in under a minute. Practice makes perfect, and I found that the more time spent in this process, the easier it gets.",
      },
      {
        title: "Work out how images and files get onto a website",
        desc: "Short version: you upload your photos into a folder, then you point to them by file name in the code. Once you see it done once, it clicks immediately. Coding is very literal - if you make a spelling error when referring to a file name, it will not work!",
      },
      {
        title: "Go find inspiration",
        desc: "I scrolled through a friend's portfolio site and a few others for layout ideas, hero photos, tag pills, project carousels, all of it, then described what I liked to Claude and let it create coding templates for me to populate with my information and images.",
      },
      {
        title: "Troubleshoot, spot mistakes, and iterate (this is basically the whole process)",
        desc: "Nothing works perfectly the first time, especially when you're new to this like I was! A carousel doesn't loop right, an image path is spelled wrong, a bracket goes missing somewhere and the whole file breaks. The fun part is finding what broke and working out how to fix it. Every time something looked off, or I wanted a new feature (a photo carousel! tabs for projects spanning multiple years!), I kept iterating until it looked right. This entire site, including the very page you're reading right now, is the result of that back-and-forth.",
      },
    ],
    resultsLabel: "Final Thoughts",
    results:
      "This project card is genuinely part of the proof: this whole site, the homepage, every project detail page, the carousels, the year tabs on the water extraction project, I built with a coding background limited to numerical analysis and genuinely no design or web development experience beforehand, mostly by asking questions and copy-pasting into GitHub. If I can pull this off as a mechanical engineer, so can you!<br><br><em>*I plan to add the file templates to this page when I work out how.</em>",
    specs: [
      { k: "Role", v: "Solo build" },
      { k: "AI Coworker", v: "Claude" },
      { k: "Hosting", v: "GitHub Pages (free)" },
      { k: "Prior Web Design Experience", v: "None" },
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "pink-rover-initiative",
    number: "005",
    category: "Research & STEM Equity",
    title: "The Pink Rover Initiative",
    tagline:
      "A published research initiative studying whether a pink rover can spark real conversations about self-expression, diversity, and belonging in STEM.",
    year: "Dec 2024 - Aug 2025",
    role: "Pink Rover Initiative Lead",
    stack: ["Research", "STEM Equity", "DEI", "Monash Nova Rover"],
    thumbnail: "assets/pink-rover/photos/outreach-stall.jpg",
    images: [
      "assets/pink-rover/photos/outreach-stall.jpg",
      "assets/pink-rover/photos/podium-presentation.jpg",
      "assets/pink-rover/photos/team-screens.jpg",
      "assets/pink-rover/photos/talking-to-visitors.jpg",
    ],
    overview:
      "Pink is a colour rarely associated with STEM, and Monash Nova Rover leaned into that on purpose. The Pink Rover Initiative uses a pink-painted rover, sitting inside a well-known student robotics team, to spark conversations about self-expression, opportunity, and diversity in STEM spaces that are otherwise dominated by silver, black, and white. I led this as a standalone research initiative from December 2024 to August 2025, coordinating an eight-person multidisciplinary team to take it from concept through to a published research output. My role covered project planning, task allocation, timelines, and stakeholder communication, plus running the initiative's engagement activities and analysing survey data under a human research ethics framework, alongside internal education work on gender equity within the team itself.",
    problem:
      "The initiative responds to what's often called the leaky pipeline in STEM: half of middle-school students interested in STEM in Australia are girls, but that drops to 37% of students in Australian university STEM degrees, and just 15% of STEM jobs in Australia are held by women. At the same time, DEI initiatives are rarely evaluated for whether they actually work: of 337 women-in-STEM initiatives in Australia, only 7 have been formally evaluated for impact, despite $100 million spent over the past decade. The initiative was built around the idea that if you can't measure it, you can't improve it, so proving actual impact, not just running an awareness campaign, was the point from the start.",
    approach:
      "The initiative is built on three pillars: providing opportunity through exposure, delivering visible role models, and challenging stereotypes directly through the rover's own colour and presence. To test whether it was actually working, we ran two years of research built around a theory of change: that colouring the rover pink and placing it at the centre of a well-known student robotics team would ignite real conversations about women and self-expression in STEM. That research combined 300 survey responses with 23 semi-structured interviews, comparing responses across gender, awareness of the initiative, and Monash Nova Rover membership versus non-membership, with statistically significant differences found across most of the dimensions we tested. On the delivery side, the initiative ran through outreach events, social media, media coverage, and appearances including Monash's O-Week, alongside internal workshops and education on gender equity for the team itself.",
    results:
      "The initiative reached an estimated 70,000 people through social media, appeared in 19 news articles, reached 5,500 students directly, ran 88 outreach events, and highlighted 30 women's stories. Support for the initiative grew from 69% skeptical in 2022 to 96% supportive in 2025, with no meaningful gender difference in that shift. On the research side, 80% of participants reported that the initiative started real conversations about women and self-expression, and 86% said it promotes the importance of everyone having a sense of belonging in STEM. Team members in Monash Nova Rover reported meaningfully higher feelings of inclusion and belonging than people outside the team (6.28 vs 5.92 out of 7), and higher awareness of gender discrimination (6.20 vs 5.61 out of 7). One of the clearest findings was around allyship: men within the team who had been exposed to the initiative showed awareness of anti-femininity bias close to non-men's levels, far higher than men outside the team, suggesting the initiative shifts male allyship specifically, not just general awareness. The work was presented at the 2025 International Astronautical Congress and the 2025 Australian Space Research Conference.",
    futureWork: [
      "Around half of 2025 participants recommended increasing the initiative's social media presence further.",
      "Extending awareness of the initiative beyond the team itself, since most measured impact so far comes from people already connected to Monash Nova Rover.",
      "Running more skills-based workshops and mentorship in safe, inviting spaces specifically for non-male participants, who reported lower technical confidence and comfort seeking help from teammates.",
      "Running more events generally, a direct recommendation from participants in the 2025 research round.",
    ],
    slidesGallery: {
      label: "Presentation Slides",
      images: [
        "assets/pink-rover/slides/pink-rover-slide-01.jpg",
        "assets/pink-rover/slides/pink-rover-slide-02.jpg",
        "assets/pink-rover/slides/pink-rover-slide-03.jpg",
        "assets/pink-rover/slides/pink-rover-slide-04.jpg",
        "assets/pink-rover/slides/pink-rover-slide-05.jpg",
        "assets/pink-rover/slides/pink-rover-slide-06.jpg",
        "assets/pink-rover/slides/pink-rover-slide-07.jpg",
        "assets/pink-rover/slides/pink-rover-slide-08.jpg",
        "assets/pink-rover/slides/pink-rover-slide-09.jpg",
        "assets/pink-rover/slides/pink-rover-slide-10.jpg",
        "assets/pink-rover/slides/pink-rover-slide-11.jpg",
        "assets/pink-rover/slides/pink-rover-slide-12.jpg",
        "assets/pink-rover/slides/pink-rover-slide-13.jpg",
      ],
      caption:
        "This is the presentation we used for the Australian Space Research Conference. More personalised photos from the initiative are shown in the carousel at the top of this page.",
    },
    bottomPdf: {
      label: "Publication",
      path: "assets/pink-rover/The_Pink_Rover_Initiative.pdf",
      caption:
        "This is our published paper for the International Astronautical Congress (IAC) 2025.",
    },
    specs: [
      { k: "Role", v: "Pink Rover Initiative Lead" },
      { k: "Duration", v: "Dec 2024 - Aug 2025" },
      { k: "Team", v: "8-person multidisciplinary team" },
      { k: "Research", v: "300 surveys, 23 interviews" },
      { k: "Presented At", v: "IAC 2025, ASRC 2025" },
    ],
    links: {
      github: "",
      demo: "",
    },
    externalLinks: [
      { label: "Pink Rover website", url: "https://www.novarover.space/pink-rover" },
      { label: "IAC 2025 interview (video)", url: "https://www.youtube.com/watch?si=m2hKx0hgv7bhJdRj&v=CawFZ0eVQvo&feature=youtu.be" },
      { label: "IAC 2025 presentation slides", url: "https://www.canva.com/design/DAG2fT1DYwo/Q9wAxyeTS7tijYhEicLUAw/edit" },
      { label: "ASRC 2025 presentation slides", url: "https://www.canva.com/design/DAG4pB9W4x8/jYyROruJAaoOoKfwLSlrPg/edit" },
    ],
  },
];
