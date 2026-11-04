# Ack

Record of who acknowledged an alert and when

## Example Usage

```typescript
import { Ack } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Ack = {
  at: new Date("2025-05-05T21:00:59.310Z"),
  by: "ops@buildr.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the alert was acknowledged                                                               |                                                                                               |
| `by`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Who acknowledged the alert                                                                    | ops@buildr.com                                                                                |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Free-text note left by whoever acknowledged the alert                                         |                                                                                               |