# SnoozeAlertRequest

Mute an alert's notifications until `until` (which must be in the future).

## Example Usage

```typescript
import { SnoozeAlertRequest } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: SnoozeAlertRequest = {
  by: "ops@buildr.com",
  until: new Date("2026-05-20T20:56:49.637Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `by`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Who is snoozing the alert                                                                     | ops@buildr.com                                                                                |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Free-text note to record with the snooze                                                      |                                                                                               |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the mute expires and notifications resume. Must be in the future                         |                                                                                               |