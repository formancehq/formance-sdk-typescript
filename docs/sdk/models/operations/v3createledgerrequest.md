# V3CreateLedgerRequest

## Example Usage

```typescript
import { V3CreateLedgerRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3CreateLedgerRequest = {
  createLedgerRequest: {
    accountTypes: {
      "user-checking": {
        name: "user-checking",
        pattern: "users:{id}:checking",
        persistence: "EPHEMERAL",
        segmentTypes: {
          "id": {
            type: "uuid",
          },
        },
      },
    },
    initialSchema: [
      {
        key: "color",
        targetType: "ledger",
        type: "string",
      },
    ],
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `createLedgerRequest`                                                               | [ledgerV3.CreateLedgerRequest](../../../sdk/models/ledgerV3/createledgerrequest.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_minus_sign:                                                                  | Idempotency key for the request                                                     |
| `ledgerName`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | Name of the ledger                                                                  |