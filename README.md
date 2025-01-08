# Razzak Fashion API

This API provides access to user data, allowing you to search and paginate through results.

## Base API URL

https://api.razzakfashion.com

## Parameters

- **paginate**: This parameter determines the number of results per page. (Example: `paginate=5`).
- **search**: This parameter filters the data based on a search term. (Example: `search=Kiehn`).

## Example API Request

To retrieve data with pagination and a search term, use the following URL:
https://api.razzakfashion.com/?paginate=5&search=Kiehn

## Example API Response

The API response will return data in the following format:

```json
{
  "data": [
    {
      "id": 5,
      "name": "Geraldine Kiehn",
      "email": "nicklaus.larkin@example.org",
      "email_verified_at": "2025-01-06T13:49:21.000000Z",
      "created_at": "2025-01-06T13:49:21.000000Z",
      "updated_at": "2025-01-06T13:49:21.000000Z"
    }
  ],
  "current_page": 1,
  "per_page": 5,
  "total": 1,
  "last_page": 1,
  "next_page_url": null,
  "prev_page_url": null
}
```

#Explanation of Response Fields
#data: Contains an array of user records that match the search query.
-id: The unique identifier for the user.
-name: The full name of the user.
-email: The email address of the user.
-email_verified_at: The timestamp when the email was verified.
-created_at: The timestamp when the user was created.
-updated_at: The timestamp when the user was last updated.
-current_page: The current page of the result.
-per_page: The number of results per page.
-total: The total number of results available.
-last_page: The last page number of results.
-next_page_url: URL to the next page of results (if any).
-prev_page_url: URL to the previous page of results (if any).

##How to Use
Make a GET request to the API URL, passing paginate and search as query parameters.
Review the response data to retrieve the list of users based on the search term and pagination.

curl "https://api.razzakfashion.com/?paginate=5&search=Kiehn"
