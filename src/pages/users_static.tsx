import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface User {
  name: string;
}

const fetcher = (url: string) => {
  return axios.get(url).then((res) => res.data);
};

const UsersPage: NextPage = (props) => {
  const [users, setUsers] = useState<User[]>([]);

  const { data, error } = useSWR("http://localhost:3000/api/users", fetcher, {
    fallbackData: users,
    refreshInterval: 5,
  });

  //data // undefined
  //error //undefined

  useEffect(() => {
    if (!data) {
      return;
    }

    setUsers(data);
  }, [data]);

  useEffect(() => {
    if (!error) {
      return;
    }

    if(error.response.status === 401){
      Router.push('/login');
    }
    
  }, [error]);

  return (
    data && (
      <ul>
        {users.map((user, key) => (
          <li key={key}>{user.name}</li>
        ))}
      </ul>
    )
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};