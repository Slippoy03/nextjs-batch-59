import { useQueries } from "@/hooks/useQueries";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function ContainerNotes() {
  const router = useRouter();
  const [notes, setNotes] = useState();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: listNotes, fetchingData } = useQueries({ prefixUrl: `${process.env.NEXT_PUBLIC_URL_API}/notes`})

  const HandleDelete = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/notes/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result?.success) {
        toast({
          title: "Delete data success",
          status: "success",
          duration: 1000,
          position: "top",
        });

        setTimeout(() => {
          fetchingData({ url: `${process.env.NEXT_PUBLIC_URL_API}/notes` });
        }, 1000);
      }
    } catch (error) {
      toast({
        title: "Delete data failed",
        status: "error",
        duration: 1000,
        position: "top",
      });
    }
  };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Box padding="5">
          <Flex justifyContent="end">
            <Button colorScheme="teal" onClick={() => fetchingData({ url: `${process.env.NEXT_PUBLIC_URL_API}/notes` })}>
              Reload Data
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => router.push("/notes/add")}
              // onClick={() => onOpen()}
            >
              Add Notes
            </Button>
          </Flex>
          <Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {listNotes?.data?.map((item) => (
                <GridItem key={item.id}>
                  <Card>
                    <CardHeader>
                      <Heading>{item?.title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{item?.description}</Text>
                    </CardBody>
                    <CardFooter justify="space-between" flexWrap="wrap">
                      <Button
                        onClick={() => router.push(`/notes/edit/${item?.id}`)}
                        flex="1"
                        variant="ghost"
                      >
                        Edit
                      </Button>
                      <Button
                        flex="1"
                        colorScheme="red"
                        onClick={() => HandleDelete(item?.id)}
                      >
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Isi modal</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Submit
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </LayoutComponent>
    </>
  );
}
