``` mermaid
graph TD;
    A[Main Module] -->|Imports| B[FoodTruck Module];
    B --> |Imports| C[Sales Module];
    B --> |Imports| D[Entrees Module];
    B --> |Imports| E[Vegetables Module];
    B --> |Imports| F[Sides Module];


