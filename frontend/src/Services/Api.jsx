import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// helper: attach token if provided
export const setAuthToken = (token) => {
  if (token)
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete client.defaults.headers.common["Authorization"];
};

// Auth: mock login — replace with real call
export const login = async (email, password) => {
  // For now return a fake JWT (payload only) for demo purposes.
  // In production, call backend: return (await client.post('/auth/login', {email,password})).data
  if (email === "admin@docu.local" && password === "password") {
    const fakePayload = {
      sub: "user-1",
      email: "admin@docu.local",
      role: "ADMIN",
      name: "Admin User",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    };
    // create base64 payload-only JWT for local decode convenience (NOT secure)
    const token = `header.${btoa(JSON.stringify(fakePayload))}.signature`;
    return { token };
  }
  return { message: "Invalid credentials" };
};

export const getDocuments = async () => {
  // mock data
  return [
    {
      id: "doc-1",
      title: "Policy - Leave",
      status: "In Transit",
      owner: "Alice",
      updatedAt: "2025-07-20",
    },
    {
      id: "doc-2",
      title: "Procurement Request",
      status: "Draft",
      owner: "Bob",
      updatedAt: "2025-07-22",
    },
  ];
};

export const getDocumentById = async (id) => {
  // mock
  return {
    id,
    title: "Policy - Leave",
    status: "In Transit",
    owner: "Alice",
    metadata: { department: "HR", pipeline: "Approval v1" },
    history: [
      { when: "2025-07-20", by: "Alice", action: "Created" },
      { when: "2025-07-21", by: "Handover Agent 1", action: "Forwarded" },
    ],
  };
};

export const uploadDocument = async (formData) => {
  // in production: return (await client.post('/documents', formData)).data
  return { ok: true, id: "doc-new" };
};

export const getHandoverQueue = async () => {
  return [
    {
      id: "doc-1",
      title: "Policy - Leave",
      awaiting: "Reception",
      due: "2025-07-23",
    },
    {
      id: "doc-3",
      title: "Invoice 2025-07",
      awaiting: "Accounting",
      due: "2025-07-25",
    },
  ];
};
