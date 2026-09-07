# BankAccountRelatedAccounts

## Example Usage

```typescript
import { BankAccountRelatedAccounts } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccountRelatedAccounts = {
  accountID: "<id>",
  connectorID: "<id>",
  createdAt: new Date("2026-03-17T08:45:45.255Z"),
  id: "<id>",
  provider: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the provider-side account                                                       |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the connector holding the provider-side account                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the bank account was forwarded to this provider                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the link between the bank account and the provider                       |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the payment provider behind the connector                                             |