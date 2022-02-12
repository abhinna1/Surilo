import 'bootstrap/dist/css/bootstrap.min.css';
function UserRow(props){

    const info = props.info;
    return (
      <tr>
        <th scope="row">{info.UID}</th>
        <td>{info.firstName}</td>
        <td>{info.lastName}</td>
        <td>{info.username}</td>
        <td>{info.dob}</td>
        <td>{info.gender}</td>
        <td>{info.email}</td>
        <td><button>Delete</button> <button>Edit</button></td>
      </tr>
    )
}

export default UserRow;