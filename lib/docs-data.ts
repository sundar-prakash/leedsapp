import { Documentation } from "./documentation";

// This would typically come from a database or API
const documentationData: Documentation[] = [
  {
    title: "Introduction to LeedsApp",
    slug: "introduction",
    description:
      "Get started with LeedsApp and learn how to streamline your business operations",
    category: "Getting Started",
    order: 1,
    content: [
      {
        type: "heading",
        content: "Welcome to LeedsApp",
        level: 2,
        id: "welcome",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp is an all-in-one platform designed to help businesses manage leads, communications, and projects efficiently. This documentation will guide you through the platform's features and help you make the most of LeedsApp.",
      },
      {
        type: "image",
        src: "/docs/intro-preview.png",
        alt: "LeedsApp Dashboard",
        caption:
          "The LeedsApp dashboard provides a comprehensive overview of your business activities",
      },
      {
        type: "heading",
        content: "Documentation Overview",
        level: 3,
        id: "documentation-overview",
      },
      {
        type: "paragraph",
        content:
          "This documentation is organized into several sections, each covering a key aspect of LeedsApp. Whether you're new to the platform or looking to explore advanced features, you'll find detailed guides and helpful tips throughout.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Core Features: Essential tools like Calls, Reminders, and Leads Tracking",
          "Advanced Features: Powerful capabilities including Team Collaboration, Projects, and Integrations",
          "Lead Generation: Tools to capture and manage leads effectively",
          "Productivity Tools: Features like Bulk Import to streamline your workflow",
        ],
      },
      {
        type: "note",
        content:
          "This documentation is regularly updated to reflect the latest features and improvements in LeedsApp.",
        variant: "info",
      },
      {
        type: "heading",
        content: "Quick Start",
        level: 3,
        id: "quick-start",
      },
      {
        type: "paragraph",
        content:
          "New to LeedsApp? We recommend starting with the Core Features section to learn the basics, then exploring the Advanced Features as you become more familiar with the platform. Each documentation page includes step-by-step instructions and visual guides to help you navigate LeedsApp effectively.",
      },
    ],
  },
  {
    title: "Calls",
    slug: "calls",
    description: "Manage and track all your important calls in one place",
    category: "Core Features",
    order: 1,
    content: [
      {
        type: "heading",
        content: "Streamline Your Communication",
        level: 2,
        id: "streamline-communication",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Calls feature helps you stay on top of your communication with clients and team members. Track call history, schedule follow-ups, and never miss an important conversation again.",
      },
      {
        type: "heading",
        content: "Key Calling Features",
        level: 3,
        id: "key-calling-features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Call Scheduling: Plan your calls in advance and set reminders",
          "Call History: Keep track of all previous conversations",
          "Call Notes: Document important points discussed during calls",
          "Call Recording: Record calls for future reference (with consent)",
          "Call Analytics: Gain insights into your communication patterns",
        ],
      },
      {
        type: "heading",
        content: "Making a Call",
        level: 3,
        id: "making-call",
      },
      {
        type: "paragraph",
        content:
          "To make a call, navigate to the Calls section and click on the 'New Call' button. Select the contact you want to call, choose between voice or video call, and click 'Start Call'.",
      },
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
          {
            src: "/docs/01_Calls/calls6.jpg",
            alt: "Call analytics dashboard",
          },
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
        src: "/docs/01_Calls/cr_video.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/01_Calls/cr_video_vertical.mp4",
        isMobile: true,
      },
      {
        type: "note",
        content:
          "All calls are securely encrypted to ensure privacy and confidentiality.",
        variant: "info",
      },
    ],
  },
  {
    title: "Tasks",
    slug: "tasks",
    description: "Organize and prioritize your work efficiently",
    category: "Core Features",
    order: 2,
    content: [
      {
        type: "heading",
        content: "Stay On Top of Your Schedule",
        level: 2,
        id: "stay-on-schedule",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Tasks feature helps you organize your work and prioritize activities effectively. Create tasks, set deadlines, and track progress to ensure nothing falls through the cracks.",
      },
      {
        type: "heading",
        content: "Managing Tasks",
        level: 3,
        id: "managing-tasks",
      },
      {
        type: "paragraph",
        content:
          "To create a task, navigate to the Tasks section and click on 'Add Task'. Fill in the details, set priority levels, assign to team members if needed, and set due dates to stay organized.",
      },
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
          {
            src: "/docs/02_Tasks/Reminders_04.jpg",
            alt: "Task calendar view",
          },
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
          {
            src: "/docs/02_Tasks/Reminders_08.jpg",
            alt: "Task analytics dashboard",
          },
        ],
      },
      {
        type: "video",
        src: "/docs/02_Tasks/tr.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/02_Tasks/tr_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Task Categories",
        level: 3,
        id: "task-categories",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Follow-up Tasks: Schedule follow-ups with leads and clients",
          "Project Tasks: Tasks related to specific projects",
          "Administrative Tasks: Internal operations and management",
          "Client Tasks: Activities related to client management",
          "Custom Tasks: Create your own task categories",
        ],
      },
      {
        type: "note",
        content:
          "You can set recurring tasks for regular activities like weekly reports or monthly reviews.",
        variant: "info",
      },
    ],
  },
  {
    title: "Payments",
    slug: "payments",
    description: "Track and manage all payment activities efficiently",
    category: "Core Features",
    order: 3,
    content: [
      {
        type: "heading",
        content: "Streamline Your Payment Processes",
        level: 2,
        id: "payment-processes",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Payments feature helps you track, manage, and process payments efficiently. Monitor payment statuses, send invoices, and get notified about upcoming payment deadlines.",
      },
      {
        type: "heading",
        content: "Payment Management",
        level: 3,
        id: "payment-management",
      },
      {
        type: "paragraph",
        content:
          "The payment dashboard gives you a complete overview of all payment activities. Track pending payments, view payment history, and generate financial reports with just a few clicks.",
      },
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
          {
            src: "/docs/03_Payments/Payments_08.jpg",
            alt: "Payment analytics dashboard",
          },
        ],
      },
      {
        type: "video",
        src: "/docs/03_Payments/pr.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/03_Payments/pr_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Payment Features",
        level: 3,
        id: "payment-features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Invoice Generation: Create professional invoices quickly",
          "Payment Tracking: Monitor payment statuses in real-time",
          "Automated Reminders: Send payment reminders automatically",
          "Multiple Payment Methods: Support various payment options",
          "Financial Reporting: Generate comprehensive financial reports",
        ],
      },
      {
        type: "note",
        content:
          "All payment data is encrypted and securely stored in compliance with financial regulations.",
        variant: "info",
      },
    ],
  },
  {
    title: "Leads Tracking",
    slug: "leads-tracking",
    description: "Effectively monitor and manage your sales pipeline",
    category: "Core Features",
    order: 4,
    content: [
      {
        type: "heading",
        content: "Master Your Sales Pipeline",
        level: 2,
        id: "sales-pipeline",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Leads Tracking feature gives you complete visibility into your sales pipeline. Monitor lead statuses, track conversion rates, and identify opportunities for improvement.",
      },
      {
        type: "heading",
        content: "Lead Management",
        level: 3,
        id: "lead-management",
      },
      {
        type: "paragraph",
        content:
          "Effectively manage your leads from initial contact to conversion. Categorize leads, track interactions, and ensure timely follow-ups to maximize conversion opportunities.",
      },
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
        src: "/docs/04_Leads_Tracking/ltc.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/04_Leads_Tracking/ltc_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Lead Statuses",
        level: 3,
        id: "lead-statuses",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp uses a standardized lead status system to help you track where each prospect is in your sales process. You can customize these statuses to match your specific sales workflow.",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "New: Recently added leads that haven't been contacted yet",
          "Contacted: Leads you've reached out to but haven't responded",
          "Engaged: Leads actively communicating with your team",
          "Qualified: Leads that meet your ideal customer criteria",
          "Proposal: Leads who have received a formal proposal",
          "Negotiation: Leads in the final stages of decision making",
          "Won/Lost: Closed leads with their final outcome",
        ],
      },
      {
        type: "heading",
        content: "Lead Analytics",
        level: 3,
        id: "lead-analytics",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp provides comprehensive analytics to help you understand your sales performance. Track conversion rates, average sales cycle, and revenue forecasts to make data-driven decisions.",
      },
    ],
  },
  {
    title: "Effortless Team",
    slug: "effortless-team",
    description: "Collaborate seamlessly with your team members",
    category: "Advanced Features",
    order: 1,
    content: [
      {
        type: "heading",
        content: "Streamlined Team Collaboration",
        level: 2,
        id: "team-collaboration",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Effortless Team feature enables smooth collaboration among team members. Share leads, assign tasks, and communicate effectively to boost productivity and achieve better results.",
      },
      {
        type: "heading",
        content: "Team Workspace",
        level: 3,
        id: "team-workspace",
      },
      {
        type: "paragraph",
        content:
          "The team workspace provides a central hub for all collaborative activities. Share information, track team performance, and ensure everyone is aligned with business objectives.",
      },
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
        src: "/docs/05_Effortless_Teams/et.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/05_Effortless_Teams/et_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Team Member Management",
        level: 3,
        id: "team-member-management",
      },
      {
        type: "paragraph",
        content:
          "Managing your team in LeedsApp is straightforward. Add new members, define roles and permissions, and organize your team structure according to your business needs.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Role-based Access Control: Assign specific permissions to different team members",
          "Team Hierarchy: Set up team leaders and reporting structures",
          "Performance Tracking: Monitor individual and team performance metrics",
          "Territory Management: Assign specific regions or accounts to team members",
        ],
      },
      {
        type: "heading",
        content: "Team Communication",
        level: 3,
        id: "team-communication",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp offers built-in communication tools to keep your team connected. Use chat, comments, and notifications to ensure everyone stays on the same page.",
      },
      {
        type: "note",
        content:
          "All team activities are logged for transparency and accountability.",
        variant: "info",
      },
    ],
  },
  {
    title: "Project Feature",
    slug: "project-feature",
    description: "Manage complex projects with ease",
    category: "Advanced Features",
    order: 2,
    content: [
      {
        type: "heading",
        content: "Comprehensive Project Management",
        level: 2,
        id: "project-management",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Project Feature transforms how you manage client projects. From planning to execution and reporting, this tool provides everything you need to deliver successful projects on time and within budget.",
      },
      {
        type: "heading",
        content: "Creating a New Project",
        level: 3,
        id: "creating-project",
      },
      {
        type: "paragraph",
        content:
          "To create a new project, navigate to the Projects section and click on 'New Project'. Fill in the project details, set milestones, assign team members, and define the project scope.",
      },
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
        src: "/docs/06_Project_feature/pf.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/06_Project_feature/pf_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Project Features",
        level: 3,
        id: "project-features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Task Management: Break down projects into manageable tasks",
          "Timeline View: Visualize project progress with Gantt charts",
          "Resource Allocation: Assign and manage resources efficiently",
          "Budget Tracking: Monitor project expenses against the budget",
          "Client Portal: Share progress updates with clients",
          "File Management: Store and organize all project-related documents",
          "Time Tracking: Record time spent on different project tasks",
        ],
      },
      {
        type: "note",
        content:
          "Projects can be linked to specific leads or clients for better organization.",
        variant: "info",
      },
    ],
  },
  {
    title: "Integration",
    slug: "integration",
    description: "Connect LeedsApp with your favorite tools and services",
    category: "Advanced Features",
    order: 3,
    content: [
      {
        type: "heading",
        content: "Seamless Connectivity",
        level: 2,
        id: "seamless-connectivity",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Integration feature allows you to connect with various third-party tools and services to create a unified workflow. Eliminate data silos and streamline your business processes by integrating all your essential tools.",
      },
      {
        type: "heading",
        content: "Integration Ecosystem",
        level: 3,
        id: "integration-ecosystem",
      },
      {
        type: "paragraph",
        content:
          "Connect LeedsApp with your existing tech stack to create a seamless workflow. Synchronize data across platforms and automate processes to save time and reduce manual work.",
      },
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
      {
        type: "heading",
        content: "Available Integrations",
        level: 3,
        id: "available-integrations",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp integrates with a wide range of business tools across different categories. Here are some of the key integrations available:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Email & Calendar: Google Workspace, Microsoft 365, Outlook",
          "Communication: Slack, Microsoft Teams, Discord",
          "Video Conferencing: Zoom, Google Meet, Microsoft Teams",
          "CRM Systems: Salesforce, HubSpot, Pipedrive",
          "Accounting: QuickBooks, Xero, FreshBooks",
          "Payment Processing: Stripe, PayPal, Square",
          "Marketing: Mailchimp, Constant Contact, HubSpot Marketing",
          "Document Management: Google Drive, Dropbox, OneDrive",
          "Project Management: Asana, Trello, Monday.com",
        ],
      },
      {
        type: "heading",
        content: "Setting Up Integrations",
        level: 3,
        id: "setting-up-integrations",
      },
      {
        type: "paragraph",
        content:
          "Setting up an integration in LeedsApp is simple. Navigate to the Integrations section, select the tool you want to connect, and follow the authentication process. Once connected, you can configure the data sync settings according to your needs.",
      },
      {
        type: "note",
        content:
          "All integrations use secure OAuth protocols to ensure your data remains protected.",
        variant: "info",
      },
    ],
  },
  {
    title: "Bulk Import",
    slug: "bulk-import",
    description: "Import multiple leads, contacts, or projects at once",
    category: "Productivity Tools",
    order: 1,
    content: [
      {
        type: "heading",
        content: "Efficient Data Import",
        level: 2,
        id: "data-import",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Bulk Import feature allows you to import large volumes of data quickly and accurately. Whether you're migrating from another system or importing a list of new leads, this tool makes the process seamless.",
      },
      {
        type: "heading",
        content: "Import Process",
        level: 3,
        id: "import-process",
      },
      {
        type: "paragraph",
        content:
          "The import process is straightforward and intuitive. Upload your file, map the fields, review the data, and confirm the import. LeedsApp will handle the rest.",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Select the type of data you want to import",
          "Upload your file or connect to an external source",
          "Map the columns in your file to LeedsApp fields",
          "Preview the data to ensure accuracy",
          "Confirm the import and wait for completion",
          "Review the import report for any issues",
        ],
      },
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
        src: "/docs/07_Bulk_import/bi.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/07_Bulk_import/bi_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Import Options",
        level: 3,
        id: "import-options",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp supports various import formats and data types to accommodate your specific needs. You can import data from CSV files, Excel spreadsheets, or directly from other platforms.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Leads Import: Add multiple leads with their contact information and status",
          "Contacts Import: Import your existing contact database",
          "Projects Import: Set up multiple projects at once",
          "Tasks Import: Create a batch of tasks quickly",
          "Products/Services Import: Add your product catalog efficiently",
        ],
      },
      {
        type: "note",
        content:
          "LeedsApp automatically detects and prevents duplicate entries during the import process.",
        variant: "warning",
      },
    ],
  },
  {
    title: "Leads Form",
    slug: "leads-form",
    description:
      "Create custom forms to capture leads directly from your website",
    category: "Lead Generation",
    order: 1,
    content: [
      {
        type: "heading",
        content: "Capture Leads Automatically",
        level: 2,
        id: "capture-leads",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp's Leads Form feature enables you to create customized forms that can be embedded on your website to capture leads automatically. These forms feed directly into your LeedsApp account, eliminating manual data entry and streamlining your lead generation process.",
      },
      {
        type: "heading",
        content: "Creating a Lead Form",
        level: 3,
        id: "creating-lead-form",
      },
      {
        type: "paragraph",
        content:
          "Creating a lead form is straightforward with the intuitive form builder. You can add various field types, customize the design, and set up automated responses to engage with leads immediately.",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Navigate to the Leads Form section and click 'Create New Form'",
          "Choose a template or start from scratch",
          "Add and customize form fields (name, email, phone, etc.)",
          "Set up form validation rules",
          "Design the form to match your brand",
          "Configure submission actions (thank you page, email notification)",
          "Generate the embed code for your website",
        ],
      },
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
        src: "/docs/09_Lead_forms/lf.mp4",
        isMobile: false,
      },
      {
        type: "video",
        src: "/docs/09_Lead_forms/lf_vertical.mp4",
        isMobile: true,
      },
      {
        type: "heading",
        content: "Form Analytics",
        level: 3,
        id: "form-analytics",
      },
      {
        type: "paragraph",
        content:
          "LeedsApp provides detailed analytics for each form, helping you understand their performance and make data-driven improvements. Track submission rates, conversion rates, and identify any issues with form completion.",
      },
      {
        type: "heading",
        content: "Advanced Form Features",
        level: 3,
        id: "advanced-form-features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Conditional Logic: Show or hide fields based on previous answers",
          "Multi-step Forms: Break long forms into manageable steps",
          "File Uploads: Allow leads to submit documents or images",
          "Custom Autoresponders: Send personalized follow-up emails",
          "Lead Scoring: Automatically score leads based on form responses",
          "A/B Testing: Test different form versions to optimize conversion",
          "GDPR Compliance: Include consent checkboxes and privacy notices",
        ],
      },
      {
        type: "note",
        content:
          "All form submissions are instantly added to your leads database and can trigger automated workflows.",
        variant: "info",
      },
    ],
  },
];

export default documentationData;
