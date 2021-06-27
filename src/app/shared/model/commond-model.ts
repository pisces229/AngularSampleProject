export interface CommonAjaxOutputModel<T> {
<<<<<<< HEAD
  Success: boolean;
  Message: string;
  Data: T;
}
export interface CommonAjaxPageModel<T> {
  Data: T;
  Page: CommonPageModel;
}
export interface CommonPageModel {
  PageNo: number;
  PageSize: number;
  TotalCount?: number;
}
export interface CommonModeModel {
  Enable?: boolean;
  Hidden?: boolean;
=======
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
>>>>>>> e2ea3dd3045eb3c838d782d40425a38fd15bccc8
}
