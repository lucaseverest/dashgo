import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Lucas Everest</Text>
          <Text color="gray.300" fontSize="small">
            lucaseverest10@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Everest"
        src="https://github.com/lucaseverest.png"
      />
    </Flex>
  );
}
