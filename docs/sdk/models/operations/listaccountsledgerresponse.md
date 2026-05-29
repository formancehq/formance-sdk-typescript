# ListAccountsLedgerResponse

## Example Usage

```typescript
import { ListAccountsLedgerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListAccountsLedgerResponse = {
  contentType: "<value>",
  statusCode: 940821,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `accountsCursorResponse`                                                              | [ledger.AccountsCursorResponse](../../../sdk/models/ledger/accountscursorresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `errorResponse`                                                                       | [ledger.ErrorResponse](../../../sdk/models/ledger/errorresponse.md)                   | :heavy_minus_sign:                                                                    | Not found                                                                             |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |