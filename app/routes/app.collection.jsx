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
} from "@shopify/polaris";
import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "@remix-run/react";
import shopify from "../shopify.server";
import { DeleteMajor, EditMajor, ViewMajor } from "@shopify/polaris-icons";
export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `#graphql
    query {
      collections(first: 5) {
        edges {
          node {
            id
            title
            handle
            updatedAt
            productsCount
            sortOrder
          }
        }
      }
    }`
  );

  const data = await response.json();

  console.log("collections==", data);
  return data;
};
const Collection = () => {
  const { data } = useLoaderData();
  const objectData = data.collections.edges;
  console.log(objectData);
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <LegacyCard title="Collections Name and ID" sectioned>
            <table style={{ width: "100%", textAlign: "left" }}>
              <tr>
                <th>Collections Name</th>
                <th>sortOrder</th>
                <th>Action</th>
              </tr>
              {objectData.map((item, index) => (
                <tr key={index}>
                  <td>{item.node.title}</td>
                  <td>{item.node.sortOrder}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <a href="">
                      <Icon source={ViewMajor} tone="base" />
                    </a>
                    <a href="">
                      <Icon source={EditMajor} tone="base" />
                    </a>
                    <a href="">
                      <Icon source={DeleteMajor} tone="base" />
                    </a>
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

export default Collection;
