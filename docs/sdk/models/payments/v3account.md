# V3Account

## Example Usage

```typescript
import { V3Account, V3AccountTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Account = {
  v3AccountTypeEnum: V3AccountTypeEnum.Internal,
  connectorID: "<value>",
  createdAt: new Date("2026-08-31T15:46:47.055Z"),
  id: "<id>",
  provider: "<value>",
  raw: {},
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v3AccountTypeEnum`                                                                           | [payments.V3AccountTypeEnum](../../../sdk/models/payments/v3accounttypeenum.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `v3ConnectorBase`                                                                             | [payments.V3ConnectorBase](../../../sdk/models/payments/v3connectorbase.md)                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v3Metadata`                                                                                  | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | [payments.V3AccountRaw](../../../sdk/models/payments/v3accountraw.md)                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |