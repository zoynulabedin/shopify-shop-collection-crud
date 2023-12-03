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
        shop {
          name
         id
         }
      }`
  );

  const data = await response.json();

  console.log("res==", data);
  return data;
};

function shop() {
  const { data } = useLoaderData();
  console.log("d==", data);
  return (
    <>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <LegacyCard title="Shop Name and ID" sectioned>
              <table style={{ width: "100%", textAlign: "left" }}>
                <tr>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Action</th>
                </tr>

                <tr>
                  <td>{data.shop.name}</td>
                  <td>{data.shop.id}</td>
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
              </table>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}

export default shop;
