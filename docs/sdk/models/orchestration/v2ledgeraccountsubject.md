# V2LedgerAccountSubject

## Example Usage

```typescript
import { V2LedgerAccountSubject } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2LedgerAccountSubject = {
  identifier: "<value>",
  type: "ACCOUNT",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `identifier`                                               | *string*                                                   | :heavy_check_mark:                                         | Address of the ledger account                              |
| `type`                                                     | *"ACCOUNT"*                                                | :heavy_check_mark:                                         | Discriminator identifying this subject as a ledger account |