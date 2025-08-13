// Minimal API helper that reads base URL from Vite env (VITE_API_URL)
export const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

const withTimeout = (promise, ms) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('Request timeout')), ms || 15000);
    promise.then((v) => {
      clearTimeout(t);
      resolve(v);
    }).catch((e) => {
      clearTimeout(t);
      reject(e);
    });
  });

export async function apiRequest(path, options = {}) {
  const timeout = Number(import.meta.env.VITE_API_TIMEOUT_MS || 15000);
  const withCreds = String(import.meta.env.VITE_API_WITH_CREDENTIALS || 'false').toLowerCase() === 'true';

  const url = `${API_BASE_URL}/${String(path || '').replace(/^\/+/, '')}`;
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };

  const resp = await withTimeout(
    fetch(url, {
      ...options,
      headers,
      credentials: withCreds ? 'include' : 'same-origin',
    }),
    timeout
  );

  const contentType = resp.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await resp.json().catch(() => null)
    : await resp.text().catch(() => null);

  if (!resp.ok) {
    const msg = (body && (body.message || body.error)) || resp.statusText || 'Request failed';
    const err = new Error(msg);
    err.status = resp.status;
    err.body = body;
    throw err;
  }

  return body;
}

export const api = {
  get: (p, o = {}) => apiRequest(p, { ...o, method: 'GET' }),
  post: (p, data, o = {}) => apiRequest(p, { ...o, method: 'POST', body: data ? JSON.stringify(data) : undefined }),
  put: (p, data, o = {}) => apiRequest(p, { ...o, method: 'PUT', body: data ? JSON.stringify(data) : undefined }),
  patch: (p, data, o = {}) => apiRequest(p, { ...o, method: 'PATCH', body: data ? JSON.stringify(data) : undefined }),
  del: (p, o = {}) => apiRequest(p, { ...o, method: 'DELETE' }),
};
