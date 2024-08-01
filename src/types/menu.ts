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

/*
{
    id: 1,
    shortName: "PAR H",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 2,
    shortName: "PAR K",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 3,
    shortName: "PAR HK",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 4,
    shortName: "LANG K",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 5,
    shortName: "LANG T",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 6,
    shortName: "LANG KT",
    name: "langoš",
    type: MenuTypeEnum.KITCHEN,
  },
  */
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
    shortName: "LANG KT",
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
    shortName: "PAR HK",
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
    shortName: "POC",
    name: "Pocevka",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 15,
    shortName: "POL",
    name: "",
    type: MenuTypeEnum.KITCHEN,
  },
  {
    id: 16,
    shortName: "KL",
    name: "",
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
