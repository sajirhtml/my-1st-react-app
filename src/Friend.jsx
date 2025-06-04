export default function Friend({friend}){
    const{name, email, id}= friend;
    return (
        <div className="card">
            <p>Friend {id}</p>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}