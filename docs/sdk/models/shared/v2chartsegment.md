# V2ChartSegment

Segment within a chart of accounts

## Example Usage

```typescript
import { V2ChartSegment } from "@formance/formance-sdk/sdk/models/shared";

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
| `dotMetadata`                                                                                         | Record<string, [shared.V2ChartAccountMetadata](../../../sdk/models/shared/v2chartaccountmetadata.md)> | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `dotPattern`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `dotRules`                                                                                            | [shared.V2ChartAccountRules](../../../sdk/models/shared/v2chartaccountrules.md)                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `dotSelf`                                                                                             | [shared.DotSelf](../../../sdk/models/shared/dotself.md)                                               | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `additionalProperties`                                                                                | Record<string, [shared.V2ChartSegment](../../../sdk/models/shared/v2chartsegment.md)>                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | {<br/>"users": {<br/>"$userID": {<br/>".pattern": "^[0-9]{16}$"<br/>}<br/>}<br/>}                     |