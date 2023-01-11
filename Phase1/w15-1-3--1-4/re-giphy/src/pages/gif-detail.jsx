import { useLoaderData } from "react-router-dom";
import { HStack, VStack, Text } from "@chakra-ui/react";

export default function GifDetail() {
  const gifDetailData = useLoaderData();

  console.log(gifDetailData);

  return (
    <div>
      {gifDetailData ? (
        <HStack>
          <img
            src={gifDetailData.data.images.original.url}
            height={gifDetailData.data.images.original.height}
            width={gifDetailData.data.images.original.width}
          />
          <VStack>
            <Text>{gifDetailData.data.title}</Text>
          </VStack>
        </HStack>
      ) : (
        <div>Still loading Giphy Detail</div>
      )}
    </div>
  );
}