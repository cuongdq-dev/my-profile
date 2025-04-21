export const languages = {
  en: "English",
  vi: "Việt Nam",
};

export const defaultLang = "vi";

export type UiKeys =
  | "nav.home"
  | "nav.about_us"
  | "nav.project"
  | "nav.service"
  | "nav.portfolio"
  | "nav.contact_us"
  | "nav.experience"
  //
  | "header.sub_title"
  | "header.title"
  | "header.description"
  | "header.sub_description"
  | "header.button"
  //
  | "about.sub_title"
  | "about.main_title"
  | "about.description_title"
  | "about.skill.fe_script"
  | "about.skill.fe_language"
  | "about.skill.be_language"
  | "about.skill.docker"
  | "about.skill.database"
  //
  | "contact.action_title"
  | "contact.description_title"
  | "contact.hire_me_btn"
  //
  | "counter.project_done"
  | "counter.active_project"
  | "counter.years_experience"
  | "counter.satisfied_clients"
  //
  | "experience.sub_title"
  | "experience.main_title"
  | "experience.items"

  //
  | "footer.credit"
  //
  | "project.sub_title"
  | "project.main_title"
  | "project.button"
  | "project.items"
  | "project.team_size"
  | "project.role"
  //
  | "services.sub_title"
  | "services.main_title"
  | "services.frontend.title"
  | "services.frontend.description"
  | "services.backend.title"
  | "services.backend.description"
  | "services.fullstack.title"
  | "services.fullstack.description"
  | "services.api.title"
  | "services.api.description"
  | "services.database.title"
  | "services.database.description"
  | "services.devops.title"
  | "services.devops.description"
  | "x";
//
//

