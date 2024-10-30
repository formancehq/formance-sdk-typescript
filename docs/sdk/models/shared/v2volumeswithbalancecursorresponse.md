# V2VolumesWithBalanceCursorResponse

## Example Usage

```typescript
import { V2VolumesWithBalanceCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2VolumesWithBalanceCursorResponse = {
  cursor: {
    data: [
      {
        account: "20211601",
        asset: "<value>",
        balance: BigInt("134173"),
        input: BigInt("316541"),
        output: BigInt("298750"),
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                  | [shared.V2VolumesWithBalanceCursorResponseCursor](../../../sdk/models/shared/v2volumeswithbalancecursorresponsecursor.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |