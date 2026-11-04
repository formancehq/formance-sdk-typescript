# CreateTransactionResponseData

## Example Usage

```typescript
import { CreateTransactionResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreateTransactionResponseData = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `accountMetadata`                                                                   | Record<string, Record<string, *any*>>                                               | :heavy_minus_sign:                                                                  | Metadata for accounts involved in the transaction                                   |
| `transaction`                                                                       | [ledgerV3.TransactionResponse](../../../sdk/models/ledgerV3/transactionresponse.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |