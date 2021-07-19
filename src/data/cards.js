import { StarIcon } from "@heroicons/react/outline";

const skills = [
  {
    name: "farming",
    label: "Farming",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/82/Farming_Skill_Icon.png",
  },
  {
    name: "fishing",
    label: "Fishing",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e7/Fishing_Skill_Icon.png/32px-Fishing_Skill_Icon.png",
  },
  {
    name: "foraging",
    label: "Foraging",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Foraging_Skill_Icon.png/32px-Foraging_Skill_Icon.png",
  },
  {
    name: "mining",
    label: "Mining",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Mining_Skill_Icon.png/32px-Mining_Skill_Icon.png",
  },
  {
    name: "combat",
    label: "Combat",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Combat_Skill_Icon.png/32px-Combat_Skill_Icon.png",
  },
  { name: "luck", label: "Luck" },
];

const museum = [
  {
    label: "Museum Donations",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/91/Gunther_Icon.png",
  },
  {
    label: "Artifacts Donated",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png",
    link: "/collection/artifacts",
  },
  {
    label: "Minerals Donated",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0e/Diamond_Node.png",
    link: "/collection/minerals",
  },
];

const other = [{ label: "Achievements", icon: StarIcon, link: "/character" }];

export { skills, museum, other };
