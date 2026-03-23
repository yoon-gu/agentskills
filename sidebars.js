/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    "home",
    "what-are-skills",
    "specification",
    {
      type: "category",
      label: "For skill creators",
      items: [
        "skill-creation/quickstart",
        "skill-creation/best-practices",
        "skill-creation/optimizing-descriptions",
        "skill-creation/evaluating-skills",
        "skill-creation/using-scripts",
      ],
    },
    {
      type: "category",
      label: "For client implementors",
      items: ["client-implementation/adding-skills-support"],
    },
  ],
};

module.exports = sidebars;
