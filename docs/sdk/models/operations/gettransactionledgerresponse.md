# GetTransactionLedgerResponse

## Example Usage

```typescript
import { GetTransactionLedgerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetTransactionLedgerResponse = {
  contentType: "<value>",
  statusCode: 202452,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `transactionResponse`                                                           | [ledger.TransactionResponse](../../../sdk/models/ledger/transactionresponse.md) | :heavy_minus_sign:                                                              | OK                                                                              |