# V2VolumesWithBalanceCursorResponse

## Example Usage

```typescript
import { V2VolumesWithBalanceCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2VolumesWithBalanceCursorResponse = {
  cursor: {
    data: [
      {
        account: "93337908",
        asset: "<value>",
        balance: 75433n,
        input: 396749n,
        output: 124814n,
      },
    ],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                      | [ledger.V2VolumesWithBalanceCursorResponseCursor](../../../sdk/models/ledger/v2volumeswithbalancecursorresponsecursor.md)     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `resource`                                                                                                                    | [ledger.V2VolumesWithBalanceCursorResponseResource](../../../sdk/models/ledger/v2volumeswithbalancecursorresponseresource.md) | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |