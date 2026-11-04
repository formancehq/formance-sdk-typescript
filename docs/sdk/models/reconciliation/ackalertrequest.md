# AckAlertRequest

## Example Usage

```typescript
import { AckAlertRequest } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: AckAlertRequest = {
  by: "ops@buildr.com",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `by`                                              | *string*                                          | :heavy_check_mark:                                | Who is acknowledging the alert                    | ops@buildr.com                                    |
| `note`                                            | *string*                                          | :heavy_minus_sign:                                | Free-text note to record with the acknowledgement |                                                   |