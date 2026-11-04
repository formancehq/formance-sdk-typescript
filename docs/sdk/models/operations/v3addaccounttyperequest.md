# V3AddAccountTypeRequest

## Example Usage

```typescript
import { V3AddAccountTypeRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3AddAccountTypeRequest = {
  addAccountTypeRequest: {
    name: "user-checking",
    pattern: "users:{id}:checking",
    persistence: "EPHEMERAL",
    segmentTypes: {
      "id": {
        type: "uuid",
      },
    },
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `addAccountTypeRequest`                                                                 | [ledgerV3.AddAccountTypeRequest](../../../sdk/models/ledgerV3/addaccounttyperequest.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `ledgerName`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Name of the ledger                                                                      |