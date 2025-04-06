``` mermaid
graph TD;
    A[Main Module] -->|Imports| B[FoodTruck Module];
    B --> |Imports| C[Sales Module];
    B --> |Imports| D[Entrees Module];
    B --> |Imports| E[Vegetables Module];
    B --> |Imports| F[Sides Module];
    B --> |Imports| H[Save Order Module];

    D --> |Imports| G[Transient State Module]
    E --> |Imports| G[Transient State Module]
    F --> |Imports| G[Transient State Module]
    H --> |Imports| G[Transient State Module]