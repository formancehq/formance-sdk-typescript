# Contract

## Example Usage

```typescript
import { Contract } from "@formance/formance-sdk/sdk/models/ledger";

let value: Contract = {
  account: "users:001",
  expr: {},
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `account`                                         | *string*                                          | :heavy_minus_sign:                                | N/A                                               | users:001                                         |
| `expr`                                            | [ledger.Expr](../../../sdk/models/ledger/expr.md) | :heavy_check_mark:                                | N/A                                               |                                                   |