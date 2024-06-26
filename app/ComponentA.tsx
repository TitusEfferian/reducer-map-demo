/* eslint-disable react/jsx-key */
import { Box, Checkbox, Group, Stack, Text } from "@mantine/core";
import { useEdit, useEditDispatch } from "./context";
import { EditValueENUM } from "./context/types";

const ComponentA = () => {
  const { select } = useEdit();
  const dispatch = useEditDispatch();
  return (
    <Stack>
      <Group>
        <Box w={200}></Box>
        {Array.from({ length: 10 }).map((x, y) => {
          return <Text w={100}>{`username-${y}`}</Text>;
        })}
      </Group>
      {Array.from({ length: 10 }).map((x, yCol) => {
        return (
          <Group>
            <Box w={200}>
              <Text>{`col-${yCol}`}</Text>
            </Box>
            {Array.from({ length: 10 }).map((x, yUser) => {
              return (
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 100,
                  }}
                >
                  <Checkbox
                    onChange={() => {
                      dispatch({
                        type: EditValueENUM.ON_CHANGE,
                        identifier: `col-${yCol}-username-${yUser}`,
                      });
                    }}
                    checked={select.get(`col-${yCol}-username-${yUser}`)}
                  ></Checkbox>
                </Box>
              );
            })}
          </Group>
        );
      })}
    </Stack>
  );
};

export default ComponentA;
