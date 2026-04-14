// created by risyandi.com - 2026

export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  
  const headers = new Headers(options.headers || {});
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  headers.set('Accept', 'application/json');

  const url = endpoint.startsWith('/api/') ? endpoint : `/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    // Attempt to read error message from response
    let errorMessage = `HTTP error! status: ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData.message) errorMessage = errorData.message;
      if (errorData.errors) {
        // Return structured errors if validation fails
        throw { status: response.status, message: errorMessage, errors: errorData.errors };
      }
    } catch (e: any) {
      if (e.errors) throw e;
    }
    throw { status: response.status, message: errorMessage };
  }

  // Handle 204 No Content
  if (response.status === 204) return null;

  return response.json();
};
