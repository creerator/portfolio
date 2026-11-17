import * as THREE from "three";


const I18N = {
  ru: {
    brand: "Дмитрий Долганин",
    menu: "Меню",
    close: "Закрыть",
    navProjects: "Проекты",
    navGallery: "Галерея",
    navList: "Список",
    navCv: "Резюме",
    contacts: "Контакты",
    galleryHint: "Скролльте, чтобы листать",
    colYear: "Год",
    colProject: "Проект",
    colCategory: "Категория",
    colClient: "Клиент",
    cvRole: "3D-художник — Hard Surface & визуализация",
    cvLocation: "Санкт-Петербург, удалённо",
    cvDownloadRu: "Скачать PDF (ru)",
    cvDownloadEn: "Скачать PDF (en)",
    cvProfile: "Профиль",
    cvProfileText:
      "3D-художник, с 2022 года выполняю фриланс-проекты: hard surface, автомобили, архитектурная и предметная визуализация, стилизованные сцены. Беру на себя отдельный этап или проект целиком: моделирование, текстурирование, свет, финальные рендеры.",
    cvTasks: "Задачи",
    cvTasksItems: [
      "Hard-surface моделирование: автомобили, объекты, окружение",
      "Предметная и архитектурная визуализация",
      "Стилизованные сцены и low-poly окружение",
      "Текстурирование и материалы в Substance 3D Painter",
      "Свет, композиция, финальные кадры",
      "3D-анимация, раскадровка, базовый монтаж в DaVinci Resolve",
    ],
    cvExperience: "Опыт",
    cvExperienceItems: [
      ["3D-художник / визуализатор — фриланс", "2022 — настоящее время"],
      ["Жилой дом и МОП — сцена, материалы, свет; серия из 10 рендеров", ""],
      ["Окружение для VR-игры — 6 стилизованных low-poly комнат", ""],
      ["Заброшенная лаборатория — визуальное повествование, 10 рендеров за неделю", ""],
      ["Парк аттракционов — стилизованное окружение, 4 финальных рендера", ""],
    ],
    cvPersonal: "Личные проекты",
    cvPersonalItems: [
      "Nissan 180SX — автомобильная визуализация, раскадровка и анимация (в работе)",
      "Dodge Charger 1969 — low-poly моделирование, стилизованные рендеры",
      "Orient Express — интерьер вагона-ресторана, свет и композиция",
      "Сцены по мотивам «Бегущего по лезвию» — атмосферная визуализация",
      "Ресторан в русском стиле — интерьер по плану существующего помещения",
    ],
    cvSkills: "Навыки",
    cvSkillsItems: [
      "Моделирование: hard surface, автомобили, low-poly, интерьеры",
      "Blender: моделирование, материалы, свет, анимация, рендер",
      "Substance 3D Painter: текстурирование и материалы",
      "DaVinci Resolve: базовый монтаж и цветокоррекция",
      "Unreal Engine / Unity: базовые задачи с готовым 3D-контентом",
    ],
    cvEducation: "Образование",
    cvEducationText:
      "Университет ИТМО, бакалавриат, 4 курс — «Программная инженерия и компьютерные технологии в дизайне», специализация: 3D-моделирование.",
    cvEnglish: "Английский",
    cvEnglishText:
      "Свободно читаю технические материалы и документацию. Для работы предпочитаю письменную коммуникацию; разговорный английский активно развиваю.",
    prev: "Назад",
    nextProject: "Следующий проект",
    creditRole: "Роль",
    creditClient: "Клиент",
    creditYear: "Год",
    creditTeam: "Команда",
    descPlaceholder:
      "Описание проекта — пара абзацев о задаче, идее и результате. Замените этот текст на свой (файл src/main.js, блок PROJECTS).",
  },
  en: {
    brand: "Dmitrii Dolganin",
    menu: "Menu",
    close: "Close",
    navProjects: "Projects",
    navGallery: "Gallery",
    navList: "List",
    navCv: "CV",
    contacts: "Contacts",
    galleryHint: "Scroll to browse",
    colYear: "Year",
    colProject: "Project",
    colCategory: "Category",
    colClient: "Client",
    cvRole: "3D Artist — Hard Surface & Visualization",
    cvLocation: "Saint Petersburg, remote",
    cvDownloadRu: "Download PDF (ru)",
    cvDownloadEn: "Download PDF (en)",
    cvProfile: "Profile",
    cvProfileText:
      "3D artist freelancing since 2022: hard surface, automotive, architectural and product visualization, stylized scenes. I take on a single stage or a whole project: modeling, texturing, lighting, final renders.",
    cvTasks: "What I do",
    cvTasksItems: [
      "Hard-surface modeling: cars, objects, environments",
      "Product and architectural visualization",
      "Stylized scenes and low-poly environments",
      "Texturing and materials in Substance 3D Painter",
      "Lighting, composition, final frames",
      "3D animation, storyboards, basic editing in DaVinci Resolve",
    ],
    cvExperience: "Experience",
    cvExperienceItems: [
      ["3D artist / visualizer — freelance", "2022 — present"],
      ["Residential building & common areas — scene, materials, light; 10 renders", ""],
      ["VR game environment — 6 stylized low-poly rooms", ""],
      ["Abandoned laboratory — visual storytelling, 10 renders in a week", ""],
      ["Amusement park — stylized environment, 4 final renders", ""],
    ],
    cvPersonal: "Personal projects",
    cvPersonalItems: [
      "Nissan 180SX — automotive visualization, storyboard and animation (in progress)",
      "Dodge Charger 1969 — low-poly modeling, stylized renders",
      "Orient Express — dining car interior, light and composition",
      "Blade Runner-inspired scenes — atmospheric visualization",
      "Russian-style restaurant — interior based on an existing floor plan",
    ],
    cvSkills: "Skills",
    cvSkillsItems: [
      "Modeling: hard surface, cars, low-poly, interiors",
      "Blender: modeling, materials, lighting, animation, rendering",
      "Substance 3D Painter: texturing and materials",
      "DaVinci Resolve: basic editing and color grading",
      "Unreal Engine / Unity: basic tasks with ready 3D content",
    ],
    cvEducation: "Education",
    cvEducationText:
      "ITMO University, BA, 4th year — Software Engineering & Computer Technologies in Design, specialization: 3D modeling.",
    cvEnglish: "English",
    cvEnglishText:
      "Fluent reader of technical docs and tutorials. Prefer written communication for work; actively improving spoken English.",
    prev: "Prev",
    nextProject: "Next project",
    creditRole: "Role",
    creditClient: "Client",
    creditYear: "Year",
    creditTeam: "Team",
    descPlaceholder:
      "Project description — a couple of paragraphs about the brief, the idea and the outcome. Replace this text with your own (src/main.js, PROJECTS block).",
  },
  zh: {
    brand: "德米特里·多尔加宁",
    menu: "菜单",
    close: "关闭",
    navProjects: "项目",
    navGallery: "画廊",
    navList: "列表",
    navCv: "简历",
    contacts: "联系方式",
    galleryHint: "滚动浏览",
    colYear: "年份",
    colProject: "项目",
    colCategory: "类别",
    colClient: "客户",
    cvRole: "3D艺术家 — 硬表面与可视化",
    cvLocation: "圣彼得堡，远程",
    cvDownloadRu: "下载 PDF (ru)",
    cvDownloadEn: "下载 PDF (en)",
    cvProfile: "简介",
    cvProfileText:
      "自2022年起从事自由职业的3D艺术家：硬表面、汽车、建筑与产品可视化、风格化场景。可承担单个环节或完整项目：建模、贴图、灯光、最终渲染。",
    cvTasks: "工作内容",
    cvTasksItems: [
      "硬表面建模：汽车、物体、环境",
      "产品与建筑可视化",
      "风格化场景与低多边形环境",
      "Substance 3D Painter 贴图与材质",
      "灯光、构图、最终画面",
      "3D动画、分镜、DaVinci Resolve 基础剪辑",
    ],
    cvExperience: "经历",
    cvExperienceItems: [
      ["3D艺术家 / 可视化 — 自由职业", "2022 — 至今"],
      ["住宅楼与公共区域 — 场景、材质、灯光；10张渲染图", ""],
      ["VR游戏环境 — 6间风格化低多边形房间", ""],
      ["废弃实验室 — 视觉叙事，一周10张渲染", ""],
      ["游乐园 — 风格化环境，4张最终渲染", ""],
    ],
    cvPersonal: "个人项目",
    cvPersonalItems: [
      "Nissan 180SX — 汽车可视化、分镜与动画（进行中）",
      "Dodge Charger 1969 — 低多边形建模、风格化渲染",
      "东方快车 — 餐车内饰、灯光与构图",
      "《银翼杀手》风格场景 — 氛围可视化",
      "俄式餐厅 — 根据现有平面图制作室内场景",
    ],
    cvSkills: "技能",
    cvSkillsItems: [
      "建模：硬表面、汽车、低多边形、室内",
      "Blender：建模、材质、灯光、动画、渲染",
      "Substance 3D Painter：贴图与材质",
      "DaVinci Resolve：基础剪辑与调色",
      "Unreal Engine / Unity：基础3D内容操作",
    ],
    cvEducation: "教育",
    cvEducationText:
      "圣彼得堡国立信息技术大学（ITMO），本科四年级 — 设计中的软件工程与计算机技术，方向：3D建模。",
    cvEnglish: "英语",
    cvEnglishText: "可流畅阅读技术文档与教程。工作沟通以书面为主，口语持续提升中。",
    prev: "上一个",
    nextProject: "下一个项目",
    creditRole: "角色",
    creditClient: "客户",
    creditYear: "年份",
    creditTeam: "团队",
    descPlaceholder:
      "项目描述——关于任务、创意与成果的两三段文字。请替换为您自己的内容（src/main.js 中的 PROJECTS 部分）。",
  },
};

