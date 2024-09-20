# TasksCursorData

## Example Usage

```typescript
import { PaymentStatus, TasksCursorData } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorData = {
  connectorID: "<value>",
  createdAt: new Date("2023-04-29T17:54:19.305Z"),
  descriptor: {},
  id: "b408f05e-3d48-4fda-b313-a1f5fd94259c",
  state: {},
  status: PaymentStatus.Pending,
  updatedAt: new Date("2024-02-02T18:11:10.528Z"),
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

