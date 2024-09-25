# V2ActivityCreateTransactionOutput

## Example Usage

```typescript
import { V2ActivityCreateTransactionOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityCreateTransactionOutput = {
  data: [
    {
      metadata: {
        "admin": "true",
      },
      postings: [
        {
          amount: BigInt("100"),
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      timestamp: new Date("2022-08-10T08:31:29.759Z"),
      txid: BigInt("693724"),
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.OrchestrationV2Transaction](../../../sdk/models/shared/orchestrationv2transaction.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |