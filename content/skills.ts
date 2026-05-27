export type SkillGroup = {
  key:
    | "languages"
    | "devops"
    | "cloud"
    | "observability"
    | "backend"
    | "frontend"
    | "database"
    | "other";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: "languages",
    items: ["Java", "JavaScript", "TypeScript", "Bash", "Solidity"],
  },
  {
    key: "devops",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Rancher",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Ansible",
      "Terraform",
      "Vault",
      "NGINX",
    ],
  },
  {
    key: "cloud",
    items: ["AWS", "Cloudflare", "Harbor"],
  },
  {
    key: "observability",
    items: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "OpenTelemetry",
      "Signoz",
    ],
  },
  {
    key: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    key: "other",
    items: ["Linux", "Networking", "Security", "DevSecOps", "Gitleaks"],
  },
];
