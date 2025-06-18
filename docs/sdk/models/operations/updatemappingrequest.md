# UpdateMappingRequest

## Example Usage

```typescript
import { UpdateMappingRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateMappingRequest = {
  ledger: "ledger001",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `mapping`                                               | [shared.Mapping](../../../sdk/models/shared/mapping.md) | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `ledger`                                                | *string*                                                | :heavy_check_mark:                                      | Name of the ledger.                                     | ledger001                                               |