export const ui: Record<string, Record<UiKeys, any>> = {
  en: {
    "nav.about_us": "About Us",
    "nav.home": "Home",
    "nav.contact_us": "Contact Us",
    "nav.portfolio": "Portfolio",
    "nav.service": "Service",
    "nav.experience": "Experience",
    "nav.project": "Projects",

    "header.sub_title": "Hello, I'm Cường",
    "header.title": "Bringing Ideas to Life with Code & Creativity",
    "header.description":
      "As a passionate Full-Stack Developer, I craft scalable, high-performance applications that solve real-world problems.",
    "header.sub_description":
      "With expertise in JavaScript, React.js, TypeScript, Node.js, and more, I specialize in building seamless digital experiences.",
    "header.button": "Let's Work Together",

    "about.sub_title": "About",
    "about.main_title": "Why You Here Me",
    "about.description_title": `I'm a full-stack developer specializing in building scalable web
                    applications using modern technologies. With expertise in
                    JavaScript, React.js, TypeScript, Node.js, and NestJS, I can deliver
                    high-quality solutions tailored to your business needs. I'm
                    passionate about clean code, efficient architectures, and
                    user-friendly interfaces.`,
    "about.skill.fe_script": "TypeScript / JavaScript",
    "about.skill.fe_language": "React.js / Next.js",
    "about.skill.be_language": "Node.js / Nest.js",
    "about.skill.database": "Database (PostgreSQL, MongoDB",
    "about.skill.docker": "Docker & CI/CD",

    "contact.action_title": "Let's work together!",
    "contact.description_title":
      "Looking for a reliable developer? I’m ready to bring your ideas to life. Let’s build something amazing together!",
    "contact.hire_me_btn": "Hire Me",

    "counter.project_done": "Project Done",
    "counter.satisfied_clients": "Satisfied Clients",
    "counter.active_project": "Active Projects",
    "counter.years_experience": "Years Experience",
    "experience.main_title": "Experience",
    "experience.sub_title": "Work Experience",
    "footer.credit": "Designed and Developed by",

    "project.button": "All Works",
    "project.main_title": "Latest Projects",
    "project.sub_title": "Portfolio",
    "project.team_size": "Team Size",
    "project.role": "Role",

    "services.sub_title": "Services",
    "services.main_title": "Service I Provide",
    "services.frontend.title": "Frontend Development",
    "services.frontend.description":
      "I build responsive, high-performance web applications using React.js, Next.js, and TypeScript.",
    "services.backend.title": "Backend Development",
    "services.backend.description":
      "Creating scalable backend solutions with Node.js, NestJS, RESTful APIs, and database integration.",
    "services.fullstack.title": "Full-stack Development",
    "services.fullstack.description":
      "Combining frontend and backend expertise to deliver complete and seamless web solutions.",
    "services.api.title": "API Development & Integration",
    "services.api.description":
      "Design and develop reliable RESTful APIs and GraphQL for seamless system integration.",
    "services.database.title": "Database Management",
    "services.database.description":
      "Experienced in designing, implementing, and managing PostgreSQL, MongoDB, and Redis databases.",
    "services.devops.title": "DevOps & Deployment",
    "services.devops.description":
      "Containerize applications with Docker, orchestrate deployments, and manage CI/CD workflows.",
    //

    "experience.items": [
      {
        title: "Hackathon Programmers Contest at GDG DevFest MienTrung 2017",
        company: "GDG DevFest MienTrung 2017",
        date: "March 2017 - August 2017",
        description:
          "I participated in the Hackathon 2017 contest and learned valuable lessons such as teamwork, using Trello for task management, and GitHub for effective source control and version management.",
        number: "01",
        order: "last",
        delay: "0.2s",
      },
      {
        title: "Scrum process cover",
        company: "Axon Active",
        date: "March 2019 - August 2019",
        description:
          "Participated in Axon Active's Scrum Agile training course, significantly enhancing my presentation skills, teamwork efficiency, and understanding of agile project management methodologies.",
        number: "02",
        order: "first",
        delay: "0.4s",
      },
      {
        title: "HACKATHON Programmers Contest at GDG DevFest MienTrung 2019",
        company: "GDG DevFest MienTrung 2019",
        date: "Oct 11 - Oct 13, 2019",
        description:
          "Actively participated in the 2019 Hackathon, enhancing my collaborative abilities, rapid development skills, and proficiency in agile project management and communication.",
        number: "03",
        delay: "0.6s",
        order: "last",
      },
      {
        title: "University Assignments / Projects",
        company: "Duy Tan University",
        date: "Oct 2016 - May 2019",
        description:
          "During my university studies, I gained experience through assignments/projects using ASP.NET, JAVA, C++, C#, SQL, PHP, and led several teams.",
        number: "04",
        delay: "0.8s",
        order: "first",
      },
      {
        title: "Internship at HT Active",
        company: "HT Active",
        date: "Oct 2019 - Dec 2019",
        description:
          "Completed a frontend internship focused on Vue.js, gaining practical development experience and mastering collaboration and GitHub.",
        number: "05",
        order: "last",
        delay: "1s",
      },
      {
        title: "Frontend Internship",
        company: "Minori Technology",
        date: "Feb 2020 - May 2020",
        description:
          "Frontend internship involving ReactJS, JavaScript, HTML/CSS, and collaborative development practices.",
        number: "06",
        delay: "1.2s",
        order: "first",
      },
      {
        title: "Frontend Developer & Team Leader",
        company: "Minori Technology",
        date: "June 2020 - 2022",
        description:
          "Official Frontend Developer leading several projects, managing team activities, timelines, and quality assurance.",
        number: "07",
        delay: "1.4s",
        order: "last",
      },
      {
        title: "Technical Leader (FE, BE, DevOps)",
        company: "Meta Technology",
        date: "2022 - Present",
        description:
          "Currently managing and mentoring technical teams across frontend, backend, and DevOps disciplines, with responsibility for overall project delivery and CI/CD pipeline implementation.",
        number: "08",
        delay: "1.6s",
        order: "first",
      },
      {
        title: "Remote / Freelance Developer",
        company: "Freelancer",
        date: "2024 - Present",
        description:
          "Engaged in various freelance and remote projects, developing custom web applications, admin systems, and SEO-focused websites. Responsibilities include project management, client communication, and technical consulting.",
        number: "09",
        delay: "1.8s",
        order: "last",
      },
    ],

    "project.items": [
      {
        title: "Company Internal Management System",
        image: "/assets/images/project-company-admin.jpg",
        category: "Management System",
        description:
          "A system that supports attendance tracking, task assignment, internal messaging, and work progress monitoring.",
        link: "#",
        teamSize: 4,
        role: "Leader & Developer",
      },
      {
        title: "Transportation Service",
        image: "/assets/images/project-logistic.jpg",
        category: "Transportation & Logistics",
        description:
          "A system for managing transportation, order placement, cost calculation, and journey tracking.",
        link: "#",
        teamSize: 8,
        role: "Developer",
      },
      {
        title: "Eztub Media - YouTube Video Upload System",
        image: "/assets/images/project-ez.jpg",
        category: "Content Automation",
        description:
          "Batch system for automatic video retrieval, distribution, and livestreaming to YouTube.",
        link: "#",
        teamSize: 4,
        role: "Leader & Developer",
      },
      {
        title: "KOL/KOC Information Management",
        image: "/assets/images/project-kol-landing.jpg",
        category: "Influencer Marketing",
        description:
          "A system for managing and connecting influencers with clients, tracking campaign performance.",
        link: "#",
        teamSize: 1,
        role: "Leader & Developer",
      },
      {
        title: "Crawl Hot Trending",
        image: "/assets/images/project-crawl-trending.jpg",
        category: "Data & AI",
        description:
          "An automated system that collects trending information from multiple sources.",
        link: "#",
        teamSize: 2,
        role: "Leader & Developer",
      },
      {
        title: "Fixel - Service Connection Platform",
        image: "/assets/images/project-fixel.jpg",
        category: "Repair Services",
        description:
          "Includes two React Native apps (Fixel, Worker), an admin website, and a landing page to connect customers with repair technicians.",
        link: "#",
        teamSize: 4,
        role: "Leader & Developer",
      },
      {
        title: "Remote Computer Power Management System",
        image: "/assets/images/project-meta-pc.jpg",
        category: "System Management",
        description:
          "A system to remotely manage and control the power status of computers to save electricity.",
        link: "#",
        teamSize: 2,
        role: "Developer",
      },
    ],
    x: "",
  },
  vi: {
    "nav.about_us": "Về chúng tôi",
    "nav.home": "Trang chủ",
    "nav.contact_us": "Liên hệ",
    "nav.portfolio": "Dự án",
    "nav.service": "Dịch vụ",
    "nav.experience": "Kinh nghiệm",
    "nav.project": "Dự án",

    "header.sub_title": "Xin chào, tôi là Cường",
    "header.title": "Biến ý tưởng thành sản phẩm với Code & Sáng tạo",
    "header.description":
      "Là một lập trình viên Full-Stack đam mê công nghệ, tôi xây dựng các ứng dụng mạnh mẽ, tối ưu và giải quyết vấn đề thực tiễn.",
    "header.sub_description":
      "Với kinh nghiệm về JavaScript, React.js, TypeScript, Node.js và nhiều công nghệ khác, tôi tập trung vào việc tạo ra trải nghiệm số hoàn hảo.",
    "header.button": "Hợp tác ngay",

    "about.sub_title": "Giới thiệu",
    "about.main_title": "Vì sao bạn chọn tôi?",
    "about.description_title":
      "Tôi là một Full-stack Developer chuyên xây dựng các ứng dụng web mở rộng bằng công nghệ hiện đại. Với kinh nghiệm về JavaScript, React.js, TypeScript, Node.js và NestJS, tôi có thể cung cấp các giải pháp chất lượng cao phù hợp với nhu cầu doanh nghiệp. Tôi đam mê viết code sạch, kiến trúc hệ thống hiệu quả và giao diện thân thiện với người dùng.",
    "about.skill.fe_script": "TypeScript / JavaScript",
    "about.skill.fe_language": "React.js / Next.js",
    "about.skill.be_language": "Node.js / Nest.js",
    "about.skill.database": "Cơ sở dữ liệu (PostgreSQL, MongoDB)",
    "about.skill.docker": "Docker & CI/CD",

    "contact.action_title": "Hãy cùng hợp tác!",
    "contact.description_title":
      "Bạn đang tìm một lập trình viên có kinh nghiệm? Tôi có thể giúp biến ý tưởng của bạn thành hiện thực. Hãy cùng nhau tạo ra điều khác biệt!",
    "contact.hire_me_btn": "Cộng tác ngay",

    "counter.project_done": "Dự án hoàn thành",
    "counter.satisfied_clients": "Khách hàng hài lòng",
    "counter.active_project": "Dự án đang chạy",
    "counter.years_experience": "Năm kinh nghiệm",

    "experience.main_title": "Kinh nghiệm làm việc",
    "experience.sub_title": "Quá trình làm việc",

    "footer.credit": "Thiết kế và phát triển bởi",

    "project.button": "Tất cả dự án",
    "project.main_title": "Dự án mới nhất",
    "project.sub_title": "Danh mục dự án",
    "project.team_size": "Quy mô nhóm",
    "project.role": "Vai trò",

    "services.sub_title": "Dịch vụ",
    "services.main_title": "Dịch vụ tôi cung cấp",
    "services.frontend.title": "Phát triển Frontend",
    "services.frontend.description":
      "Xây dựng ứng dụng web tối ưu, hiệu suất cao bằng React.js, Next.js và TypeScript.",
    "services.backend.title": "Phát triển Backend",
    "services.backend.description":
      "Tạo giải pháp backend mở rộng với Node.js, NestJS, RESTful APIs và tích hợp cơ sở dữ liệu.",
    "services.fullstack.title": "Phát triển Full-stack",
    "services.fullstack.description":
      "Kết hợp cả frontend và backend để xây dựng giải pháp web hoàn chỉnh.",
    "services.api.title": "Phát triển & tích hợp API",
    "services.api.description":
      "Thiết kế và phát triển API RESTful, GraphQL để tích hợp hệ thống liền mạch.",
    "services.database.title": "Quản lý cơ sở dữ liệu",
    "services.database.description":
      "Kinh nghiệm thiết kế, triển khai và quản lý cơ sở dữ liệu PostgreSQL, MongoDB và Redis.",
    "services.devops.title": "DevOps & Triển khai",
    "services.devops.description":
      "Container hóa ứng dụng bằng Docker, triển khai hệ thống và quản lý CI/CD.",

    "experience.items": [
      {
        title: "Cuộc thi lập trình Hackathon tại GDG DevFest Miền Trung 2017",
        company: "GDG DevFest Miền Trung 2017",
        date: "Tháng 3, 2017 - Tháng 8, 2017",
        description:
          "Tham gia cuộc thi Hackathon 2017 và học được nhiều bài học quý giá như làm việc nhóm, quản lý công việc bằng Trello, quản lý source code bằng GitHub.",
        number: "01",
        order: "last",
        delay: "0.2s",
      },
      {
        title: "Khoá đào tạo Scrum Agile",
        company: "Axon Active",
        date: "Tháng 3, 2019 - Tháng 8, 2019",
        description:
          "Tham gia khóa đào tạo Scrum Agile của Axon Active, nâng cao kỹ năng trình bày, làm việc nhóm và quản lý dự án Agile.",
        number: "02",
        order: "first",
        delay: "0.4s",
      },
      {
        title: "Cuộc thi lập trình Hackathon tại GDG DevFest Miền Trung 2019",
        company: "GDG DevFest Miền Trung 2019",
        date: "11/10 - 13/10, 2019",
        description:
          "Tham gia cuộc thi Hackathon 2019, nâng cao khả năng làm việc nhóm, phát triển ứng dụng nhanh chóng, giao tiếp và quản lý dự án theo mô hình Agile.",
        number: "03",
        delay: "0.6s",
        order: "last",
      },
      {
        title: "Dự án và bài tập lớn tại Đại học",
        company: "Đại học Duy Tân",
        date: "Tháng 10, 2016 - Tháng 5, 2019",
        description:
          "Thực hiện nhiều dự án và bài tập lớn với công nghệ ASP.NET, JAVA, C++, C#, SQL, PHP, và nhiều lần đảm nhiệm vai trò leader.",
        number: "04",
        delay: "0.8s",
        order: "first",
      },
      {
        title: "Thực tập Frontend tại HT Active",
        company: "HT Active",
        date: "Tháng 10, 2019 - Tháng 12, 2019",
        description:
          "Hoàn thành thực tập Frontend chuyên sâu về Vue.js, cải thiện kỹ năng làm việc nhóm, triển khai dự án và sử dụng GitHub hiệu quả.",
        number: "05",
        order: "last",
        delay: "1s",
      },
      {
        title: "Thực tập Frontend tại Minori Technology",
        company: "Minori Technology",
        date: "Tháng 2, 2020 - Tháng 5, 2020",
        description:
          "Thực tập với ReactJS, JavaScript, HTML/CSS và các phương pháp phát triển phần mềm theo nhóm.",
        number: "06",
        delay: "1.2s",
        order: "first",
      },
      {
        title: "Frontend Developer & Team Leader",
        company: "Minori Technology",
        date: "Tháng 6, 2020 - 2022",
        description:
          "Làm việc với vai trò Frontend Developer chính thức và leader nhóm, quản lý dự án, phân công công việc, đảm bảo chất lượng sản phẩm.",
        number: "07",
        delay: "1.4s",
        order: "last",
      },
      {
        title: "Technical Leader (FE, BE, DevOps)",
        company: "Meta Technology",
        date: "2022 - Hiện tại",
        description:
          "Phụ trách và hướng dẫn đội ngũ kỹ thuật trong các lĩnh vực frontend, backend và DevOps. Xây dựng kiến trúc hệ thống và triển khai CI/CD.",
        number: "08",
        delay: "1.6s",
        order: "first",
      },
      {
        title: "Remote / Freelance Developer",
        company: "Freelancer",
        date: "2024 - Hiện tại",
        description:
          "Làm việc trong nhiều dự án freelance và remote, phát triển ứng dụng web tùy chỉnh, hệ thống quản trị admin và các trang web chuẩn SEO.",
        number: "09",
        delay: "1.8s",
        order: "last",
      },
    ],
    "project.items": [
      {
        title: "Hệ thống quản lý nội bộ công ty",
        image: "/assets/images/project-company-admin.jpg",
        category: "Hệ thống quản lý",
        description:
          "Quản lý nhân sự, chấm công, giao task, nhắn tin nội bộ và theo dõi tiến độ công việc.",
        link: "#",
        teamSize: 4,
        role: "Leader & Developer",
      },
      {
        title: "Dịch vụ vận tải",
        image: "/assets/images/project-logistic.jpg",
        category: "Vận tải & Logistics",
        description:
          "Hệ thống đặt đơn, theo dõi hành trình và tính toán chi phí vận chuyển.",
        link: "#",
        teamSize: 8,
        role: "Developer",
      },
      {
        title: "Eztub Media - Hệ thống đăng video YouTube",
        image: "/assets/images/project-ez.jpg",
        category: "Tự động hóa nội dung",
        description:
          "Hệ thống tự động lấy video, chỉnh sửa và livestream lên YouTube.",
        link: "#",
        teamSize: 4,
        role: "Leader & Developer",
      },
      {
        title: "Hệ thống quản lý KOL/KOC",
        image: "/assets/images/project-kol-landing.jpg",
        category: "Influencer Marketing",
        teamSize: 1,
        role: "Leader & Developer",
        description:
          "Kết nối KOL/KOC với nhãn hàng, theo dõi hiệu suất chiến dịch quảng cáo.",
        link: "#",
      },
      {
        title: "Crawl hot trending",
        image: "/assets/images/project-crawl-trending.jpg",
        category: "Dữ liệu & AI",
        teamSize: 2,
        role: "Leader & Developer",
        description: "Thu thập dữ liệu trending từ nhiều nguồn khác nhau.",
        link: "#",
      },
      {
        title: "Fixel - Hệ thống kết nối dịch vụ sửa chữa",
        image: "/assets/images/project-fixel.jpg",
        category: "Dịch vụ sửa chữa",
        teamSize: 4,
        role: "Leader & Developer",
        description:
          "Ứng dụng kết nối khách hàng với thợ sửa chữa, hỗ trợ qua web & mobile.",
        link: "#",
      },
      {
        title: "Hệ thống quản lý bật/tắt máy tính từ xa",
        image: "/assets/images/project-meta-pc.jpg",
        teamSize: 2,
        role: "Developer",
        category: "Quản lý hệ thống",
        description:
          "Quản lý và điều khiển trạng thái bật/tắt máy tính từ xa, tiết kiệm điện năng.",
        link: "#",
      },
    ],
    x: "",
  },
};

export function getTranslation(key: UiKeys): string {
  return key;
}
