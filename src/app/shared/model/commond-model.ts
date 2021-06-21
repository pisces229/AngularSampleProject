export interface CommonAjaxOutputModel<T> {
  Success?: boolean;
  Message?: string;
  Data?: T;
}
export interface CommonAjaxPageModel<T> {
  Data?: T;
  Page?: CommonPageModel;
}
export interface CommonPageModel {
  PageNo?: number;
  PageSize?: number;
  TotalCount?: number;
}
