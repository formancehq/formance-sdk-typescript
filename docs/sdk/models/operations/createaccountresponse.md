# CreateAccountResponse

## Example Usage

```typescript
import { CreateAccountResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateAccountResponse = {
  contentType: "<value>",
  statusCode: 592387,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountResponse`                                                           | [payments.AccountResponse](../../../sdk/models/payments/accountresponse.md) | :heavy_minus_sign:                                                          | OK                                                                          |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |