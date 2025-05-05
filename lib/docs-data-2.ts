import { Documentation } from "./documentation";

const documentationData: Documentation[] = [
  {
    title: "Calls",
    slug: "calls",
    description: "Manage and track all your important calls in one place",
    order: 1,
    icon: { url: "/docs/01_Calls/call.svg", color: "#4CAF50" },
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/01_Calls/calls1.jpg",
            alt: "Call interface showing contact selection",
          },
          {
            src: "/docs/01_Calls/calls2.jpg",
            alt: "Active call screen with controls",
          },
          {
            src: "/docs/01_Calls/calls3.jpg",
            alt: "Call history and logs view",
          },
          {
            src: "/docs/01_Calls/calls4.jpg",
            alt: "Call scheduling interface",
          },
          {
            src: "/docs/01_Calls/calls5.jpg",
            alt: "Call notes and summary screen",
          },
          { src: "/docs/01_Calls/calls6.jpg", alt: "Call analytics dashboard" },
          {
            src: "/docs/01_Calls/calls7.jpg",
            alt: "Call settings configuration",
          },
          {
            src: "/docs/01_Calls/calls8.jpg",
            alt: "Call recording playback interface",
          },
        ],
      },
      {
        type: "video",
        title: "How to add call reminders in LeedsApp",
        src: "/docs/01_Calls/cr_video.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to add call reminders in LeedsApp",
        src: "/docs/01_Calls/cr_video_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Tasks",
    slug: "tasks",
    icon: { url: "/docs/02_Tasks/task.svg", color: "#2196F3" },
    description: "Organize and prioritize your work efficiently",
    order: 2,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/02_Tasks/Reminders_01.jpg",
            alt: "Task creation interface",
          },
          {
            src: "/docs/02_Tasks/Reminders_02.jpg",
            alt: "Task list view with priorities",
          },
          {
            src: "/docs/02_Tasks/Reminders_03.jpg",
            alt: "Task details and assignment",
          },
          { src: "/docs/02_Tasks/Reminders_04.jpg", alt: "Task calendar view" },
          {
            src: "/docs/02_Tasks/Reminders_05.jpg",
            alt: "Task filtering options",
          },
          {
            src: "/docs/02_Tasks/Reminders_06.jpg",
            alt: "Task completion tracking",
          },
          {
            src: "/docs/02_Tasks/Reminders_07.jpg",
            alt: "Task notification settings",
          },
        ],
      },
      {
        type: "video",
        title: "How to add task reminders in LeedsApp",
        src: "/docs/02_Tasks/tr.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to add task reminders in LeedsApp",
        src: "/docs/02_Tasks/tr_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Payments",
    slug: "payments",
    icon: { url: "/docs/03_Payments/payment.svg", color: "#219C90" },
    description: "Track and manage all payment activities efficiently",
    order: 3,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/03_Payments/Payments_01.jpg",
            alt: "Payment dashboard overview",
          },
          {
            src: "/docs/03_Payments/Payments_02.jpg",
            alt: "Invoice creation interface",
          },
          {
            src: "/docs/03_Payments/Payments_03.jpg",
            alt: "Payment tracking view",
          },
          {
            src: "/docs/03_Payments/Payments_04.jpg",
            alt: "Payment history and records",
          },
          {
            src: "/docs/03_Payments/Payments_05.jpg",
            alt: "Payment reminder settings",
          },
          {
            src: "/docs/03_Payments/Payments_06.jpg",
            alt: "Payment method configuration",
          },
          {
            src: "/docs/03_Payments/Payments_07.jpg",
            alt: "Financial reporting tools",
          },
        ],
      },
      {
        type: "video",
        title: "How to add Payments reminders in LeedsApp",
        src: "/docs/03_Payments/pr.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to add Payments reminders in LeedsApp",
        src: "/docs/03_Payments/pr_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Leads Tracking Center",
    slug: "leads-tracking-center",
    icon: {
      url: "/docs/04_Leads_Tracking/lead-tracking-center.svg",
      color: "#2196F3",
    },
    description: "Effectively monitor and manage your sales pipeline",
    order: 4,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/04_Leads_Tracking/leadtracking1.jpg",
            alt: "Lead pipeline overview",
          },
          {
            src: "/docs/04_Leads_Tracking/leadtracking2.jpg",
            alt: "Lead details and information",
          },
          {
            src: "/docs/04_Leads_Tracking/leadtracking3.jpg",
            alt: "Lead status management",
          },
          {
            src: "/docs/04_Leads_Tracking/leadtracking4.jpg",
            alt: "Lead interaction history",
          },
          {
            src: "/docs/04_Leads_Tracking/leadtracking5.jpg",
            alt: "Lead scoring interface",
          },
          {
            src: "/docs/04_Leads_Tracking/leadtracking6.jpg",
            alt: "Lead conversion tracking",
          },
          {
            src: "/docs/04_Leads_Tracking/leadtracking7.jpg",
            alt: "Lead analytics dashboard",
          },
        ],
      },
      {
        type: "video",
        title: "How to track your leads in LeedsApp",
        src: "/docs/04_Leads_Tracking/ltc.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to track your leads in LeedsApp",
        src: "/docs/04_Leads_Tracking/ltc_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Teams",
    slug: "teams",
    icon: { url: "/docs/05_Effortless_Teams/teams.svg", color: "#836FFF" },

    description:
      "Collaborate with your team members and follow up your leads on time.",
    order: 6,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/05_Effortless_Teams/team1.jpg",
            alt: "Team dashboard overview",
          },
          {
            src: "/docs/05_Effortless_Teams/team2.jpg",
            alt: "Team member management",
          },
          {
            src: "/docs/05_Effortless_Teams/team3.jpg",
            alt: "Task assignment interface",
          },
          {
            src: "/docs/05_Effortless_Teams/team4.jpg",
            alt: "Team communication tools",
          },
          {
            src: "/docs/05_Effortless_Teams/team5.jpg",
            alt: "Team performance metrics",
          },
          {
            src: "/docs/05_Effortless_Teams/team6.jpg",
            alt: "Role and permission settings",
          },
          {
            src: "/docs/05_Effortless_Teams/team7.jpg",
            alt: "Team activity feed",
          },
        ],
      },
      {
        type: "video",
        title: "How to use Teams in LeedsApp",
        src: "/docs/05_Effortless_Teams/et.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to use Teams in LeedsApp",
        src: "/docs/05_Effortless_Teams/et_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Projects",
    slug: "projects",
    icon: { url: "/docs/06_Project_feature/projects.svg", color: "#FFC107" },

    description:
      "Create and customize your business website based on your product service.",
    order: 5,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/06_Project_feature/feature1.jpg",
            alt: "Project creation interface",
          },
          {
            src: "/docs/06_Project_feature/feature2.jpg",
            alt: "Project dashboard overview",
          },
          {
            src: "/docs/06_Project_feature/feature3.jpg",
            alt: "Task management within projects",
          },
          {
            src: "/docs/06_Project_feature/feature4.jpg",
            alt: "Project timeline and milestones",
          },
          {
            src: "/docs/06_Project_feature/feature5.jpg",
            alt: "Resource allocation tools",
          },
          {
            src: "/docs/06_Project_feature/feature6.jpg",
            alt: "Project budget tracking",
          },
          {
            src: "/docs/06_Project_feature/feature7.jpg",
            alt: "Project reporting interface",
          },
        ],
      },
      {
        type: "video",
        title: "How to create projects in LeedsApp",
        src: "/docs/06_Project_feature/pf.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to create projects in LeedsApp",
        src: "/docs/06_Project_feature/pf_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Integrations",
    slug: "integrations",
    icon: { url: "/docs/08_Integration/integrations.svg", color: "#ee8282" },

    description:
      "Integrate leads directly from Facebook Ads. Website, Landing page.",
    order: 9,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/08_Integration/integration1.jpg",
            alt: "Integration dashboard",
          },
          {
            src: "/docs/08_Integration/integration2.jpg",
            alt: "Available integrations catalog",
          },
          {
            src: "/docs/08_Integration/integration3.jpg",
            alt: "Integration setup wizard",
          },
          {
            src: "/docs/08_Integration/integration4.jpg",
            alt: "Data mapping configuration",
          },
          {
            src: "/docs/08_Integration/integration5.jpg",
            alt: "Integration sync settings",
          },
          {
            src: "/docs/08_Integration/integration6.jpg",
            alt: "Integration status monitoring",
          },
          {
            src: "/docs/08_Integration/integration7.jpg",
            alt: "Custom integration builder",
          },
        ],
      },
    ],
  },
  {
    title: "Bulk Imports",
    slug: "bulk-imports",
    icon: { url: "/docs/07_Bulk_import/bulk-imports.svg", color: "#4CAF50" },

    description:
      "Easily import leads in bulk from Excel directly into LeedsApp",
    order: 7,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/07_Bulk_import/import1.jpg",
            alt: "Bulk import dashboard",
          },
          {
            src: "/docs/07_Bulk_import/import2.jpg",
            alt: "File upload interface",
          },
          {
            src: "/docs/07_Bulk_import/import3.jpg",
            alt: "Field mapping screen",
          },
          {
            src: "/docs/07_Bulk_import/import4.jpg",
            alt: "Data preview and validation",
          },
          {
            src: "/docs/07_Bulk_import/import5.jpg",
            alt: "Import progress tracking",
          },
          {
            src: "/docs/07_Bulk_import/import6.jpg",
            alt: "Import results summary",
          },
          {
            src: "/docs/07_Bulk_import/import7.jpg",
            alt: "Error handling and resolution",
          },
        ],
      },
      {
        type: "video",
        title: "How to import leads from Excel to LeedsApp",
        src: "/docs/07_Bulk_import/bi.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to import leads from Excel to LeedsApp",
        src: "/docs/07_Bulk_import/bi_vertical.mp4",
        isMobile: true,
      },
    ],
  },
  {
    title: "Leads Forms",
    slug: "leads-forms",
    icon: { url: "/docs/09_Lead_forms/lead_forms.svg", color: "#9B4444" },

    description:
      "Create fully customizable lead forms to easily capture leads.",
    order: 6,
    content: [
      {
        id: "1",
        type: "carousel",
        items: [
          {
            src: "/docs/09_Lead_forms/forms1.jpg",
            alt: "Lead form builder interface",
          },
          {
            src: "/docs/09_Lead_forms/forms2.jpg",
            alt: "Form field configuration",
          },
          {
            src: "/docs/09_Lead_forms/forms3.jpg",
            alt: "Form design customization",
          },
          {
            src: "/docs/09_Lead_forms/forms4.jpg",
            alt: "Form validation settings",
          },
          {
            src: "/docs/09_Lead_forms/forms5.jpg",
            alt: "Form submission handling",
          },
          {
            src: "/docs/09_Lead_forms/forms6.jpg",
            alt: "Form embed code generation",
          },
          {
            src: "/docs/09_Lead_forms/forms7.jpg",
            alt: "Form performance analytics",
          },
        ],
      },
      {
        type: "video",
        title: "How to create Lead Forms in LeedsApp",
        src: "/docs/09_Lead_forms/lf.mp4",
        isMobile: false,
      },
      {
        type: "video",
        title: "How to create Lead Forms in LeedsApp",
        src: "/docs/09_Lead_forms/lf_vertical.mp4",
        isMobile: true,
      },
    ],
  },
];

export default documentationData;
