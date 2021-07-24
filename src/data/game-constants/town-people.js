const townPeople = [
  {
    name: "Alex",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
    link: "https://stardewvalleywiki.com/Alex",
    birthday: {
      season: "Summer",
      day: 13,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 20, completed: false },
      { heart: 4, id: 2481135, completed: false },
      { heart: 5, id: 21, completed: false },
      { heart: 6, id: 2119820, completed: false },
      { heart: 8, id: 288847, completed: false },
      { heart: 10, id: 911526, completed: false },
      { heart: 14.1, id: 3917587, completed: false },
      { heart: 14.2, id: 3917589, completed: false },
      { heart: 14.3, id: 3917590, completed: false },
    ],
  },
  {
    name: "Elliot",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
    link: "https://stardewvalleywiki.com/Elliot",
    birthday: {
      season: "Fall",
      day: 5,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 39, completed: false },
      { heart: 4, id: 40, completed: false },
      { heart: 6, id: 423502, completed: false },
      { heart: 8, id: 1848481, completed: false },
      { heart: 10, id: 43, completed: false },
      { heart: 14.1, id: 3912125, completed: false },
      { heart: 14.2, id: 3912132, completed: false },
    ],
  },
  {
    name: "Harvey",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
    link: "https://stardewvalleywiki.com/Harvey",
    birthday: {
      season: "Winter",
      day: 14,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 56, completed: false },
      { heart: 4, id: 57, completed: false },
      { heart: 6, id: 58, completed: false },
      { heart: 8, id: 571102, completed: false },
      { heart: 10, id: 528052, completed: false },
      { heart: 14, id: 3917626, completed: false },
    ],
  },
  {
    name: "Sam",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
    link: "https://stardewvalleywiki.com/Sam",
    birthday: {
      season: "Summer",
      day: 17,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 44, completed: false },
      { heart: 3, id: 733330, completed: false },
      { heart: 4, id: 46, completed: false },
      { heart: 6, id: 45, completed: false },
      { heart: 8, id: 4081148, completed: false },
      { heart: 10, id: 233104, completed: false },
      { heart: 14.1, id: 3918600, completed: false },
      { heart: 14.2, id: 3918601, completed: false },
      { heart: 14.3, id: 3918602, completed: false },
      { heart: 14.4, id: 3918603, completed: false },
    ],
  },
  {
    name: "Sebastian",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
    link: "https://stardewvalleywiki.com/Sebastian",
    birthday: {
      season: "Winter",
      day: 10,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 2794460, completed: false },
      { heart: 4, id: 384883, completed: false },
      { heart: 6, id: 27, completed: false },
      { heart: 8, id: 29, completed: false },
      { heart: 10, id: 384882, completed: false },
      { heart: 14.1, id: 9333219, completed: false },
      { heart: 14.2, id: 9333220, completed: false },
    ],
  },
  {
    name: "Shane",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
    link: "https://stardewvalleywiki.com/Shane",
    birthday: {
      season: "Spring",
      day: 20,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 611944, completed: false },
      { heart: 4, id: 3910674, completed: false },
      { heart: 6, id: 3910975, completed: false },
      { heart: 6.8, id: 3910974, completed: false },
      { heart: 7, id: 831125, completed: false },
      { heart: 8, id: 3900074, completed: false },
      { heart: 10, id: 9581348, completed: false },
      { heart: 14.1, id: 3917584, completed: false },
      { heart: 14.2, id: 3917585, completed: false },
      { heart: 14.3, id: 3917586, completed: false },
    ],
  },
  {
    name: "Abigail",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
    link: "https://stardewvalleywiki.com/Abigail",
    birthday: {
      season: "Fall",
      day: 13,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 1, completed: false },
      { heart: 4, id: 2, completed: false },
      { heart: 6, id: 4, completed: false },
      { heart: 8, id: 3, completed: false },
      { heart: 10, id: 901756, completed: false },
      { heart: 14, id: 6963327, completed: false },
    ],
  },
  {
    name: "Emily",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
    link: "https://stardewvalleywiki.com/Emily",
    birthday: {
      season: "Spring",
      day: 27,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 471942, completed: false },
      { heart: 4, id: 463391, completed: false },
      { heart: 6, id: 917409, completed: false },
      { heart: 8, id: 2123243, completed: false },
      { heart: 10, id: 2123343, completed: false },
      { heart: 14.1, id: 3917600, completed: false },
      { heart: 14.2, id: 3917601, completed: false },
    ],
  },
  {
    name: "Haley",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
    link: "https://stardewvalleywiki.com/Haley",
    birthday: {
      season: "Spring",
      day: 14,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 11, completed: false },
      { heart: 4, id: 12, completed: false },
      { heart: 6, id: 13, completed: false },
      { heart: 8, id: 14, completed: false },
      { heart: 10, id: 15, completed: false },
      { heart: 14.1, id: 6184643, completed: false },
      { heart: 14.2, id: 8675611, completed: false },
      { heart: 14.3, id: 6184644, completed: false },
    ],
  },
  {
    name: "Leah",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
    link: "https://stardewvalleywiki.com/Leah",
    birthday: {
      season: "Winter",
      day: 23,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 50, completed: false },
      { heart: 4, id: 51, completed: false },
      { heart: 6, id: 52, completed: false },
      { heart: 8, id: "53|584059", completed: false },
      { heart: 10, id: 54, completed: false },
      { heart: 14.1, id: 3911124, completed: false },
      { heart: 14.2, id: 3091462, completed: false },
    ],
  },
  {
    name: "Maru",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
    link: "https://stardewvalleywiki.com/Maru",
    birthday: {
      season: "Summer",
      day: 10,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 6, completed: false },
      { heart: 4, id: 7, completed: false },
      { heart: 6, id: 8, completed: false },
      { heart: 8, id: 9, completed: false },
      { heart: 10, id: 10, completed: false },
      { heart: 14.1, id: 3917666, completed: false },
      { heart: 14.2, id: 5183338, completed: false },
    ],
  },
  {
    name: "Penny",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
    link: "https://stardewvalleywiki.com/Penny",
    birthday: {
      season: "Fall",
      day: 2,
    },
    isDatable: true,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 34, completed: false },
      { heart: 4, id: 35, completed: false },
      { heart: 6, id: 36, completed: false },
      { heart: 8, id: 181928, completed: false },
      { heart: 10, id: 38, completed: false },
      { heart: 14.1, id: 4325434, completed: false },
      { heart: 14.2, id: 4324303, completed: false },
    ],
  },
  {
    name: "Caroline",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
    link: "https://stardewvalleywiki.com/Caroline",
    birthday: {
      season: "Winter",
      day: 7,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 719926, completed: false },
      { heart: 6, id: 17, completed: false },
    ],
  },
  {
    name: "Clint",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
    link: "https://stardewvalleywiki.com/Clint",
    birthday: {
      season: "Winter",
      day: 26,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 3, id: 97, completed: false },
      { heart: 6, id: 101, completed: false },
    ],
  },
  {
    name: "Demetrius",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
    link: "https://stardewvalleywiki.com/Demetrius",
    birthday: {
      season: "Summer",
      day: 19,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 25, completed: false }],
  },
  {
    name: "Dwarf",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
    link: "https://stardewvalleywiki.com/Dwarf",
    birthday: {
      season: "Summer",
      day: 22,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 0.2, id: 691039, completed: false }],
  },
  {
    name: "Evelyn",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
    link: "https://stardewvalleywiki.com/Evelyn",
    birthday: {
      season: "Winter",
      day: 20,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 4, id: 19, completed: false }],
  },
  {
    name: "George",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
    link: "https://stardewvalleywiki.com/George",
    birthday: {
      season: "Fall",
      day: 24,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 18, completed: false }],
  },
  {
    name: "Gus",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
    link: "https://stardewvalleywiki.com/Gus",
    birthday: {
      season: "Summer",
      day: 8,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 4, id: 96, completed: false },
      { heart: 5, id: 980558, completed: false },
    ],
  },
  {
    name: "Jas",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
    link: "https://stardewvalleywiki.com/Jas",
    birthday: {
      season: "Summer",
      day: 4,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 8, id: 3910979, completed: false }],
  },
  {
    name: "Jodi",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
    link: "https://stardewvalleywiki.com/Jodi",
    birthday: {
      season: "Fall",
      day: 11,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 4, id: "94|95", completed: false }],
  },
  {
    name: "Kent",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
    link: "https://stardewvalleywiki.com/Kent",
    birthday: {
      season: "Spring",
      day: 4,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 3, id: 100, completed: false }],
  },
  {
    name: "Krobus",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
    link: "https://stardewvalleywiki.com/Krobus",
    birthday: {
      season: "Winter",
      day: 1,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 14, id: 7771191, completed: false }],
  },
  {
    name: "Leo",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png",
    link: "https://stardewvalleywiki.com/Leo",
    birthday: {
      season: "Summer",
      day: 26,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 2, id: 6497423, completed: false },
      { heart: 4, id: 6497421, completed: false },
      { heart: 6, id: 6497428, completed: false },
      { heart: 9, id: 8959199, completed: false },
    ],
  },
  {
    name: "Lewis",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
    link: "https://stardewvalleywiki.com/Lewis",
    birthday: {
      season: "Spring",
      day: 7,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 639373, completed: false }],
  },
  {
    name: "Linus",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
    link: "https://stardewvalleywiki.com/Linus",
    birthday: {
      season: "Winter",
      day: 3,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [
      { heart: 0.2, id: 502969, completed: false },
      { heart: 4, id: 26, completed: false },
      { heart: 8, id: 371652, completed: false },
    ],
  },
  {
    name: "Marnie",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
    link: "https://stardewvalleywiki.com/Marnie",
    birthday: {
      season: "Fall",
      day: 18,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 639373, completed: false }],
  },
  {
    name: "Pam",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
    link: "https://stardewvalleywiki.com/Pam",
    birthday: {
      season: "Spring",
      day: 18,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 9, id: 503180, completed: false }],
  },
  {
    name: "Pierre",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
    link: "https://stardewvalleywiki.com/Pierre",
    birthday: {
      season: "Spring",
      day: 26,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 16, completed: false }],
  },
  {
    name: "Robin",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
    link: "https://stardewvalleywiki.com/Robin",
    birthday: {
      season: "Fall",
      day: 21,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 33, completed: false }],
  },
  {
    name: "Sandy",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
    link: "https://stardewvalleywiki.com/Sandy",
    birthday: {
      season: "Fall",
      day: 15,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [],
  },
  {
    name: "Vincent",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
    link: "https://stardewvalleywiki.com/Vincent",
    birthday: {
      season: "Spring",
      day: 10,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 8, id: 3910979, completed: false }],
  },
  {
    name: "Willy",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
    link: "https://stardewvalleywiki.com/Willy",
    birthday: {
      season: "Summer",
      day: 24,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [{ heart: 6, id: 711130, completed: false }],
  },
  {
    name: "Wizard",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
    link: "https://stardewvalleywiki.com/Wizard",
    birthday: {
      season: "Winter",
      day: 17,
    },
    isDatable: false,
    isMarried: false,
    hearts: 10,
    events: [],
  },
];

export default townPeople;