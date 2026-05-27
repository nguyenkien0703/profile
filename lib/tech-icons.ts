/**
 * Mapping from tech name (as displayed) to Simple Icons slug.
 * Reference: https://simpleicons.org/
 * If slug is null → fallback to text-only badge.
 */

const ACCENT = "4ade80"; // matches --accent (no #)

/**
 * Some brands aren't on Simple Icons (often due to trademark restrictions).
 * Fall back to Devicon CDN, which uses brand-native colors.
 */
export const deviconFallback: Record<string, string> = {
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

export const techIconMap: Record<string, string | null> = {
  // Languages
  Java: "openjdk",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Bash: "gnubash",
  Solidity: "solidity",

  // DevOps & Infra
  Docker: "docker",
  Kubernetes: "kubernetes",
  K8S: "kubernetes",
  Helm: "helm",
  ArgoCD: "argo",
  Rancher: "rancher",
  Jenkins: "jenkins",
  "GitHub Actions": "githubactions",
  "Github action": "githubactions",
  "GitLab CI": "gitlab",
  Ansible: "ansible",
  Terraform: "terraform",
  Vault: "vault",
  NGINX: "nginx",
  Harbor: null,

  // Cloud & CDN
  AWS: null, // uses deviconFallback
  Cloudflare: "cloudflare",

  // Observability
  Prometheus: "prometheus",
  Prothemeus: "prometheus",
  Grafana: "grafana",
  "ELK Stack": "elasticsearch",
  OpenTelemetry: "opentelemetry",
  Signoz: null,

  // Backend
  "Node.js": "nodedotjs",
  NestJS: "nestjs",
  Fastify: "fastify",
  "Spring Framework": "spring",
  Spring: "spring",
  TypeORM: "typeorm",
  Prisma: "prisma",
  Mongoose: "mongoose",
  Kafka: "apachekafka",
  "Bull Queue": null,
  "Socket.io": "socketdotio",
  GraphQL: "graphql",

  // Frontend
  React: "react",
  "Next.js": "nextdotjs",
  "Redux Toolkit": "redux",
  "Redux Thunk": "redux",
  "Tailwind CSS": "tailwindcss",
  "Material UI": "mui",
  "Ant Design": "antdesign",
  "Web3.js": "web3dotjs",
  "Ethers.js": "ethers",
  Wagmi: null,
  RainbowKit: null,
  Subgraphs: "thegraph",

  // Database
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Redis: "redis",

  // Other
  Linux: "linux",
  Networking: null,
  Security: null,
  DevSecOps: null,
  Gitleaks: null,
};

export type IconSource = {
  url: string;
  /** Devicon SVGs ship with brand colors; tint them via CSS filter so they
   * match the accent palette. Simple Icons already accept a color in the URL. */
  needsTint: boolean;
};

export function getIcon(tech: string): IconSource | null {
  const slug = techIconMap[tech];
  if (slug) {
    return {
      url: `https://cdn.simpleicons.org/${slug}/${ACCENT}`,
      needsTint: false,
    };
  }
  const fallback = deviconFallback[tech];
  if (fallback) {
    return { url: fallback, needsTint: true };
  }
  return null;
}
