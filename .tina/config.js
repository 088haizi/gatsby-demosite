import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f6de6409-58eb-47fd-8afb-e2c66d745fab", // Get this from tina.io
  token: "82c3fe59a74c619d783117c8a2d94393182181c3", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "home",
        name: "home",
        path: "home",
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "cate",
                label: "cate",
                options: ["updates", "how-to-make-sites"],
              },
              {
                type: "string",
                name: "tags",
                label: "tags",
                list: true,
                ui: {
                  component: "tags",
                },
              },
            ],
            label: "blog",
            name: "blog",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "categories",
                label: "categories",
                options: [],
              },
              {
                type: "string",
                name: "tags",
                label: "tags",
                list: true,
                ui: {
                  component: "tags",
                },
              },
            ],
            label: "demo-template-001",
            name: "demo_template_001",
          },
        ],
      },
    ],
  },
});
