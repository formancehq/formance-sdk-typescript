# PaymentslistAccountsResponse

## Example Usage

```typescript
import { PaymentslistAccountsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { AccountType } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentslistAccountsResponse = {
  accountsCursor: {
    cursor: {
      data: [
        {
          accountName: "<value>",
          connectorID: "<value>",
          createdAt: new Date("2024-03-16T18:32:36.649Z"),
          defaultAsset: "<value>",
          defaultCurrency: "<value>",
          id: "<id>",
          metadata: {
            "key": "<value>",
          },
          raw: {},
          reference: "<value>",
          type: AccountType.Unknown,
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  statusCode: 962189,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accountsCursor`                                                      | [shared.AccountsCursor](../../../sdk/models/shared/accountscursor.md) | :heavy_minus_sign:                                                    | OK                                                                    |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |