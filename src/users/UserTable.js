
function UserTable(props) {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr key={"user-row-"+user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable