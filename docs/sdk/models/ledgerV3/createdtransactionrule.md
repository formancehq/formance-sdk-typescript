# CreatedTransactionRule

Rule scoped to MirrorCreatedTransaction. Inside `match`, `log` is the created-transaction proto directly (e.g. `log.metadata["k"]`).


## Example Usage

```typescript
import { CreatedTransactionRule } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreatedTransactionRule = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `actions`                                                                                       | [ledgerV3.CreatedTransactionAction](../../../sdk/models/ledgerV3/createdtransactionaction.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `match`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |