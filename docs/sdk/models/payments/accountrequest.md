# AccountRequest

## Example Usage

```typescript
import { AccountRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountRequest = {
  connectorID: "<id>",
  createdAt: new Date("2026-09-21T06:36:02.437Z"),
  reference: "<value>",
  type: "INTERNAL",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable name of the account                                                            |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector the account belongs to                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the account was created at the provider                                                  |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Asset the account is denominated in by default                                                |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the account                                             |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier the account carries at the provider                                                |
| `type`                                                                                        | [payments.AccountType](../../../sdk/models/payments/accounttype.md)                           | :heavy_check_mark:                                                                            | Whether an account is internal to the provider or belongs to an external party                |