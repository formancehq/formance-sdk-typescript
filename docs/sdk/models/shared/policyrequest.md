# PolicyRequest

## Example Usage

```typescript
import { PolicyRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: PolicyRequest = {
  ledgerName: "default",
  ledgerQuery: {
    "key": "<value>",
  },
  name: "XXX",
  paymentsPoolID: "XXX",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `ledgerName`          | *string*              | :heavy_check_mark:    | N/A                   | default               |
| `ledgerQuery`         | Record<string, *any*> | :heavy_check_mark:    | N/A                   |                       |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   | XXX                   |
| `paymentsPoolID`      | *string*              | :heavy_check_mark:    | N/A                   | XXX                   |