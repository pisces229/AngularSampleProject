import { CommonPageModel } from "./common-page-model";

export class CommonAjaxPageModel<T> {
  Data!: T;
  Page!: CommonPageModel;
}
