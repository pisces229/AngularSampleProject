export class CommonAjaxOutputModel<T> {
  Success!: boolean;
  Message!: string;
  Data!: T;
}
