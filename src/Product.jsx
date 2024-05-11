function Producto () {
    return <h1>Producto</h1>
}

export function UserCard ({name, amount, married, address, greet}) {
    return <div>
        <h1>{name}</h1>
        <p>Point: {amount}</p>
        <p>Is Married?: {married ? "Married" : "Single"}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Address: {address.street}</li>
        </ul>
    </div>
}

export default Producto;