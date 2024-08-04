import {Box, Stack} from "@mui/material";

const item: string[]   = [
    'tomato',
    'potato',
    'onion',
    'garlic',
    'ginger',
    'plantains',
    'red peppers'
];

export default function Home() {
  return(
  <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"2"}
  >
    <Stack width={"800px"} height={"600px"} spacing={2}>
        {item.map((item, index) => (
            <Box
            key={index}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#f5f5f5"}
            borderRadius={"16px"}
            boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
            >
            {item}
            </Box>
        ))}
    </Stack>
  </Box>
  );
}
