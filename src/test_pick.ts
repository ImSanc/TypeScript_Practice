interface User2 {
    name: string;
    age: number;
    email: string;
    id : string;
}

type props = Pick<User2, "name" | "age">;

function getUser(props: props) {
    return props;
}

//this is how you use Pick to select only the required properties
getUser({name: "John", age: 30});