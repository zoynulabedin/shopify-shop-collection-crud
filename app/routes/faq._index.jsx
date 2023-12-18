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
  AppProvider,
  Select,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import {
  Form,
  Link,
  useSubmit,
  useNavigate,
  useLoaderData,
} from "@remix-run/react";
import { useCallback, useState } from "react";
import PopUpModal from "../components/popUpModal";
import { allFaq, deleteFaq, generateFAQ, updateFaq } from "../data/faq.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];
const Faq = () => {
  const { faqs } = useLoaderData();

  console.log("faq", faqs);

  const submit = useSubmit();
  const [id, setId] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState("a");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <AppProvider>
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
              Add New Faq
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
                {faqs?.map((item) => (
                  <tr key={item.id} style={{ border: 0 }}>
                    <td>{item.question}</td>
                    <td>{item.answer}</td>
                    <td>{item.group}</td>
                    <td style={{ display: "flex", gap: "10px" }}>
                      <Button
                        onClick={() => {
                          setId(item.id);
                          setQuestion(item.question);
                          setAnswer(item.answer);
                          setSelected(item.group);
                          setShowModal(true);
                        }}
                        tone="success"
                      >
                        edit
                      </Button>

                      <Form method="DELETE">
                        <input
                          type="text"
                          hidden={true}
                          name="id"
                          defaultValue={item.id}
                        />
                        <Button submit tone="critical">
                          delete
                        </Button>
                      </Form>
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
              title={id ? "Edit Faq" : "Create Faq"}
              setShowModal={setShowModal}
              onPrimaryAction={() => {
                submit(
                  {
                    id,
                    question,
                    answer,
                    group: selected,
                  },
                  { replace: true, method: "POST" }
                );
              }}
            >
              <FormLayout>
                <TextField
                  label="Question"
                  type="text"
                  value={question}
                  autoComplete="off"
                  onChange={setQuestion}
                />
                <TextField
                  label="Answer"
                  type="text"
                  value={answer}
                  autoComplete="off"
                  onChange={setAnswer}
                />
                <Select
                  label="Date range"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </FormLayout>
            </PopUpModal>
          )}
        </Layout.Section>
      </Layout>
    </AppProvider>
  );
};

export default Faq;

export async function loader() {
  let faqs = await allFaq();
  return { faqs };
}

export async function action({ request }) {
  console.log("method=======", request.method);
  if (request.method === "POST") {
    const formData = await request.formData();
    const inputData = Object.fromEntries(formData);
    console.log("in======", inputData);
    const { id, question, answer, group } = inputData;

    if (id == "null") {
      const res = await generateFAQ({ question, answer, group });
      console.log("r====", res);
      return null;
    } else {
      const res = await updateFaq(+id, { question, answer, group });
      console.log(res, "u===");
      return null;
    }
  } else if (request.method === "DELETE") {
    const formData = await request.formData();
    const { id } = Object.fromEntries(formData);
    console.log(id, "dell===");
    await deleteFaq(+id);
    return null;
  }
}
