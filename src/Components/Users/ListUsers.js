import React from 'react';
import './Users.css';

function ListUsers() {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUsers(json.data);
        console.log(users)
      };
    React.useEffect(() => {
    f();
    }, []);
    /*return (
        <div className="ListUsers">
           <div className="flex">
            {users.length &&
            users.map((user) => {
                return (
                <div key={user.id} className="userCard" onClick={(e)=>{window.location.href = `user/${user.id}`}} >
                    <p>
                    <strong>{user.first_name}</strong>
                    </p>
                    <p>{user.email}</p>
                    <img key={user.avatar} src={user.avatar} />
                </div>
                );
            })}
      </div>
        </div>
    );*/

    return (
        <div className="ListUsers container">
            <br/>
            <h1 className="display-6 fw-bold mb-4">Lista de usuarios<span className="text-primary">.</span></h1>
           <div className="flex div-list">
           <table class="table table-hover">
               
                   <thead class="thead-light">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo electrónico</th>
                        <th scope="col">Foto</th>
                        </tr>
                    </thead>
            {users.length &&
            users.map((user) => {
                return (
                        <tbody key={user.id} className="user-card" onClick={(e)=>{window.location.href = `user/${user.id}`}}>
                            <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.first_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <img className="img-user" key={user.avatar} src={user.avatar} />
                            </td>
                            </tr>
                        </tbody>
                );
            })}
            </table>
      </div>
        </div>
    );
}

export default ListUsers;
