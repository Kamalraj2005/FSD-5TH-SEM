const root = ReactDom(document.getElementById("root"));

const ChildComponent = ({user}) => {
    return (
        <div id="user-container">
            {user.map((u) => (
                <div>
                    <h1>{u.first_name}</h1>
                    <h2>{u.email}</h2>
                    <h3>{u.gender}</h3>
                    {u.isStudent ? <h4>Student</h4> : <h4>Not a Student</h4>}
                </div>
            ))}
        </div>
    )
}

const ParentComponent = () => {
    let user = [{
    
    }];
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent user={user} />
        </div>
    );
};