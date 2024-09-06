import { useMutation } from "@/hooks/useMutation";
import { useQueries } from "@/hooks/useQueries";
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

export default function ContainerNotesEdit() {
  const router = useRouter();
  const { id } = router?.query;
  const [notes, setNotes] = useState();
  useQueries(
    { prefixUrl: !!id ? `https://service.pace-unv.cloud/api/notes/${id}` : "" },
    {
      onSuccess: ({ result }) => {
        if (result) {
          setNotes({
            title: result?.data?.title,
            description: result?.data?.description
          })
        }
      },
    }
  );

  const { mutate } = useMutation();

  const HandleSubmit = async () => {
    const response = await mutate({
      url: `${process.env.NEXT_PUBLIC_URL_API}/notes/update/${id}`,
      method: 'PATCH',
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
          <Heading>Edit Notes</Heading>
          <Grid gap="5">
            <GridItem>
              <Text>Title</Text>
              <Input
                type="text"
                value={notes?.title || ""}
                onChange={(event) =>
                  setNotes({ ...notes, title: event.target.value })
                }
              />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
                value={notes?.description || ""}
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
