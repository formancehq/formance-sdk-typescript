# StageSendSourceWallet

Take the funds from a wallet

## Example Usage

```typescript
import { StageSendSourceWallet } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSendSourceWallet = {
  id: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `balance`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | Name of the balance within the wallet. Defaults to the main balance when omitted |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Identifier of the wallet to take funds from                                      |