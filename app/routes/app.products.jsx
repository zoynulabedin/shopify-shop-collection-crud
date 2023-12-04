import React from "react";
import {
  Box,
  Card,
  Divider,
  Layout,
  Page,
  Text,
  LegacyCard,
  Icon,
  Button,
} from "@shopify/polaris";
import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "@remix-run/react";
import shopify from "../shopify.server";
import swal from "sweetalert";
import { DeleteMajor, EditMajor, ViewMajor } from "@shopify/polaris-icons";

const HandleDeleteCollection = (id) => {
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete this Brand?",
    icon: "warning",
    dangerMode: true,
  }).then((willDelete) => {
    alert(id);
    if (willDelete) {
      swal("Deleted!", "Your imaginary file has been deleted!", "success");
    }
  });
};
export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
      query {
        products(first: 10, reverse: true) {
          edges {
            node {
              id
              title
              description
              handle
              resourcePublicationOnCurrentPublication {
                publication {
                  name
                  id
                }
                publishDate
                isPublished
              }
            }
          }
        }
      }`
  );
  const data = await response.json();

  console.log("products==", data.data.products.edges);
  return { data: data.data.products.edges };
};
const Products = () => {
  const { data } = useLoaderData();
  const itemCollections = data.map((collection) => {
    const item = collection.node;
    return { ...item };
  });
  console.log("item===", itemCollections);
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <LegacyCard title="Products Details" sectioned>
            <table style={{ width: "100%", textAlign: "left" }}>
              <tr>
                <th>Collections Name</th>
                <th>sortOrder</th>
                <th>Action</th>
              </tr>
              {itemCollections.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>something</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <Button>
                      <Icon source={ViewMajor} tone="base" />
                    </Button>
                    <Button>
                      <Icon source={EditMajor} tone="base" />
                    </Button>
                    <Button
                      onClick={() => HandleDeleteCollection(item.node.id)}
                    >
                      <Icon source={DeleteMajor} tone="base" />
                    </Button>
                  </td>
                </tr>
              ))}
            </table>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Products;
