# IngestionProgress

## Example Usage

```typescript
import { IngestionProgress } from "@formance/formance-sdk/sdk/models/connectivity";

let value: IngestionProgress = {
  current: 929967,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `current`                                                                                                                                            | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Plugin-defined progress figure, not a universal sequence or health measure. Absence differs from zero; no total or completion percentage is implied. |