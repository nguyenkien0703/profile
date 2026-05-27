export type ProjectStatus = "live" | "dead" | "internal";

export type Project = {
  id: string;
  name: string;
  role: { en: string; vi: string };
  period?: string;
  team?: number;
  description: { en: string; vi: string };
  highlights: { en: string[]; vi: string[] };
  tech: string[];
  links?: { label: string; href: string; status?: ProjectStatus }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "lumiai",
    name: "LumiAI",
    role: { en: "DevOps & SRE", vi: "DevOps & SRE" },
    team: 10,
    description: {
      en: "Internal AI-powered conversational platform with knowledge base retrieval and contextual chat history. Single AI agent with configurable workflows integrating LLMs with enterprise data.",
      vi: "Nền tảng AI hội thoại nội bộ với knowledge base retrieval và quản lý lịch sử chat ngữ cảnh. AI agent đơn lẻ có workflow cấu hình được, tích hợp LLM với dữ liệu doanh nghiệp.",
    },
    highlights: {
      en: [
        "Implemented PR quality gate: LoC checks, Gitleaks secret scanning, Slack alerts on violations",
        "Built observability stack: custom metrics (throughput, p50/p95/p99, error rate), TTFT tracing with OpenTelemetry → Signoz",
        "Configured Dependabot with custom labels and auto-trigger CI on dependency PRs",
        "Researched & benchmarked local LLM candidates (GPT-OSS-20B, GLM-4.7-flash, Qwen3-32B-AWQ) for self-hosted integration",
      ],
      vi: [
        "Triển khai PR quality gate: LoC checks, Gitleaks secret scanning, Slack alerts khi vi phạm",
        "Xây dựng observability stack: custom metrics (throughput, p50/p95/p99, error rate), TTFT tracing với OpenTelemetry → Signoz",
        "Cấu hình Dependabot với custom labels, auto-trigger CI cho PR dependency",
        "Research và benchmark local LLM candidates (GPT-OSS-20B, GLM-4.7-flash, Qwen3-32B-AWQ) để self-host",
      ],
    },
    tech: [
      "Docker",
      "GitHub Actions",
      "OpenTelemetry",
      "Signoz",
      "Cloudflare",
      "Grafana",
      "Prometheus",
    ],
    links: [
      {
        label: "lumilink.savameta.com",
        href: "https://lumilink.savameta.com/",
        status: "live",
      },
      {
        label: "Staging",
        href: "https://lumilink-staging.defikit.net/",
        status: "live",
      },
    ],
    featured: true,
  },
  {
    id: "devops-platform",
    name: "DevOps Platform",
    role: { en: "DevOps Engineer", vi: "DevOps Engineer" },
    period: "08/2023 - Present",
    description: {
      en: "Practices, tools, and cultural philosophy that automate and integrate processes between software development and IT teams across multiple production systems.",
      vi: "Practices, tools, và văn hoá tự động hoá, tích hợp quy trình giữa development và IT teams trên nhiều hệ thống production.",
    },
    highlights: {
      en: [
        "Deploy and monitor services, architecture review for security",
        "Ensure stable performance, support developers with infrastructure solutions",
        "Investigate infrastructure costs, optimize and reduce spending",
        "Automate and accelerate development & delivery phases",
        "SLA-based support for Dev and Users",
      ],
      vi: [
        "Deploy và monitor services, review architecture cho security",
        "Đảm bảo performance ổn định, support developers với infra solutions",
        "Investigate chi phí hạ tầng, tối ưu và giảm cost",
        "Tự động hoá và đẩy nhanh giai đoạn development & delivery",
        "SLA-based support cho Dev và Users",
      ],
    },
    tech: [
      "Kubernetes",
      "Helm",
      "Docker",
      "ArgoCD",
      "Rancher",
      "Jenkins",
      "Ansible",
      "Terraform",
      "Vault",
      "ELK",
      "Grafana",
      "Prometheus",
      "AWS",
      "Cloudflare",
    ],
    featured: true,
  },
  {
    id: "gemsfun",
    name: "Gemsfun",
    role: { en: "Fullstack Developer & DevOps", vi: "Fullstack & DevOps" },
    team: 5,
    description: {
      en: "Dynamic platform for creating and trading SPL tokens on Solana blockchain. Features real-time trading analytics, livestream battles, and an AI agent for personalized user support.",
      vi: "Nền tảng tạo và giao dịch SPL tokens trên Solana blockchain. Có real-time trading analytics, livestream battles và AI agent hỗ trợ user.",
    },
    highlights: {
      en: [
        "Integrated Cloudflare Realtime Kit for livestream and battle livestream",
        "Built lottery system: deposit, spin, withdraw + token buy/sell features",
        "Developed cronjob monitoring Solana token creation events, syncing to DB",
        "Kafka for message handling, Bull Queue for task processing",
        "APIs for login, thread creation, token tracking, follow/unfollow system",
      ],
      vi: [
        "Tích hợp Cloudflare Realtime Kit cho livestream và battle livestream",
        "Xây hệ thống lottery: deposit, spin, withdraw + chức năng buy/sell token",
        "Phát triển cronjob monitor sự kiện tạo token trên Solana, sync về DB",
        "Kafka cho message handling, Bull Queue cho task processing",
        "API cho login, thread, token tracking, follow/unfollow system",
      ],
    },
    tech: [
      "Next.js",
      "NestJS",
      "Kafka",
      "Bull Queue",
      "MongoDB",
      "Redis",
      "AWS",
      "K8S",
      "Docker",
      "ArgoCD",
      "Harbor",
    ],
    links: [
      { label: "gems.fun", href: "https://gems.fun", status: "dead" },
      {
        label: "Staging",
        href: "https://staging.gems.fun/",
        status: "live",
      },
      {
        label: "X",
        href: "https://x.com/gemsdotfun",
        status: "live",
      },
    ],
    featured: true,
  },
  {
    id: "rocket-launch",
    name: "Rocket Launch",
    role: { en: "Fullstack Developer & DevOps", vi: "Fullstack & DevOps" },
    team: 4,
    description: {
      en: "Platform for instant token creation and trading on EVM, eliminating initial liquidity seeding. Intuitive interface for token management with AI agent support.",
      vi: "Nền tảng tạo và trading token tức thì trên EVM, loại bỏ nhu cầu seed liquidity ban đầu. Giao diện đơn giản cho quản lý token kèm AI agent.",
    },
    highlights: {
      en: [
        "Built all website features: buy/sell bond, estimate bond, daily task, claim NFT",
        "Telegram bot with grammy: balance, wallets, import/create wallet, addLiquidity",
        "OAuth2 login: Telegram, Discord, X",
        "Leaderboard API + UI: token points by week/month/day, trust points calculation",
        "AI agent auto-created on token creation for user chat support",
      ],
      vi: [
        "Xây tất cả tính năng web: buy/sell bond, estimate bond, daily task, claim NFT",
        "Telegram bot dùng grammy: balance, wallets, import/create wallet, addLiquidity",
        "OAuth2 login: Telegram, Discord, X",
        "Leaderboard API + UI: token points theo week/month/day, trust points calculation",
        "AI agent tự động tạo khi tạo token, chat support cho user",
      ],
    },
    tech: [
      "Next.js",
      "Fastify",
      "Prisma",
      "MySQL",
      "Wagmi",
      "RainbowKit",
      "Subgraphs",
      "Docker",
      "K8S",
      "AWS",
      "ArgoCD",
      "Cloudflare",
    ],
    links: [
      {
        label: "app.rocketlaunch.fun",
        href: "https://app.rocketlaunch.fun/en",
        status: "live",
      },
      {
        label: "Telegram Bot",
        href: "https://t.me/MotherOfTokensBot",
        status: "live",
      },
      {
        label: "X",
        href: "https://x.com/rocketlaunchfun",
        status: "live",
      },
    ],
    featured: true,
  },
  {
    id: "defikit-airdrop",
    name: "Defikit Bot Airdrop",
    role: { en: "Backend Developer & DevOps", vi: "Backend & DevOps" },
    team: 3,
    description: {
      en: "Telegram bot with auto buy/sell token, manual buy/sell, wallet management, auto token creation, faucet — automating common DeFi tasks for users.",
      vi: "Telegram bot với auto buy/sell token, manual buy/sell, quản lý wallet, auto tạo token, faucet — tự động hoá các task DeFi cho user.",
    },
    highlights: {
      en: [
        "Built bot with grammy: create/import wallet, wallet groups, faucet, transfer",
        "Auto buy/sell token features, manual buy/sell, multi-chain support",
        "Auto-create tokens on Rocketlaunch from bot interface",
        "Deploy and monitor server, support team members",
      ],
      vi: [
        "Xây bot với grammy: create/import wallet, wallet groups, faucet, transfer",
        "Auto buy/sell token, manual buy/sell, hỗ trợ multi-chain",
        "Tự động tạo token trên Rocketlaunch từ bot",
        "Deploy và monitor server, support thành viên project",
      ],
    },
    tech: [
      "Node.js",
      "Prisma",
      "MySQL",
      "GraphQL",
      "Web3.js",
      "Ethers.js",
      "Docker",
      "K8S",
      "AWS",
      "ArgoCD",
    ],
    links: [
      {
        label: "MMAgentBot",
        href: "https://t.me/MMAgentbot",
        status: "live",
      },
    ],
  },
  {
    id: "cocokitene",
    name: "Cocokitene",
    role: { en: "Fullstack Developer & DevOps", vi: "Fullstack & DevOps" },
    team: 5,
    description: {
      en: "Web platform helping shareholders hold meetings, discuss and vote on proposals with their shares. Meeting results are committed to the blockchain.",
      vi: "Nền tảng web giúp cổ đông tổ chức họp, thảo luận và vote proposal bằng cổ phần. Kết quả họp được lưu lên blockchain.",
    },
    highlights: {
      en: [
        "Coded Upgradeable Smart Contracts for phase 2",
        "Researched core concepts: Proof of Stake Authority, fullnode, validator",
        "Built monorepo backend, APIs for meetings, proposals, participants",
        "Crawler module for blockchain data, cronjob pushing data to chain",
        "WebSocket for in-meeting chat between members",
      ],
      vi: [
        "Code Upgradeable Smart Contracts cho phase 2",
        "Research core concepts: Proof of Stake Authority, fullnode, validator",
        "Xây backend monorepo, API cho meeting, proposal, participant",
        "Crawler module cho dữ liệu blockchain, cronjob đẩy data lên chain",
        "WebSocket cho chat in-meeting giữa các thành viên",
      ],
    },
    tech: [
      "NestJS",
      "Next.js",
      "TypeORM",
      "MySQL",
      "Socket.io",
      "Solidity",
      "AWS",
      "Docker",
      "Harbor",
      "Cloudflare",
    ],
    links: [
      {
        label: "demo.cocokitene.com",
        href: "https://demo.cocokitene.com/en",
        status: "live",
      },
    ],
  },
  {
    id: "rpams",
    name: "Rpams",
    role: { en: "Fullstack Developer", vi: "Fullstack Developer" },
    team: 10,
    description: {
      en: "Robot's working schedule platform — helps work proceed more smoothly with sync logs, caching, scheduled jobs, and a fresh Next.js App Router frontend.",
      vi: "Nền tảng lịch làm việc cho robot — giúp công việc trôi chảy hơn với sync log, cache, scheduled jobs và FE Next.js App Router xây từ đầu.",
    },
    highlights: {
      en: [
        "Built new features: sync log, Redis cache, scheduled jobs, feature APIs",
        "Built exception handler, query specification config",
        "Built frontend from scratch using App Router",
      ],
      vi: [
        "Xây tính năng mới: sync log, Redis cache, scheduled jobs, API features",
        "Xây exception handler, config query specification",
        "Xây frontend from scratch dùng App Router",
      ],
    },
    tech: [
      "Next.js",
      "Java",
      "Spring",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
    ],
  },
];
