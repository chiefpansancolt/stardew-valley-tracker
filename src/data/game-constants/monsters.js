const LOCATION = {
  THEMINES: "The Mines",
  SKULLCAVERN: "Skull Carvern",
  QUARRYMINE: "Quarry Mine",
  MUTANTBUG: "Mutant Bug Lair",
  VOLCANO: "Volcano Dungeon",
  WILDRENESS: "Wilderness Farm",
  DANGEROUSMINES: "Dangerous Mines",
  DANGEROUSSKULL: "Dangerous Skull Cavern",
};

const monsterTypes = [
  {
    category: "Slimes",
    goal: 1000,
    monsters: [
      {
        name: "Green Slime",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7b/Green_Slime.png/48px-Green_Slime.png",
        locations: [LOCATION.THEMINES, LOCATION.WILDRENESS, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Frost Jelly",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9d/Frost_Jelly.png/48px-Frost_Jelly.png",
        locations: [LOCATION.THEMINES, LOCATION.WILDRENESS, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Sludge",
        label: "Red or Purple Slime",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/b/ba/Red_Sludge.png/48px-Red_Sludge.png",
        locations: [
          LOCATION.THEMINES,
          LOCATION.SKULLCAVERN,
          LOCATION.WILDRENESS,
          LOCATION.DANGEROUSMINES,
          LOCATION.DANGEROUSSKULL,
        ],
        trackable: true,
        count: 0,
      },
      {
        name: "Tiger Slime",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/57/Tiger_Slime.png/48px-Tiger_Slime.png",
        locations: [LOCATION.VOLCANO, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Big Slime",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Big_Slime_Sprite.png/48px-Big_Slime_Sprite.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Copper Slime",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Copper_Slime.png/48px-Copper_Slime.png",
        locations: [LOCATION.QUARRYMINE, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Iron Slime",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4d/Iron_Slime.png/48px-Iron_Slime.png",
        locations: [LOCATION.QUARRYMINE, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
    ],
  },
  {
    category: "Void Spirits",
    goal: 150,
    monsters: [
      {
        name: "Shadow Brute",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e0/Shadow_Brute.png/48px-Shadow_Brute.png",
        locations: [LOCATION.THEMINES, LOCATION.WILDRENESS, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Shadow Shaman",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Shadow_Shaman.png/48px-Shadow_Shaman.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Shadow Sniper",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a4/Shadow_Sniper.png/48px-Shadow_Sniper.png",
        locations: [LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Bats",
    goal: 200,
    monsters: [
      {
        name: "Bat",
        img: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Bat.png",
        locations: [LOCATION.THEMINES, LOCATION.WILDRENESS, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Frost Bat",
        img: "https://stardewvalleywiki.com/mediawiki/images/3/36/Frost_Bat.png",
        locations: [LOCATION.THEMINES, LOCATION.WILDRENESS, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Lava Bat",
        img: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Lava_Bat.png",
        locations: [LOCATION.THEMINES, LOCATION.SKULLCAVERN, LOCATION.WILDRENESS],
        trackable: true,
        count: 0,
      },
      {
        name: "Iridum Bat",
        img: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Iridium_Bat.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.WILDRENESS],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Skeletons",
    goal: 50,
    monsters: [
      {
        name: "Skeleton",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/23/Skeleton.png/48px-Skeleton.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Skeleton Mage",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f5/Skeleton_Mage_Dangerous.png/48px-Skeleton_Mage_Dangerous.png",
        locations: [LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Cave Insects",
    goal: 125,
    monsters: [
      {
        name: "Bug",
        img: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Bug.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Fly",
        label: "Cave Fly",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/8f/Cave_Fly.png/48px-Cave_Fly.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Grub",
        img: "https://stardewvalleywiki.com/mediawiki/images/0/0c/Grub.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Armored Bug",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/19/Armored_Bug.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.DANGEROUSSKULL],
        trackable: false,
        count: 0,
      },
      {
        name: "Mutant Fly",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/69/Mutant_Fly.png/48px-Mutant_Fly.png",
        locations: [LOCATION.MUTANTBUG],
        trackable: false,
        count: 0,
      },
      {
        name: "Mutant Grub",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/62/Mutant_Grub.png/48px-Mutant_Grub.png",
        locations: [LOCATION.MUTANTBUG],
        trackable: false,
        count: 0,
      },
      {
        name: "Spider",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/84/Spider.png/48px-Spider.png",
        locations: [LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Stick Bug",
        img: "https://stardewvalleywiki.com/mediawiki/images/1/13/Stick_Bug.png",
        locations: [LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
    ],
  },
  {
    category: "Duggies",
    goal: 30,
    monsters: [
      {
        name: "Duggy",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3a/Duggy.png/48px-Duggy.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Magma Duggy",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/41/Magma_Duggy.png/48px-Magma_Duggy.png",
        locations: [LOCATION.VOLCANO, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Dust Sprites",
    goal: 500,
    monsters: [
      {
        name: "Dust Spirit",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9a/Dust_Sprite.png/48px-Dust_Sprite.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Rock Crabs",
    goal: 60,
    monsters: [
      {
        name: "Rock Crab",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d4/Rock_Crab.png/48px-Rock_Crab.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Lava Crab",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Lava_Crab.png/48px-Lava_Crab.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
      {
        name: "Iridium Crab",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ef/Iridium_Crab.png/48px-Iridium_Crab.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.DANGEROUSMINES],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Mummies",
    goal: 100,
    monsters: [
      {
        name: "Mummy",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/70/Mummy.png/48px-Mummy.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.DANGEROUSSKULL],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Pepper Rex",
    goal: 50,
    monsters: [
      {
        name: "Pepper Rex",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/67/Pepper_Rex.png/48px-Pepper_Rex.png",
        locations: [LOCATION.SKULLCAVERN],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Serpents",
    goal: 250,
    monsters: [
      {
        name: "Serpent",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/89/Serpent.png/48px-Serpent.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.WILDRENESS],
        trackable: true,
        count: 0,
      },
      {
        name: "Royal Serpent",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/28/Royal_Serpent.png/48px-Royal_Serpent.png",
        locations: [LOCATION.DANGEROUSSKULL],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Flame Spirits",
    goal: 150,
    monsters: [
      {
        name: "Magma Sprite",
        img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Magma_Sprite.png",
        locations: [LOCATION.VOLCANO],
        trackable: true,
        count: 0,
      },
      {
        name: "Magma Sparker",
        img: "https://stardewvalleywiki.com/mediawiki/images/5/58/Magma_Sparker.png",
        locations: [LOCATION.VOLCANO],
        trackable: true,
        count: 0,
      },
    ],
  },
  {
    category: "Ghosts",
    goal: "None",
    monsters: [
      {
        name: "Ghost",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/ab/Ghost.png/48px-Ghost.png",
        locations: [LOCATION.THEMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Carbon Ghost",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5b/Carbon_Ghost.png/48px-Carbon_Ghost.png",
        locations: [LOCATION.SKULLCAVERN, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Putrid Ghost",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/42/Putrid_Ghost.png/48px-Putrid_Ghost.png",
        locations: [LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
    ],
  },
  {
    category: "Golems",
    goal: "None",
    monsters: [
      {
        name: "Stone Golem",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d4/Stone_Golem.png/48px-Stone_Golem.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Wilderness Golem",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/83/Wilderness_Golem.png/48px-Wilderness_Golem.png",
        locations: [LOCATION.WILDRENESS],
        trackable: false,
        count: 0,
      },
    ],
  },
  {
    category: "Other",
    goal: "None",
    monsters: [
      {
        name: "Metal Head",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e5/Metal_Head.png/48px-Metal_Head.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Squid Kid",
        img: "https://stardewvalleywiki.com/mediawiki/images/6/69/Squid_Kid.png",
        locations: [LOCATION.THEMINES, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Haunted Skull",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/14/Haunted_Skull.png/48px-Haunted_Skull.png",
        locations: [LOCATION.QUARRYMINE, LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
      {
        name: "Dwarvish Sentry",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/27/Dwarvish_Sentry.png/48px-Dwarvish_Sentry.png",
        locations: [LOCATION.VOLCANO],
        trackable: false,
        count: 0,
      },
      {
        name: "False Magma Cap",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4a/False_Magma_Cap.png/48px-False_Magma_Cap.png",
        locations: [LOCATION.VOLCANO],
        trackable: false,
        count: 0,
      },
      {
        name: "Hot Head",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ef/Hot_Head.png/48px-Hot_Head.png",
        locations: [LOCATION.VOLCANO],
        trackable: false,
        count: 0,
      },
      {
        name: "Lava Lurk",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/eb/Lava_Lurk.png/48px-Lava_Lurk.png",
        locations: [LOCATION.VOLCANO],
        trackable: false,
        count: 0,
      },
      {
        name: "Blue Squid",
        img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Blue_Squid.png/48px-Blue_Squid.png",
        locations: [LOCATION.DANGEROUSMINES],
        trackable: false,
        count: 0,
      },
    ],
  },
];

const monsterShippings = [
  {
    id: 684,
    name: "Bug Meat",
    description: "It's a juicy wad of bug flesh.",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Bug_Meat.png",
    price: "8g",
    sources: [
      "Bug",
      "Bug (dangerous)",
      "Cave Fly",
      "Cave Fly (dangerous)",
      "Grub",
      "Grub (dangerous)",
      "Mutant Fly",
      "Mutant Grub",
      "Armored Bug",
      "Armored Bug (dangerous)",
    ],
    shipping: {
      order: 122,
      usage: true,
    },
  },
  {
    id: 766,
    name: "Slime",
    description: "A shimmering, gelatinous glob with no smell.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/38/Slime.png",
    price: "5g",
    sources: ["Slimes", "Fish Pond"],
    shipping: {
      order: 127,
      usage: true,
    },
  },
  {
    id: 767,
    name: "Bat Wings",
    description: "The material is surprisingly delicate.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/35/Bat_Wing.png",
    price: "15g",
    sources: ["Bat", "Frost Bat", "Lava Bat", "Bat (dangerous)", "Frost Bat (dangerous)"],
    shipping: {
      order: 128,
      usage: true,
    },
  },
  {
    id: 768,
    name: "Solar Essence",
    description: "The glowing face is warm to the touch.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png",
    price: "40g",
    sources: [
      "Ghost",
      "Iridium Bat",
      "Metal Head",
      "Metal Head (dangerous)",
      "Haunted Skull",
      "Squid Kid",
      "Squid Kid (dangerous)",
      "Mummy",
      "Krobus",
      "Hot Head",
      "Blue Squid",
      "Sunfish (Fish Pond)",
    ],
    shipping: {
      order: 129,
      usage: true,
    },
  },
  {
    id: 769,
    name: "Void Essence",
    description: "It's quivering with dark energy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1f/Void_Essence.png",
    price: "50g",
    sources: [
      "Shadow Brute",
      "Shadow Brute (dangerous)",
      "Shadow Shaman",
      "Shadow Shaman (dangerous)",
      "Haunted Skull",
      "Serpent",
      "Shadow Sniper",
      "Spider",
      "Krobus",
      "Void Salmon (Fish Pond)",
    ],
    shipping: {
      order: 130,
      usage: true,
    },
  },
];

export { monsterTypes, monsterShippings };
