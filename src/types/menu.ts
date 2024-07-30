export interface IMenu {
  id: number;
  shortName: string;
  name: string;
  type: MenuTypeEnum;
}

export enum MenuTypeEnum {
  KITCHEN,
  PIZZA,
  ALL,
}

export const MenuItems: IMenu[] = [
  {
    id: 1,
    shortName: "LANG",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 2,
    shortName: "HR",
    name: "hranolky",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 3,
    shortName: "SMS",
    name: "smažený sýr",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 4,
    shortName: "SMH",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 5,
    shortName: "TO",
    name: "Toast",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 6,
    shortName: "SEK",
    name: "sekaná",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 7,
    shortName: "HOT",
    name: "Hotdog",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 8,
    shortName: "PARHK",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 9,
    shortName: "UT",
    name: "Utopenec",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 10,
    shortName: "POC",
    name: "Pocevka",
    type: MenuTypeEnum.KITCHEN,
  },
];

export const PizzaItems: IMenu[] = [
  {
    id: 1,
    shortName: "HAM",
    name: "Hamburger",
    type: MenuTypeEnum.PIZZA,
  },
  {
    id: 2,
    shortName: "VPÁ",
    name: "víděňské párky",
    type: MenuTypeEnum.PIZZA,
  },
  {
    id: 3,
    shortName: "KL",
    name: "klobása",
    type: MenuTypeEnum.PIZZA,
  },
];

export interface IMenu {
  id: number;
  shortName: string;
  name: string;
}
