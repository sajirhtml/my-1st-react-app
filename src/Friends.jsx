import { use } from "react";
import Friend from "./Friend";

export default function Friends({promiseFriends}) {
    const friends = use(promiseFriends)
    return (
        <div className="card">
        <h3>Friends : {friends.length}</h3>
        {
            friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
        }
        </div>
    );
}