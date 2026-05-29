# V2ChartSegment

Segment within a chart of accounts

## Example Usage

```typescript
import { V2ChartSegment } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2ChartSegment = {
  additionalProperties: {
    "users": {
      additionalProperties: {
        "$userID": {
          dotPattern: "^[0-9]{16}$",
        },
      },
    },
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `dotMetadata`                                                                                         | Record<string, [ledger.V2ChartAccountMetadata](../../../sdk/models/ledger/v2chartaccountmetadata.md)> | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `dotPattern`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `dotSelf`                                                                                             | [ledger.DotSelf](../../../sdk/models/ledger/dotself.md)                                               | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `additionalProperties`                                                                                | Record<string, [ledger.V2ChartSegment](../../../sdk/models/ledger/v2chartsegment.md)>                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | {<br/>"users": {<br/>"$userID": {<br/>".pattern": "^[0-9]{16}$"<br/>}<br/>}<br/>}                     |
| `v2ChartAccountRules`                                                                                 | [ledger.V2ChartAccountRules](../../../sdk/models/ledger/v2chartaccountrules.md)                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |