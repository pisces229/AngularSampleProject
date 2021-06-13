export class CommonAjaxOutputModel<T> {
  Success!: boolean;
  Message!: string;
  Data!: T;
}
export class CommonAjaxPageModel<T> {
  Data!: T;
  Page!: CommonPageModel;
}
export class CommonPageModel {
  PageNo!: number;
  PageSize!: number;
  TotalCount!: number;
}
