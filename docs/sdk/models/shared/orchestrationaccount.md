# OrchestrationAccount

## Example Usage

```typescript
import { OrchestrationAccount } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationAccount = {
    address: "users:001",
    effectiveVolumes: {
        USD: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
        EUR: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
    },
    metadata: {
        admin: "true",
    },
    volumes: {
        USD: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
        EUR: {
            balance: BigInt("90"),
            input: BigInt("100"),
            output: BigInt("10"),
        },
    },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | users:001                                                                                                      |
| `effectiveVolumes`                                                                                             | Record<string, [shared.Volume](../../../sdk/models/shared/volume.md)>                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
| `metadata`                                                                                                     | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                    |
| `volumes`                                                                                                      | Record<string, [shared.Volume](../../../sdk/models/shared/volume.md)>                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |