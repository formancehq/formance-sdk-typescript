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
      timestamp: new Date("2023-01-27T23:27:37.963Z"),
      txid: BigInt("619772"),
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.OrchestrationV2Transaction](../../../sdk/models/shared/orchestrationv2transaction.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |