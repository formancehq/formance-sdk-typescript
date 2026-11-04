# CreatedTransactionRuleRead

Rule scoped to MirrorCreatedTransaction. Inside `match`, `log` is the created-transaction proto directly (e.g. `log.metadata["k"]`).


## Example Usage

```typescript
import { CreatedTransactionRuleRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreatedTransactionRuleRead = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actions`                                                                                               | [ledgerV3.CreatedTransactionActionRead](../../../sdk/models/ledgerV3/createdtransactionactionread.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `match`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |