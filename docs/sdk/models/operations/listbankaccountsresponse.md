# ListBankAccountsResponse

## Example Usage

```typescript
import { ListBankAccountsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListBankAccountsResponse = {
  bankAccountsCursor: {
    cursor: {
      data: [
        {
          connectorID: "<value>",
          country: "Andorra",
          createdAt: new Date("2022-06-30T18:35:37.950Z"),
          id: "<id>",
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  statusCode: 828940,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `bankAccountsCursor`                                                          | [shared.BankAccountsCursor](../../../sdk/models/shared/bankaccountscursor.md) | :heavy_minus_sign:                                                            | OK                                                                            |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |