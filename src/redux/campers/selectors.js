export const selectCampers = state => state.campers.campers;
export const selectCamperById = state => state.campers.selectedCamper;
export const selectPage = state => state.campers.page;
export const selectSelectedValue = state => state.campers.selectedValue;
export const selectIsLoading = state => state.campers.isLoading;
export const selectIsError = state => state.campers.isError;
export const selectTotalPages = state => state.campers.totalPages;
export const request = state => state.campers.feedbackRequest;
