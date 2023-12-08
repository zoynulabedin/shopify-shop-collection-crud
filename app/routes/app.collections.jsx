import {
  Card,
  Layout,
  Page,
  Button,
  Modal,
  TextContainer,
  Frame,
  FormLayout,
  TextField,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

import {
  Form,
  Link,
  useLoaderData,
  useSubmit,
  useNavigate,
} from "@remix-run/react";
import { useCallback, useState } from "react";
import PopUpModal from "../components/popUpModal";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `#graphql
      query {
        collections(first: 20) {
          edges {
            node {
              id
              title
              description
             
            }
          }
        }
      }`
  );

  const data = await response.json();

  return data;
};
export async function action({ request }) {
  let response;
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  if (request.method === "POST") {
    response = await admin.graphql(
      `#graphql
      mutation CollectionCreate($input: CollectionInput!) {
        collectionCreate(input: $input) {
          collection {
            id
            title
            descriptionHtml
          }
        }
      }`,
      {
        variables: {
          input: {
            title: values.title,
            descriptionHtml: values.description,
          },
        },
      }
    );
  }
  if (request.method === "DELETE") {
    console.log(values);
    const response = await admin.graphql(
      `#graphql
  mutation collectionDelete($input: CollectionDeleteInput!) {
    collectionDelete(input: $input) {
      deletedCollectionId
      shop {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }`,
      {
        variables: {
          input: {
            id: values.collectionId,
          },
        },
      }
    );

    const data = await response.json();
  }
  if (request.method === "PATCH") {
    response = await admin.graphql(
      `#graphql
      mutation collectionUpdate {
        collectionUpdate(input: {id: "${values.id}", title: "${values.title}", descriptionHtml: "${values.description}"}) {
        
          collection {
            id
          }          
        }
      }`
    );
  }
  return null;
}
const Collections = () => {
  const { data } = useLoaderData();
  const submit = useSubmit();

  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [showModal, setShowModal] = useState(false);

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <Button
              onClick={() => {
                setShowModal(true);
                setId(null);
              }}
              tone="success"
              variant="primary"
            >
              Add New Collection
            </Button>
            <table>
              <tbody>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>View Products</th>
                </tr>
                {data.collections.edges.map((cl, index) => (
                  <tr key={index}>
                    <td>{cl.node.title}</td>
                    <td>{cl.node.description}</td>
                    <td>
                      <Button
                        onClick={() => {
                          setId(cl.node.id);
                          setTitle(cl.node.title);
                          setDescription(cl.node.description);
                          setShowModal(true);
                        }}
                        tone="success"
                      >
                        edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          const formData = new FormData();
                          formData.set("collectionId", cl.node.id);
                          submit(formData, {
                            method: "delete",
                            encType: "application/x-www-form-urlencoded",
                            preventScrollReset: false,
                            replace: false,
                            relative: "route",
                          });
                        }}
                        variant="primary"
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button variant="primary">
                        <Link
                          style={{ color: "#fff", textDecoration: "none" }}
                          to={`/app/products?collectionId=${cl.node.id}`}
                        >
                          View Products
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Layout.Section>

        <Layout.Section>
          {showModal && (
            <PopUpModal
              title={id ? "Edit Collection" : "Create Collection"}
              setShowModal={setShowModal}
              onPrimaryAction={() => {
                submit(
                  {
                    id,
                    title,
                    description,
                  },
                  { replace: true, method: id ? "PATCH" : "POST" }
                );
              }}
            >
              <FormLayout>
                <TextField
                  label="Title"
                  type="text"
                  value={title}
                  autoComplete="off"
                  onChange={setTitle}
                />
                <TextField
                  label="Description"
                  type="text"
                  value={description}
                  autoComplete="off"
                  onChange={setDescription}
                />
              </FormLayout>
            </PopUpModal>
          )}
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Collections;
