# RevertedTransaction

## Example Usage

```typescript
import { RevertedTransaction } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: RevertedTransaction = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `revertTransaction`                                                                 | [ledgerV3.TransactionResponse](../../../sdk/models/ledgerV3/transactionresponse.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `revertedTransactionId`                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | ID of the original transaction that was reverted                                    |