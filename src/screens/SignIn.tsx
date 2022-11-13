import { 
  VStack,
  Text
} from "native-base";

export function SignIn() {
  return (
    <>
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.900"
      >
        <Text
          fontSize={24}
          color="white"
          fontFamily="heading"
        >
          SignIn
        </Text>
      </VStack>
    </>
  );
}
