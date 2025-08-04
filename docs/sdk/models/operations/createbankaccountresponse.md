# CreateBankAccountResponse

## Example Usage

```typescript
import { CreateBankAccountResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateBankAccountResponse = {
  contentType: "<value>",
  statusCode: 517642,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `bankAccountResponse`                                                           | [shared.BankAccountResponse](../../../sdk/models/shared/bankaccountresponse.md) | :heavy_minus_sign:                                                              | OK                                                                              |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |