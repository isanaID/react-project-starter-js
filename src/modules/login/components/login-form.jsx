import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";

import logo from "../../../assets/images/logo.png";

import { TextField } from "../../../lib/components/text-field";

import { useLogin } from "../../../lib/auth-provider/context/hooks";
import {
  INITIAL_VALUES,
  LoginSchema,
} from "../../../lib/auth-provider/constants";

function LoginForm() {
  const [login, status, errorMessage, fieldErrors] = useLogin();

  return (
    <Flex py={6} direction="column" justify="center" minH="100%">
      <Box maxWidth={320} mx="auto">
        <Image
          src={logo}
          alt="wish-logo"
          htmlHeight={24}
          htmlWidth={112}
          objectFit="contain"
        />
        <Box mb={14} mt={10}>
          <Text mb={3} fontSize="3xl" lineHeight={9} fontWeight="bold">
            Dashboard
          </Text>
        </Box>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            login(values);
          }}
        >
          {() => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <TextField
                    id="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    errorMessage={
                      form.touched.email &&
                      (form.errors.email || fieldErrors?.email)
                    }
                    inputProps={{ ...field }}
                    disabled={status === "fetching"}
                    my={4}
                  />
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <TextField
                    id="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    errorMessage={
                      form.touched.password &&
                      (form.errors.password || fieldErrors?.password)
                    }
                    inputProps={{ ...field }}
                    disabled={status === "fetching"}
                    my={4}
                  />
                )}
              </Field>
              {errorMessage && status === "rejected" && (
                <Alert status="error" my={2}>
                  <AlertIcon />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
              <Button
                size="md"
                variant="solid"
                colorScheme="blue"
                color="white"
                width="100%"
                type="submit"
                shadow="lg"
                isLoading={status === "fetching"}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Flex mt={12} justify="center">
        <Text fontSize="sm" color="gray.600">
          Made with love by
        </Text>
        <Image
          src={logo}
          alt="logo"
          htmlHeight={24}
          htmlWidth={72}
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
}

export default LoginForm;
