import axios from "axios";
import { GetStaticProps, NextPage } from "next";

interface Data {
  title: string;
}

interface IsrPageProps {
  data: Data[];
}

const IsrPage: NextPage<IsrPageProps> = (props) => {
  const { data } = props;

  return (
    <ul>
      {data.map((row, key) => (
        <li key={key}>{row.title}</li>
      ))}
    </ul>
  );
};

export default IsrPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const random = Math.floor(Math.random() * 11); //0 a 10

  const { data } = await axios.get(
    random % 2 === 0
      ? "https://jsonplaceholder.typicode.com/albums"
      : "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};


//produto - nome, descricao, caracteristicas tecnicas, preco

//60 - 100 - html gerado

//JavaScript - Fundamentos HTML, CSS | Next