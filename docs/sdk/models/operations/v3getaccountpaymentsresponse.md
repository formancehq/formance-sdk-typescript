# V3GetAccountPaymentsResponse

## Example Usage

```typescript
import { V3GetAccountPaymentsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetAccountPaymentsResponse = {
  contentType: "<value>",
  statusCode: 932935,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `v3GetAccountResponse`                                                                | [payments.V3GetAccountResponse](../../../sdk/models/payments/v3getaccountresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |