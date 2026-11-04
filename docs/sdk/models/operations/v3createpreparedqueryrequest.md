# V3CreatePreparedQueryRequest

## Example Usage

```typescript
import { V3CreatePreparedQueryRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3CreatePreparedQueryRequest = {
  createPreparedQueryRequest: {
    name: "<value>",
    target: "LOGS",
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `createPreparedQueryRequest`                                                                      | [ledgerV3.CreatePreparedQueryRequest](../../../sdk/models/ledgerV3/createpreparedqueryrequest.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `idempotencyKey`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | Idempotency key for the request                                                                   |
| `ledgerName`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | Name of the ledger                                                                                |