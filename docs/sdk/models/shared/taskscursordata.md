# TasksCursorData

## Example Usage

```typescript
import { PaymentStatus, TasksCursorData } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorData = {
  connectorID: "<value>",
  createdAt: new Date("2024-05-17T10:23:56.087Z"),
  descriptor: {},
  id: "970ff308-fe94-45e7-b234-17ea1045cf6a",
  state: {},
  status: PaymentStatus.DisputeWon,
  updatedAt: new Date("2023-11-29T06:19:47.637Z"),
};
```

## Supported Types

### `shared.TaskStripe`

```typescript
const value: shared.TaskStripe = /* values here */
```

### `shared.TaskWise`

```typescript
const value: shared.TaskWise = /* values here */
```

### `shared.TaskCurrencyCloud`

```typescript
const value: shared.TaskCurrencyCloud = /* values here */
```

### `shared.TaskDummyPay`

```typescript
const value: shared.TaskDummyPay = /* values here */
```

### `shared.TaskModulr`

```typescript
const value: shared.TaskModulr = /* values here */
```

### `shared.TaskBankingCircle`

```typescript
const value: shared.TaskBankingCircle = /* values here */
```

### `shared.TaskMangoPay`

```typescript
const value: shared.TaskMangoPay = /* values here */
```

### `shared.TaskMoneycorp`

```typescript
const value: shared.TaskMoneycorp = /* values here */
```

