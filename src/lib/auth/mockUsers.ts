const STORAGE_KEY = 'ephor_mock_users';

export type MockUser = {
  email: string;
  password: string;
  name: string;
};

function readUsers(): MockUser[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeUsers(users: MockUser[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function findUserByEmail(email: string): MockUser | undefined {
  const normalized = email.trim().toLowerCase();
  return readUsers().find((u) => u.email === normalized);
}

export function registerUser(user: MockUser): { ok: true } | { ok: false; error: 'exists' } {
  const users = readUsers();
  const normalized = user.email.trim().toLowerCase();
  if (users.some((u) => u.email === normalized)) {
    return { ok: false, error: 'exists' };
  }
  users.push({
    email: normalized,
    password: user.password,
    name: user.name.trim(),
  });
  writeUsers(users);
  localStorage.setItem('ephor_session', normalized);
  return { ok: true };
}

export function loginUser(
  email: string,
  password: string
): { ok: true } | { ok: false; reason: 'not_found' | 'bad_password' } {
  const user = findUserByEmail(email);
  if (!user) return { ok: false, reason: 'not_found' };
  if (user.password !== password) return { ok: false, reason: 'bad_password' };
  localStorage.setItem('ephor_session', user.email);
  return { ok: true };
}
