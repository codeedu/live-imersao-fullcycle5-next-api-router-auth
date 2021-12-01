import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const ProductPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>{id}</div>;
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      //users: data,
    },
    revalidate: 20
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    paths: [{ params: { id: "123" } }],
    fallback: true,
  };
};

// /product/[id]
