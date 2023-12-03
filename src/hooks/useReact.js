import { useMutation, useQuery } from "@tanstack/react-query";
import { getListReactionApi, getReactApi } from "../api/react";

function useReact(postId) {
  // const { data: listReaction, refetch: getListReaction } = useQuery(
  //   ["listReaction", postId],
  //   () => getListReactionApi(postId),
  //   {
  //     enabled: !!postId,
  //   }
  // );
  const { data: listReaction, refetch: getListReaction } = useQuery({
    queryKey: ["listReaction", postId],
    queryFn: (queryKey) =>
      getListReactionApi(queryKey).then((res) => {
        return res;
      }),
    enabled: true,
  });
  //create and delete react
  const { mutate: getReact } = useMutation({
    mutationFn: getReactApi,
    onSuccess: (respone) => {
      if (respone.result) {
        getListReaction();
      } else {
        // useError("Create post fail!");
      }
    },
    onError: () => {
      // useError("Save fail!!!!");
    },
  });
  return { listReaction, getListReaction, getReact };
}
export default useReact;