// ---------- Проекты ----------
// Картинки кладите в app/public/assets/ и меняйте пути в полях image / gallery.
const T = (ru, en, zh) => ({ ru, en, zh });
const PERSONAL = T("Личный проект", "Personal project", "个人项目");
const CLIENT = T("Название клиента", "Client Name", "客户名称");
const ROLE = T("3D-художник", "3D Artist", "3D艺术家");

const PROJECTS = [
  {
    title: T("Amniotic Reservoir", "Amniotic Reservoir", "羊膜舱"),
    year: "2025",
    category: T("Пропсы", "Props", "道具"),
    client: PERSONAL,
    image: "./assets/projects/amniotic-reservoir/img-01.webp",
    hero: "./assets/projects/amniotic-reservoir/hero.webp",
    aspect: 1.7778,
    gallery: [
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-01.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-02.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-03.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-04.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-05.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-06.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-07.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-08.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/amniotic-reservoir/img-09.webp", aspect: 1.7778 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditTeam", T("Командная работа", "Team project", "团队项目")],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Воссоздание амниотического резервуара — инкубационной капсулы, в которой в лаборатории «Аватара» Джеймса Кэмерона (2009) вызревают тела аватаров, а операторы погружаются в линк-юнит. Моделирование резервуара и капсулы, стекло, жидкость, холодная лабораторная подсветка. Командная учебная работа.", "Recreation of the amnio tank — the incubation capsule in which avatar bodies grow in the lab of James Cameron's Avatar (2009), and where operators enter the link unit. Modeling of the tank and capsule, glass, liquid, cold laboratory lighting. A team study project.", "重现詹姆斯·卡梅隆《阿凡达》(2009)中的羊膜培养舱——实验室中培育阿凡达身体的培养舱，操作员由此进入链接单元。舱体建模、玻璃、液体与冷色实验室灯光。团队课程项目。"),
  },
  {
    title: T("Blade Runner", "Blade Runner", "银翼杀手"),
    year: "2025",
    category: T("Окружение", "Environment", "环境"),
    client: PERSONAL,
    image: "./assets/projects/blade-runner/img-01.webp",
    hero: "./assets/projects/blade-runner/hero.webp",
    aspect: 1.7820,
    gallery: [
      { type: "img", src: "./assets/projects/blade-runner/img-01.webp", aspect: 1.7820 },
      { type: "img", src: "./assets/projects/blade-runner/img-02.webp", aspect: 1.7817 },
      { type: "img", src: "./assets/projects/blade-runner/img-03.webp", aspect: 1.7820 },
      { type: "img", src: "./assets/projects/blade-runner/img-04.webp", aspect: 1.7817 },
      { type: "img", src: "./assets/projects/blade-runner/img-05.webp", aspect: 1.7820 },
      { type: "img", src: "./assets/projects/blade-runner/img-06.webp", aspect: 1.7265 },
      { type: "img", src: "./assets/projects/blade-runner/img-07.webp", aspect: 4.3900 },
      { type: "img", src: "./assets/projects/blade-runner/img-08.webp", aspect: 1.1640 },
      { type: "img", src: "./assets/projects/blade-runner/img-09.webp", aspect: 2.0065 },
      { type: "img", src: "./assets/projects/blade-runner/img-10.webp", aspect: 2.0400 },
      { type: "img", src: "./assets/projects/blade-runner/img-11.webp", aspect: 1.7400 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Воссоздание квартиры офицера К из «Бегущего по лезвию 2049» Дени Вильнёва (2017) — тесной квартиры, где живёт голограмма Джои, — и крыши этого дома, на которую К выносит эманатор под дождь. Работа с настроением: неон, дождь, мокрый асфальт и тёплый свет из окон.", "A recreation of officer K's apartment from Denis Villeneuve's Blade Runner 2049 (2017) — the cramped flat where the hologram Joi lives — and the building's rooftop where K takes the emanator out into the rain. A study in mood: neon, rain, wet asphalt and warm window light.", "重现丹尼斯·维伦纽瓦《银翼杀手2049》(2017)中警官K的公寓——全息影像Joi生活的狭小居所——以及K带着放射器走进雨中的楼顶。氛围练习：霓虹、雨、湿滑的路面与窗内暖光。"),
  },
  {
    title: T("Diegesis", "Diegesis", "Diegesis 叙事世界"),
    year: "2025",
    category: T("Игровое окружение", "Game Environment", "游戏场景"),
    client: PERSONAL,
    image: "./assets/projects/diegesis/img-01.webp",
    hero: "./assets/projects/diegesis/hero.webp",
    aspect: 0.7825,
    gallery: [
      { type: "img", src: "./assets/projects/diegesis/img-01.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-02.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-03.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-04.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-05.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-06.webp", aspect: 0.7824 },
      { type: "img", src: "./assets/projects/diegesis/img-07.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-08.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-09.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-10.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-11.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-12.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-13.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-14.webp", aspect: 0.7825 },
      { type: "img", src: "./assets/projects/diegesis/img-15.webp", aspect: 0.7825 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Создание платформера по референсам из Pinterest: подбор визуальных мотивов, сборка целостного игрового мира и его правил. Название — от нарратологического термина «диегезис»: мир, который существует для своих персонажей и честно работает по своим законам.", "A platformer built from Pinterest references: collecting visual motifs and assembling them into a coherent game world with its own rules. The title comes from the narratological term 'diegesis' — a world that exists for its characters and plays honestly by its own laws.", "基于 Pinterest 参考图制作的平台跳跃游戏场景：收集视觉母题，搭建规则自洽的完整游戏世界。名称取自叙事学术语“叙事世界”（diegesis）——一个为角色而存在、遵循自身法则的世界。"),
  },
  {
    title: T("Dodge Charger 1969", "Dodge Charger 1969", "道奇 Charger 1969"),
    year: "2026",
    category: T("Автомобили", "Automotive", "汽车"),
    client: PERSONAL,
    image: "./assets/projects/dodge-charger-1969/img-01.webp",
    hero: "./assets/projects/dodge-charger-1969/hero.webp",
    aspect: 1.7778,
    gallery: [
      { type: "img", src: "./assets/projects/dodge-charger-1969/img-01.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/dodge-charger-1969/img-02.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/dodge-charger-1969/img-03.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/dodge-charger-1969/img-04.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/dodge-charger-1969/img-05.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/dodge-charger-1969/img-06.webp", aspect: 1.7778 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2026", "2026", "2026")],
    ],
    description: T("Стилизованная лоу-поли машина по придуманной истории: укреплённый автомобиль космического грабителя в кузове маслкара 1969 года. Ездит по грунту — высокая проходимость и маневренность. На крыше рейки для крепления груза, багажник не закрывается из-за коробок и удерживается тросами. Колёса и кузов усилены, сай-фай стилизация. Внутри — обычный, но герметичный салон (грабитель любит комфорт), тонированные стёкла, стимпанковские голографические очки на торпеде, плюшевые кубики на зеркале и дискеты по всему салону.", "A stylized low-poly car built around an invented story: an armored ride of a space robber in a 1969 muscle-car body. It drives on dirt — high clearance and maneuverability. Roof rails hold cargo, the trunk won't close over the boxes and is lashed with cables. Reinforced wheels and body, sci-fi styling. Inside — an ordinary but airtight cabin (the robber likes comfort), tinted glass, steampunk holographic goggles on the dash, plush dice on the mirror and floppy disks scattered around.", "围绕虚构故事制作的风格化低多边形汽车：一名太空劫匪的加固座驾，采用1969年肌肉车车身。越野行驶，高通过性与机动性。车顶有行李导轨，后备箱因箱子关不上而用绳索固定。车轮与车身加固，科幻风格化处理。车内是普通但密封的座舱（劫匪也讲究舒适），车窗深色贴膜，仪表台上放着蒸汽朋克风全息眼镜，后视镜挂着毛绒骰子，座舱里散落着软盘。"),
  },
  {
    title: T("Nissan 180SX", "Nissan 180SX", "日产 180SX"),
    year: "2026",
    category: T("Автомобили", "Automotive", "汽车"),
    client: PERSONAL,
    image: "./assets/projects/nissan-180sx/img-01.webp",
    hero: "./assets/projects/nissan-180sx/hero.webp",
    aspect: 1.4109,
    gallery: [
      { type: "img", src: "./assets/projects/nissan-180sx/img-01.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-02.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-03.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-04.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-05.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-06.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-07.webp", aspect: 1.4109 },
      { type: "img", src: "./assets/projects/nissan-180sx/img-08.webp", aspect: 1.4109 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2026", "2026", "2026")],
    ],
    description: T("Машина создана по истории. Шёл 2006 год: наш парнишка — гайдзин из небогатой семьи, на торпеде его тачки красуется дряхлый ноутбук, а вместо штурмана — гора пустых энергетиков. Его аппарат — переделанная под токийские трассы Silvia S13, ставшая Nissan 180SX 1989 года: задний привод, турбомотор CA18DET, открывающиеся фары. Тюнингована на коленках и энтузиазме в старом гараже Кэйити Цутии — «Короля дрифта», снявшегося в «Тройном форсаже». На корпусе заплатки от отбойников и дорожных знаков, половина кузова зашита дешёвым алюминием и стекловолокном. Но парень любит эту машину больше жизни и живёт культурой дрифта: каждый ночь он выезжает на скоростную магистраль Шуто в Цурими-ку, Иокогама, где собираются любители ставок и острых ощущений.", "A car built around a story. Year 2006: our guy, a gaijin from a poor family, has a dying laptop on the dash and a pile of empty energy drinks instead of a co-driver. His machine — a Tokyo-street-converted Silvia S13 turned 1989 Nissan 180SX: rear-wheel drive, CA18DET turbo, pop-up headlights. Tuned on knees and enthusiasm in the old garage of Keiichi Tsuchiya — the 'Drift King' who appeared in Tokyo Drift. The body carries patches from guardrails and road signs; half of it is clad in cheap aluminium and fiberglass. But he loves this car more than life and lives the drift culture: every night he runs the Shuto expressway in Tsurumi-ku, Yokohama, where betting and thrill seekers gather.", "围绕故事创作的汽车。2006年：主人公是个家境普通的“外乡人”，仪表台上摆着破旧笔记本，副驾位置堆满空能量饮料罐。他的座驾是由Silvia S13改装而成的1989年日产180SX：后驱、CA18DET涡轮发动机、翻灯。在“漂移之王”土屋圭市（曾出演《速度与激情3：东京漂移》）的旧车库里，靠热情土法改装。车身上满是与护栏和路牌擦碰的补丁，半个车身用廉价铝板和玻璃钢修补。但他爱车如命，活在漂移文化里：每晚都驶上横滨鹤见区的首都高速，那里聚集着下注与追求刺激的人。"),
  },
  {
    title: T("Orient Express", "Orient Express", "东方快车"),
    year: "2025",
    category: T("Интерьер", "Interior", "室内"),
    client: PERSONAL,
    image: "./assets/projects/orient-express/img-01.webp",
    hero: "./assets/projects/orient-express/hero.webp",
    aspect: 1.7791,
    gallery: [
      { type: "img", src: "./assets/projects/orient-express/img-01.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-02.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-03.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-04.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-05.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-06.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-07.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-08.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-09.webp", aspect: 1.7791 },
      { type: "img", src: "./assets/projects/orient-express/img-10.webp", aspect: 1.7778 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Воссоздание и сервировка вагона-ресторана Восточного экспресса. Ориентир — легендарные вагоны 1920-х: Côte d'Azur (1929) со стеклянными панелями работы Рене Лалика, Etoile du Nord (1926) с маркетри и L'Oriental в чёрном лаке. Белые скатерти, лампы-«тюльпаны», полированное дерево и ар-деко — интерьер как ритуал.", "Recreation and table setting of an Orient Express dining car. The reference points are the legendary 1920s cars: Côte d'Azur (1929) with René Lalique glass panels, Etoile du Nord (1926) with marquetry, and the black-lacquered L'Oriental. White tablecloths, 'Tulip' lamps, polished wood and Art Deco — the interior as a ritual.", "重现并布置东方快车餐车。参照20世纪20年代的传奇车厢：Côte d'Azur（1929，勒内·拉利克设计的玻璃镶板）、Etoile du Nord（1926，细木镶嵌）与黑漆风格的L'Oriental。白色桌布、“郁金香”壁灯、抛光木饰与装饰艺术风格——如仪式般的室内场景。"),
  },
  {
    title: T("Russian L'Manière", "Russian L'Manière", "Russian L'Manière"),
    year: "2026",
    category: T("Интерьер", "Interior", "室内"),
    client: PERSONAL,
    image: "./assets/projects/russian-l-maniere/img-01.webp",
    hero: "./assets/projects/russian-l-maniere/hero.webp",
    aspect: 1.2778,
    gallery: [
      { type: "img", src: "./assets/projects/russian-l-maniere/img-01.webp", aspect: 1.2778 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-02.webp", aspect: 1.2786 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-03.webp", aspect: 1.2786 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-04.webp", aspect: 1.2786 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-05.webp", aspect: 1.2778 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-06.webp", aspect: 1.2790 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-07.webp", aspect: 1.5093 },
      { type: "img", src: "./assets/projects/russian-l-maniere/img-08.webp", aspect: 1.2931 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2026", "2026", "2026")],
    ],
    description: T("Вариант планировочного решения для ресторана в русском стиле: зонирование зала, маршруты гостей и персонала, расстановка мебели и работа с масштабом помещений.", "A layout proposal for a Russian-style restaurant: hall zoning, guest and staff routes, furniture arrangement and work with the scale of the rooms.", "俄式餐厅的平面布局方案：大厅分区、客人与员工动线、家具布置与空间尺度处理。"),
  },
  {
    title: T("Stylized Podium", "Stylized Podium", "风格化舞台"),
    year: "2026",
    category: T("Анимация", "Animation", "动画"),
    client: PERSONAL,
    image: "./assets/projects/stylized-podium/img-01.webp",
    hero: "./assets/projects/stylized-podium/hero.webp",
    aspect: 1.7778,
    gallery: [
      { type: "img", src: "./assets/projects/stylized-podium/img-01.webp", aspect: 1.7778 },
      { type: "video", src: "./assets/projects/stylized-podium/video.mp4", poster: "./assets/projects/stylized-podium/img-01.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/stylized-podium/img-02.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/stylized-podium/img-03.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/stylized-podium/img-04.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/stylized-podium/img-05.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/stylized-podium/img-06.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/stylized-podium/img-07.webp", aspect: 1.7778 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2026", "2026", "2026")],
    ],
    description: T("Анимация тесного, душного и сомнительного подиума. Движение персонажа записано с помощью Rokoko Studio: мокап-данные с костюма очищены, отретаргечены на персонажа и перенесены в сцену; свет и камера подчёркивают неловкость происходящего.", "Animation of a cramped, stuffy and dubious podium. The character's motion was captured with Rokoko Studio: mocap data cleaned, retargeted onto the character and brought into the scene; lighting and camera underline the awkwardness of it all.", "一段狭窄、闷热而可疑的舞台动画。角色动作通过Rokoko Studio录制：动作捕捉数据经清理后重定向到角色并放入场景；灯光与镜头强化了整体的局促感。"),
  },
  {
    title: T("Tree Room", "Tree Room", "树之房间"),
    year: "2025",
    category: T("Освещение", "Lighting", "灯光"),
    client: PERSONAL,
    image: "./assets/projects/tree-room/img-01.webp",
    hero: "./assets/projects/tree-room/hero.webp",
    aspect: 1.0000,
    gallery: [
      { type: "img", src: "./assets/projects/tree-room/img-01.webp", aspect: 1.0000 },
      { type: "img", src: "./assets/projects/tree-room/img-02.webp", aspect: 1.0000 },
      { type: "img", src: "./assets/projects/tree-room/img-03.webp", aspect: 1.0000 },
      { type: "img", src: "./assets/projects/tree-room/img-04.webp", aspect: 1.0000 },
      { type: "img", src: "./assets/projects/tree-room/img-05.webp", aspect: 1.0000 },
      { type: "img", src: "./assets/projects/tree-room/ref-06.webp", aspect: 1.0000 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Задача — максимально повторить картинку из Pinterest. Акцент на освещении: подбор сценария света, температура, мягкость теней и атмосфера важнее самих объектов. Последним кадром — сам референс для сравнения.", "The task was to reproduce a Pinterest image as closely as possible. The focus is lighting: choosing a lighting scenario, temperature, softness of shadows and atmosphere over the objects themselves. The reference itself is included as the final frame for comparison.", "任务是尽可能还原 Pinterest 上的一张图片。重点在灯光：光方案、色温、阴影柔和度与氛围比物体本身更重要。最后一张为参考图，便于对比。"),
  },
  {
    title: T("Wet Room", "Wet Room", "潮湿房间"),
    year: "2025",
    category: T("Освещение", "Lighting", "灯光"),
    client: PERSONAL,
    image: "./assets/projects/wet-room/img-01.webp",
    hero: "./assets/projects/wet-room/hero.webp",
    aspect: 0.8040,
    gallery: [
      { type: "img", src: "./assets/projects/wet-room/img-01.webp", aspect: 0.8040 },
      { type: "img", src: "./assets/projects/wet-room/img-02.webp", aspect: 0.8040 },
      { type: "img", src: "./assets/projects/wet-room/img-03.webp", aspect: 0.8040 },
      { type: "img", src: "./assets/projects/wet-room/img-04.webp", aspect: 0.8040 },
      { type: "img", src: "./assets/projects/wet-room/ref-05.webp", aspect: 0.8039 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Задача — максимально повторить картинку из Pinterest. Акцент на освещении: влажный воздух, отражения на мокрых поверхностях, контровый свет. Последним кадром — сам референс для сравнения.", "The task was to reproduce a Pinterest image as closely as possible. The focus is lighting: humid air, reflections on wet surfaces, backlight. The reference itself is included as the final frame for comparison.", "任务是尽可能还原 Pinterest 上的一张图片。重点在灯光：潮湿的空气、湿滑表面的反射、逆光。最后一张为参考图，便于对比。"),
  },
  {
    title: T("Голова Давида", "Head of David", "大卫头像"),
    year: "2025",
    category: T("Освещение", "Lighting", "灯光"),
    client: PERSONAL,
    image: "./assets/projects/golova-davida/img-01.webp",
    hero: "./assets/projects/golova-davida/hero.webp",
    aspect: 0.7500,
    gallery: [
      { type: "img", src: "./assets/projects/golova-davida/img-01.webp", aspect: 0.7500 },
      { type: "img", src: "./assets/projects/golova-davida/img-02.webp", aspect: 0.7500 },
      { type: "img", src: "./assets/projects/golova-davida/img-03.webp", aspect: 0.7500 },
      { type: "img", src: "./assets/projects/golova-davida/img-04.webp", aspect: 0.7500 },
      { type: "img", src: "./assets/projects/golova-davida/img-05.webp", aspect: 0.7500 },
      { type: "img", src: "./assets/projects/golova-davida/img-06.webp", aspect: 0.7500 },
      { type: "img", src: "./assets/projects/golova-davida/ref-07.webp", aspect: 0.7200 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2025", "2025", "2025")],
    ],
    description: T("Световые этюды с гипсовой головой Давида Микеланджело: повторить сценарии света и снять рендеры разной крупности и фокусных расстояний — от общего плана на 18 мм до детали на 75 мм. Классическая академическая задача на свет, форму и фактуру гипса.", "Lighting studies with a plaster cast of Michelangelo's David: recreating lighting scenarios and rendering at different shot sizes and focal lengths — from an 18 mm wide view to a 75 mm detail. A classical academic exercise in light, form and plaster texture.", "以米开朗基罗大卫石膏像为主题的灯光练习：还原布光方案，用不同景别与焦距渲染——从18mm全景到75mm细节。关于光、形体与石膏质感的经典学院课题。"),
  },
  {
    title: T("Путь к Великой Молитвенной Башне Мира", "Path to the Great Peace Prayer Tower", "通往大和平纪念塔之路"),
    year: "2026",
    category: T("Окружение", "Environment", "环境"),
    client: PERSONAL,
    image: "./assets/projects/put-k-bashne-mira/img-01.webp",
    hero: "./assets/projects/put-k-bashne-mira/hero.webp",
    aspect: 1.7778,
    gallery: [
      { type: "img", src: "./assets/projects/put-k-bashne-mira/img-01.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/put-k-bashne-mira/img-02.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/put-k-bashne-mira/img-03.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/put-k-bashne-mira/img-04.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/put-k-bashne-mira/img-05.webp", aspect: 1.7778 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2026", "2026", "2026")],
    ],
    description: T("Задание — придумать путь к святыне. Я выбрал Дай Хэйва Кинэн То (大平和祈念塔) — 180-метровую белую башню-кенотаф в Тондабаяси, Осака, построенную в 1970 году Церковью Совершенной Свободы в память всех жертв войн, независимо от страны и вероисповедания. Проект — это маршрут как нарратив: подход, смена масштабов и постепенное раскрытие башни.", "The assignment was to invent a path to a shrine. I chose Dai Heiwa Kinen To (大平和祈念塔) — the 180-meter white cenotaph tower in Tondabayashi, Osaka, built in 1970 by the Church of Perfect Liberty in memory of all victims of war, regardless of nation or creed. The project treats the route as a narrative: the approach, shifting scales and the gradual reveal of the tower.", "任务是为一座圣地设计一条朝拜之路。我选择了大平和祈念塔——位于大阪富田林市的180米白色慰灵塔，1970年由完美自由教团建造，悼念不分国界与信仰的所有战争受难者。项目将路径作为叙事：接近、尺度变化与塔的渐次显现。"),
  },
  {
    title: T("Серая лагуна", "Grey Lagoon", "灰色泻湖"),
    year: "2026",
    category: T("Окружение", "Environment", "环境"),
    client: PERSONAL,
    image: "./assets/projects/seraya-laguna/img-01.webp",
    hero: "./assets/projects/seraya-laguna/hero.webp",
    aspect: 1.7778,
    gallery: [
      { type: "img", src: "./assets/projects/seraya-laguna/img-01.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/seraya-laguna/img-02.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/seraya-laguna/img-03.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/seraya-laguna/img-04.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/seraya-laguna/img-05.webp", aspect: 1.7778 },
      { type: "img", src: "./assets/projects/seraya-laguna/img-06.webp", aspect: 1.6306 },
    ],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("2026", "2026", "2026")],
    ],
    description: T("Представить, как выглядит локация из книги «Остров сокровищ» Стивенсона: серая лагуна, тяжёлый воздух перед штилем, приглушённый свет и берег, на котором ничего не происходит — но вот-вот произойдёт.", "An attempt to imagine a location from Stevenson's Treasure Island: a grey lagoon, heavy air before a calm, muted light and a shore where nothing is happening — yet.", "想象斯蒂文森《金银岛》中的场景：灰色的泻湖、风暴前沉闷的空气、柔和的光线与一片表面平静却暗流涌动的海岸。"),
  },
  {
    title: T("Рекреационное пространство университета", "University Recreational Space", "大学休闲空间"),
    year: "…",
    category: T("Архвиз", "Archviz", "建筑可视化"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
  {
    title: T("VR-подвал", "VR Basement", "VR地下室"),
    year: "…",
    category: T("Окружение", "Environment", "环境"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
  {
    title: T("Струйный принтер", "Inkjet Printer", "喷墨打印机"),
    year: "…",
    category: T("Hard Surface", "Hard Surface", "硬表面"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
  {
    title: T("Хоррор игра", "Horror Game", "恐怖游戏"),
    year: "…",
    category: T("Окружение", "Environment", "环境"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
  {
    title: T("Персонаж", "Character", "角色"),
    year: "…",
    category: T("Персонаж", "Character", "角色"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
  {
    title: T("Отель Москва", "Hotel Moscow", "莫斯科酒店"),
    year: "…",
    category: T("Архвиз", "Archviz", "建筑可视化"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
  {
    title: T("Мебель в русском стиле", "Russian-Style Furniture", "俄式家具"),
    year: "…",
    category: T("Предметка", "Product", "产品可视化"),
    client: PERSONAL,
    image: "./assets/quest.webp",
    aspect: 1.3333,
    gallery: [{ type: "img", src: "./assets/quest.webp", aspect: 1.3333 }],
    credits: [
      ["creditRole", ROLE],
      ["creditClient", PERSONAL],
      ["creditYear", T("…", "…", "…")],
    ],
    description: T("??? Проект в разработке. Здесь скоро появятся кадры и описание ???", "??? Work in progress. Frames and a description are coming soon ???", "??? 项目进行中，图片与描述即将上线 ???"),
  },
];

// ---------- Движок ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

let lang = ["ru", "en", "zh"].includes(localStorage.getItem("lang"))
  ? localStorage.getItem("lang")
  : "ru";

const views = $$("[data-view]");
const navBtns = $$(".side-nav [data-nav]");
const detail = $("[data-detail]");
const menuOverlay = $("[data-menu-overlay]");
const listOverlay = $("[data-list-overlay]");

let currentProject = 0;
let detailOpen = false;
let listOpen = false;
let activeView = "projects";

const t = (key) => I18N[lang][key] ?? key;
const L = (obj) => (typeof obj === "object" && obj !== null ? obj[lang] ?? obj.ru : obj);

function fillList(rootSel, items, withDate) {
  const root = $(rootSel);
  root.innerHTML = "";
  items.forEach((item) => {
    const [text, date] = withDate ? item : [item, null];
    const el = document.createElement(withDate ? "div" : "li");
    if (withDate) {
      el.className = "about-item";
      el.innerHTML = `<p>${text}</p>${date ? `<p class="about-date">${date}</p>` : ""}`;
    } else {
      el.textContent = text;
    }
    root.appendChild(el);
  });
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = `${t("brand")} — ${t("cvRole").split("—")[0].trim()}`;
  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  $$("[data-lang]").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  fillList("[data-cv-tasks]", t("cvTasksItems"), false);
  fillList("[data-cv-experience]", t("cvExperienceItems"), true);
  fillList("[data-cv-personal]", t("cvPersonalItems"), false);
  fillList("[data-cv-skills]", t("cvSkillsItems"), false);

  renderGrid();
  renderList();
  renderGallery();
  // счётчик проектов в меню — всегда актуальный
  $("[data-nav-count]").textContent = String(PROJECTS.length).padStart(2, "0");
  if (detailOpen) renderDetail(currentProject);
}

$$("[data-lang]").forEach((btn) =>
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLang();
  })
);

/* ---------- Views ---------- */
function setView(name) {
  if (name === "list") {
    // «Список» открывается поверх «Проектов»
    openList();
    return;
  }
  closeList();
  activeView = name;
  // уходим из галереи — прячем подпись у курсора и сбрасываем наведение
  if (name !== "gallery" && cursorLabel) {
    cursorLabel.hidden = true;
    gHover = null;
  }
  views.forEach((v) => v.classList.toggle("active", v.dataset.view === name));
  navBtns.forEach((b) => b.classList.toggle("active", b.dataset.nav === name));
  closeMenu();
  window.scrollTo(0, 0);
  if (name === "gallery") {
    initGallery();
    requestAnimationFrame(resizeGallery);
  }
}

$$("[data-nav]").forEach((btn) =>
  btn.addEventListener("click", () => {
    if (detailOpen) closeDetail();
    setView(btn.dataset.nav);
  })
);

/* ---------- Mobile menu overlay ---------- */
function openMenu() {
  menuOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  $("[data-menu-close]").focus();
}
function closeMenu() {
  if (menuOverlay.hidden) return;
  menuOverlay.hidden = true;
  if (!detailOpen && !listOpen) document.body.style.overflow = "";
}
$("[data-menu-open]").addEventListener("click", openMenu);
$("[data-menu-close]").addEventListener("click", closeMenu);
$("[data-list-close]").addEventListener("click", () => setView("projects"));

/* ---------- Projects grid ---------- */
const grid = $("[data-projects-grid]");
function renderGrid() {
  grid.innerHTML = "";
  PROJECTS.forEach((p, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.setAttribute("aria-label", `${L(p.title)} — ${L(p.category)}`);
    card.innerHTML = `
      <img src="${p.image}" alt="" loading="${i > 1 ? "lazy" : "eager"}">
      <span class="project-card-info">
        <span class="project-card-title">${L(p.title)}</span>
        <span class="project-card-meta">${p.year} — ${L(p.category)}</span>
      </span>`;
    card.addEventListener("click", () => openDetail(i));
    grid.appendChild(card);
  });
}

/* ---------- List overlay («Список») ---------- */
const indexRows = $("[data-index-rows]");
const listPreview = $("[data-list-preview]");
const listPreviewImg = $("[data-list-preview-img]");
const listPreviewCap = $("[data-list-preview-cap]");

function renderList() {
  indexRows.innerHTML = "";
  PROJECTS.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "index-row";
    row.setAttribute("role", "row");
    row.dataset.project = String(i);
    row.tabIndex = 0;
    row.innerHTML = `<span>${p.year}</span><span>${L(p.title)}</span><span>${L(p.category)}</span>`;
    row.addEventListener("click", () => openDetail(i));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(i);
      }
    });
    row.addEventListener("mouseenter", () => showListPreview(i));
    row.addEventListener("focus", () => showListPreview(i));
    indexRows.appendChild(row);
  });
}

function showListPreview(i) {
  const p = PROJECTS[i];
  listPreviewImg.src = p.image;
  listPreviewCap.textContent = `${L(p.title)} — ${p.year}`;
  listPreview.classList.add("visible");
}

function openList() {
  // базовый вид под оверлеем — всегда «Проекты»
  views.forEach((v) => v.classList.toggle("active", v.dataset.view === "projects"));
  listOverlay.hidden = false;
  listOpen = true;
  document.body.style.overflow = "hidden";
  navBtns.forEach((b) => {
    const isList = b.dataset.nav === "list";
    const isProjects = b.dataset.nav === "projects";
    b.classList.toggle("active", isList || isProjects);
  });
  closeMenu();
  listPreview.classList.remove("visible");
}

function closeList() {
  if (!listOpen) return;
  listOverlay.hidden = true;
  listOpen = false;
  document.body.style.overflow = "";
}

/* ---------- Gallery (Three.js: стеклянные панели в 3D, как unveil.fr) ---------- */
const galleryStage = $("[data-gallery-stage]");
const cursorLabel = $("[data-cursor-label]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let gScroll = 0;
let gTarget = 0;
let gReady = false;
let gRenderer, gScene, gCamera;
let gPanes = [];
let gHover = null;
const gPointer = new THREE.Vector2(-10, -10);
const gRay = new THREE.Raycaster();

// геометрия сцены (в мировых единицах)
// зазор сильно отрицательный: панели лежат плотной стопкой-веером
const G = { area: 6.2, thick: 0.07, gap: -2, angle: 0.42 };
// лента: центр каждой панели вдоль диагонали + полная длина кольца
let gTotal = 0;

const gMod = (v, m) => ((v % m) + m) % m;

function initGallery() {
  if (gReady) return;
  try {
    gRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    galleryStage.classList.add("no-webgl");
    return;
  }
  gReady = true;

  gRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const canvas = gRenderer.domElement;
  canvas.className = "gallery-canvas";
  canvas.setAttribute("aria-hidden", "true");
  galleryStage.prepend(canvas);

  gScene = new THREE.Scene();
  gCamera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
  // взгляд справа сверху: панели видны немного сверху, как пластинки на полке
  gCamera.position.set(0.5, 2.9, 10.8);
  gCamera.lookAt(0, -0.6, 0);

  // мягкий свет: грани панелей получают лёгкую объёмную тень
  gScene.add(new THREE.AmbientLight(0xffffff, 1.15));
  const dir = new THREE.DirectionalLight(0xffffff, 0.7);
  dir.position.set(-3, 4, 6);
  gScene.add(dir);

  const loader = new THREE.TextureLoader();
  let beltPos = 0;

  PROJECTS.forEach((p, i) => {
    // панель точно повторяет формат картинки, площадь у всех одинаковая
    const a = p.aspect || 1.5;
    let h = Math.sqrt(G.area / a);
    let w = h * a;
    if (w > 4.6) { w = 4.6; h = w / a; }
    if (h > 3.4) { h = 3.4; w = h * a; }

    // торцы — тонированное стекло: средний цвет кадра, глянцевый блик,
    // чуть прозрачнее лица (у лица opacity 0.94)
    const edge = new THREE.MeshPhysicalMaterial({
      color: 0xdfdcd6,
      roughness: 0.12,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
      transparent: true,
      opacity: 0.84,
    });
    const tex = loader.load(p.image, (t) => {
      // средний цвет кадра → окраска торцов
      const c = document.createElement("canvas");
      c.width = c.height = 8;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(t.image, 0, 0, 8, 8);
      const d = ctx.getImageData(0, 0, 8, 8).data;
      let r = 0, g = 0, b = 0;
      const n = d.length / 4;
      for (let k = 0; k < d.length; k += 4) { r += d[k]; g += d[k + 1]; b += d[k + 2]; }
      edge.color.setRGB(r / n / 255, g / n / 255, b / n / 255, THREE.SRGBColorSpace);
    });
    tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.MeshLambertMaterial({
      map: tex, transparent: true, opacity: 0.94,
    });
    const pane = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, G.thick),
      [edge, edge, edge, edge, face, edge]
    );
    pane.rotation.set(0.06, -0.5, 0);
    pane.userData = { index: i, pull: 0, belt: beltPos + w / 2 };
    // шаг ленты; для узких (вертикальных) кадров зазор -2 перевернул бы
    // порядок — ограничиваем минимальный шаг долей ширины панели
    beltPos += Math.max(w + G.gap, w * 0.35);
    gScene.add(pane);
    gPanes.push(pane);
  });
  gTotal = beltPos;

  resizeGallery();
  requestAnimationFrame(gLoop);
}

function resizeGallery() {
  if (!gReady) return;
  const w = galleryStage.clientWidth;
  const h = galleryStage.clientHeight;
  gRenderer.setSize(w, h, false);
  gCamera.aspect = w / h;
  // на узких экранах отодвигаем камеру, чтобы панели помещались
  const narrow = gCamera.aspect < 0.85;
  gCamera.position.set(0.5, narrow ? 3.4 : 2.9, narrow ? 14.5 : 10.8);
  gCamera.lookAt(0, -0.6, 0);
  gCamera.updateProjectionMatrix();
}

function gLoop() {
  requestAnimationFrame(gLoop);
  if (activeView !== "gallery" || !gReady) return;

  // плавный, замедленный скролл: движение к цели с инерцией
  gScroll += (gTarget - gScroll) * (reducedMotion ? 1 : 0.085);

  const total = gTotal;
  const cosA = Math.cos(G.angle);
  const sinA = Math.sin(G.angle);

  gPanes.forEach((pane) => {
    // бесконечная лента: позиция по модулю длины набора, центрированная
    const px = gMod(pane.userData.belt - gScroll + total / 2, total) - total / 2;
    pane.userData.px = px;
    // сначала — позиция «на полке», без выдвижения
    pane.position.set(px * cosA, px * sinA, -Math.abs(px) * 0.28);
  });

  // hover определяем по позициям «на полке»:
  // выдвинутая панель не уходит из-под курсора, подсветка не дрожит
  gScene.updateMatrixWorld();
  gRay.setFromCamera(gPointer, gCamera);
  const hit = gRay.intersectObjects(gPanes)[0];
  const newHover = hit ? hit.object : null;
  if (newHover !== gHover) {
    gHover = newHover;
    if (gHover) {
      const p = PROJECTS[gHover.userData.index];
      cursorLabel.textContent = `${L(p.title)} — ${p.year}`;
      cursorLabel.hidden = false;
      // сразу ставим подпись у курсора, даже если мышь неподвижна
      cursorLabel.style.left = `${Math.min(lastMouse.x + 18, window.innerWidth - cursorLabel.offsetWidth - 12)}px`;
      cursorLabel.style.top = `${lastMouse.y + 18}px`;
      galleryStage.style.cursor = "pointer";
    } else {
      cursorLabel.hidden = true;
      galleryStage.style.cursor = "";
    }
  }

  // выдвижение наведённой панели: из стопки вверх, вдоль ленты и к зрителю —
  // но НЕ дальше передней соседки: подъём по z меньше минимального
  // глубинного шага (≈ 0.2), поэтому передняя плитка чуть перекрывает её
 
  // Выдвижение плитки вдоль её собственных локальных осей X и Y
  gPanes.forEach((pane) => {
    const pulled = gHover === pane;
    const k = reducedMotion ? 1 : 0.14;

    pane.userData.pull +=
      ((pulled ? 1 : 0) - pane.userData.pull) * k;

    const pl = pane.userData.pull;

    if (pl > 0.001) {
      // Локальная ось X — вправо по плитке
      const localRight = new THREE.Vector3(1, 0, 0)
        .applyQuaternion(pane.quaternion);

      // Локальная ось Y — вверх по плитке
      const localUp = new THREE.Vector3(0, 1, 0)
        .applyQuaternion(pane.quaternion);

      // Движение только по плоскости плитки
      pane.position.addScaledVector(localRight, 0.8 * pl);
      pane.position.addScaledVector(localUp, 0.15 * pl);
    }
  });


  gRenderer.render(gScene, gCamera);
}

/* название проекта — рядом с курсором */
let lastMouse = { x: 0, y: 0 };
function moveCursorLabel(e) {
  lastMouse = { x: e.clientX, y: e.clientY };
  if (cursorLabel.hidden) return;
  const w = cursorLabel.offsetWidth;
  cursorLabel.style.left = `${Math.min(e.clientX + 18, window.innerWidth - w - 12)}px`;
  cursorLabel.style.top = `${e.clientY + 18}px`;
}
window.addEventListener("mousemove", moveCursorLabel);

galleryStage.addEventListener("pointermove", (e) => {
  const r = galleryStage.getBoundingClientRect();
  gPointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  gPointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
});
galleryStage.addEventListener("pointerleave", () => {
  gPointer.set(-10, -10);
});
galleryStage.addEventListener("click", () => {
  if (gHover) openDetail(gHover.userData.index);
});

galleryStage.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 33 : 1;
    gTarget += (e.deltaY + e.deltaX) * unit * 0.0016;
  },
  { passive: false }
);

let touchX = null;
galleryStage.addEventListener("touchstart", (e) => {
  touchX = e.touches[0].clientX;
});
galleryStage.addEventListener("touchmove", (e) => {
  if (touchX === null) return;
  const dx = touchX - e.touches[0].clientX;
  touchX = e.touches[0].clientX;
  gTarget += dx * 0.006;
});

document.addEventListener("keydown", (e) => {
  if (activeView !== "gallery" || detailOpen || !menuOverlay.hidden || listOpen) return;
  if (e.key === "ArrowRight") gTarget += 1.4;
  else if (e.key === "ArrowLeft") gTarget -= 1.4;
  else return;
});

window.addEventListener("resize", () => {
  if (activeView === "gallery") resizeGallery();
  if (detailOpen) layoutCollage($("[data-detail-gallery]"), currentProject);
});

// applyLang() вызывает renderGallery — сцена не зависит от языка, перерисовка не нужна
function renderGallery() {}

/* ---------- Project detail ---------- */
// стабильный псевдослучайный хэш → [0, 1): коллаж не «прыгает» при перерендере
function hash01(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* коллаж-кладка: кадры шириной ~24–31% (на десктопе в ряду помещается
   минимум три), ряды заходят друг на друга, кадры не касаются.
   Раскладка детерминирована: у каждого проекта стабильный узор. */
function layoutCollage(gallery, projIndex) {
  const figs = [...gallery.children];
  const W = gallery.clientWidth;
  if (!W) return;
  const mobile = W < 720;
  const gutter = Math.max(8, Math.round(W * (mobile ? 0.03 : 0.015)));
  const placed = [];
  figs.forEach((fig, gi) => {
    const aspect = parseFloat(fig.dataset.aspect) || 1.5;
    const isVideo = fig.classList.contains("detail-video");
    let wPct = mobile
      ? 46 + hash01(projIndex * 991 + gi * 37 + 5) * 10   // 46–56%
      : 24 + hash01(projIndex * 991 + gi * 37 + 5) * 7;   // 24–31%
    if (isVideo && !mobile) wPct = 34 + hash01(projIndex * 991 + gi * 37 + 5) * 8;
    const w = Math.round(W * wPct / 100);
    const h = Math.round(w / aspect);
    // x-кандидаты перебираются в детерминированном «случайном» порядке,
    // y наращивается снизу вверх по шагу — первая свободная позиция
    const maxX = W - w;
    const xs = [];
    const SLOTS = 24;
    for (let s = 0; s <= SLOTS; s++) xs.push(maxX * s / SLOTS);
    xs.sort((a, b) =>
      hash01(projIndex * 733 + gi * 51 + Math.round(a)) -
      hash01(projIndex * 733 + gi * 51 + Math.round(b))
    );
    let rect = null;
    for (let y = 0; y < 100000; y += gutter) {
      for (const x of xs) {
        const cand = { x, y, r: x + w, b: y + h };
        const hit = placed.some(q =>
          !(cand.r + gutter <= q.x || q.r + gutter <= cand.x ||
            cand.b + gutter <= q.y || q.b + gutter <= cand.y)
        );
        if (!hit) { rect = cand; break; }
      }
      if (rect) break;
    }
    placed.push(rect);
    fig.style.left = Math.round(rect.x) + "px";
    fig.style.top = Math.round(rect.y) + "px";
    fig.style.width = w + "px";
  });
  const bottom = placed.reduce((m, q) => Math.max(m, q.b), 0);
  gallery.style.height = Math.round(bottom) + "px";
}

/* лайтбокс: кадр из коллажа на весь экран, клик куда угодно — закрыть */
let lightbox = null;
function openLightbox(src) {
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-label", "Полноэкранный просмотр");
    lightbox.innerHTML = "<img alt=''>";
    lightbox.addEventListener("click", closeLightbox);
    document.body.appendChild(lightbox);
  }
  lightbox.querySelector("img").src = src;
  lightbox.classList.add("open");
}
function closeLightbox() {
  if (lightbox) lightbox.classList.remove("open");
}

function renderDetail(i) {
  const p = PROJECTS[i];
  currentProject = i;
  $("[data-detail-hero]").src = p.hero || p.image;
  $("[data-detail-year]").textContent = p.year;
  $("[data-detail-category]").textContent = L(p.category);
  $("[data-detail-title]").textContent = L(p.title);
  $("[data-detail-desc]").textContent = p.description ? L(p.description) : t("descPlaceholder");

  const credits = $("[data-detail-credits]");
  credits.innerHTML = "";
  p.credits.forEach(([labelKey, value]) => {
    const div = document.createElement("div");
    div.className = "credit";
    div.innerHTML = `<dt>${t(labelKey)}</dt><dd>${L(value)}</dd>`;
    credits.appendChild(div);
  });

  const gallery = $("[data-detail-gallery]");
  gallery.innerHTML = "";
  // кадры только собираются в DOM с данными о пропорциях —
  // раскладку (плотная кладка, кадры заходят на «строки» друг друга)
  // считает layoutCollage после отрисовки
  p.gallery.forEach((item) => {
    // главный кадр показан вверху страницы — в коллаже не повторяем
    if (item.type !== "video" && item.src === p.image) return;
    if (item.type === "video") {
      const fig = document.createElement("figure");
      fig.className = "detail-video";
      fig.dataset.aspect = item.aspect || 1.78;
      fig.innerHTML = `
        <video src="${item.src}" poster="${item.poster}" preload="none" loop playsinline style="aspect-ratio:${item.aspect || 1.78}"></video>
        <div class="video-controls">
          <button type="button" class="video-btn video-play" aria-label="Play / Pause">▶</button>
          <button type="button" class="video-btn video-mute" aria-label="Sound on/off">🔊</button>
        </div>`;
      const video = fig.querySelector("video");
      const playBtn = fig.querySelector(".video-play");
      const muteBtn = fig.querySelector(".video-mute");
      playBtn.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
      });
      video.addEventListener("play", () => { playBtn.textContent = "❚❚"; fig.classList.add("playing"); });
      video.addEventListener("pause", () => { playBtn.textContent = "▶"; fig.classList.remove("playing"); });
      muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? "🔇" : "🔊";
      });
      gallery.appendChild(fig);
      return;
    }
    const fig = document.createElement("figure");
    fig.dataset.aspect = item.aspect || 1.5;
    fig.innerHTML = `<img src="${item.src}" alt="" loading="lazy">`;
    fig.addEventListener("click", () => openLightbox(item.src));
    gallery.appendChild(fig);
  });
  // раскладка — на следующем кадре, когда оверлей проекта уже виден
  requestAnimationFrame(() => layoutCollage(gallery, i));

  const next = PROJECTS[(i + 1) % PROJECTS.length];
  $("[data-detail-next-title]").textContent = L(next.title);
}

function openDetail(i) {
  renderDetail(i);
  // пока открыт проект, галерейная подпись у курсора не нужна
  if (cursorLabel) {
    cursorLabel.hidden = true;
    gHover = null;
  }
  detail.hidden = false;
  detailOpen = true;
  document.body.style.overflow = "hidden";
  detail.scrollTop = 0;
  $("[data-detail-close]").focus();
}

function closeDetail() {
  detail.hidden = true;
  detailOpen = false;
  detail.querySelectorAll("video").forEach((v) => v.pause());
  document.body.style.overflow = listOpen || !menuOverlay.hidden ? "hidden" : "";
}

$("[data-detail-close]").addEventListener("click", closeDetail);
$("[data-detail-prev]").addEventListener("click", () => {
  renderDetail((currentProject - 1 + PROJECTS.length) % PROJECTS.length);
  detail.scrollTop = 0;
});
$("[data-detail-next]").addEventListener("click", () => {
  renderDetail((currentProject + 1) % PROJECTS.length);
  detail.scrollTop = 0;
});

/* ---------- Global keys ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (lightbox && lightbox.classList.contains("open")) closeLightbox();
  else if (detailOpen) closeDetail();
  else if (!menuOverlay.hidden) closeMenu();
  else if (listOpen) setView("projects");
});

/* ---------- Init ---------- */
applyLang();
