# V3CreateAccountResponse

## Example Usage

```typescript
import { V3CreateAccountResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreateAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2026-10-23T12:24:43.460Z"),
    id: "<id>",
    provider: "<value>",
    raw: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    reference: "<value>",
    type: "INTERNAL",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [payments.V3Account](../../../sdk/models/payments/v3account.md) | :heavy_check_mark:                                              | N/A                                                             |