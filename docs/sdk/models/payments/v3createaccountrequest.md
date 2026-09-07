# V3CreateAccountRequest

## Example Usage

```typescript
import { V3CreateAccountRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreateAccountRequest = {
  accountName: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2026-01-20T05:59:45.636Z"),
  reference: "<value>",
  type: "INTERNAL",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name of the account                                                            |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the account belongs to                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the account was created at the provider                                                  |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Asset the account is denominated in by default                                                |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the resource                                            |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the account carries at the provider                                                |
| `type`                                                                                        | [payments.V3AccountTypeEnum](../../../sdk/models/payments/v3accounttypeenum.md)               | :heavy_check_mark:                                                                            | Whether an account is internal to the provider or belongs to an external party                |