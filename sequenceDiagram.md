``` mermaid
    sequenceDiagram
    participant Main
    participant FoodTruck
    participant FoodOptions
    participant Sales
    participant API
    participant TransientState

    Main->>FoodTruck: Request HTML

    FoodTruck->>FoodOptions: Request HTML
    FoodOptions->>API: Fetch Data
    API-->>FoodOptions: Return Data
    activate FoodOptions

    loop map()
        FoodOptions->>FoodOptions: Interpolate data into HTML
    end
    FoodOptions-->>FoodTruck: Return HTML

    FoodTruck->>Sales: Request HTML
    Sales->>API: Fetch Data
    API-->>Sales: Return Data
    activate Sales

    loop map()
        Sales->>Sales: Interpolate data into HTML
    end
    Sales-->>FoodTruck: Return HTML
    FoodTruck-->>Main: Display Data

    Main->>FoodTruck: User clicks "Purchase Combo"
    FoodTruck->>TransientState: Set selected values (from DOM)
    TransientState->>API: Save Order
    API-->>TransientState: Confirm Save
    TransientState-->>Main: Display Updated Data