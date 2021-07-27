import { WFI, WFR, ACC, RJECTED } from "./types";
export function toText(type) {
  switch (type) {
    case WFI:
      return "Awaiting interview";
    case WFR:
      return "Waiting for reply";
    case ACC:
      return "Accepted";
    case RJECTED:
      return "Rejected";
    default:
      return "";
  }
}
