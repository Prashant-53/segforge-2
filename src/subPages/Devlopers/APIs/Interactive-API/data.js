import {
  FileCode2,
  BookOpen,
  PlayCircle,
  ShieldCheck,
  Braces,
  Search,
  ChevronRight,
} from "lucide-react";

export const docsPlatforms = [
  {
    title: "Swagger UI",
    path: "/docs",
    icon: FileCode2,
    description:
      "Interactive API explorer for executing requests and testing endpoints directly against your Seg Forge deployment.",
    features: [
      {
        icon: PlayCircle,
        text: "Execute Requests",
      },
      {
        icon: Braces,
        text: "Inspect Schemas",
      },
      {
        icon: ShieldCheck,
        text: "Authenticate",
      },
      {
        icon: Search,
        text: "Test Endpoints",
      },
    ],
    color: "cyan",
  },

  {
    title: "ReDoc",
    path: "/redoc",
    icon: BookOpen,
    description:
      "Clean, organized API documentation with detailed request and response schemas.",
    features: [
      {
        icon: FileCode2,
        text: "Endpoint Documentation",
      },
      {
        icon: Braces,
        text: "Request Examples",
      },
      {
        icon: Search,
        text: "Response Schemas",
      },
      {
        icon: BookOpen,
        text: "Navigation by Resource",
      },
    ],
    color: "blue",
  },
];