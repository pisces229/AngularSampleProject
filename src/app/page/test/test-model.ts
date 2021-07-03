export interface TestModel {
}
// Ajax
export interface TestAjaxInsertInputModel {
  ROW?: string;
  NAME?: string;
  MAKE_DATE?: Date;
  SALE_AMT?: number;
  SALE_DATE?: Date;
  TAX?: number;
  REMARK?: string;
  UPDATE_USER_ID?: string;
  UPDATE_PROG_CD?: string;
  UPDATE_DATE_TIME?: Date;
}
export interface TestAjaxQueryInputModel {
  NAME?: string;
  MAKE_DATE?: Date;
  SALE_AMT?: number;
  SALE_DATE?: Date;
}
export interface TestAjaxQueryOutputModel {
  ROW?: string;
  NAME?: string;
  MAKE_DATE?: Date;
  SALE_AMT?: number;
  SALE_DATE?: Date;
  TAX?: number;
  REMARK?: string;
  UPDATE_USER_ID?: string;
  UPDATE_PROG_CD?: string;
  UPDATE_DATE_TIME?: Date;
}
export interface TestAjaxUpdateInputModel {
  ROW?: string;
  NAME?: string;
  MAKE_DATE?: Date;
  SALE_AMT?: number;
  SALE_DATE?: Date;
  TAX?: number;
  REMARK?: string;
  UPDATE_USER_ID?: string;
  UPDATE_PROG_CD?: string;
  UPDATE_DATE_TIME?: Date;
}
export interface TestAjaxValueInputModel {
  Name?: string;
  Count?: number;
  Date?: Date;
}
export interface TestAjaxValueOutputModel {
  Name?: string;
  Count?: number;
  Date?: Date;
}
