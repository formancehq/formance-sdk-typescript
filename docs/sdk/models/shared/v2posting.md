# V2Posting

## Example Usage

```typescript
import { V2Posting } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Posting = {
  amount: BigInt("100"),
  asset: "COIN",
  destination: "users:002",
  source: "users:001",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *BigInt*           | :heavy_check_mark: | N/A                | 100                |
| `asset`            | *string*           | :heavy_check_mark: | N/A                | COIN               |
| `destination`      | *string*           | :heavy_check_mark: | N/A                | users:002          |
| `source`           | *string*           | :heavy_check_mark: | N/A                | users:001          |