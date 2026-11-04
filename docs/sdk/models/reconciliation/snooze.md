# Snooze

A time-boxed, operator-initiated mute of an alert's notifications. While
`until` is in the future the alert keeps failing and keeps counting
against period-green — only its notifications are suppressed.


## Example Usage

```typescript
import { Snooze } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Snooze = {
  at: new Date("2024-03-07T08:42:45.574Z"),
  by: "ops@buildr.com",
  until: new Date("2025-10-04T04:24:44.941Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the alert was snoozed                                                                    |                                                                                               |
| `by`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Who snoozed the alert                                                                         | ops@buildr.com                                                                                |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Free-text note left by whoever snoozed the alert                                              |                                                                                               |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the mute expires and notifications resume. Must be in the future                         |                                                                                               |