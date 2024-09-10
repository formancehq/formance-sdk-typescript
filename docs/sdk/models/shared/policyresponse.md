# PolicyResponse

## Example Usage

```typescript
import { PolicyResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: PolicyResponse = {
  data: {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    id: "XXX",
    ledgerName: "default",
    ledgerQuery: {
      "key": "<value>",
    },
    name: "XXX",
    paymentsPoolID: "XXX",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.Policy](../../../sdk/models/shared/policy.md) | :heavy_check_mark:                                    | N/A                                                   |