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
      postings: [],
      reference: "ref:001",
      timestamp: new Date("2025-03-28T10:26:16.538Z"),
      txid: 910526n,
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.OrchestrationV2Transaction](../../../sdk/models/shared/orchestrationv2transaction.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |