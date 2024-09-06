import { useMutation } from "@/hooks/useMutation";
import {
  Button,
  Card,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function AddNotes() {
  const { mutate } = useMutation();
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });

  const HandleSubmit = async () => {
    const response = await mutate({
      url: `${process.env.NEXT_PUBLIC_URL_API}/notes`,
      payload: notes,
    });

    if (response?.success) {
      router.push("/notes");
    }
  };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Card margin="5" padding="5">
          <Heading>Add Notes</Heading>
          <Grid gap="5">
            <GridItem>
              <Text>Title</Text>
              <Input
                type="text"
                onChange={(event) =>
                  setNotes({ ...notes, title: event.target.value })
                }
              />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
                onChange={(event) =>
                  setNotes({ ...notes, description: event.target.value })
                }
              />
            </GridItem>
            <GridItem>
              <Button onClick={() => HandleSubmit()} colorScheme="blue">
                Submit
              </Button>
            </GridItem>
          </Grid>
        </Card>
      </LayoutComponent>
    </>
  );
}
