# V2DeleteLedgerMetadataRequest

## Example Usage

```typescript
import { V2DeleteLedgerMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2DeleteLedgerMetadataRequest = {
    key: "foo",
    ledger: "ledger001",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `key`               | *string*            | :heavy_check_mark:  | Key to remove.      | foo                 |
| `ledger`            | *string*            | :heavy_check_mark:  | Name of the ledger. | ledger001           |