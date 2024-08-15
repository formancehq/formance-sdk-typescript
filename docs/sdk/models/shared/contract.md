# Contract

## Example Usage

```typescript
import { Contract } from "@formance/formance-sdk/sdk/models/shared";

let value: Contract = {
    account: "users:001",
    expr: {},
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `account`                                         | *string*                                          | :heavy_minus_sign:                                | N/A                                               | users:001                                         |
| `expr`                                            | [shared.Expr](../../../sdk/models/shared/expr.md) | :heavy_check_mark:                                | N/A                                               |                                                   |