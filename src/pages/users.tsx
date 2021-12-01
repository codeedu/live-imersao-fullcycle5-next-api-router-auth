import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

interface User {
  name: string;
}

interface UsersPageProps {
    users: User[];
}

const UsersPage: NextPage<UsersPageProps> = (props) => {
    const {users} = props;
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     (async () => {
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setUsers(data);
//     })();
//   }, []);

  return (
    <ul>
      {users.map((user, key) => (
        <li key={key}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
      props: {
          users: data
      }
  }
};
