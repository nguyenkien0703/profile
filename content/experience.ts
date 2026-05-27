export type Experience = {
  company: string;
  role: { en: string; vi: string };
  period: { en: string; vi: string };
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Sava Meta",
    role: { en: "DevOps Engineer", vi: "DevOps Engineer" },
    period: { en: "07/2024 — Present", vi: "07/2024 — Hiện tại" },
    current: true,
  },
  {
    company: "Tri Thuc Moi (TTM)",
    role: {
      en: "Middle Developer & DevOps Engineer",
      vi: "Middle Developer & DevOps Engineer",
    },
    period: { en: "03/2023 — 01/2024", vi: "03/2023 — 01/2024" },
  },
  {
    company: "Tri Thuc Moi (TTM)",
    role: { en: "Backend Developer", vi: "Backend Developer" },
    period: { en: "05/2022 — 03/2023", vi: "05/2022 — 03/2023" },
  },
];

export type Award = {
  date: string;
  title: { en: string; vi: string };
  detail?: { en: string; vi: string };
  image?: string;
};

export const awards: Award[] = [
  {
    date: "05/2025",
    title: {
      en: "DevOps Fresher — DevOpsEdu.vn",
      vi: "DevOps Fresher — DevOpsEdu.vn",
    },
    image: "https://cdn.zono.id.vn/cert/devops_fresher.png",
  },
  {
    date: "05/2025",
    title: {
      en: "DevOps thực tế doanh nghiệp — DevOpsEdu.vn",
      vi: "DevOps thực tế doanh nghiệp — DevOpsEdu.vn",
    },
    image: "https://cdn.zono.id.vn/cert/devops_thuc-te_doanh_nghiep.jpg",
  },
  {
    date: "05/2025",
    title: {
      en: "DevSecOps — DevOpsEdu.vn",
      vi: "DevSecOps — DevOpsEdu.vn",
    },
    image: "https://cdn.zono.id.vn/cert/devsecops.png",
  },
  {
    date: "05/2025",
    title: {
      en: "Kubernetes thực tế (K8s) — DevOpsEdu.vn",
      vi: "Kubernetes thực tế (K8s) — DevOpsEdu.vn",
    },
    image: "https://cdn.zono.id.vn/cert/k8s_thuc_te.png",
  },
  {
    date: "05/2025",
    title: {
      en: "Logging & Monitoring — DevOpsEdu.vn",
      vi: "Logging & Monitoring — DevOpsEdu.vn",
    },
    image: "https://cdn.zono.id.vn/cert/logging.png",
  },
  {
    date: "11/2025",
    title: { en: "TOEIC Certificate", vi: "Chứng chỉ TOEIC" },
    image: "https://cdn.zono.id.vn/cert/toeic.jpg",
  },
  {
    date: "10/2022",
    title: {
      en: "ICPC Training / Competitive Programming",
      vi: "ICPC Training / Competitive Programming",
    },
    image: "https://cdn.zono.id.vn/cert/icpc.jpeg",
  },
  {
    date: "03/2022",
    title: {
      en: "Algorithm & Problem Solving — Samsung",
      vi: "Algorithm & Problem Solving — Samsung",
    },
    image: "https://cdn.zono.id.vn/cert/aglo_samsung.png",
  },
];
