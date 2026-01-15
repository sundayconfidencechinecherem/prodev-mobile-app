import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    padding: 20,
    paddingBottom: 30,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 60,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#7B7B7B",
  },
  searchControl: {
    fontSize: 14,
    paddingVertical: 5,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  filterContainer: {
    marginRight: 15,
    width: 80,
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };