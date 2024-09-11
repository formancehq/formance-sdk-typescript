# ForwardBankAccountResponse

## Example Usage

```typescript
import { ForwardBankAccountResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ForwardBankAccountResponse = {
  contentType: "<value>",
  statusCode: 688661,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `bankAccountResponse`                                                           | [shared.BankAccountResponse](../../../sdk/models/shared/bankaccountresponse.md) | :heavy_minus_sign:                                                              | OK                                                                              |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |