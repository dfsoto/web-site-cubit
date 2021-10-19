import React from 'react';
import './Users.css';
import {
    useParams
  } from "react-router-dom";
function DetailUser(){
    const { id } = useParams();
    const [user, setUser] = React.useState([]);
    const f = async () => {
        const res = await fetch(`https://reqres.in/api/users/${id}`);
        const json = await res.json();
        setUser(json.data);
      };
    React.useEffect(() => {
    f();
    }, []);
    return (
        <div className="DetailUser">
           <div className="flex container" key={user.id}>
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div class="card flex-md-row mb-4 box-shadow h-md-250">
                                <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">Detalle de usuario</strong>
                                <h2 class="mb-0">
                                    <a class="text-dark" href="#">{user.first_name + ' ' + user.last_name}</a>
                                </h2>
                                <br/>
                                <p class="card-text mb-auto">
                                <div class="mb-1 text-muted">
                                    {user.email}
                                </div>
                                </p>
                                </div>
                                <img
                                    className="card-img-user card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                                    alt="Thumbnail [200x250]"
                                    key={user.avatar}
                                    src={user.avatar}
                                    data-holder-rendered="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailUser;
