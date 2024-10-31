import { useParams } from "@remix-run/react";
import { DOMAIN } from "~/server/domain";

export default function Template() {
  const  {id} = useParams();
  return <div>{id}</div>;
}