type TableRowType = {
  title: string;
  number: number;
}

type OnlyKeysTableRowType = keyof TableRowType;

type CardInfoType = {
  title: string;
  subTitle: string;
  dateStart: number;
  dateEnd: number;
  data: TableRowType[];
}

export type {TableRowType, CardInfoType, OnlyKeysTableRowType};
