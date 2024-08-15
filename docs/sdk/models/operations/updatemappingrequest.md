# UpdateMappingRequest

## Example Usage

```typescript
import { UpdateMappingRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateMappingRequest = {
    mapping: {
        contracts: [
            {
                account: "users:001",
                expr: {},
            },
        ],
    },
    ledger: "ledger001",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `mapping`                                               | [shared.Mapping](../../../sdk/models/shared/mapping.md) | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `ledger`                                                | *string*                                                | :heavy_check_mark:                                      | Name of the ledger.                                     | ledger001                                               |