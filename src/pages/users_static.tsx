import axios from "axios";
import { GetStaticProps, NextPage } from "next";

interface User {
  name: string;
}

interface UsersPageProps {
  users: User[];
}

const UsersPage: NextPage<UsersPageProps> = (props) => {
  const { users } = props;

  return (
    <ul>
      {users.map((user, key) => (
        <li key={key}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      users: data,
    },
  };
};
