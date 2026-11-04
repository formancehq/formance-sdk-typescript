# GetTransactionResponse

## Example Usage

```typescript
import { GetTransactionResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: GetTransactionResponse = {
  data: {
    transaction: {
      id: 160096,
      metadata: {
        "key": "<value>",
      },
      postings: [
        {
          amount: 956606n,
          asset: "<value>",
          color: "magenta",
          destination: "<value>",
          source: "<value>",
        },
      ],
      reverted: true,
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [ledgerV3.GetTransactionResponseData](../../../sdk/models/ledgerV3/gettransactionresponsedata.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |