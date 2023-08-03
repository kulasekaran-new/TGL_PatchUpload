import { Subscription } from "rxjs";

export class FileUploadModel {
  data: File | any;
  state: string | any;
  inProgress: boolean | any;
  progress: number | any;
  canRetry: boolean | any;
  canCancel: boolean | any;
  sub?: Subscription;
}