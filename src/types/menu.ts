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
    shortName: "LANG K",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 2,
    shortName: "LANG T",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 3,
    shortName: "LANG OB",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 4,
    shortName: "HR",
    name: "hranolky",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 5,
    shortName: "SMS",
    name: "smažený sýr",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 6,
    shortName: "SMH",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 7,
    shortName: "TO",
    name: "Toast",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 8,
    shortName: "SEK",
    name: "sekaná",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 9,
    shortName: "HOT",
    name: "Hotdog",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 10,
    shortName: "PAR H",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 11,
    shortName: "PAR K",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 12,
    shortName: "PAR OB",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 13,
    shortName: "UT",
    name: "Utopenec",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 14,
    shortName: "POL",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 15,
    shortName: "KL",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 16,
    shortName: "VPA H",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 17,
    shortName: "VPA K",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 18,
    shortName: "VPA OB",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 19,
    shortName: "HAM",
    name: "Hamburger",
    type: MenuTypeEnum.PIZZA,
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
    shortName: "KL",
    name: "klobása",
    type: MenuTypeEnum.PIZZA,
  },
  {
    id: 3,
    shortName: "HER",
    name: "",
    type: MenuTypeEnum.PIZZA,
  },
  {
    id: 4,
    shortName: "BAV KL",
    name: "",
    type: MenuTypeEnum.PIZZA,
  },
];

export interface IMenu {
  id: number;
  shortName: string;
  name: string;
}
