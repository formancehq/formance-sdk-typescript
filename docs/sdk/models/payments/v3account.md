# V3Account

An account held at a payment provider, surfaced through a connector

## Example Usage

```typescript
import { V3Account } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Account = {
  connectorID: "<value>",
  createdAt: new Date("2025-11-04T02:49:38.518Z"),
  id: "<id>",
  provider: "<value>",
  raw: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  reference: "<value>",
  type: "EXTERNAL",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connector`                                                                                   | [payments.V3ConnectorBase](../../../sdk/models/payments/v3connectorbase.md)                   | :heavy_minus_sign:                                                                            | Summary of a connector, without its configuration                                             |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the account belongs to                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the account was created at the provider                                                  |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Asset the account is denominated in by default                                                |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the account within Formance                                              |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable name of the account                                                            |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the payment provider behind the connector                                             |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | The provider's original payload, passed through untouched                                     |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the account carries at the provider                                                |
| `type`                                                                                        | [payments.V3AccountTypeEnum](../../../sdk/models/payments/v3accounttypeenum.md)               | :heavy_check_mark:                                                                            | Whether an account is internal to the provider or belongs to an external party                |