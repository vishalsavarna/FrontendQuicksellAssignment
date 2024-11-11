import axios from "axios";
import Card from "../components/Card/Card";

// Define action types as constants
const DATA_REQUEST = "DATA_REQUEST";
const DATA_SUCCESS = "DATA_SUCCESS";
const DATA_FAILURE = "DATA_FAILURE";
const SELECT_DATA_REQUEST = "SELECT_DATA_REQUEST";
const SELECT_DATA_SUCCESS = "SELECT_DATA_SUCCESS";
const SELECT_DATA_FAILURE = "SELECT_DATA_FAILURE";

export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_REQUEST });
    const response = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );
    dispatch({ type: DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DATA_FAILURE });
  }
};

export const selectData =
  (group, allTickets, orderValue) => async (dispatch) => {
    try {
      dispatch({ type: SELECT_DATA_REQUEST });

      let isUser = false;
      const uniqueItems = new Set();
      let groupingArray = [],
        selectedData = [];

      if (group === "status") {
        allTickets.forEach((ticket) => uniqueItems.add(ticket.status));
        groupingArray = Array.from(uniqueItems);
        groupingArray.forEach((status, index) => {
          const filteredTickets = allTickets.filter(
            (ticket) => ticket.status === status
          );
          selectedData.push({
            [index]: { title: status, value: filteredTickets },
          });
        });
      } else if (group === "user") {
        isUser = true;
        allTickets?.allUser?.forEach((user, index) => {
          const userTickets = allTickets?.allTickets?.filter(
            (ticket) => ticket.userId === user.id
          );
          selectedData.push({
            [index]: { title: user.name, value: userTickets },
          });
        });
      } else {
        const priorityLevels = ["No priority", "Urgent", "High", "Medium", "Low"];
        priorityLevels.forEach((priority, index) => {
          const priorityTickets = allTickets.filter(
            (ticket) => ticket.priority === index
          );
          selectedData.push({
            [index]: { title: priority, value: priorityTickets },
          });
        });
      }

      if (orderValue === "title") {
        selectedData.forEach((item, index) => {
          item[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      } else if (orderValue === "priority") {
        selectedData.forEach((item, index) => {
          item[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({
        type: SELECT_DATA_SUCCESS,
        payload: { selectedData, isUser },
      });
    } catch (error) {
      dispatch({ type: SELECT_DATA_FAILURE, payload: error.message });
    }
  };
