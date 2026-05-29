# V3GetAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3GetAccountResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetAccountResponse = {
  v3Account: {
    v3AccountTypeEnum: V3AccountTypeEnum.External,
    connectorID: "<value>",
    createdAt: new Date("2026-06-02T09:23:56.902Z"),
    id: "<id>",
    provider: "<value>",
    raw: {},
    reference: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `v3Account`                                                     | [payments.V3Account](../../../sdk/models/payments/v3account.md) | :heavy_check_mark:                                              | N/A                                                             |