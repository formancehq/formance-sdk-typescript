# ListAccountsPaymentsResponse

## Example Usage

```typescript
import { ListAccountsPaymentsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListAccountsPaymentsResponse = {
  contentType: "<value>",
  statusCode: 726303,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `accountsCursor`                                                          | [payments.AccountsCursor](../../../sdk/models/payments/accountscursor.md) | :heavy_minus_sign:                                                        | OK                                                                        |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |