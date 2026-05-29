# Mapping

## Example Usage

```typescript
import { Mapping } from "@formance/formance-sdk/sdk/models/ledger";

let value: Mapping = {
  contracts: [
    {
      account: "users:001",
      expr: {},
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `contracts`                                                 | [ledger.Contract](../../../sdk/models/ledger/contract.md)[] | :heavy_check_mark:                                          | N/A                                                         |