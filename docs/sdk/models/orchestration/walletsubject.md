# WalletSubject

## Example Usage

```typescript
import { WalletSubject } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WalletSubject = {
  identifier: "<value>",
  type: "WALLET",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `balance`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | Name of the balance within the wallet. Defaults to the main balance when omitted |
| `identifier`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Identifier of the wallet                                                         |
| `type`                                                                           | *"WALLET"*                                                                       | :heavy_check_mark:                                                               | Discriminator identifying this subject as a wallet                               |