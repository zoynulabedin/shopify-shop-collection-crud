import { Card, Tabs, Button, Form } from "@shopify/polaris";
import { allFaq } from "../data/faq.server";
import { useParams, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];
const FaqSingleGroup = () => {
  const [filterItem, setFilterItem] = useState([]);
  const { faqs } = useLoaderData();

  const params = useParams();
  useEffect(() => {
    const items = faqs.filter((item) => item.group === params.group);
    setFilterItem(items);
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View Products</th>
            </tr>
            {filterItem?.map((item) => (
              <tr key={item.id} style={{ border: 0 }}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{item.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default FaqSingleGroup;

export async function loader() {
  let faqs = await allFaq();
  return { faqs };
}
