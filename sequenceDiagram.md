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
        FoodOptions-->>FoodTruck: Return HTML


        FoodTruck->>Sales: Request HTML
        Sales->>API: Fetch Data
        API-->>Sales: Return Data
        Sales-->>FoodTruck: Return HTML
        FoodTruck-->>Main: Display Data

        Main->>TransientState: Place Order
        TransientState->>API: Save Order
        API-->>TransientState: Order Saved 
        TransientState-->>Main: Display Updated Data